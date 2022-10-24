import dataJson from '../json/monReg.json' assert { type: 'json' }
$(document).ready(function(){
    const com = new Chart(
        document.getElementById('monReg'),
        {
            type : 'line',
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
                datasets: [{
                    label: 'CB',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: dataJson.CB,
                  },{
                    label: 'PAYPAL',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 255)',
                    data: dataJson.PAYPAL,
                  }
                  ,{
                    label: 'PAYPAL',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(127, 40, 94)',
                    data: dataJson.VIRT,
                  }]
            }
        }
    )
})