import dataJson from '../json/comCou.json' assert { type: 'json' }
$(document).ready(function(){
    const comCou = new Chart(
        document.getElementById('comCou'),
        {
            type : 'pie',
            data:{
                labels:[
                    'O',
                    'N'
                ],datasets: [{
                    label: 'Avec ou sans coupon de réduction',
                    backgroundColor: [
                      'rgb(255, 99, 132)',
                      'rgb(54, 162, 235)',
                    ],
                    data: dataJson.coupon,
                  }]
                },
                options: {
                    
                }
              }
            );
})