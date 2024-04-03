const inputs = document.getElementsByTagName("input"),
    colorFinal = document.querySelector('.colorFinal'),
    codigoColor = document.querySelector('.codigoColor');

let color = () => {
    let red = inputs[0].value,
        green = inputs[1].value,
        blue = inputs[2].value,
        colorMostrar = `rgb(${red}, ${green}, ${blue})`;
    colorFinal.style.backgroundColor = colorMostrar;
    codigoColor.textContent = colorMostrar;
};

inputs[0].addEventListener("input", color);
inputs[1].addEventListener("input", color);
inputs[2].addEventListener("input", color);

color();