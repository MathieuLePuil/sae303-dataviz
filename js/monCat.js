import dataJson from '../json/monCat.json' assert { type: 'json' }

const monCat = new Chart(
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
        //     datasets: [{
        //         label: 'Cuisine',
        //         backgroundColor: 'rgb(0, 99, 0)',
        //         borderColor: 'rgb(0, 99, 0)',
        //         data: dataJson.monCat.CUISINE,
        //       },{
        //         label: 'Électroménager',
        //         backgroundColor: 'rgb(125, 99, 125)',
        //         borderColor: 'rgb(125, 99, 125)',
        //         data: dataJson.monCat.ELECTROMENAGER,
        //       },{
        //         label: 'Image-son',
        //         backgroundColor: 'rgb(255, 99, 132)',
        //         borderColor: 'rgb(255, 99, 132)',
        //         data: dataJson.monCat.IMAGESON,
        //       },{
        //         label: 'Informatique',
        //         backgroundColor: 'rgb(255, 0, 255)',
        //         borderColor: 'rgb(255, 0, 255)',
        //         data: dataJson.monCat.INFORMATIQUE,
        //       },{
        //         label: 'Téléphonie',
        //         backgroundColor: '#D4FF00',
        //         borderColor: '#D4FF00',
        //         data: dataJson.monCat.TELEPHONIE,
        //       }]
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
document.querySelectorAll('input[type=checkbox]').forEach((e) => {
    e.addEventListener('click', (el) => {
        if (el.target.checked && el.target.id == 'check6') {
            const val = el.currentTarget.dataset.value.substring(1, el.currentTarget.dataset.value.length - 1).split(', ');
            const obj = {
                label: el.currentTarget.dataset.label,
                data: val,
                fill: false,
                backgroundColor: el.currentTarget.dataset.color,
                borderColor: el.currentTarget.dataset.color,
            }
            monCat.data.datasets.push(obj);
            monCat.update()
        } else {
            monCat.data.datasets = monCat.data.datasets.filter((e) => e.label !== el.currentTarget.dataset.label)
            monCat.update()
        }
    })
})