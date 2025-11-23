import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ChartWrapper from './ChartWrapper';

export default function EducationBarChart({ data }: { data: any[] }) {
  const isComparison = data.length > 0 && 'comune' in data[0];

  return (
    <ChartWrapper title="Popolazione per Grado di Istruzione">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={true} stroke="#eee" />
          
          {isComparison ? (
             <>
                <XAxis type="number" />
                <YAxis type="category" dataKey="comune" width={100} />
                {/* We need stacked bars or grouped? Grouped is better for comparison but messy with many categories.
                    Actually, Ch2+ usually compares percentages in text, but we have raw values.
                    Let's stack them to show total educated population structure?
                */}
                <Bar dataKey="Elementare" stackId="a" fill="#E8E8DB" />
                <Bar dataKey="Media" stackId="a" fill="#CBD8D9" />
                <Bar dataKey="Diploma" stackId="a" fill="#3682C0" />
                <Bar dataKey="Laurea" stackId="a" fill="#1E40AF" />
             </>
          ) : (
             <>
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" width={150} tick={{fontSize: 11}} />
                <Bar dataKey="value" name="Persone" fill="#3682C0" />
             </>
          )}
          
          <Tooltip formatter={(val: number) => val.toLocaleString()} />
          <Legend />
        </BarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}
