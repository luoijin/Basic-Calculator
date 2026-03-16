// Initialize VanillaTilt
        VanillaTilt.init(document.querySelector(".container"), {
            max: 15,
            speed: 400,
            glare: false,
            "max-glare": 0.01,
        });

        // Append a number to the display
        function appendNumber(number) {
            const display = document.calc.txt;
            display.value += number;
        }

        // Append an operator to the display
        function appendOperator(operator) {
            const display = document.calc.txt;
            const lastChar = display.value.slice(-1);

            // Prevent operators from being entered as the first character or consecutively
            if (display.value.length === 0 && operator === '-') {
                display.value += operator;
                return;
            }

            if (['+', '-', '*', '/'].includes(lastChar)) {
                display.value = display.value.slice(0, -1) + operator;
            } else if (display.value.length > 0) {
                display.value += operator;
            }
        }

        // Append a decimal point
        function appendDecimal() {
            const display = document.calc.txt;
            const lastNumber = display.value.split(/[\+\-\*\/]/).pop();

            // Prevent multiple decimal points in a number
            if (!lastNumber.includes('.')) {
                display.value += '.';
            }
        }

        // Clear the display
        function clearDisplay() {
            document.calc.txt.value = '';
        }

        // Clear the last character
        function clearLast() {
            const display = document.calc.txt;
            display.value = display.value.slice(0, -1);
        }

        // Calculate the result
        function calculate() {
            const display = document.calc.txt;
            try {
                display.value = eval(display.value);
            } catch (e) {
                display.value = 'Error';
            }
        }