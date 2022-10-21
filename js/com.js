import dataJson from '../json/com.json' assert { type: 'json' }
$(document).ready(function(){
    const regCom = new Chart(
        document.getElementById('com'),
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
                    'Octembre',
                    'Novembre',
                    'Décembre'
                ],
                datasets: [{
                    label: 'Reg',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: dataJson.com,
                  }]
            }
        }
    )
})