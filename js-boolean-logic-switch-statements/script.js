var age = 25;

if (age < 20) {
    console.log('Ake is teenager.');
} else if (age > 20 && age < 30) {
    console.log('Ake is a young man.')
} else {
    console.log('Ake is a man.');
}

var job = 'programmer';

switch (job) {
    case 'teacher':
        console.log('Ake teaches kids.');
        break;
    case 'driver':
        console.log('Ake driver a grab in BKK.');
        break;
    case 'programmer':
        console.log('Ake is a javascript developer.');
        break;
    default:
        console.log('Ake does something else.');

}