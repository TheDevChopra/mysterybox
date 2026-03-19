'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase, hasValidSupabaseEnv } from '@/lib/supabase';
import { MOCK_DISCOVERIES } from '@/lib/mockData';
import DiscoveryCard, { Discovery } from '@/components/DiscoveryCard';
import { Loader2, Plus, Bookmark } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [currentDiscovery, setCurrentDiscovery] = useState<Discovery | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchDiscovery = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      let data = null;
      let sbError = null;

      if (hasValidSupabaseEnv) {
        const result = await supabase
          .from('discoveries')
          .select('*')
          .limit(1)
          .order('id', { ascending: false });
        data = result.data;
        sbError = result.error;
      }

      // If Supabase fails or is empty, use mock data
      if (sbError || !data || data.length === 0) {
        console.log('Using mock data as Supabase is empty or failed.');
        const randomIndex = Math.floor(Math.random() * MOCK_DISCOVERIES.length);
        let nextDiscovery = MOCK_DISCOVERIES[randomIndex];
        
        if (currentDiscovery && MOCK_DISCOVERIES.length > 1) {
            while (nextDiscovery.id === currentDiscovery.id) {
                nextDiscovery = MOCK_DISCOVERIES[Math.floor(Math.random() * MOCK_DISCOVERIES.length)];
            }
        }
        
        // Brief loading simulation
        await new Promise(resolve => setTimeout(resolve, 600));
        setCurrentDiscovery(nextDiscovery);
      } else {
        // Since we don't have ORDER BY RANDOM() easily from JS client without RPC,
        // we take the first item. Wait, the user provided raw sql:
        // SELECT * FROM discoveries ORDER BY RANDOM() LIMIT 1;
        // The most similar supabase JS equivalent if all rows are small is to fetch all or use an RPC.
        // For MVP, we'll just pick randomly from data if we fetched all, but we only fetched 1 above.
        // Let's modify to fetch all and pick random for MVP, assuming table is small.
        const allData = await supabase.from('discoveries').select('*');
        if (allData.data && allData.data.length > 0) {
          const randomIndex = Math.floor(Math.random() * allData.data.length);
          setCurrentDiscovery(allData.data[randomIndex] as Discovery);
        } else {
          setCurrentDiscovery(data[0] as Discovery);
        }
      }
    } catch (err) {
      console.error('Error fetching discovery:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleShare = (discovery: Discovery) => {
    const shareText = `Check out this internet discovery: ${discovery.title} - ${discovery.url}`;
    if (navigator.share) {
      navigator.share({
        title: discovery.title,
        text: discovery.reason,
        url: discovery.url,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(shareText);
      alert('Link copied to clipboard!');
    }
  };

  const handleSave = (discovery: Discovery) => {
    const saved = JSON.parse(localStorage.getItem('saved_discoveries') || '[]');
    const isAlreadySaved = saved.some((s: Discovery) => s.id === discovery.id);
    
    if (!isAlreadySaved) {
      localStorage.setItem('saved_discoveries', JSON.stringify([...saved, discovery]));
      alert('Discovery saved!');
    } else {
      const filtered = saved.filter((s: Discovery) => s.id !== discovery.id);
      localStorage.setItem('saved_discoveries', JSON.stringify(filtered));
      alert('Discovery removed from saved.');
    }
  };

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-6 font-sans selection:bg-black selection:text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 right-0 p-8 flex justify-between items-center z-10 w-full">
        <Link 
          href="/saved" 
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-black transition-colors"
        >
          <Bookmark className="w-4 h-4" />
          Saved
        </Link>
        <Link 
          href="/admin/discoveries" 
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-black transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Discovery
        </Link>
      </div>

      <div className="max-w-4xl w-full flex flex-col items-center gap-12 text-center relative z-0">
        {!currentDiscovery && !isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none uppercase">
              Discover the <br /> <span className="text-slate-300">internet again.</span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl font-medium max-w-lg mx-auto leading-relaxed">
              Find hidden tools, weird websites, and <br /> internet gems with one click.
            </p>
          </motion.div>
        )}

        <div className="w-full flex justify-center min-h-[400px] items-center">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-4 py-20"
              >
                <Loader2 className="w-8 h-8 animate-spin text-slate-900" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Searching the internet...
                </span>
              </motion.div>
            ) : currentDiscovery ? (
              <motion.div 
                key="card"
                className="flex flex-col items-center gap-8 w-full"
              >
                <DiscoveryCard 
                  discovery={currentDiscovery} 
                  onShare={handleShare}
                  onSave={handleSave}
                />
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  onClick={fetchDiscovery}
                  className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-black transition-colors decoration-2 underline-offset-4 hover:underline"
                >
                  NOT INTERESTED? OPEN ANOTHER
                </motion.button>
              </motion.div>
            ) : (
              <motion.button
                key="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={fetchDiscovery}
                className="px-12 py-6 bg-black text-white text-xl font-black tracking-tight uppercase hover:bg-slate-900 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] flex items-center gap-4 group"
              >
                Open Mystery Box
                <span className="block w-4 h-[2px] bg-white group-hover:w-8 transition-all" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {error && (
            <p className="text-red-500 text-sm font-bold uppercase tracking-widest">{error}</p>
        )}
      </div>

      <footer className="fixed bottom-0 left-0 right-0 p-8 flex justify-center text-slate-300 pointer-events-none">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
          Bringing back serendipity
        </span>
      </footer>
    </main>
  );
}
