// Number 1
let number = 1;
while (number <= 100) {
  if (number % 15 == 0) {
    console.log("Apabole");
  } else if (number % 3 == 0) {
    console.log("apa");
  } else if (number % 5 == 0) {
    console.log("Bole");
  } else {
    console.log(number);
  }
  number++;
}
