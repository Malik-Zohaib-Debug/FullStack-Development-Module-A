let totalBill = document.getElementById('total-bill');
let totalTip = document.getElementById('total-tip');
let totalPersons = document.getElementById('total-persons');
let totalAmount = document.getElementById('totalAmount');
let incrementBtn = document.getElementById('increment');
let decrementBtn = document.getElementById('decrement');
var counter = 0;

let numberOfPeople = Number(totalPersons.innerText);

function calculateBill(){
    let billAmount = totalBill.value;
    let tip = totalTip.value;
    let totalTipPercent = tip / billAmount;
    let charges = totalTipPercent * 100;
    let totalCharges = parseFloat(charges) + parseFloat(billAmount);
    totalAmount.innerHTML = `$${(totalCharges/numberOfPeople).toFixed(2)}`;
}

const decreasePeople = () => {
    if(numberOfPeople <= 1){
        return
    }

    numberOfPeople -= 1;

    totalPersons.innerText = numberOfPeople;

    calculateBill();
}

const increasePeople = () => {
    numberOfPeople += 1;

    totalPersons.innerText = numberOfPeople;

    calculateBill();
}