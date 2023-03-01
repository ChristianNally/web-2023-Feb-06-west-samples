const $foodsContainer = $('#foods-container');

const fetchFoods = () => {
  $.ajax({
    method: 'GET',
    url: '/foods',
    success: (foods) => {
      console.log(foods);
      $foodsContainer.empty();
      // loop through the provided array
      for (const food of foods) {
        // create a new DOM node(s) for each element in the array
        const $foodElement = $(`
          <div class="food">
            <h2>Food: ${food.name} (${food.id})</h2>
            <h2>Calories: ${food.calories}</h2>
          </div>
        `);
  
        // append the new DOM element to our #foods-container
        // $foodsContainer.append($foodElement);
        $foodsContainer.prepend($foodElement);
      }
    }
  });
};

fetchFoods();

const $foodForm = $('#food-form');
$foodForm.on('submit', (event) => {
  // prevent the default behaviour of browser
  event.preventDefault();
  
  // get the data from the form
  // urlencode the data
  const urlencoded = $foodForm.serialize();
  // console.log(urlencoded);

  // make a AJAX post request
  $.ajax({
    method: 'POST',
    url: '/foods',
    data: urlencoded,
    success: (response) => {
      console.log(response);
      
      // fetch the foods again
      fetchFoods();
    }
  });
});

