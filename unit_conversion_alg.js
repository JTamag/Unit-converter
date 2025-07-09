let unitType = "Length";
function convertUnits(){
    const value = parseFloat(document.getElementById('display1').value);
    const fromUnit = document.getElementById('unit-select1').value;
    const toUnit = document.getElementById('unit-select2').value;

    if (isNaN(value)) {
        document.getElementById('display2').value = "Invalid input";
        return;
    }
    let result;
    if(unitType === "Length"){
        const toMeters = {
            'Millimetres': 0.001,
            'Centimeters': 0.01,
            'Meters': 1,
            'Kilometers': 1000,
            'Miles': 1609.34,
            'Feet': 0.3048,
            'Inches': 0.0254,
            'Yards': 0.9144
        };

        const valueInMeters = value * toMeters[fromUnit];
        result = valueInMeters / toMeters[toUnit];
    
    }
    if(unitType === "Weight"){
        const toGrams = {
            'Milligrams': 0.001,
            'Grams': 1,
            'Kilograms': 1000,
            'Metric Tons': 1000000,
            'Pounds': 453.592,
            'Ounces': 28.3495
        };

        const valueInGrams = value * toGrams[fromUnit];
        result = valueInGrams / toGrams[toUnit];
    }
    if(unitType === "Temperature"){
        if (fromUnit === toUnit) {
            result = value; 
        } 
        let valueInKelvin;
        if(fromUnit === 'Celsius') {
            valueInKelvin = value + 273.15;
        }else if(fromUnit === 'Fahrenheit') {
            valueInKelvin = (value - 32) * 5/9 + 273.15;
        } else if(fromUnit === 'Kelvin') {
            valueInKelvin = value;
        }
        if(toUnit === 'Celsius') {
            result = valueInKelvin - 273.15;
        } else if(toUnit === 'Fahrenheit') {
            result = (valueInKelvin - 273.15) * 9/5 + 32;
        } else if(toUnit === 'Kelvin') {
            result = valueInKelvin;
        }
    }
    document.getElementById('display1').value = value+ ' ' + fromUnit;
    document.getElementById('display2').value = result+ ' ' + toUnit; 
}
function Weight(){
    unitType = "Weight";
    document.getElementById('unit-select1').innerHTML = `
        <option value="Milligrams">Milligrams</option>;
        <option value="Grams">Grams</option>;
        <option value="Kilograms">Kilograms</option>;
        <option value="Metric Tons">Metric Tons</option>;
        <option value="Pounds">Pounds</option>;
        <option value="Ounces">Ounces</option>;
        `;
    document.getElementById('unit-select2').innerHTML = `
        <option value="Milligrams">Milligrams</option>;
        <option value="Grams">Grams</option>;
        <option value="Kilograms">Kilograms</option>;
        <option value="Metric Tons">Metric Tons</option>;
        <option value="Pounds">Pounds</option>;
        <option value="Ounces">Ounces</option>;
        `;
}
function Length(){
    unitType = "Length";
    document.getElementById('unit-select1').innerHTML = `
        <option value="Millimetres">Millimetres</option>;
        <option value="Centimeters">Centimeters</option>;
        <option value="Meters">Meters</option>;
        <option value="Kilometers">Kilometers</option>;
        <option value="Miles">Miles</option>;
        <option value="Feet">Feet</option>;
        <option value="Inches">Inches</option>;
        <option value="Yards">Yards</option>;
        `;
    document.getElementById('unit-select2').innerHTML = `
        <option value="Millimetres">Millimetres</option>;
        <option value="Centimeters">Centimeters</option>;
        <option value="Meters">Meters</option>;
        <option value="Kilometers">Kilometers</option>;
        <option value="Miles">Miles</option>;
        <option value="Feet">Feet</option>;
        <option value="Inches">Inches</option>;
        <option value="Yards">Yards</option>;
        `;
}
function Temperature(){
    unitType = "Temperature";
    document.getElementById('unit-select1').innerHTML = `
        <option value="Celsius">Celsius</option>;
        <option value="Fahrenheit">Fahrenheit</option>;
        <option value="Kelvin">Kelvin</option>;
        `;
    document.getElementById('unit-select2').innerHTML = `
        <option value="Celsius">Celsius</option>;
        <option value="Fahrenheit">Fahrenheit</option>;
        <option value="Kelvin">Kelvin</option>;
        `;
}