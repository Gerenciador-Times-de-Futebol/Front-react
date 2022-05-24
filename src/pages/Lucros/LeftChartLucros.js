import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

// colocar dados do supabase
const data = [
  {
    name: 'Bilheteria',
    uv: 400000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Sócios',
    uv: 300000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Venda Joagdores',
    uv: 320000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Títulos',
    uv: 100000,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Patrocínios',
    uv: 380000,
    pv: 4800,
    amt: 2181,
  },
];

function LeftChartLucros() {
    return (
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
    );
  }
export default LeftChartLucros;

