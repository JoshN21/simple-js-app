//pokemonList in IIFE
let pokemonRepository = (function () {

  let pokemonList = [
    {name: 'Bulbasaur', height: 2, types: ['grass', 'poison']},
    {name: 'Ivysaur', height: 3, types: ['grass', 'poison']},
    {name: 'Venusaur', height: 6, types: ['grass', 'poison']}
  ];

  function getAll() {
    return pokemonList;
  };

  function add(pokemon) {
    pokemonList.push(pokemon);
  };

  return {
    getAll: getAll,
    add: add
  };
})();

//forEach loop iterating over pokemonList, Function composition
function getHeightDescription(height) {
  return height + 'ft.';
};

function getTypesDescription(types) {
  return 'types: ' + types;
};

function getPokemonDescription(pokemon) {
  let heightDescription = getHeightDescription(pokemon.height);
  let typesDescription = getTypesDescription(pokemon.types);
  
  document.write(pokemon.name + ', ' + heightDescription + ', ' + typesDescription + '<br>');
};

pokemonList.forEach(getPokemonDescription);
