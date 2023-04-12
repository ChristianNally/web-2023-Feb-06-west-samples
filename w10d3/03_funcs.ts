// name of function, arguments, return value
const sayHello = (name: string, age?: number, height?: number): string => {
  return `hello there ${name}`;
};

const result1 = sayHello('Alice');
const result2 = sayHello('Alice', 24);

const returningPromise = (num: number): Promise<number> => {
  return new Promise((resolve) => {
    resolve(num);
  });
};

returningPromise(42).then((data) => {});

const higherOrderFunc = (name: string, callback: (num: number) => string): string => {
  return callback(42);
};
