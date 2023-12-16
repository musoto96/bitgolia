google.charts.load('current', {'packages':['corechart', 'line']});
google.charts.setOnLoadCallback(drawTimeline);

function drawTimeline() {
  var data = google.visualization.arrayToDataTable(timelineData);

  var formatter = new google.visualization.NumberFormat({pattern:'#,###.##%'});
  formatter.format(data, 1);

  var options = {
    animation:{
      startup: true,
      duration: 1000,
      easing: 'out',
    },
    title: 'PNL',
    titleTextStyle: {
      color: 'darkred',
      fontName: 'Verdana',
      fontSize: 16, 
      bold: true,
      italic: false
    },
    curveType: 'function',
    height: 500,
    width: '100%',
    vAxis: { format: 'percent', gridlines: { count: 0 } },
    hAxis: { gridlines: { count: 0 }, slantedText: true , slantedTextAngle: 45 },//, textStyle : { fontSize: 12 } },
    series: { 
      0: { 
        color: 'darkred', 
        opacity: 0.7, 
        lineWidth: 2 
      }
    },
    //tooltip : {
      //trigger: 'none'
    //}, 
    backgroundColor: 'white',
    chartArea: {width: '80%'},
    legend: { position: 'bottom' }, 
  };

  var chart = new google.visualization.LineChart(document.getElementById('portfolio_timeline'));

  chart.draw(data, google.charts.Line.convertOptions(options));
}