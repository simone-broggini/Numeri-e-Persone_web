import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ChartWrapper from './ChartWrapper';

export default function SectorBarChart({ data }: { data: any[] }) {
  // Ch1: [{name: 'Agric', value: 100}, ...]
  // Ch2+: [{comune: 'Azzate', agricoltura: 10, industria: 50...}, ...]
  
  const isComparison = data.length > 0 && 'comune' in data[0];

  return (
    <ChartWrapper title="Occupati per Settore Economico">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout={isComparison ? 'vertical' : 'horizontal'}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
          
          {isComparison ? (
              <>
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="comune" width={100} />
                  <Bar dataKey="agricoltura" name="Agricoltura" fill="#ECE1C8" />
                  <Bar dataKey="industria" name="Industria" fill="#3682C0" />
                  <Bar dataKey="servizi" name="Servizi" fill="#CBD8D9" />
              </>
          ) : (
              <>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Bar dataKey="value" name="Occupati" fill="#3682C0" barSize={60} />
              </>
          )}
          
          <Tooltip formatter={(val: number) => val.toLocaleString()} />
          <Legend />
        </BarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}
