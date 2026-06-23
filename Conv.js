function convert() {
  const value = parseFloat(document.getElementById("inputValue").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  let result = 0;

  let valueInMeters;
  switch (fromUnit) {
    case "km": valueInMeters = value * 1000; break;
    case "cm": valueInMeters = value / 100; break;
    default: valueInMeters = value;
  }

  switch (toUnit) {
    case "km": result = valueInMeters / 1000; break;
    case "cm": result = valueInMeters * 100; break;
    default: result = valueInMeters;
  }

  document.getElementById("result").textContent = 
    `${value} ${fromUnit} = ${result} ${toUnit}`;
}
