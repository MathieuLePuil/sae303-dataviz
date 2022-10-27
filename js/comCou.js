import dataJson from '../json/comCou.json' assert { type: 'json' }

const comCou = new Chart(
    document.getElementById('comCou'),
    {
        type : 'pie',
        data:{
            labels:[
                'Avec coupon',
                'Sans coupon'
            ],datasets: [{
                label: 'Avec ou sans coupon de réduction',
                backgroundColor: [
                    '#FF0000',
                    '#4256AE',
                ],
                borderColor: [
                    '#FF0000',
                    '#4256AE',
                ],
                hoverOffset: 4,
                data: [dataJson.O, dataJson.N],
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
        console.log('comCou')
        if (el.target.checked && el.target.id == 'check8') {
            const val = el.currentTarget.dataset.value.substring(1, el.currentTarget.dataset.value.length - 1).split(', ');
            const obj = {
                label: el.currentTarget.dataset.label,
                data: val,
                fill: false,
                backgroundColor: el.currentTarget.dataset.color,
                borderColor: el.currentTarget.dataset.color,
            }
            comCou.data.datasets.push(obj);
            comCou.update()
        } else {
            comCou.data.datasets = comCou.data.datasets.filter((e) => e.label !== el.currentTarget.dataset.label)
            comCou.update()
        }
    })
})