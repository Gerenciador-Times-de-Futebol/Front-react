import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const data = [
  {
    name: 'Salários',
    Passado: 30000,
    Recente: 13980,
    amt: 2210,
  },
  {
    name: 'Vendas Camsisas',
    Passado: 27800,
    Recente: 39080,
    amt: 2000,
  },
  {
    name: 'Patrocínios',
    Passado: 18900,
    Recente: 48000,
    amt: 2181,
  },
  {
    name: 'Bilheteria',
    Passado: 23900,
    Recente: 38000,
    amt: 2500,
  },
];

function LeftChartFinancas() {
  return (
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
         type="monotone"
         dataKey="Recente"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
          />
        <Line type="monotone" dataKey="Passado" stroke="#82fa9d" />
      </LineChart>
    );
  }
export default LeftChartFinancas;

