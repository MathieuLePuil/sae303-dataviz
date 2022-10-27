import dataJson from '../json/monReg.json' assert { type: 'json' }

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
        console.log('monReg')
        if (el.target.checked && el.target.id == 'check5') {
            const val = el.currentTarget.dataset.value.substring(1, el.currentTarget.dataset.value.length - 1).split(', ');
            const obj = {
                label: el.currentTarget.dataset.label,
                data: val,
                fill: false,
                backgroundColor: el.currentTarget.dataset.color,
                borderColor: el.currentTarget.dataset.color,
            }
            monReg.data.datasets.push(obj);
            monReg.update()
        } else {
            monReg.data.datasets = monReg.data.datasets.filter((e) => e.label !== el.currentTarget.dataset.label)
            monReg.update()
        }
    })
})