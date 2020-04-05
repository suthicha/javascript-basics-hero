var name = 'Suthicha';
var age = 30;
var isMarried = 'yes';

if (isMarried === 'yes') {
    console.log(name + ' is married!');
} else { 
    console.log(name + ' will hopfully marry soon.');
}

isMarried = false;

if (isMarried) {
    console.log('Yes!');
} else {
    console.log('No!');
}

// Javascript autometic convert type.
if (30 == '30') {
    console.log('Print equal number');
}

// Compaire same type.
if (30 === '30') {
    console.log('Print equal number');
}