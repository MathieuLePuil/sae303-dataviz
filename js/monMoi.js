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
                    label: 'Montant des commandes',
                    backgroundColor: '#4256AE',
                    borderColor: '#4256AE',
                    data: dataJson.monMoi,
                  }]
            },
            options: {
                plugins: {
                    legend: {
                      labels: {
                        color: "white",
                      }
                    }
                  },
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