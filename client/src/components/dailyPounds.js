export default function dailyPounds(baseval, orderData) {
    var i = 0;
    var series = [];
    const now = new Date();
    let y = 0;
    const oneDay = 24 * 60 * 60 * 1000;
    const UTCtoEST = 18000000
    var count = orderData.length;
    let pounds = [0, 0, 0, 0, 0, 0, 0]
    while (i < count) { 
      //y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min; //y value of plotted points
      let orderDate = orderData[i].pickupTime;
      const otherDate = new Date(orderDate)
      const diffDays = Math.round(Math.abs((otherDate - now) / oneDay));
      

      switch(diffDays){
        case 0:
          pounds[0] += (parseFloat(orderData[i].orderWeight))
          break
        case 1:
          pounds[1] += (parseFloat(orderData[i].orderWeight))
          break
        case 2:
          pounds[2]+= (parseFloat(orderData[i].orderWeight))
          break
        case 3:
          pounds[3]+= (parseFloat(orderData[i].orderWeight))
          break
        case 4:
          pounds[4]+= (parseFloat(orderData[i].orderWeight))
          break
        case 5:
          pounds[5]+= (parseFloat(orderData[i].orderWeight))
          break
        case 6:
          pounds[6]+= (parseFloat(orderData[i].orderWeight))
          break
        default:
          break;
          
      }
      i++;
    }


    let j = 0;
    while(j < pounds.length){
      var x = baseval + UTCtoEST;
      y = pounds[pounds.length - j - 1]
      series.push([x, y]); //x axis values
      baseval += oneDay - UTCtoEST;
      j++
    }
    
    
    return series;
}