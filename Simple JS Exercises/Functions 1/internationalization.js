/* function greet(lang) {
  switch (lang) {
    case 'en':
      return  console.log('Hi!');
    case 'fr':
      return console.log('Salut!');
    case 'pt':
      return console.log('Olá!');
    case 'de':
      return console.log('Hallo!');
    case 'sv':
      return console.log('Heji!');
    case 'af':
      return console.log('Haai!');
  }
} */

function greet (inString) {
  switch (inString) {
    case 'en' : return 'hi';
    case 'ru' : return 'Привет';
    case 'uk' : return 'Привіт';
    case 'hy' : return 'Ողջու՜յն';
    case 'ar' : return 'مرحبا';
    case 'zh' : return '你好';
    case 'bs' : return 'zdravo';
    case 'ku' : return 'merheba';
    case 'ko' : return '안녕';
    default : return 'Not Valid';
  }
}

greet('en'); // 'Hi!'
greet('fr'); // 'Salut!'
greet('pt'); // 'Olá!'
greet('de'); // 'Hallo!'
greet('sv'); // 'Hej!'
greet('af'); // 'Haai!'