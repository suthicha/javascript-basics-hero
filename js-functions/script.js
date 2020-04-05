function calculateAge(yearOfBirth) {
    var age = 2020 - yearOfBirth;
    return age;
}

var ageAke = calculateAge(1980);
var ageBob = calculateAge(1985);
// console.log('Ake is : ' + ageAke);
// console.log('Bob is : ' + ageBob);

function yearUntilRetirement(name, 
yearOfBirth) {
    var age = calculateAge(yearOfBirth);
    var retirement = 65 - age;

    if (retirement >= 0) {
        console.log(name + ' retires in ' + 
        retirement + ' years.');
    } else {
        console.log(name + ' has already retired.');
    }
    
}

yearUntilRetirement('Ake', 1980);
yearUntilRetirement('Bob', 1985);
yearUntilRetirement('Tedd', 1945);