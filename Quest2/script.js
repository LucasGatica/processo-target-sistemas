function fibonacciSequence(n) {
    const sequence = [0, 1];
    while (sequence[sequence.length - 1] < n) {
        const nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(nextValue);
    }
    return sequence;
}

function isInFibonacciSequence(number, sequence) {
    return sequence.includes(number);
}

function checkFibonacci() {
    const number = parseInt(document.getElementById('inputNumber').value);
    const sequence = fibonacciSequence(number);
    const resultElement = document.getElementById('result');

    if (isInFibonacciSequence(number, sequence)) {
        resultElement.innerHTML = `O número ${number} <strong>pertence</strong> à sequência de Fibonacci.`;
    } else {
        resultElement.innerHTML = `O número ${number} <strong>não pertence</strong> à sequência de Fibonacci.`;
    }
}