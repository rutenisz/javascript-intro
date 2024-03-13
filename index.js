// exercise 1

function test() {
  var a = "3";
  var b = "8";

  var c = a;
  a = b;
  b = c;

  console.log("a is " + a);
  console.log("b is " + b);
}

test();

// exercise 2

var greeting = "Hello";
var name = "Ruta";

var message = greeting + " " + name;

alert(message);

// exercise 3

var text = prompt("Write your message here. The limit is 140 characters.");
var textLength = text.length;
alert(
  "You have written " +
    textLength +
    " characters, you have " +
    (140 - textLength) +
    " characters left."
);
