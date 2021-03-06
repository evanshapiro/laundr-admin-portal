export default function generateMonthlyTimeSeries(baseval, orderData) {
  var i = 0;
  var series = [];
  const now = new Date();
  let y =0;
  const oneMonth = 24 * 60 * 60 * 30 * 1000;
  const UTCtoEST = 14400000
  var count = orderData.length;
  let months = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  while (i < count) { 
    //y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min; //y value of plotted points
    let orderDate = orderData[i].pickupTime;
    const otherDate = new Date(orderDate)
    const diffDays = Math.round(Math.abs((otherDate - now ) / oneMonth));
    switch(diffDays){
      case 0:
        months[0] += 1
        break
      case 1:
        months[1]+=1
        break
      case 2:
        months[2]+=1
        break
      case 3:
        months[3]+=1
        break
      case 4:
        months[4]+=1
        break
      case 5:
        months[5]+=1
        break
      case 6:
        months[6]+=1
        break
      case 7:
        months[7]+=1
        break
      case 8:
        months[8]+=1
        break
      case 9:
        months[9]+=1
        break
      case 10:
        months[10]+=1
        break
      case 11:
        months[11] +=1
        break
      default:
        break;
        
    }
    i++;
  }


  let j = 0;
  while(j < months.length){
    var x = baseval + UTCtoEST ;
    y = months[months.length - j - 1]
    series.push([x, y]); //x axis values
    baseval += oneMonth;
    j++
  }
  
  
  return series;
}