import input from "./input.txt";

const dayOne = input =>
  input
    .split("\n")
    //.map(line => line.trim()) not needed but good idea
    .reduce((total, num) => total + parseInt(num), 0);

export { dayOne, input };
