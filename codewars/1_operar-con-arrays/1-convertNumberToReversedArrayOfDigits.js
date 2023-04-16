//First approach
const digitize = (n) => n.length === 1 ? [n] : n.toString().split('').reverse().map(num => Number(num));