import dataJson from '../json/livReg.json' assert { type: 'json' }
$(document).ready(function(){
    const livReg = new Chart(
        document.getElementById('livReg'),
        {
            type : 'pie',
            data:{
                labels:[
                    'Domicile',
                    'Point Relais',
                    'Retrait sur Place'
                ],datasets: [{
                    label: 'Répartition des genres Parcours Communication',
                    backgroundColor: [
                      'rgb(255, 99, 132)',
                      'rgb(54, 162, 235)',
                    ],
                    hoverOffset: 4,
                    data: dataJson.livReg,
                  }]
                },
                options: {
                    
                }
              }
            );
})