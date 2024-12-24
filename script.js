const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const messages = ["I miss you😔", "I love you💖", "Bakit??", "wala na ba talaga?", "Sigiii naa👉🏿👈🏿"];
    
    const validMathExpression = /^[0-9+\-*/().\s]+$/;
    const containsOperator = /[+\-*/]/;

    if (validMathExpression.test(display.value) && containsOperator.test(display.value.trim())) {
        try {
            const result = eval(display.value);
            if (typeof result === 'number' && !isNaN(result)) {
                const randomMessage = messages[Math.floor(Math.random() * messages.length)];
                display.classList.remove("shake");
                display.value = randomMessage;
            } else {
                throw new Error("Invalid mathematical equation");
            }
        } catch (error) {
            display.classList.add("shake");
            setTimeout(() => {
                display.classList.remove("shake");
            }, 500);
            alert("Please enter a valid mathematical problem!");
        }
    } else {
        display.classList.add("shake");
        setTimeout(() => {
            display.classList.remove("shake");
        }, 500);
        alert("Please enter a valid mathematical problem!");
    }
}
