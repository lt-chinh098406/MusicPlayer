function sum(a, b) {
  if (a != NaN && b != NaN) {
    return a + b;
  } else {
    return false
  }
}
var result = sum('as', 8);
console.log(result)