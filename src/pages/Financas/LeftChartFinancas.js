import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const data = [
  {
    name: 'Salários',
    Passado: 3000,
    Recente: 1398,
    amt: 2210,
  },
  {
    name: 'Vendas Camsisas',
    Passado: 2780,
    Recente: 3908,
    amt: 2000,
  },
  {
    name: 'Patrocínios',
    Passado: 1890,
    Recente: 4800,
    amt: 2181,
  },
  {
    name: 'Bilheteria',
    Passado: 2390,
    Recente: 3800,
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
        <Line type="monotone" dataKey="Passado" stroke="#82ca9d" />
      </LineChart>
    );
  }
export default LeftChartFinancas;

