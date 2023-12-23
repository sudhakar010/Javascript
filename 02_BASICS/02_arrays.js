const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

marvel_heroes.push(dc_heroes)

console.log(marvel_heroes);

marvel_heroes.concat(dc_heroes)
console.log(marvel_heroes);

const allheroes = marvel_heroes.concat(dc_heroes);
console.log(allheroes);