

//Fetch Meals API
document.getElementById('searchMealBtn').addEventListener('click', () => {
    const mealName = document.getElementById('searchMealName').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
    .then(response => response.json())
    .then(data => getMeal(data))

});

//Search For Meals
const getMeal = (meal) => {
    const mealArea = document.getElementById('mealArea');
    const mealInputValue = document.getElementById('searchMealName').value;
    const mealList = meal.meals;

//Message For alert
    if(mealInputValue == "" || mealList == null){
        document.getElementById('alertMessage').style.display = "block";
    }else{
        mealList.forEach(eachMeal => {
            const mealInfo = `
            <div class="col-md-3 mb-4">
            <div onclick="getData('${eachMeal.strMeal}')" class="card h-100">
                <img src="${eachMeal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${eachMeal.strMeal}</h5>
                </div>
            </div>
            `

            mealArea.innerHTML += mealInfo;
            document.getElementById('alertMessage').style.display = "none"
        });
    }

};

const getData = (mealTitle, callFunction) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealTitle}`)
    .then(response => response.json())
    .then(data => showDetails(data))
}

//Show Meals Data In Details
const showDetails = (mealDetail) => {
    const mealDetailArea = document.getElementById('mealDetails');
    const mealDetailInfo =`
    <div class="card col-md-4 m-auto">
        <img src="${mealDetail.meals[0].strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title fw-bold">${mealDetail.meals[0].strMeal}</h5>
          <h6 class="fw-bold">Ingredients</h6>
          <ul>
              <li>${mealDetail.meals[0].strIngredient1}</li>
              <li>${mealDetail.meals[0].strIngredient2}</li>
              <li>${mealDetail.meals[0].strIngredient3}</li>
              <li>${mealDetail.meals[0].strIngredient4}</li>
              <li>${mealDetail.meals[0].strIngredient5}</li>
              <li>${mealDetail.meals[0].strIngredient6}</li>
          </ul>
        </div>
      </div>
    `
    mealDetailArea.innerHTML = mealDetailInfo;
}
