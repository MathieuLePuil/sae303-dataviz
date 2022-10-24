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
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: dataJson.CUISINE,
                  }]
            }
        }
    )
})