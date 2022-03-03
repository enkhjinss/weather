const axios = require('axios');
const { features } = require('process');

axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/ulaanbaatar.json?access_token=pk.eyJ1IjoiZW5raGppbnNzIiwiYSI6ImNsMGFlNWNxcjA5Y2Mzam56Znh3azh4NnkifQ.HaaiIR6m8-YJQvELtA2_AA').then((response) => {
    // features = response.data.features;
    // console.log(features);

    console.log(response.data.features.id);

})