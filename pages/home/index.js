document.addEventListener("DOMContentLoaded", async () => {
  let arrayPokemons = [];
  for (let i = 1; i <= 30; i++) {
    const urlService = `https://pokeapi.co/api/v2/pokemon/${i}`;
    const response = await fetch(urlService);
    const pokemons = await response.json();
    arrayPokemons.push(pokemons);
  }

  console.log(arrayPokemons);
});
