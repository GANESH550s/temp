document.getElementById('convert-btn').addEventListener('click', function() {
    let temp = parseFloat(document.getElementById('temp-input').value);
    let fromUnit = document.getElementById('from-unit').value;
    let toUnit = document.getElementById('to-unit').value;

    let result;

    if (fromUnit === 'Celsius') {
        if (toUnit === 'Celsius') {
            result = temp;
        } else if (toUnit === 'Fahrenheit') {
            result = (temp * 9/5) + 32;
        } else if (toUnit === 'Kelvin') {
            result = temp + 273.15;
        }
    } else if (fromUnit === 'Fahrenheit') {
        if (toUnit === 'Celsius') {
            result = (temp - 32) * 5/9;
        } else if (toUnit === 'Fahrenheit') {
            result = temp;
        } else if (toUnit === 'Kelvin') {
            result = (temp - 32) * 5/9 + 273.15;
        }
    } else if (fromUnit === 'Kelvin') {
        if (toUnit === 'Celsius') {
            result = temp - 273.15;
        } else if (toUnit === 'Fahrenheit') {
            result = (temp - 273.15) * 9/5 + 32;
        } else if (toUnit === 'Kelvin') {
            result = temp;
        }
    }

    document.getElementById('result-value').textContent = result.toFixed(2);
});
