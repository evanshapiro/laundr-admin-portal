export default function generatePlus(baseval, subsData) {
    var i = 0;
    var series = [];
    const now = new Date();
    let y =0;
    const oneMonth = 24 * 60 * 60 * 30 * 1000;
    const UTCtoEST = 14400000
    var count = subsData.length;
    let months = 
       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    while (i < count) { 
      //y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min; //y value of plotted points
      let subsDate = subsData[i].startDate;
      let subType = subsData[i].subscriptionType;
      const otherDate = new Date(subsDate)
      const diffDays = Math.round(Math.abs((otherDate - now ) / oneMonth));
      if (diffDays < months.length){
          if (subType == 'Plus'){
            months[diffDays] += 1
          }         
      }
      i++;
    }
  
  
    let j = 0;
    while(j < 48){
      var x = baseval + UTCtoEST ;
      y = months[47 - j]
      series.push([x, y]); //x axis values
      baseval += oneMonth;
      j++
    }
    
    
    return series;
  }