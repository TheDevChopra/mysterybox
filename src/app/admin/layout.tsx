import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin - Mystery Box',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono bg-white min-h-screen text-black selection:bg-black selection:text-white">
      <nav className="border-b border-[#E5E5E5] p-6 lg:px-12 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-black"></div>
          <span className="font-black uppercase tracking-tighter text-xl">ADMIN SYSTEM</span>
        </div>
        <div className="text-xs font-bold tracking-[0.2em] text-[#A3A3A3] uppercase">
          BuildWithDev Protocol
        </div>
      </nav>
      {children}
    </div>
  );
}
