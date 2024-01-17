function sumUpToN(n) {
  let sum = 0;
  console.log("Summing numbers from 1 to", n);
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log("End summing numbers");
  return sum;
}

let limit = 5;
let resultSum = sumUpToN(limit);
console.log('The sum of numbers from 1 to', limit, 'is:', resultSum);
