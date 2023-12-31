google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawGauges);

function drawGauges() {

  var data = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    leverageGaugesData
  ]);

  var options = {
    width: 400, height: 120,
    redFrom: 2.5, redTo: 3,
    yellowFrom:2.2, yellowTo: 2.5,
    minorTicks: 5,
    max: 3
  };

  var chart = new google.visualization.Gauge(document.getElementById('leverageGauges'));
  chart.draw(data, options);
}
