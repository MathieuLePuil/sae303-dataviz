import dataJson from '../json/reg.json' assert { type: 'json' }
$(document).ready(function(){
    const regCom = new Chart(
        document.getElementById('regCom'),
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
                    data: dataJson.datasets1,
                  },
                  {
                    label: 'Com',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 50, 240)',
                    data: dataJson.datasets2,
                  }]
            }
        }
    )
})