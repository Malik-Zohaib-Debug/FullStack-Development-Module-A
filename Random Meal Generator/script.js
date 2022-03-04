const search = document.getElementById('search');
const submit = document.getElementById('submit');
const generate = document.getElementById('generate');
const resultsHeading = document.getElementById('results-heading');
const meals = document.getElementById('meals');
const selectedMeal = document.getElementById('selected-meal');

function searchMeal(e) {
    e.preventDefault();
    const searchText = search.value;
    if(searchText.trim()){
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
                resultsHeading.innerHTML = `<h2>Search results for ${searchText}</h2>`;
                if(data.meals === null) {
                    resultsHeading.innerHTML = `<h2>No result found for ${searchText}</h2>`;
                } else {
                    meals.innerHTML = data.meals.map(meal => `
                        <div class="meal">
                            <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
                            <div class="meal-info" id="${meal.idMeal}">
                                <h3>${meal.strMeal}</h3>
                            </div>
                        </div>
                    `)
                    .join('')
                }
        })
        searchText.value = '';
    } else {
        alert("Please enter search keyword");
    }
}

submit.addEventListener('submit', searchMeal);