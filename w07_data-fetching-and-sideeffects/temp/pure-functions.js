
let xx = 0;


console.log('xx', xx);

function timesTen(num){
  console.log('monkey fuzz');
  const output = num*10 + xx;
  xx = xx + 1;
  return output;
}

console.log('timesTen(4)', timesTen(4));
console.log('timesTen(4)', timesTen(4));
console.log('timesTen(4)', timesTen(4));
console.log('timesTen(4)', timesTen(4));

console.log('xx again', xx);
