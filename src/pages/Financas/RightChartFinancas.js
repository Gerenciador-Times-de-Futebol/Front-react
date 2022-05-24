import { ComposedChart,Line,Bar,XAxis, YAxis,CartesianGrid,Tooltip,Legend} from 'recharts';

const data = [
  {
    name: 'Salários',
    Passado: 3000,
    Recente: 1398,
    amt: 2210,
  },
  {
    name: 'Vendas',
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

function RightChartFinancas() {
    return (
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Recente" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="Passado" stroke="#ff7300" />
        </ComposedChart>
    );
}
export default RightChartFinancas;
