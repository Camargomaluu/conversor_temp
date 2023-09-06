function converterTemperatura() {
    const celsius = parseFloat(document.getElementById("celsius").value);

    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;

    document.getElementById("resultadoFahrenheit").innerText = `Fahrenheit: ${fahrenheit.toFixed(2)}`;
    document.getElementById("resultadoKelvin").innerText = `Kelvin: ${kelvin.toFixed(2)}`;
}                              