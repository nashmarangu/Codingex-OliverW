const ctx = document.getElementById("myChart").getContext("2d");

const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Today", "2022", "2024", "2026", "2028", "2030"],
    datasets: [
      {
        data: [70, 65, 60, 50, 35, 15],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["red"],
        new: ["A", "B", "C", "D", "E", "F"],
        borderWidth: 1,
        datalabels: {
          color: "black",
          anchor: "end",
          align: "top",
          formatter: (value, context) => {
            console.log(context.chart);
            return context.chart.data.datasets[0].new[context.dataIndex];
          },
        },
      },
      {
        data: [60, 50, 40, 30, 20, 10],
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 1,
        new2: ["G", "H", "I", "J", "K", "L"],
        fill: true,
        datalabels: {
          color: "black",
          anchor: "end",
          align: "top",
          formatter: (value, context) => {
            console.log(context.chart);
            return context.chart.data.datasets[1].new2[context.dataIndex];
          },
        },
      },
    ],
  },
  plugins: [ChartDataLabels],

  options: {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        suggestedMax: 80,
        grid: {
          display: false,
        },
      },
    },

    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

function updateChart() {
  myChart.data.datasets[0].data = [70, 65, 60, 50, 35, 15];
  myChart.data.datasets[1].data = [60, 50, 40, 30, 20, 10];
  myChart.update();
}

function updateChart2() {
  myChart.data.datasets[0].data = [60, 55, 50, 40, 25, 5];
  myChart.data.datasets[1].data = [50, 40, 30, 20, 10, 0];
  myChart.update();
}
function updateChart3() {
  myChart.data.datasets[0].data = [60, 45, 10, 20, 40, 50];
  myChart.data.datasets[1].data = [10, 30, 45, 55, 15, 25];
  myChart.update();
}
