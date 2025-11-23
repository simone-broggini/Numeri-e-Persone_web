import Sidebar from './Sidebar';
import Head from 'next/head';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-paper flex">
      <Head>
        <title>Analisi Demografica - Zio Book</title>
      </Head>
      <Sidebar />
      <main className="flex-1 ml-64 p-8 max-w-5xl mx-auto">
        {children}
      </main>
    </div>
  );
}
