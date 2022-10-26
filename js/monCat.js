import dataJson from '../json/monCat.json' assert { type: 'json' }

const com = new Chart(
    document.getElementById('monCat'),
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
                label: 'Cuisine',
                backgroundColor: 'rgb(0, 99, 0)',
                borderColor: 'rgb(0, 99, 0)',
                data: dataJson.CUISINE,
              },{
                label: 'Électroménager',
                backgroundColor: 'rgb(125, 99, 125)',
                borderColor: 'rgb(125, 99, 125)',
                data: dataJson.ELECTROMENAGER,
              },{
                label: 'Image-son',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: dataJson.IMAGESON,
              },{
                label: 'Informatique',
                backgroundColor: 'rgb(255, 0, 255)',
                borderColor: 'rgb(255, 0, 255)',
                data: dataJson.INFORMATIQUE,
              },{
                label: 'Téléphonie',
                backgroundColor: '#D4FF00',
                borderColor: '#D4FF00',
                data: dataJson.TELEPHONIE,
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
            },
            plugins: {
                legend: {
                    labels: {
                        color: "white",
                    }
                }
            },
        }
    }
)