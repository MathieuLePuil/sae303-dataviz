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
                label: 'Test',

                data: [{id:'Février',nested: {value: 142}}],
              }]
        },
        options: {
            parsing: {
                xAxisKey: 'id',
                yAxisKey: 'nested.value'
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
        if (el.target.checked && el.target.id == 'check7') {
            const val = el.currentTarget.dataset.value.substring(1, el.currentTarget.dataset.value.length - 1).split(', ');
            console.log(el.currentTarget.dataset.label)
            const obj = {
                label: el.currentTarget.dataset.label,
                data: [{id: el.currentTarget.dataset.label,nested: {value: val}}],
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