const loadData=(search)=>{
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayData(data.meals))
}

const displayData=items=>{
    // console.log(items.meals[0]);
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML='';
    items.forEach(item => {
        // console.log(item);
    const mealDiv = document.createElement('div');
    mealDiv.innerHTML=`
    <div class=" w-full h-96 card card-side bg-base-100 shadow-xl">
        <figure><img src="${item.strMealThumb}"/></figure>
        <div class="card-body">
            <h2 class="card-title lg:text-3xl text-2xl">${item.strMeal}</h2>
            <p>${item.strIngredient1 +' ' + item.strIngredient2 +' ' +item.strIngredient3}</p>
            <a onclick="loadMealDetail(${item.idMeal})" href="#my-modal-2" class="btn w-32">Details</a>
            <a class ="text-amber-400 lg:text-3xl font-semibold underline" href="${item.strYoutube}">Youtube</a>
        </div>
        </div>

    `
    cardContainer.appendChild(mealDiv)

    });
}

const SearchFood=()=>{
    const searchText = document.getElementById('search-input').value;
    // console.log(searchText);
    loadData(searchText);
}

const loadMealDetail=(idMeal)=>{
    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayMealDetails(data.meals[0]))
  
}

const displayMealDetails = meal=>{
    document.getElementById('detail-title').innerText=meal.strMeal;
    document.getElementById('description').innerText=meal.strIngredient1+' ,'+ meal.strIngredient2 ;
}

loadData('fish');