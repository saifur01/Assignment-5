const mealLink = `https://www.themealdb.com/api/json/v1/1/search.php`;
function searchMeal (recipe){
    const url = `${mealLink}?s=${recipe}`;
    // console.log(url);
    fetch (url)
    .then(Res => Res.json())
    .then(data => displayRecipe(data))
   
    
}
document.getElementById("search-btn").addEventListener('click', () => {
    const inputRecipe = document.getElementById("text-field").value;
    if(inputRecipe == "") {
       
    }
    else {
        searchMeal(inputRecipe);
    }

});

const displayRecipe = (data) => {
    const item = data.meals;
    const recipes_Division = document.getElementById('recipes_Division');
  
    // console.log(recipes_Division);
    item.forEach((element) => {
        
        const mealDiv = document.createElement('mealDiv')
        mealDiv.className = "col-3 ms-2 mb-5 recipe"
        const mealItem = `
        <div onclick="displayDetails('${element.strMeal}')">
       <img class="img-fluid" src=" ${element.strMealThumb}">
       <h5 class="mt-3">${element.strMeal}</h5>
       </div>`
       mealDiv.innerHTML = mealItem;
       recipes_Division.appendChild(mealDiv);
       
       
    });
}

function displayDetails(recipeTittle){
    
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
    fetch(url)
    .then(Res => Res.json()) 
    .then(data => displayIngredient(data))
}
function displayIngredient(details){
    const li = details.meals;
    list.forEach(element =>{
        const ingredient = document.getElementById('ingredient_list');
        
        const ingredientList = `
        <img class="img-fluid food-img" src="${element.strMealThumb}">
    <div class="recipe-content px-5 pb-2">
    <h2 class="pt-4">${element.strMeal}</h2>
    <h5 class="pt-2 pb-3">ingredient</h5>
    <p>${element.strMeasure1} ${element.strIngredient1} </p>
    <p>${element.strMeasure3} ${element.strIngredient3} </p>
    <p> ${element.strMeasure4} ${element.strIngredient4} </p>
    <p> ${element.strMeasure5} ${element.strIngredient5} </p>
    <p> ${element.strMeasure6} ${element.strIngredient6} </p>
    <p> ${element.strMeasure7} ${element.strIngredient7} </p>
    <p> ${element.strMeasure8} ${element.strIngredient8} </p>
        </div>`;
    

    




    });

    }