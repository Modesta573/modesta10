
const	calculator = {
	displayNumber: '0',
	operator: null,
	firstNumber: null,
	waitingForSecond: false
};

function learCalculator() {
	document.querySelector('#displayNumber').innerText = calculator.displayNumber;
}

function clearCalculator() {
	calculator.displayNumber = '0';
	calculator.operator = null;
	calculator.firstNumber = null;
	calculator.waitingForSecondNumber = false;
}

function inputDigit(digit) {
	if (calculator.waitingForSecondNumber && calculator.firstNumber === calculator.displayNumber) {
	calculator.displayNumber = digit;
		} else {
	if (calculator.displayNumber === '0') {
		calculator.displayNumber = digit;
	  } else {
	calculator.displayNumber += digit;
	 	 	}
		}
	}

function inversNumber() {
	if (calculator.displayNumber === '0') {
		return;

	}

	calculator.displayNumber = calculator.displayNumber * -1;
    }

function handleOperator(operator) {
    if (!calculator.waitingForSecondNumber) {
    calculator.operator = operator;
    calculator.waitingForSecondNumber = true;
    calculator.firstNumber = calculator.displayNumber;
    	} else {
    		alert('Operator sudah ditetapkan')
    	} 
	}

function perfomCalculation() {
	if (calculator.firstNumber == null || calculator.operator == null) {
		alert("Anda belum mendapatkan operator");
		return;
	}
	let result = 0;
	if (calculator.operator === "+") {
		result = perseInt(calculator.firstNumber) + perseInt(calculator.displayNumber);
	} else {
		result = perseInt(calculator.firstNumber) - perseInt(calculator.displayNumber)
	}
	
}

	const buttons = document.querySelectorAll(".button");
	for (let button of buttons) {
	button.addEvenListener('click', function (event) {

	// mendapatkan objek elemen yang diklik 
	const target = event.target;

	if (target.classList.contains('clear')) {
	calculator();
	updateDisplay();
	return;
	}

	if (target.classList.contains('negative')) {
	inversNumber();
	updateDisplay();
	return;
		}

   if (target.classList.contains('equals')) {
	perfomCalculation();
	updateDisplay();
	return;
		}

	if (target.classList.contains('operator')) {
	handleOperator(target.innerText);
	return;
	}

	inputDigit(target.innerText);
	updateDisplay()
	});

}

function performCalculation() {
   if (calculator.firstNumber == null || calculator.operator == null) {
       alert("Anda belum menetapkan operator");
       return;
   }
 
   let result = 0;
   if (calculator.operator === "+") {
       result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
   } else {
       result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber)
   }
 
   // objek yang akan dikirimkan sebagai argumen fungsi putHistory()
   const history = {
       firstNumber: calculator.firstNumber,
       secondNumber: calculator.displayNumber,
       operator: calculator.operator,
       result: result
   }
   putHistory(history);
   calculator.displayNumber = result;
   renderHistory();
	
	}	