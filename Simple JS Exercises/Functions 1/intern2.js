// This solution works for en_CA as well

function extractLanguage(locale) {
  return locale.split("_")[0]; // e.g: en
}

function extractRegion(locale) {
  return locale.split(".")[0].
    split("_")[1]; // e.g: US
}

function englishGreet(region) {
  // Return an English greeting based on the region
  switch (region) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    case 'CA': return 'Heyo!';
    default:   return 'Invalid';
  }
}

function greet(languageCode, region) {
  switch (languageCode) {
    case 'en': return englishGreet(region);
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
    default:   return 'Invalid';
  }
}

function localGreet(locale) {
  // Greet based on the language and region
  let languageCode = extractLanguage(locale);
  let region = extractRegion(locale);

  return greet(languageCode, region);
}

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
console.log(localGreet('en_CA.UTF-8')); // 'Heyo!'
console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'