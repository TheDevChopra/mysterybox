'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Trash2, ExternalLink } from 'lucide-react';
import { Discovery } from '@/components/DiscoveryCard';
import { Card } from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function SavedPage() {
  const [saved, setSaved] = useState<Discovery[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('saved_discoveries') || '[]');
    setSaved(data);
  }, []);

  const handleRemove = (id: string) => {
    const filtered = saved.filter(s => s.id !== id);
    setSaved(filtered);
    localStorage.setItem('saved_discoveries', JSON.stringify(filtered));
  };

  return (
    <main className="min-h-screen bg-[#F5F5F4] p-6 lg:p-12 font-sans selection:bg-black selection:text-white">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <header className="flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Box
          </Link>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight uppercase">
            Saved Gems
          </h1>
        </header>

        {saved.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[400px] gap-6">
            <span className="text-sm font-bold uppercase tracking-widest text-slate-400">
              No discoveries yet
            </span>
            <Link 
              href="/" 
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-black text-white hover:bg-slate-800 rounded-none h-12 uppercase font-bold tracking-widest text-xs px-8 flex items-center justify-center"
              )}
            >
              Open the Box
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {saved.map((discovery, i) => (
              <motion.div
                key={discovery.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="border border-[#C7C7C7] p-6 bg-white shadow-sm flex flex-col gap-4 rounded-none h-full justify-between">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {discovery.category}
                    </span>
                    <h2 className="text-xl font-black text-slate-900 tracking-tight leading-none">
                      {discovery.title}
                    </h2>
                    <p className="text-slate-600 font-medium text-sm leading-relaxed line-clamp-2">
                      {discovery.description}
                    </p>
                  </div>
                  
                  <div className="flex gap-2 pt-4 border-t border-slate-100">
                    <a 
                      href={discovery.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={cn(
                        buttonVariants({ variant: "default" }),
                        "flex-[2] bg-black text-white hover:bg-slate-800 rounded-none h-10 uppercase font-bold tracking-widest text-[10px] flex items-center justify-center gap-2"
                      )}
                    >
                      Visit <ExternalLink className="w-3 h-3" />
                    </a>
                    <Button
                      variant="outline"
                      className="flex-1 rounded-none border-[#C7C7C7] hover:bg-red-50 hover:text-red-500 hover:border-red-200 text-slate-600 h-10"
                      onClick={() => handleRemove(discovery.id)}
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
