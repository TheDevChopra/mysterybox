'use client';

import { useState } from 'react';
import { supabase, hasValidSupabaseEnv } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { AlertCircle, CheckCircle2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AdminDiscoveriesPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const discovery = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      category: formData.get('category') as string,
      url: formData.get('url') as string,
      reason: formData.get('reason') as string,
    };

    if (!hasValidSupabaseEnv) {
      setTimeout(() => {
        setMessage({ type: 'error', text: 'Supabase environment variables are missing. Data cannot be saved to the database.' });
        setLoading(false);
      }, 1000);
      return;
    }

    try {
      const { error } = await supabase.from('discoveries').insert([discovery]);
      if (error) throw error;
      
      setMessage({ type: 'success', text: 'Discovery added successfully!' });
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message || 'Failed to add discovery.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 lg:p-12 max-w-2xl mx-auto flex flex-col gap-8">
      <header className="flex items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#A3A3A3] hover:text-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          EXIT_SYSTEM
        </Link>
        <h1 className="text-2xl font-black tracking-tighter uppercase">MANAGE_DISCOVERIES</h1>
      </header>

      {!hasValidSupabaseEnv && (
        <div className="bg-amber-50 border border-amber-200 p-4 flex gap-3 text-amber-800">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <div className="text-xs font-medium uppercase tracking-tight">
            <p className="font-bold">SYSTEM_OFFLINE: DATABASE_NOT_CONNECTED</p>
            <p className="mt-1 opacity-80">Add your Supabase URL and Anon Key to .env.local to enable persistence.</p>
          </div>
        </div>
      )}

      <Card className="border border-[#E5E5E5] rounded-none p-8 shadow-none">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-[10px] font-black uppercase tracking-widest text-[#737373]">Title</Label>
            <Input id="title" name="title" required className="rounded-none border-[#E5E5E5] focus-visible:ring-black" placeholder="e.g. Pointer Pointer" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category" className="text-[10px] font-black uppercase tracking-widest text-[#737373]">Category</Label>
              <Input id="category" name="category" required className="rounded-none border-[#E5E5E5] focus-visible:ring-black" placeholder="e.g. Weird Internet" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="url" className="text-[10px] font-black uppercase tracking-widest text-[#737373]">URL</Label>
              <Input id="url" name="url" type="url" required className="rounded-none border-[#E5E5E5] focus-visible:ring-black" placeholder="https://..." />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-[10px] font-black uppercase tracking-widest text-[#737373]">Description</Label>
            <Textarea id="description" name="description" required className="rounded-none border-[#E5E5E5] focus-visible:ring-black min-h-[100px]" placeholder="Short blurb about what it is..." />
          </div>

          <div className="space-y-2">
            <Label htmlFor="reason" className="text-[10px] font-black uppercase tracking-widest text-[#737373]">Why it's interesting</Label>
            <Textarea id="reason" name="reason" required className="rounded-none border-[#E5E5E5] focus-visible:ring-black min-h-[80px]" placeholder="The secret sauce..." />
          </div>

          {message && (
            <div className={`p-4 flex gap-3 text-xs font-bold uppercase tracking-widest border ${message.type === 'success' ? 'bg-green-50 text-green-700 border-green-100' : 'bg-red-50 text-red-700 border-red-100'}`}>
              {message.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
              {message.text}
            </div>
          )}

          <Button 
            type="submit" 
            disabled={loading}
            className="rounded-none bg-black text-white hover:bg-[#262626] h-14 font-black uppercase tracking-[0.2em] text-xs shadow-lg transition-transform active:scale-[0.98]"
          >
            {loading ? 'PROCESSING...' : 'INITIALIZE_ENTRY'}
          </Button>
        </form>
      </Card>

      <div className="text-center">
        <p className="text-[10px] font-bold text-[#D4D4D4] tracking-[0.4em] uppercase">Security Level: Alpha-1</p>
      </div>
    </div>
  );
}
