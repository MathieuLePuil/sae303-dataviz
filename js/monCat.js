import dataJson from '../json/monCat.json' assert { type: 'json' }
$(document).ready(function(){
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
                    label: 'CUISINE',
                    backgroundColor: 'rgb(0, 99, 0)',
                    borderColor: 'rgb(0, 99, 0)',
                    data: dataJson.CUISINE,
                  },{
                    label: 'ELECTROMENAGER',
                    backgroundColor: 'rgb(125, 99, 125)',
                    borderColor: 'rgb(125, 99, 132)',
                    data: dataJson.ELECTROMENAGER,
                  },{
                    label: 'IMAGE-SON',
                    backgroundColor: 'rgb(255, 99, 250)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: dataJson.IMAGESON,
                  },{
                    label: 'Informatique',
                    backgroundColor: 'rgb(45, 150, 132)',
                    borderColor: 'rgb(255, 0, 255)',
                    data: dataJson.INFORMATIQUE,
                  },{
                    label: 'Téléphonie',
                    backgroundColor: 'rgb(45, 150, 132)',
                    borderColor: 'rgb(255, 0, 255)',
                    data: dataJson.TELEPHONIE,
                  }]
            }
        }
    )
})