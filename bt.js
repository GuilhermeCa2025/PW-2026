// Esta função esconde ou mostra o campo 'altura' dependendo da forma
function mudarFormulario() {
    let forma = document.getElementById('forma').value;
    let campoAltura = document.getElementById('altura');

    if (forma === "quadrado") {
        campoAltura.style.display = "none"; // Quadrado só precisa de um lado
    } else {
        campoAltura.style.display = "block"; // Retângulo e Triângulo precisam de dois
    }
}

function calcularArea() {
    let forma = document.getElementById('forma').value;
    let b = parseFloat(document.getElementById('base').value);
    let h = parseFloat(document.getElementById('altura').value);
    let resultadoDiv = document.getElementById('resultado');
    let area = 0;

    if (forma === "quadrado") {
        area = b * b; // Lado vezes lado
    } else if (forma === "retangulo") {
        area = b * h; // Base vezes altura
    } else if (forma === "triangulo") {
        area = (b * h) / 2; // (Base vezes altura) dividido por 2
    }

    if (isNaN(area)) {
        resultadoDiv.innerHTML = "Preencha os valores!";
    } else {
        resultadoDiv.innerHTML = "Área: " + area.toFixed(2);
    }
}