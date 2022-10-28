import dataJson from '../json/comCat.json' assert { type: 'json' }

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
            datasets: []
        },
        options: {
            parsing: {
                xAxisKey: 'id',
                yAxisKey: 'nested.value'
            },
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
document.querySelectorAll('input[type=checkbox]').forEach((e) => {
    e.addEventListener('click', (el) => {
        if (el.target.checked && el.target.id == 'check4') {
            const val = el.currentTarget.dataset.value.substring(1, el.currentTarget.dataset.value.length - 1).split(', ');
            console.log(el.currentTarget.dataset);
            const obj = {
                label: el.currentTarget.dataset.label,
                data: [{id: el.currentTarget.dataset.label,nested: {value: val}}],
                fill: false,
                backgroundColor: el.currentTarget.dataset.color,
                borderColor: el.currentTarget.dataset.color,
            }
            comCat.data.datasets.push(obj);
            comCat.update()
        } else {
            comCat.data.datasets = comCat.data.datasets.filter((e) => e.label !== el.currentTarget.dataset.label)
            comCat.update()
        }
    })
})