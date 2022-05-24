import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

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


const gradientOffset = () => {
  const dataMax = Math.max(...data.map((i) => i.uv));
  const dataMin = Math.min(...data.map((i) => i.uv));

  if (dataMax <= 0) {
    return 0;
  }
  if (dataMin >= 0) {
    return 1;
  }

  return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

function RightChartDespesas () {
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
          <defs>
            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset={off} stopColor="green" stopOpacity={1} />
              <stop offset={off} stopColor="red" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="uv" stroke="#000" fill="url(#splitColor)" />
        </AreaChart>
    );
}
export default RightChartDespesas;
