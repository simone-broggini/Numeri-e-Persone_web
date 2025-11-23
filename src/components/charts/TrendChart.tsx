import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ChartWrapper from './ChartWrapper';

export default function TrendChart({ data }: { data: any[] }) {
  // data: [{year: 1952, Azzate: 3000, Brunello: 500, Buguggiate: 2000}, ...]

  return (
    <ChartWrapper title="Andamento della Popolazione">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
          <XAxis dataKey="year" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Azzate" stroke="#3682C0" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="Buguggiate" stroke="#CBD8D9" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="Brunello" stroke="#ECE1C8" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}
