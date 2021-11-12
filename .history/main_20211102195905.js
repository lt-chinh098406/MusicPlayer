function sum(a, b) {
  if (typeof a == number && typeof b == number) {
      return a + b;
  } else {
      return false;
  }
}

var result = sum(2, 8);
console.log(result)
