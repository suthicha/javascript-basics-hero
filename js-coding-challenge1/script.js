
var heightAke = 172;
var heightGorge = 165;
var ageAke = 30;
var ageGorge = 25;

var scoreAke = heightAke + 5 * ageAke;
var scoreGorge = heightGorge + 5 * ageGorge;

/*
if (scoreAke > scoreGorge) {
    console.log('Ake wins the game with ' + 
    scoreAke + ' points.');
} else if (scoreGorge > scoreAke) {
    console.log('Gorge wins the game with ' + 
    scoreGorge + ' points.');
} else if (scoreAke === scoreGorge) {
    console.log('There is a draw.');
}
*/

var heightBob = 188;
var ageBob = 30;
var scoreBob = heightBob + 5 * ageBob;

if (scoreAke > scoreGorge && 
    scoreAke > scoreBob) {
    console.log('Ake wins the game with ' + 
    scoreAke + ' points.');
} else if (scoreGorge > scoreAke && 
    scoreGorge > scoreBob) {
    console.log('Gorge wins the game with ' + 
    scoreGorge + ' points.');
} else if (scoreBob > scoreAke && 
    scoreBob > scoreGorge) {
    console.log('Bob wins the game with ' + 
    scoreBob + ' points.');
} else {
    console.log('It\'s a draw');
}