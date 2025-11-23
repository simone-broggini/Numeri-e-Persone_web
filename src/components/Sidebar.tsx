import Link from 'next/link';
import { BookOpen, BarChart2 } from 'lucide-react';
import { useRouter } from 'next/router';
import clsx from 'clsx';

const chapters = Array.from({ length: 8 }, (_, i) => i + 1);

export default function Sidebar() {
  const router = useRouter();

  return (
    <aside className="w-64 bg-stone h-screen fixed left-0 top-0 overflow-y-auto border-r border-gray-300 flex flex-col shadow-lg">
      <div className="p-6 border-b border-gray-300 bg-[#E0DFD5]">
        <h1 className="font-serif text-xl font-bold text-gray-800 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-primary" />
          Zio Book
        </h1>
        <p className="text-xs text-gray-600 mt-1 uppercase tracking-wider">Analisi Demografica</p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {chapters.map((num) => {
          const isActive = router.pathname === `/chapter/${num}`;
          return (
            <Link 
              key={num} 
              href={`/chapter/${num}`}
              className={clsx(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group",
                isActive 
                  ? "bg-primary text-white shadow-md" 
                  : "hover:bg-white/50 text-gray-700 hover:text-primary"
              )}
            >
              <span className={clsx(
                "flex items-center justify-center w-6 h-6 rounded text-xs font-bold",
                isActive ? "bg-white/20" : "bg-gray-200 group-hover:bg-primary/10"
              )}>
                {num}
              </span>
              <span className="font-medium">Capitolo {num}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-300 bg-paper/50">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <BarChart2 className="w-4 h-4" />
          <span>Dati ISTAT & Anagrafe</span>
        </div>
      </div>
    </aside>
  );
}
