// ==== ==== ==== CITIES 2 ==== ====

var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
  ];
// Create a new array
cityNames = [];
// // Write a function that returns an array of the city names
cities.forEach(function (city) {
    cityNames.push(city['name']);
});
console.log(cityNames);

//####### ######### ############# ################ #################
// function name(city) {
//     cityNames.push(city['name']);
// } 
// console.log(cityNames = cities.filter(name));
//###### ########## ############# ################ #################

