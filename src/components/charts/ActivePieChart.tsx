import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ChartWrapper from './ChartWrapper';

const COLORS = ['#3682C0', '#E8E8DB', '#CBD8D9', '#ECE1C8'];

export default function ActivePieChart({ data }: { data: any[] }) {
  // Data might be array of {active, non_active, comune} for Ch2-8 or simple list for Ch1
  // If it's per comune, we might need a Bar chart or multiple Pies.
  // Let's check structure. Ch1: list of {name, value}. Ch2+: list of {comune, active, non_active}.
  
  // Adapter for Ch2-8 structure to make it renderable?
  // Actually, for Ch2-8, a Stacked Bar Chart is better to compare communes.
  // For Ch1, a Pie Chart is fine.
  
  const isComparison = data.length > 0 && 'comune' in data[0];

  if (isComparison) {
     return (
      <ChartWrapper title="Popolazione Attiva vs Non Attiva (Confronto)">
         {/* Dynamic Import or simple require to avoid circular deps if using index? No. */}
         <ComparisonBarChart data={data} />
      </ChartWrapper>
     );
  }

  return (
    <ChartWrapper title="Popolazione Attiva vs Non Attiva">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={(props: any) => `${props.name} ${(props.percent * 100).toFixed(0)}%`}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(val: number) => val.toLocaleString()} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}

import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

function ComparisonBarChart({ data }: { data: any[] }) {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
          <XAxis dataKey="comune" />
          <YAxis />
          <Tooltip formatter={(val: number) => val.toLocaleString()} />
          <Legend />
          <Bar dataKey="active" name="Attivi" fill="#3682C0" />
          <Bar dataKey="non_active" name="Non Attivi" fill="#E8E8DB" />
        </BarChart>
      </ResponsiveContainer>
    );
}
