import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import ChartWrapper from './ChartWrapper';

export default function MovementChart({ data }: { data: any[] }) {
  // data: [{year: 1952, natural_balance: 10, migratory_balance: -5}, ...]

  return (
    <ChartWrapper title="Movimento Naturale e Migratorio">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="natural_balance" name="Saldo Naturale" fill="#ECE1C8" />
          <Line type="monotone" dataKey="migratory_balance" name="Saldo Migratorio" stroke="#3682C0" strokeWidth={2} dot={{r: 4}} />
        </ComposedChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}
