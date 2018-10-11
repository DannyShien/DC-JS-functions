// ==== ==== ==== CITIES 1 ==== ====

var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
  ];
// // Taking the current array of cities and creating a new array
// var cityTemp = [];
// // Cycle through the current array
// cities.forEach(function (city) {
//     // Find the cities that has a temperature less than 70
//     if (city['temperature'] < 70) {
//         // Add the cities to empty array
//         cityTemp.push(city['name']);
//     } 
// });
// console.log(cityTemp);

function isCityCool(city) {
    return city['temperature'] < 70;
    //return city.temperature < 70;
}

// function getName(city) {
//     return city.name;
// }

function coolCities(citiesArray){
    // 1. Create a new array
    let resultingCities = [];

    // What do I do in the body?
    // 3. Look through the citieArray and find ones whos temperature is less than 70
    citiesArray.forEach(function (city) {
        if (isCityCool(city)) {
            resultingCities.push(city);
        }
    });

    // return citiesArray.filter(isCityCool);
    // return citiesArray.filter(isCityCool).map(getName);

    // 2. Return the new array
    return resultingCities; 
}