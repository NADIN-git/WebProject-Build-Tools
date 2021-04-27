import "./styles/main.scss";
import { startTimer } from "./funcTimer.js";
import { handleCalcDates } from "./funcCalcDates.js";

const mySwitch = document.getElementById("calcDiv");
mySwitch.style.display = "none";
const dateCalcForm = document.getElementById("datecalc");
dateCalcForm.addEventListener("submit", handleCalcDates);

const timeStart = document.getElementById("timeTask");
const timeShow = document.getElementById("timeShow");
const timeStop = document.getElementById("timeStop");

timeStart.addEventListener('submit', startTimer);

