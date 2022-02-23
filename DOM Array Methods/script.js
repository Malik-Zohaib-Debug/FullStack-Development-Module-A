const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const filterBtn = document.getElementById('filter');
const sortBtn = document.getElementById('sort');
const sumBtn = document.getElementById('sum');

let data = [];

async function getRandomUser() {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();

    const user = data.results[0];

    const newUser = {
        name: `${user.name.title} ${user.name.first} ${user.name.last}`,
        balance: Math.floor(Math.random()*1000000)
    }

    addData(newUser);
}

function addData(newUser) {
    data.push(newUser);
    updateDOM();
}

function updateDOM(userData = data){
    main.innerHTML = `<h2><strong>User</strong> Wealth</h2>`;
    userData.forEach(user => {
        const userDiv = document.createElement('div');        
        userDiv.classList.add('user');
        userDiv.innerHTML = `<strong>${user.name}</strong>${user.balance}`
        main.appendChild(userDiv);
    });
}

getRandomUser()
getRandomUser()
getRandomUser()
