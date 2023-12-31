google.charts.load("current", {packages: ["corechart"]});
google.charts.setOnLoadCallback(drawPieChart);

const colors = ["#2E4053", "#427295","#5686ae","#709bc3","#8bb0d9","#a9c5e7", "#4c7992","#47718a","#436a81","#6c8ca0","#99b0bf"];

const slices = {};
for (let i = 0; i < assetChartData.slice(1).length; i++) {
  slices[i] = { color: colors[i%colors.length] };
}

function drawPieChart() {
  var data = google.visualization.arrayToDataTable(assetChartData);

  var options = {
    animation:{
      startup: true,
      duration: 1000,
      easing: 'out',
    },
    title: 'Assets',
    titleTextStyle: {
      color: 'black',
      fontName: 'Verdana',
      fontSize: 16, 
      bold: true,
      italic: false
    },
    width: '100%',
    chartArea: {width: '90%'},
    is3D: true,
    slices: slices
  };

  var chart = new google.visualization.PieChart(document.getElementById('asset_chart'));
  chart.draw(data, options);
}
