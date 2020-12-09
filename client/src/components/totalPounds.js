export default function totalPounds(baseval, orderData) {
    var i = 0;
    var series = [];
    const now = new Date();
    let y =0;
    const oneMonth = 24 * 60 * 60 * 30 * 1000;
    const UTCtoEST = 18000000
    var count = 40;
    let months = 
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    while (i < count) { 
      //y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min; //y value of plotted points
      let orderDate = orderData[i].pickupTime;
      const otherDate = new Date(orderDate)
      const diffDays = Math.round(Math.abs((otherDate - now ) / oneMonth));
      if (diffDays < months.length){
        months[diffDays] += orderData[i].orderWeight;
      }
      i++;
    }
  
  
    let j = 0;
    while(j <= 48){
      var x = baseval + UTCtoEST ;
      y = months[months.length - j - 1]
      series.push([x, y]); //x axis values
      baseval += oneMonth;
      j++
    }
    
    
    return series;
  }