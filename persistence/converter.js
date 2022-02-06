import { throwAlert } from "../components/alert.js";

const kg = document.getElementById("kg-converted");
const m = document.getElementById("m-converted");
const lb = document.getElementById("lb-converter");
const foot = document.getElementById("f-converter");

const convertToKg = () => {
    if (lb.value === "" || isNaN(lb.value)) {
        return throwAlert("Porfavor, introduzca un número válido!");
    }

    const result = lb.value / 2.2046;
    const remainder = result.toFixed(1);
    kg.innerHTML = remainder;
}

const convertToMeter = () => { 
    if (foot.value === "" || isNaN(foot.value)) {
        return throwAlert("Porfavor, introduzca un número válido!");
    }

    const result = foot.value * 0.3048;
    const remainder = result.toFixed(2);
    m.innerHTML = remainder;
}

export { convertToKg, convertToMeter };