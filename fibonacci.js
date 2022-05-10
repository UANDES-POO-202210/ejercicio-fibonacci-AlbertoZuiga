var fs = require('fs')

var archivo = fs.readFileSync('./archivo.txt','UTF-8')

function fibonacciNumber(number){
    if (number > 1){
        return fibonacciNumber(number-1)+fibonacciNumber(number-2)
        }
    
    else if (number == 1){
        return 1
        }
    else if (number == 0){
        return 0
        }
    
    }
console.log(fibonacciNumber(6))