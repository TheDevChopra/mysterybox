import { Button, buttonVariants } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink, Bookmark, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export type Discovery = {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  reason: string;
  created_at: string;
};

interface DiscoveryCardProps {
  discovery: Discovery;
  onShare: (discovery: Discovery) => void;
  onSave: (discovery: Discovery) => void;
}

export default function DiscoveryCard({ discovery, onShare, onSave }: DiscoveryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="w-full max-w-[600px] mx-auto"
    >
      <Card className="border border-[#C7C7C7] p-6 lg:p-8 bg-white shadow-sm flex flex-col gap-6 rounded-none">
        
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between pointer-events-none">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              {discovery.category}
            </span>
            <span className="text-[10px] font-mono text-slate-300">
              #{discovery.id.slice(0, 6)}
            </span>
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-none mt-2">
            {discovery.title}
          </h2>
          <p className="text-slate-600 font-medium text-lg leading-relaxed mt-2">
            {discovery.description}
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-100 p-4 rounded-none">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
            Why this is interesting
          </span>
          <p className="text-sm font-medium text-slate-700 italic border-l-2 border-black pl-3 py-1">
            "{discovery.reason}"
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a 
            href={discovery.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={cn(
              buttonVariants({ variant: "default" }),
              "flex-1 bg-black text-white hover:bg-slate-800 rounded-none h-12 uppercase font-bold tracking-widest text-xs group flex items-center justify-center gap-2"
            )}
          >
            Visit Link <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="w-12 h-12 rounded-none border-[#C7C7C7] hover:bg-slate-50 text-slate-600 p-0"
              onClick={() => onSave(discovery)}
              title="Save for later"
            >
              <Bookmark className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="w-12 h-12 rounded-none border-[#C7C7C7] hover:bg-slate-50 text-slate-600 p-0"
              onClick={() => onShare(discovery)}
              title="Share"
            >
              <Share2 className="w-5 h-5" />
            </Button>
          </div>
        </div>

      </Card>
    </motion.div>
  );
}
