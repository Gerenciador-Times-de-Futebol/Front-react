import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from 'recharts';

const data = [
  {
    name: 'Grama',
    uv: -3000,
    pv: 1098,
    amt: 2210,
  },
  {
    name: 'Água',
    uv: -2780,
    pv: 1000,
    amt: 2000,
  },
  {
    name: 'Energia',
    uv: -4890,
    pv: 800,
    amt: 2181,
  },
  {
    name: 'Bolas',
    uv: -2390,
    pv: 900,
    amt: 2500,
  },
  {
    name: 'Coletes',
    uv: -1490,
    pv: 900,
    amt: 2100,
  },
];

function LeftChartDespesas () {
    return (
        <BarChart
          width={500}
          height={300}
          data={data}
          stackOffset="sign"
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="pv" fill="#82ca9d" stackId="stack" />
          <Bar dataKey="uv" fill="#8884d8" stackId="stack" />
        </BarChart>
    );
  }
export default LeftChartDespesas;

