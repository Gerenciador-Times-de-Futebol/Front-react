import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const LineChart = () => {
  const [chartData, setChartData] = useState({});
  const [nomeFinan, setNome] = useState([]);
  const [valorFinan, setValor] = useState([]);

  const chart = () => {
    let nomeFin = [];
    let valorFin = [];
    axios
      .get("http://165.227.103.201:8100/financas")
      .then(res => {
        console.log(res);
        for (const dataObj of res.data.data) {
          nomeFin.push(parseInt(dataObj.nome));
          valorFin.push(parseInt(dataObj.valor));
        }
        setChartData({
          labels: nomeFin,
          datasets: [
            {
              label: "finanças",
              data: valorFin,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(valorFin, nomeFin);
  };

  useEffect(() => {
    chart();
  }, []);
  return (
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "THICCNESS SCALE", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
  );
};

export default LineChart;