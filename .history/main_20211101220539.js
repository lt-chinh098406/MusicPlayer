var a = 1;
var b = '1';

var result = 'A' && 'B' && NaN;

console.log(result);
// NaN

if(result) {
  console.log('DIEU KIEN DUNG!')
} else {
  console.log('DIEU KIEN SAI!')
}