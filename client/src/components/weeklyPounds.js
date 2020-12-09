export default function weeklyPounds(baseval, orderData) {
    var i = 0;
    var series = [];
    const now = new Date();
    let y =0;
    const oneWeek = 24 * 60 * 60 * 7.5 * 1000;
    const UTCtoEST = 14400000
    var count = orderData.length;
    let weeks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    while (i < count) { 
      //y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min; //y value of plotted points
      let orderDate = orderData[i].pickupTime;
      const otherDate = new Date(orderDate)
      const diffDays = Math.round(Math.abs((otherDate - now ) / oneWeek));
      switch(diffDays){
        case 0:
          weeks[1] += (parseFloat(orderData[i].orderWeight))
          break
        case 1:
          weeks[1]+= (parseFloat(orderData[i].orderWeight))
          break
        case 2:
          weeks[2]+= (parseFloat(orderData[i].orderWeight))
          break
        case 3:
          weeks[3]+= (parseFloat(orderData[i].orderWeight))
          break
        case 4:
          weeks[4]+= (parseFloat(orderData[i].orderWeight))
          break
        case 5:
          weeks[5]+= (parseFloat(orderData[i].orderWeight))
          break
        case 6:
          weeks[6]+= (parseFloat(orderData[i].orderWeight))
          break
        case 7:
          weeks[7]+= (parseFloat(orderData[i].orderWeight))
          break
        case 8:
          weeks[8]+= (parseFloat(orderData[i].orderWeight))
          break
        case 9:
          weeks[9]+=(parseFloat(orderData[i].orderWeight))
          break
        case 10:
          weeks[10]+=(parseFloat(orderData[i].orderWeight))
          break
        case 11:
          weeks[11] += (parseFloat(orderData[i].orderWeight))
          break
        default:
          break;
          
      }
      i++;
    }
  
  
    let j = 0;
    while(j < weeks.length){
      var x = baseval + UTCtoEST ;
      y = weeks[weeks.length - j - 1]
      series.push([x, y]); //x axis values
      baseval += oneWeek;
      j++
    }
    
    
    return series;
  }