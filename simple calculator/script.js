// Variables to store input and result
let input = '';
let result = '';
//Function to update display
function updateDisplay() {
    document.getElementById('display').value = input || result || '0' ;
}

//Function to handle button clicks 
function buttonClick(value) {
    if(value === '='){
        result = eval(input);
        input = '';
    } else if (value === 'C'){
        input = '';
        result = '';
    } else{
        input += value;
    }
    updateDisplay();
}
//Generate Calculator buttons dynamically
const buttonsContainer = document.querySelector('.buttons');
const buttons = ['7','8','9','+','4','5','6','-','1','2','3','*','0','.','=','/'];

buttons.forEach(buttonValue => {
    const button = document.createElement('button');
    button.textContent = buttonValue;
    button.addEventListener('click', () => buttonClick(buttonValue));
    buttonsContainer.appendChild(button);
});