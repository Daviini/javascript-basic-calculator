alert("Welcome to My Javascript Calculator. Click 'OK' to calculate");
const num1 = parseFloat(prompt('Enter First number:'));
const num2 = parseFloat(prompt('Enter Second number:'));

const operator = prompt('Enter operator(+ ,- , / , * )');
let result = 0;
if(isNaN(num1) || isNaN(num2)){
    alert('Wrong Input! Refresh the page and provide detail')
}else{
    if(operator== '+'){
        result = num1 + num2;
    }else if(operator == '-'){
        result = num1 - num2;
    }else if(operator == '/'){
        result = num1 / num2;
    }else if(operator == '*'){
        result = num1 * num2;
    }
    alert(num1+operator+num2+'=' + result);
}