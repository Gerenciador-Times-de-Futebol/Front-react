import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
} from 'recharts';

const data = [
  {
    name: 'Bilheteria',
    Recentes: 400000,
    Passado: 300000,
    amt: 2400,
  },
  {
    name: 'Sócios',
    Recentes: 300000,
    Passado: 200000,
    amt: 2210,
  },
  {
    name: 'Títulos',
    Recentes: 100000,
    Passado: 300000,
    amt: 2000,
  },
  {
    name: 'Patrocínios',
    Recentes: 380000,
    Passado: 260000,
    amt: 2181,
  },
];


const renderCustomizedLabel = (props) => {
  const { x, y, width, value } = props;
  const radius = 10;

  return (
    <g>
      <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
      <text x={x + width / 2} y={y - radius} fill="#fff" textAnchor="middle" dominantBaseline="middle">
        {value.split(' ')[1]}
      </text>
    </g>
  );
};

function RightChartLucros() {
    return (
        <BarChart
          width={500}
          height={300}
          data={data}
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
          <Bar dataKey="Passado" fill="#82ca9d" minPointSize={5}>
            <LabelList dataKey="name" content={renderCustomizedLabel} />
          </Bar>
          <Bar dataKey="Recentes" fill="#8884d8" minPointSize={10} />
        </BarChart>
    );
}

export default RightChartLucros;
