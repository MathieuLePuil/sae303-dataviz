import dataJson from '../json/monMoi.json' assert { type: 'json' }

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
        console.log('monMoi')
        if (el.target.checked && el.target.id == 'check7') {
            const val = el.currentTarget.dataset.value.substring(1, el.currentTarget.dataset.value.length - 1).split(', ');
            const obj = {
                label: el.currentTarget.dataset.label,
                data: val,
                fill: false,
                backgroundColor: el.currentTarget.dataset.color,
                borderColor: el.currentTarget.dataset.color,
            }
            monMoi.data.datasets.push(obj);
            monMoi.update()
        } else {
            monMoi.data.datasets = monMoi.data.datasets.filter((e) => e.label !== el.currentTarget.dataset.label)
            monMoi.update()
        }
    })
})