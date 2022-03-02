const balance = document.getElementById('balance');
const list = document.getElementById('list');
const moneyCredit = document.getElementById('money-credit');
const moneyDebit = document.getElementById('money-debit');
const form = document.getElementById('add-form');
const reason = document.getElementById('reason');
const amount = document.getElementById('amount');

const Transactions = [
    /*{id: 1, reason: 'salary', amount: 5000},
    {id: 2, reason: 'grocery', amount: -200},
    {id: 3, reason: 'bills', amount: -450},
    {id: 4, reason: 'rent', amount: -900},
    */
];

let transactions = Transactions;

function displayTransaction(transactions) {
    const type = transactions.amount > 0 ? "+" : "-";
    const transactionLI = document.createElement('li');
    transactionLI.classList.add(transactions.amount > 0 ? "credit" : "debit");
    transactionLI.innerHTML = `
        ${transactions.reason}<span>${transactions.amount}</span> <button class="close-btn" onClick="deleteTransaction(${transactions.id})" > X </button>
    `
    list.appendChild(transactionLI);
}

function calculateBalance() {
    const transactionAmount = transactions.map(transaction => transaction.amount);
    const totalBalance = transactionAmount.reduce((acc, amount) => (acc += amount), 0);
    const creditBalance = transactionAmount
        .filter(transaction => transaction > 0)
        .reduce((acc, amount) => (acc += amount), 0);
    const debitBalance = transactionAmount
        .filter(transaction => transaction < 0)
        .reduce((acc, amount) => (acc += amount), 0);
    
    balance.innerHTML = `$${totalBalance}`;
    moneyCredit.innerHTML = `$${creditBalance}`;
    moneyDebit.innerHTML = `$${debitBalance}`;
}

function createID() {
    return Math.floor(Math.random() * 1000000000000)
}

function addTransaction(e) {
    e.preventDefault();

    if(reason.value.trim() === '' || amount.value.trim() === ''){
        alert("Please add a valid reason and a transaction amount");
    } else {
        const transaction = {
            id: createID(),
            reason: reason.value,
            amount: +amount.value
        }
        
        transactions.push(transaction);
        displayTransaction(transaction);
        calculateBalance();

        reason.value = '';
        amount.value = '';
    }
}

function deleteTransaction(id){
   transactions = transactions.filter(transaction => transaction.id !== id);
    init();
}

function init() {
    list.innerHTML = "";
    transactions.forEach(displayTransaction);

    calculateBalance();
}

init();

form.addEventListener('submit', addTransaction);
