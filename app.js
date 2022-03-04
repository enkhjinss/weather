// const axios = require("axios");
// const readline = require("readline");
// const chalk = require('chalk')

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// const countriesArray = [];

// rl.question("Цаг агаарын мэдээ авах хаяг байршлыг оруулна уу: ", (country) => {
//     axios
//         .get(
//             `https://api.mapbox.com/geocoding/v5/mapbox.places/${country}.json?access_token=pk.eyJ1IjoiZW5raGppbnNzIiwiYSI6ImNsMGFlNWNxcjA5Y2Mzam56Znh3azh4NnkifQ.HaaiIR6m8-YJQvELtA2_AA`
//         )
//         .then((response) => {
//             const array = response.data.features;
//             array.forEach((country, i) => {
//                 countriesArray.push(country);
//                 console.log(
//                     `\n ${i}. Газрын нэр: ${country.place_name} Lat: ${country.geometry.coordinates[0]} Long: ${country.geometry.coordinates[1]}`
//                 );
//             });
//             rl.question("Зөв хаягийг сонгоно уу: ", (countryIndex) => {
//                 axios
//                     .get(
//                         `https://api.darksky.net/forecast/81d38b9c958eb018e01083a72b0926b5/${countriesArray[countryIndex].center[1]},${countriesArray[countryIndex].center[0]}`
//                     )
//                     .then((weather) => {
//                         console.log(`яг одоо ${weather.data.currently.temperature} градус`);
//                         console.log(`Хур тунадас орох магадлал ${weather.data.currently.precipProbability}%`);
//                     });
//                 rl.close();
//             });
//         });
// });




const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

console.log(argv)
if (argv.ships > 3 && argv.distance < 53.5) {
  console.log('Plunder more riffiwobbles!')
} else {
  console.log('Retreat from the xupptumblers!')
}

//yay Enkhjeen chi chadlaa;
