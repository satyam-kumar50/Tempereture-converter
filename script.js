const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');
const resetButton = document.getElementById('reset-button');

function roundNumber(number) {
    return Math.round(number * 100) / 100;
}

celsiusInput.addEventListener('input', () => {
    const celsius = parseFloat(celsiusInput.value);
    if (!isNaN(celsius)) {
        fahrenheitInput.value = roundNumber(celsius * 9/5 + 32);
        kelvinInput.value = roundNumber(celsius + 273.15);
    }
});

fahrenheitInput.addEventListener('input', () => {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    if (!isNaN(fahrenheit)) {
        celsiusInput.value = roundNumber((fahrenheit - 32) * 5/9);
        kelvinInput.value = roundNumber((fahrenheit - 32) * 5/9 + 273.15);
    }
});

kelvinInput.addEventListener('input', () => {
    const kelvin = parseFloat(kelvinInput.value);
    if (!isNaN(kelvin)) {
        celsiusInput.value = roundNumber(kelvin - 273.15);
        fahrenheitInput.value = roundNumber((kelvin - 273.15) * 9/5 + 32);
    }
});

resetButton.addEventListener('click', () => {
    celsiusInput.value = '';
    fahrenheitInput.value = '';
    kelvinInput.value = '';
});
