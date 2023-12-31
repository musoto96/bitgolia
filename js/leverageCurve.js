google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawCurve);

function drawCurve() {
  // Generate data points for a bell curve
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'x');
  data.addColumn('number', 'Bell Curve');

  // Generate bell curve data for line chart
  var bellCurveData = [];
  for (var x = -3; x <= 3; x += 0.1) {
    var y = Math.exp(-0.5 * Math.pow(x, 2)) / Math.sqrt(2 * Math.PI);
    bellCurveData.push([x, y]);
  }
  data.addRows(bellCurveData);

  // Create a new column for the highlighted data
  data.addColumn('number', 'Highlighted Data');

  // Append data to the Highlighted Data column
  for (var i = 0; i < data.getNumberOfRows(); i++) {
    const x = data.getValue(i, 0);
    const y = data.getValue(i, 1);

    // Set the Highlighted value
    if (leverageCurveData.exposure === 'long') {
      const y2 = (x > leverageCurveData.zScore) ? y : null;
      data.setValue(i, 2, y2);
    } else if (leverageCurveData.exposure === 'short') {
      const y2 = (x < leverageCurveData.zScore) ? y : null;
      data.setValue(i, 2, y2);
    } else {
      data.setValue(i, 2, null);
    }
  }

  // Set chart options
  var options = {
    title: 'Auto-Deleverage Percentile',
    curveType: 'function',
    legend: { position: 'none' },
    hAxis: { viewWindow: { min: -3, max: 3 } },
    series: { 
      0: { type: 'line', color: '#2E4053'}, 
      1: { type: 'area' , color: '#2E4053'}
    },
    titleTextStyle: {
      color: 'black',
      fontName: 'Verdana',
      fontSize: 16, 
      bold: true,
      italic: false
    },
  };

  // Create and draw the chart
  var chart = new google.visualization.AreaChart(document.getElementById('leverageCurve'));
  chart.draw(data, options);
}
