import dataJson from '../json/com.json' assert { type: 'json' }
$(document).ready(function(){
    const com = new Chart(
        document.getElementById('com'),
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
                    label: 'Nombre de commande',
                    backgroundColor: '#4256AE',
                    borderColor: '#4256AE',
                    borderWidth: 3,
                    data: dataJson.com,
                  }],
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