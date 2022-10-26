import com from '../json/com.json' assert { type: 'json' }
import comCat from '../json/comCat.json' assert { type: 'json' }
import comCou from '../json/comCou.json' assert { type: 'json' }
import comReg from '../json/comReg.json' assert { type: 'json' }
import livReg from '../json/livReg.json' assert { type: 'json' }
import monCat from '../json/monCat.json' assert { type: 'json' }
import monMoi from '../json/monMoi.json' assert { type: 'json' }
import monReg from '../json/monReg.json' assert { type: 'json' }

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update(); 
}