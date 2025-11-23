import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import ChartWrapper from './ChartWrapper';

export default function EducationPyramid({ data }: { data: any[] }) {
  const processedData = data.map(item => ({
    ...item,
    maleNeg: -item.male
  }));

  const formatValue = (val: number) => Math.abs(val).toLocaleString();

  return (
    <ChartWrapper title="Titoli di Studio per Sesso">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={processedData}
          stackOffset="sign"
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis type="number" tickFormatter={formatValue} />
          <YAxis dataKey="level" type="category" width={150} tick={{ fontSize: 10 }} />
          <Tooltip formatter={(val: number) => formatValue(val)} />
          <Legend />
          <ReferenceLine x={0} stroke="#000" />
          <Bar dataKey="maleNeg" name="Maschi" fill="#3682C0" />
          <Bar dataKey="female" name="Femmine" fill="#ECE1C8" />
        </BarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}
