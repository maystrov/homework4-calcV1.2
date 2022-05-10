const historyArray = [];
let  operation = '';
do {
    do {
        operation = prompt(`Choose your operation:
        1. +
        2. -
        3. *
        4. /
        5. pow 
        6. cos
        7. sin
        8. history
       `);
       if (operation === null) {
           alert('Enter any number from 1 to 8! Do not click No-button!');
           continue;
       } 
       operation = +operation;
       if (operation !== operation || operation <= 0 || operation > 8) {
        alert('Wrong input data! Enter any number from 1 to 8!');
    }
        
    } while (operation !== operation || operation <= 0 || operation > 8) ;

    let result;
    
    if (operation < 6) {
        let firstOperand;
        let secondOperand;
        do {
            firstOperand = +prompt('Enter first operand:');
        } while(firstOperand !== firstOperand);
        do {
            secondOperand = +prompt('Enter second operand:');
        } while(secondOperand !== secondOperand);
        switch (operation) {
            case 1:
                result = `${firstOperand} + ${secondOperand} = ${firstOperand + secondOperand}`;
                break;
            case 2:
                result = `${firstOperand} - ${secondOperand} = ${firstOperand - secondOperand}`;
                break;
            case 3:
                result = `${firstOperand} * ${secondOperand} = ${firstOperand * secondOperand}`;
                break;
            case 4:
                result = `${firstOperand} / ${secondOperand} = ${firstOperand / secondOperand}`;
                break;
            case 5:
                result = `pow ${firstOperand} to the power of ${secondOperand} = ${Math.pow(firstOperand, secondOperand)}`;     
        } 
    }   else {
            if (operation == 8) {
                alert(`your history is : ${historyArray}`)
                continue;
            }
            else {
                let angle;
                do {
                    angle = +prompt('Enter angle:');
                } while(angle !== angle);
    
                if (operation == 7) {
                    result = `sin ${angle} = ${Math.sin(angle)}`;
                }
                else {
                    result = `cos ${angle} = ${Math.cos(angle)}`;
                }
            }
    }
    historyArray[historyArray.length] = `\n ${result}`;
    alert(`Your result is: ${result}`)
}   while(confirm('Do you want to calculate again?'));

