var position = document.getElementById("position");
var symbol = document.getElementById("symbol");
var pnlpct = document.getElementById("pnl");

if (positionData.unrealisedPnlPcnt < 0) {
  pnlpct.style.color = 'red';
} else if (positionData.unrealisedPnlPcnt > 0) {
  pnlpct.style.color = 'green';
}

position.textContent = positionData.side.toUpperCase();
symbol.textContent = positionData.symbol;
pnlpct.textContent = positionData.unrealisedPnlPcnt * 100 + '%';
