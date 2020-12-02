export default function generateDailyTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) { //# of plotted points on graph
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min; //y value of plotted points
      var x = baseval;
    
      series.push([x, y]); //x axis values
      baseval += 86400000;
      i++;
    }
    return series;
}