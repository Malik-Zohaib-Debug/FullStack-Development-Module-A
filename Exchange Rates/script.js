const country = document.getElementById('country');
const tableBody = document.getElementById('table-body');

let currencyCode = [];
let rates = [];

function extractData() {
    const apiKey = "da1b31833d43ff7224072ffb";
    let tableHtml = '';
    fetch(`https://v6.exchangerate-api.com/v6/da1b31833d43ff7224072ffb/latest/USD`)
        .then(res => res.json())
        .then(data => {
            const conversionRate = data.conversion_rates;
            for(let rate in conversionRate) {
                currencyCode.push(rate);
            }
            rates = Object.values(conversionRate);

           console.log(currencyCode)
           console.log(rates)
        
            tableData = document.write.tableHtml()

           tableHtml += `
            <tr>
                <td></td>
            </tr>
           `
        })
        tableBody.innerHTML = tableHtml    
}

extractData();
