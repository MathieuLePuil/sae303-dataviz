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
                    backgroundColor: '#FFFFFF',
                    borderColor: '#FFFFFF',
                    data: dataJson.CB,
                  },{
                    label: 'PAYPAL',
                    backgroundColor: '#4256AE',
                    borderColor: '#4256AE',
                    data: dataJson.PAYPAL,
                  }
                  ,{
                    label: 'VIRT',
                    backgroundColor: '#FF0000',
                    borderColor: '#FF0000',
                    data: dataJson.VIRT,
                  }]
            },
            options: {
                scales: {
                    y: {
                        ticks: {
                            color: 'white',
                        },
                        grid: {
                            borderColor: 'white',
                        },
                    },
                    x: {
                        ticks: {
                            color: 'white',
                        },
                        grid: {
                            borderColor: 'white',
                        }
                    },
                }
            }
        }
    )
})