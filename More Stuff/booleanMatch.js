function booleanMatch(str) {
    let result = str.match(/[amba]/g);
    if (result) {
        console.log(`We have a match! ${result}`);
    } else {
        console.log('No match here.');

    }
}


booleanMatch('ambarish Nagarajan');
booleanMatch('N ambarish');
booleanMatch('chikkamba');