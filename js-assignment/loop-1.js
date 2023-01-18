//write a program to print even number till 20

for (var a = 2; a <= 20; a++) {

    if (a % 2 == 0){

    console.log (a);

    }
}

//write a program to print odd number till 20

for (var a = 2; a <= 20; a++) {

    if (a % 2 !== 0){

    console.log (a);

    }
}

//write a program to check given number is prime or not

var a = 5;

var a = true;

for (var num = 2; num < 5; num++) {
    if (a % 2 == 0) {
        a = false;
        break;
    } 
}

if (a == true) {
    console.log ("number is prime");
}
else {
    console.log ("number is not prime"); 
}