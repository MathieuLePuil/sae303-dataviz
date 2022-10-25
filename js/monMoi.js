import dataJson from '../json/monMoi.json' assert { type: 'json' }
$(document).ready(function(){
    const monMoi = new Chart(
        document.getElementById('monMoi'),
        {
            type : 'bar',
            data:{
                labels: [
                    'Janvier',
                    'Février',
                    'Mars',
                    'Avril',
                    'Mai',
                    'Juin',
                    'Juillet',
                    'Août',
                    'Septembre',
                    'Octobre',
                    'Novembre',
                    'Décembre'
                ],
                datasets : [{
                    label: 'monMoi',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: dataJson.monMoi,
                  }]
            }
        }
    )
})