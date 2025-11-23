import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import ChartWrapper from './ChartWrapper';

export default function PopulationPyramid({ data }: { data: any[] }) {
  // Transform data: make males negative
  const processedData = data.map(item => ({
    ...item,
    maleNeg: -item.male
  }));

  const formatValue = (val: number) => Math.abs(val).toLocaleString();

  return (
    <ChartWrapper title="Piramide delle Età">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={processedData}
          stackOffset="sign"
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis type="number" tickFormatter={formatValue} />
          <YAxis dataKey="age" type="category" width={80} tick={{ fontSize: 12 }} />
          <Tooltip 
            formatter={(value: number) => formatValue(value)}
            labelStyle={{ color: '#333' }}
          />
          <Legend />
          <ReferenceLine x={0} stroke="#000" />
          <Bar dataKey="maleNeg" name="Maschi" fill="#3682C0" />
          <Bar dataKey="female" name="Femmine" fill="#ECE1C8" />
        </BarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}
