import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-[80vh] text-center">
        <h1 className="text-6xl font-serif font-bold text-primary mb-6">Zio Book Companion</h1>
        <p className="text-xl text-gray-600 max-w-2xl mb-10">
          Un'analisi interattiva dell'evoluzione demografica dei comuni di Azzate, Brunello e Buguggiate dal 1951 al 2021.
        </p>
        <Link 
          href="/chapter/1" 
          className="px-8 py-4 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        >
          Inizia la Lettura (Capitolo 1)
        </Link>
      </div>
    </Layout>
  );
}