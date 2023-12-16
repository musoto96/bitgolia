google.charts.load('current', {'packages':['table']});
google.charts.setOnLoadCallback(drawTable);

function drawTable() {
  var data = google.visualization.arrayToDataTable(balanceTableData);

  var options = {
    animation:{
      startup: true,
      duration: 1500,
      easing: 'out',
    },
    showRowNumber: true, 
    width: '100%', 
    //height: '80%',
  }

  var formatter = new google.visualization.NumberFormat({pattern:'#,###.##%'});
  formatter.format(data, 1);
  formatter.format(data, 2);
  formatter.format(data, 3);

  var table = new google.visualization.Table(document.getElementById('balance_table'));
  table.draw(data, options);
}
