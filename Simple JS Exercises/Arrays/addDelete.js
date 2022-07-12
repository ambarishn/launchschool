let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

//Remove 'fossil' from the array, then add 'geothermal' to the end of the array.

energy.shift();
energy.push('geothermal');

console.log(energy);