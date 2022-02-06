import { calculate } from './persistence/calculator.js';
import { convertToKg, convertToMeter } from './persistence/converter.js';

// From calculator.js
const calcBtn = document.getElementById("calcBtn");
calcBtn.onclick = calculate;

// From converter.js
const toKgBtn = document.getElementById("to-kg");
toKgBtn.onclick = convertToKg;

const toMeterBtn = document.getElementById("to-m");
toMeterBtn.onclick = convertToMeter;