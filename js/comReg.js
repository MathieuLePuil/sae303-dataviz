import dataJson from '../json/comReg.json' assert { type: 'json' }
$(document).ready(function(){
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
                      'rgb(255, 99, 132)',
                      'rgb(54, 162, 235)',
                    ],
                    hoverOffset: 4,
                    data: dataJson.comReg,
                  }]
                },
                options: {
                    
                }
              }
            );
})