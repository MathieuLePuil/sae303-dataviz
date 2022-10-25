import dataJson from '../json/comCou.json' assert { type: 'json' }
$(document).ready(function(){
    const comCou = new Chart(
        document.getElementById('comCou'),
        {
            type : 'pie',
            data:{
                labels:[
                    'Avec coupon',
                    'Sans coupon'
                ],datasets: [{
                    label: 'Avec ou sans coupon de réduction',
                    backgroundColor: [
                        '#FF0000',
                        '#4256AE',
                    ],
                    borderColor: [
                        '#FF0000',
                        '#4256AE',
                    ],
                    hoverOffset: 4,
                    data: [dataJson.O, dataJson.N],
                  }]
                }
              }
            );
})