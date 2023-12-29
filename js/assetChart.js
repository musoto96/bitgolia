google.charts.load("current", {packages: ["corechart"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
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
    height: 300,
    width: '100%',
    chartArea: {width: '90%'},
    is3D: true,
  };

  var chart = new google.visualization.PieChart(document.getElementById('asset_chart'));
  chart.draw(data, options);
}
