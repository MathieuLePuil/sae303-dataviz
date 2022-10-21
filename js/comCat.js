import dataJson from '../json/com.json' assert { type: 'json' }
$(document).ready(function(){
    const comCat = new Chart(
        document.getElementById('comCat'),
        {
            type : 'bar',
            data:{
                labels: [
                    'Cuisine',
                    'Électroménager',
                    'Image-Son',
                    'Informatique',
                    'Téléphone'
                ],
                datasets : [{
                    label: 'comCat',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: dataJson.comCat,
                  }]
            }
        }
    )
})