import dataJson from '../json/livReg.json' assert { type: 'json' }

const livReg = new Chart(
    document.getElementById('livReg'),
    {
        type : 'pie',
        data:{
            labels:[
                'Domicile',
                'Point Relais',
                'Retrait sur Place'
            ],datasets: [{
                label: 'Répartition des genres Parcours Communication',
                backgroundColor: [
                    '#FF0000',
                    '#4256AE',
                    '#027612'
                ],
                borderColor: [
                    '#FF0000',
                    '#4256AE',
                    '#027612'
                ],
                hoverOffset: 4,
                data: dataJson.livReg,
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
        }
    }
)
document.querySelectorAll('input[type=checkbox]').forEach((e) => {
    e.addEventListener('click', (el) => {
        console.log('check')
        if (el.target.checked) {
            const val = el.currentTarget.dataset.value.substring(1, el.currentTarget.dataset.value.length - 1).split(', ');
            const obj = {
                label: el.currentTarget.dataset.label,
                data: val,
                fill: false,
                backgroundColor: el.currentTarget.dataset.color,
                borderColor: el.currentTarget.dataset.color,
            }
            com.data.datasets.push(obj);
            com.update()
        } else {
            com.data.datasets = com.data.datasets.filter((e) => e.label !== el.currentTarget.dataset.label)
            com.update()
        }
    })
})