const adder = (...numbers) => {
    return numbers.reduce((total, num) => {
        const fNumber = (parseFloat(num) || 0);
        return total + fNumber
    }, 0)
}

module.exports = adder;
