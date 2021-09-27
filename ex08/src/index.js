const sum = (num1, num2 = 1) => {
    return num1 + num2;
}

console.log(sum(2, 8));
module.exports = sum;