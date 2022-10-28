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
                label: 'Répartition des genres Parcours livRegmunication',
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
        if (el.target.checked && el.target.id == 'check3') {
            const val = el.currentTarget.dataset.value.substring(1, el.currentTarget.dataset.value.length - 1).split(', ');
            const obj = {
                label: el.currentTarget.dataset.label,
                data: {
                        Domicile: 10
                    },
                fill: false,
                backgroundColor: el.currentTarget.dataset.color,
                borderColor: el.currentTarget.dataset.color,
            }
            console.log(obj.data);
            livReg.data.datasets.push(obj);
            livReg.update()
        } else {
            livReg.data.datasets = livReg.data.datasets.filter((e) => e.label !== el.currentTarget.dataset.label)
            livReg.update()
        }
    })
})