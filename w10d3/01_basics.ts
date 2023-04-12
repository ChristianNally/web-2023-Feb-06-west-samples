// let username: string | number = 'Alice';

// username = 'Bob';
// username = false;

// username = 42;

const badNums: number[] | string[] = []; // don't do this
const nums: (number | string)[] = []; // do this instead
nums.push(4);

// const output = nums.pop();

nums.push('hello');
// nums.push(true);
