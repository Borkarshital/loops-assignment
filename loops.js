//print value from 1 to 100
console.log ("print value from 1 to 100")
var i = 1;
while (i <= 100) {
    console.log (i);
    i++
}

// print 2's table
console.log ("print 2's table")
var i = 2;
while (i <= 20) {
    console.log (i);
    i = i+2
}

//match the point and print steps from given number (60)
console.log ("match the point and print steps from given number (60)")
function doWhileLoop(){
    var num = +prompt("enter your number")
    do {
        console.log (num);
        num++
    }
    while (num <= 60);
}