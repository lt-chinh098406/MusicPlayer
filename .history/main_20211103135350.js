function sum(a, b) {
  if (!(isNaN(a)) && !(isNaN(b))) {
    return a + b;
  } else {
    return false
  }
}
var result = sum('as', 8);
console.log(result)