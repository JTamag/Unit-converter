function convertUnits(){
    const value = parseFloat(document.getElementById('display1').value);
    const fromUnit = document.getElementById('unit-select1').value;
    const toUnit = document.getElementById('unit-select2').value;

    if (isNaN(value)) {
        document.getElementById('display2').value = "Invalid input";
        return;
    }

    const toMeters = {
        'Meters': 1,
        'Kilometers': 1000,
        'Miles': 1609.34,
        'Feet': 0.3048,
        'Inches': 0.0254,
        'Yards': 0.9144
    };

    const valueInMeters = value * toMeters[fromUnit];
    const result = valueInMeters / toMeters[toUnit];

    document.getElementById('display1').value = value+ ' ' + fromUnit;
    document.getElementById('display2').value = result+ ' ' + toUnit;   
}