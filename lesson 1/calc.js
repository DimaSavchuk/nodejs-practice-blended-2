//node calc.js sum 5 10 15 
//node calc.js sub 35 10 4
//node calc.js mult 2 3 4
//node calc.js div 30 5 2   

const [operator, ...arguments] = process.argv.slice(2);
const numbers = arguments.map(item=> Number(item));


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

const result = calc(operator, numbers);
console.log(result);