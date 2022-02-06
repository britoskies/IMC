import { throwAlert } from "../components/alert.js";

const kg = document.getElementById("kg");
const m = document.getElementById("m");
let imc = document.getElementById("imc");
let lectura = document.getElementById("lectura");

const calculate = () => {
    if (kg.value === "" || m.value === "" || isNaN(kg.value) || isNaN(m.value)) {
        return throwAlert("Ingresa un peso y altura válidos!");
    }

    let imcx = (kg.value / (m.value * m.value));
    const remainder = imcx.toFixed(2);
    imc.innerHTML = remainder;

    if (imcx < 18.5) { lectura.innerHTML = "Peso inferior al normal"; }
    else if (imcx >= 18.5 && imcx <= 24.9) { lectura.innerHTML = "Peso normal"; }
    else if (imcx >= 25 && imcx <= 29.9) { lectura.innerHTML = "Peso superior al normal"; }
    else if (imcx > 30) { lectura.innerHTML = "Obesidad"; }
};

export { calculate };
