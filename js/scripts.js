//pokemonList in IIFE
let pokemonRepository = (function () {

  let pokemonList = [
    {name: "Bulbasaur", height: 2, types: ["grass", "poison"]},
    {name: "Ivysaur", height: 3, types: ["grass", "poison"]},
    {name: "Venusaur", height: 6, types: ["grass", "poison"]}
  ];

  function getAll() {
    return pokemonList;
  };

// function for adding pokemon to the list, example: pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon input is invalid");
    }
  };

  //function shows pokemons's additional info when clicked
  function showDetails(pokemon) {
    console.log(pokemon);
  };

  //function displays each pokemon on page as a button
  function displayListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let pokemonItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("pokemon-button");
    pokemonItem.appendChild(button);
    pokemonList.appendChild(pokemonItem);
    // event handler runs showDetails function when a pokemon is clicked, use 'event' in function
    button.addEventListener('click', function (event) {
      showDetails(pokemon);
    });
  };

  return {
    getAll: getAll,
    add: add,
    displayListItem: displayListItem,
    showDetails: showDetails
  };
})();

//getAll function, accesses pokemonRepository and runs displayListItem function
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.displayListItem(pokemon);
});
