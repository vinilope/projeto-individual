const trafego = document.getElementById("chart_trafego");
const iniciais = document.getElementById("chart_iniciais");S

function desenharGraficoTrafego(dia,qtd) {
  new Chart(trafego, {
    type: "line",
    data: {
      labels: dia,
      datasets: [
        {
          label: "Acessos Diários",
          data: qtd,
          borderWidth: 3,
          borderColor: "#FF0000",
          backgroundColor: "#FF0000",
          pointRadius: 0,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      layout: {
        autoPadding: true,
      },
      plugins: {
        title: {
          display: true,
          text: "Acessos nos últimos 7 dias",
          font: {
            size: 18,
          },
        },
      },
    },
  });
}

function desenharGraficoIniciais(qtdBulba, qtdSquir, qtdChar) {
  new Chart(iniciais, {
    type: "doughnut",
    data: {
      labels: ["Bulbasur", "Squirtle", "Charmander"],
      datasets: [
        {
          data: [qtdBulba, qtdSquir, qtdChar],
          backgroundColor: ["#82ccb3", "#84cad6", "#f78e3c"],
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Preferência por inicial",
          font: {
            size: 18,
          },
        },
        legend: {
          position: "bottom",
        },
      },
    },
  });
}

Chart.defaults.color = "#000000";
Chart.defaults.font.family = "minecraftia";
