class Stack {
    constructor() {
        this.items = [];
    }
    push(val) { this.items.push(val); }
    pop() {
        if (this.isEmpty()) throw new Error("Stack Underflow");
        return this.items.pop();
    }
    peek() { return this.items.length > 0 ? this.items[this.items.length - 1] : null; }
    isEmpty() { return this.items.length === 0; }
}

const display = document.getElementById('display');
const historyDisplay = document.getElementById('history');
let currentInput = '';
let displayContent = '0';
let expressionToEvaluate = '';

const operators = {
    '+': 1, '-': 1,
    '*': 2, '/': 2, '%': 2,
    '^': 3
};

const isOperator = (token) => operators.hasOwnProperty(token);

const tokenize = (expr) => {
    const tokens = [];
    let number = "";
    let i = 0;

    while (i < expr.length) {
        const char = expr[i];

        if (!isNaN(char) || char === '.') {
            number += char;
        } else {
            if (number) {
                tokens.push(number);
                number = "";
            }

            if (/[a-zA-Z]/.test(char)) {
                let func = "";
                while (i < expr.length && /[a-zA-Z]/.test(expr[i])) {
                    func += expr[i];
                    i++;
                }
                tokens.push(func);
                continue;
            }

            if (char.trim()) {
                tokens.push(char);
            }
        }
        i++;
    }
    if (number) tokens.push(number);
    return tokens;
};

const infixToPostfix = (expr) => {
    const stack = new Stack();
    const postfix = [];
    const tokens = tokenize(expr);

    tokens.forEach(token => {
        if (!isNaN(token)) {
            postfix.push(token);
        } else if (token === '(') {
            stack.push(token);
        } else if (token === ')') {
            while (!stack.isEmpty() && stack.peek() !== '(') {
                postfix.push(stack.pop());
            }
            stack.pop();
        } else if (isOperator(token)) {
            while (!stack.isEmpty() && isOperator(stack.peek()) && operators[token] <= operators[stack.peek()]) {
                postfix.push(stack.pop());
            }
            stack.push(token);
        } else { // Function
            stack.push(token);
        }
    });

    while (!stack.isEmpty()) {
        postfix.push(stack.pop());
    }
    return postfix;
};

const factorial = (n) => {
    if (n < 0) throw new Error("Invalid Input");
    if (n === 0 || n === 1) return 1;
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return res;
};

const evaluatePostfix = (postfix) => {
    const stack = new Stack();

    postfix.forEach(token => {
        if (!isNaN(token)) {
            stack.push(parseFloat(token));
        } else if (isOperator(token)) {
            const b = stack.pop();
            const a = stack.pop();
            switch (token) {
                case '+': stack.push(a + b); break;
                case '-': stack.push(a - b); break;
                case '*': stack.push(a * b); break;
                case '/': if (b === 0) throw new Error("Div/0"); stack.push(a / b); break;
                case '%': stack.push(a % b); break;
                case '^': stack.push(Math.pow(a, b)); break;
            }
        } else { // Functions
            const a = stack.pop();
            switch (token) {
                case 'sin': stack.push(Math.sin(a * Math.PI / 180)); break;
                case 'cos': stack.push(Math.cos(a * Math.PI / 180)); break;
                case 'tan': stack.push(Math.tan(a * Math.PI / 180)); break;
                case 'log': stack.push(Math.log10(a)); break;
                case 'ln': stack.push(Math.log(a)); break;
                case 'sqrt': stack.push(Math.sqrt(a)); break;
                case 'fact': stack.push(factorial(Math.floor(a))); break;
            }
        }
    });
    return stack.pop();
};

const updateUI = () => {
    display.textContent = displayContent;
    historyDisplay.textContent = expressionToEvaluate;
};

document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
        const num = btn.dataset.num;
        const op = btn.dataset.op;
        const func = btn.dataset.func;
        const action = btn.dataset.action;

        if (num !== undefined) {
            if (displayContent === '0' || displayContent === 'Error' || displayContent === 'Div/0') {
                displayContent = num;
            } else {
                displayContent += num;
            }
            expressionToEvaluate += num;
        } else if (op !== undefined) {
            expressionToEvaluate += ` ${op} `;
            displayContent = '0';
        } else if (func !== undefined) {
            expressionToEvaluate += `${func}(`;
            displayContent = '0';
        } else if (action === 'bracket-open') {
            expressionToEvaluate += '(';
            displayContent = '0';
        } else if (action === 'bracket-close') {
            expressionToEvaluate += ')';
            displayContent = '0';
        } else if (action === 'all-clear') {
            displayContent = '0';
            expressionToEvaluate = '';
            historyDisplay.textContent = '';
        } else if (action === 'clear') {
            displayContent = displayContent.length > 1 ? displayContent.slice(0, -1) : '0';
            expressionToEvaluate = expressionToEvaluate.slice(0, -1);
        } else if (action === 'calculate') {
            try {
                // Pre-process for implicit multiplication before brackets/functions if needed
                // But for now follow CLI logic strictly
                const postfix = infixToPostfix(expressionToEvaluate);
                const result = evaluatePostfix(postfix);
                const formatted = Number.isInteger(result) ? result : parseFloat(result.toFixed(8));
                historyDisplay.textContent = expressionToEvaluate + ' =';
                displayContent = formatted.toString();
                expressionToEvaluate = formatted.toString();
            } catch (e) {
                displayContent = e.message === "Div/0" ? "Div/0" : "Error";
                console.error(e);
            }
        }
        updateUI();
    });
});
