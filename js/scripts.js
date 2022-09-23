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

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let pokemonItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    pokemonItem.appendChild(button);
    pokemonList.appendChild(pokemonItem);
  };

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem
  };
})();

//getAll function, accesses pokemonRepository and runs addListItem function
// pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
