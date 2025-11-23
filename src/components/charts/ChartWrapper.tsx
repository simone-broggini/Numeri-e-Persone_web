export default function ChartWrapper({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="my-10 p-6 bg-white rounded-xl shadow-sm border border-stone/50">
      <h3 className="text-lg font-bold mb-6 text-gray-800 border-b border-gray-100 pb-2">{title}</h3>
      <div className="w-full h-[400px]">
        {children}
      </div>
    </div>
  );
}
