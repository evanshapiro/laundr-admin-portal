export default function generateDailyTimeSeries(baseval, orderData) {
  var i = 0;
  var series = [];
  const now = new Date();
  let y =0;
  const oneDay = 24 * 60 * 60 * 1000;
  const UTCtoEST = 14400000
  var count = orderData.length;
  let days = [0, 0, 0, 0, 0, 0, 0]
  while (i < count) { 
    //y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min; //y value of plotted points
    let orderDate = orderData[i].pickupTime;
    const otherDate = new Date(orderDate)
    const diffDays = Math.round(Math.abs((otherDate - now) / oneDay));
    switch(diffDays){
      case 0:
        days[0] += 1
        break
      case 1:
        days[1]+=1
        break
      case 2:
        days[2]+=1
        break
      case 3:
        days[3]+=1
        break
      case 4:
        days[4]+=1
        break
      case 5:
        days[5]+=1
        break
      case 6:
        days[6]+=1
        break
      default:
        break;
        
    }
    i++;
  }


  let j = 0;
  while(j < days.length){
    var x = baseval + UTCtoEST ;
    y = days[days.length - j - 1]
    series.push([x, y]); //x axis values
    baseval += oneDay - UTCtoEST;
    j++
  }
  
  
  return series;
}