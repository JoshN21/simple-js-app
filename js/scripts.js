//pokemonList in IIFE
let pokemonRepository = (function () {

  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  let loadingSpinner = document.querySelector(".loading-spinner");

  let showLoadingSpinner = function () {
    loadingSpinner.classList.add("loading-spinner");
  };

  let hideLoadingSpinner = function () {
    loadingSpinner.classList.remove("loading-spinner");
  };

  //ADD function for adding pokemon to the list, example: pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon && //defined in loadList function
      "detailsUrl" in pokemon //defined in loadList function
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon input is invalid");
    }
  };

  //GET ALL function, for returning entire pokemonList
  function getAll() {
    return pokemonList;
  };

  //DISPLAY LIST ITEM function, displays each pokemon on page as a button, and listens for a click to run showDetails
  function displayListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let pokemonItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("pokemon-button");
    pokemonItem.appendChild(button);
    pokemonList.appendChild(pokemonItem);
    // event handler runs showDetails function when a pokemon is clicked, use 'event' paramater in function
    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  };

  //LOAD LIST function, uses fetch to get pokemon data from pokeapi, then uses add function to add to pokemonList
  function loadList() {
    showLoadingSpinner();
    return fetch(apiUrl).then(function (response) {
      hideLoadingSpinner();
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (error) {
      hideLoadingSpinner();
      console.log(error);
    });
  };

  //LOAD DETAILS function, fetches Pokemon details using URL, returns JSON response, assigns some of the details to the Pokemon
  function loadDetails(item) {
    showLoadingSpinner();
    let url = item.deatilsUrl;
    return fetch(url).then(function (response) {
      hideLoadingSpinner();
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default; //found in API
      item.height = details.height;
      item.types = details.types;
    }).catch(function (error) {
      hideLoadingSpinner();
      console.log(error);
    });
  };

  //SHOW DETAILS function, executes loadDetails for the pokemon clicked, then prints those(details to load defined in loadDetails function) to the console
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
  };

//assigns functions as keys so they can be accessed?
  return {
    add: add,
    getAll: getAll,
    displayListItem: displayListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

//loadList function called, then getAll function accesses pokemonRepository and runs displayListItem function for each pokemon
pokemonRepository.loadList().then(function () { //list is laoded
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.displayListItem(pokemon);
  });
});
