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
                        '#FF0000',
                        '#4256AE',
                        '#027612'
                    ],
                    borderColor: [
                        '#FF0000',
                        '#4256AE',
                        '#027612'
                    ],
                    hoverOffset: 4,
                    data: dataJson.livReg,
                  }]
                },
              }
            );
})