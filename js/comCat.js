import dataJson from '../json/comCat.json' assert { type: 'json' }
$(document).ready(function(){
    const comCat = new Chart(
        document.getElementById('comCat'),
        {
            type : 'bar',
            data: {
                labels: [
                    'Cuisine',
                    'Électroménager',
                    'Image-Son',
                    'Informatique',
                    'Téléphone'
                ],
                datasets: [{
                        label: 'Nombre de commande',
                    backgroundColor: '#4256AE',
                    borderColor: '#4256AE',
                    data: dataJson.comCat,
                }],
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