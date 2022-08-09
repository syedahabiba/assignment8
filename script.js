const num = Math.ceil(Math.random() * 10);
console.log(num);
const nums = prompt('Guess the number between 1 and 10 inclusive');
if (nums == num)
console.log('Matched');
else 
console.log('Not matched, the number was '+nums);