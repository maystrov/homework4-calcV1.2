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
       `);
       if (operation === null) {
           alert('Enter any number from 1 to 7! Do not click No-button!');
           continue;
       } 
       operation = +operation;
       if (operation !== operation || operation <= 0 || operation > 7) {
        alert('Wrong input data! Enter any number from 1 to 7!');
    }
        
    } while (operation !== operation || operation <= 0 || operation > 7) ;

    let result;
    if (operation < 6) {
        const firstOperand = +prompt('Enter first operand:');
        const secondOperand = +prompt('Enter second operand:');
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
            const angle = +prompt('Enter angle');
            if (operation == 6) {
                result = `cos ${angle} = ${Math.cos(angle)}`;
            }
            else {
                result = `sin ${angle} = ${Math.sin(angle)}`;
            }
    }
    historyArray[historyArray.length] = `\n ${result}`;
    alert(`Your result is: ${result}`)
    alert(`your history is : ${historyArray}`)

}   while(confirm('Do you want to calculate again?'));

