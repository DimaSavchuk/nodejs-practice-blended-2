const calc = (operator, numbers) => {
    
    switch (operator) {
        case "sum":
            return numbers.reduce((acc, item)=> acc + item);

            case "sub":
            return numbers.reduce((acc, item)=> acc - item);

            case "mult":
            return numbers.reduce((acc, item)=> acc * item);

            case "div":
            return numbers.reduce((acc, item)=> acc / item);
    
        default:
            return "Invalid operation type";
    }
}

module.exports = calc;