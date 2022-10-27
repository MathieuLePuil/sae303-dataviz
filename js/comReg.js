import dataJson from '../json/comReg.json' assert { type: 'json' }

const comReg = new Chart(
    document.getElementById('comReg'),
    {
        type : 'pie',
        data:{
            labels:[
                'Auvergne-Rhône-Alpes',
                'Bourgogne-Franche-Comté',
                'Bretagne',
                'Centre-Val de Loire',
                'Corse',
                'Grand Est',
                'Hauts-de-France',
                'Île-de-France',
                'Normandie',
                'Nouvelle-Aquitaine',
                'Occitanie',
                'Pays de la Loire',
                'Provence-Alpes-Côte d\'Azur'
            ],datasets: [{
                label: 'Répartition des genres Parcours Communication',
                backgroundColor: [
                  '#13A53B',
                  '#CAD313',
                  '#000000',
                  '#AF0F0F',
                  '#1BDEC9',
                  '#1B94DE',
                  '#C35AC0',
                  '#A51256',
                  '#F77B14',
                  '#7FEFA9',
                  '#732572',
                  '#730808',
                  '#FFFFFF',
                ],
                borderColor: [
                    '#13A53B',
                    '#CAD313',
                    '#000000',
                    '#AF0F0F',
                    '#1BDEC9',
                    '#1B94DE',
                    '#C35AC0',
                    '#A51256',
                    '#F77B14',
                    '#7FEFA9',
                    '#732572',
                    '#730808',
                    '#FFFFFF',
                ],
                hoverOffset: 4,
                data: dataJson.comReg,
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
            responsive: true,
        }
    }
)
document.querySelectorAll('input[type=checkbox]').forEach((e) => {
    e.addEventListener('click', (el) => {
        console.log('comReg')
        if (el.target.checked && el.target.id == 'check2') {
            const val = el.currentTarget.dataset.value.substring(1, el.currentTarget.dataset.value.length - 1).split(', ');
            const obj = {
                label: el.currentTarget.dataset.label,
                data: val,
                fill: false,
                backgroundColor: el.currentTarget.dataset.color,
                borderColor: el.currentTarget.dataset.color,
            }
            comReg.data.datasets.push(obj);
            comReg.update()
        } else {
            comReg.data.datasets = comReg.data.datasets.filter((e) => e.label !== el.currentTarget.dataset.label)
            comReg.update()
        }
    })
})