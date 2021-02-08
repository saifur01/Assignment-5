const mealLink = "https://www.themealdb.com/api/json/v1/1/search.php";
function recipeName (recipe){
    const url = `${mealLink}? s= ${recipe}`;
    fetch (url)
    .then(Response => Response.json())
    .then(data => displayRecipe(data))
    .catch(error => alert("search correct meal name"))
    
}
document.getElementById("search-button").addEventListener('click', () => {
    const inputRecipe = document.getElementById("search-input").value;
    if(inputRecipe === "") {
        alert ("Enter your recipe name")
    }
    else {
     recipeName(inputRecipe);
    }

});

const displayRecipe = (data) => {
    const item = data.meals;
    item.forEach((element) => {
        const recipesDiv = document.getElementById('recipesDiv');
        const mealDiv = document.createElement('div')
        mealDiv.className = "col-3 ms-2 mb-5 recipe"
        const discItem = `
        <div onclick="displayDetails('${element.strMeal}')">
       <img class="img-fluid" src=" ${element.trMealThumb}">
       <h5 class="mt-3">${element.strMeal}</h5>
       </div>`
       mealDIv.innerHTML = discItem;
        recipesDiv.appendChild  (mealDiv);
        document.getElementById("search-input").value = "";
       
    });
}

function displayDetails(recipeTittle){
    
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
    fetch(url)
    .then(Response => Response.json()) 
    .then(data => displayIngredient(data))
}
function displayIngredient(details){
    const listItem = details.meals;
    listItem.forEach(element =>{
        const ingredient = document.getElementById('ingredient-list');
        
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
    

    


ingredient.innerHTML = ingredientList;

    });

    }