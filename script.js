var num1 = +prompt("1-sonni kiriting:");
var num2 = +prompt("2-sonni kiriting:");
var num3 = +prompt("3-sonni kiriting:");

var min = Math.min(num1, num2, num3);
var max = Math.max(num1, num2, num3);
var middle;

if ((num1 > min && num1 < max)) {
    middle = num1;
} else if ((num2 > min && num2 < max)) {
    middle = num2;
} else {
    middle = num3;
}

alert("O'rta qiymat: " + middle);