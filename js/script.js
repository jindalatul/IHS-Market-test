$(function() {
  function display(symbol) {
    var symbol = $("#stock").val();

    if (!(symbol in dataList)) {
      alert("Invaild STOCK");
      $("#stock").val("");
      $("#stock").focus();
      return false;
    }

    var buffer = dataList[symbol];
    $("span[data='lastprice']").html(buffer.LastPrice);
    change =
      buffer.Change.toFixed(2) + " (" + buffer.ChangePercent.toFixed(2) + "%)";
    $("span[data='change']").html(change);
    $("span[data='range']").html(buffer.Low + " - " + buffer.High);
    $("span[data='open']").html(buffer.Open);

    volume = (buffer.Volume / 1000000).toFixed(1) + "M";
    $("span[data='volume']").html(volume);

    cap = (buffer.MarketCap / 1000000000).toFixed(1) + "B";
    $("span[data='cap']").html(cap);

    d = new Date(buffer.Timestamp);

    var options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true
    };

    time = "As of "+d.toLocaleString("en-US", options);
    $("span[data='time']").html(time);
    $("h1").html(buffer.Name);
  }

  display();

  $("#quote").click(function() {
    display();
  });
});
