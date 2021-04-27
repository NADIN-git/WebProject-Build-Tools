import {
    formatError
} from "./utils.js";

export function startTimer(event) {
    event.preventDefault();
    let timeInput = event.target.timeInput;
    timeInput = parseInt(timeInput.value);
    if (timeInput > 0) {
        const timer = setInterval(function () {
            let seconds = timeInput % 60; // Получаем секунды
            let minuts = timeInput / 60 % 60; // Получаем минуты
            let hour = timeInput / 60 / 60 % 60; // Получаем часы
            let timeConv = `${Math.trunc(hour)}:${Math.trunc(minuts)}:${seconds}`;
            timeShow.innerHTML = timeConv;
            --timeInput; // Уменьшаем таймер
            if (timeInput == -1) {
                clearInterval(timer);
                //StartAudio.play();
                ///let StartAudio = new Howl();
                //Howl.src = 'sound.mp3';
                let audio = new Audio(); // Создаём новый элемент Audio
                audio.src = './src/notification.mp3'; // Указываем путь к звуку "клика"
                audio.autoplay = true; // Автоматически запускаем
                // Таймер удаляется
                clearInterval(timeInput);
                timeShow.innerHTML = formatError("Время вышло");
            }
        }, 1000);
    } else timeShow.innerHTML = formatError("Для запуска таймера определите интервал времени");
}



