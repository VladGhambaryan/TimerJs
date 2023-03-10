const timerElement = document.querySelector('#timer');
const inputElement = document.querySelector('#input');
const startButton = document.querySelector('#startBtn');

let timeInSeconds = 0;
let intervalId;

const getTimeComponents = (timeInSeconds) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;
  return {hours, minutes, seconds};
};

const formatTime = (time) => {
  const {hours, minutes, seconds} = time;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const updateTimer = () => {
  const timeComponents = getTimeComponents(timeInSeconds);
  const formattedTime = formatTime(timeComponents);
  timerElement.textContent = formattedTime;
};

const startTimer = () => {
  clearInterval(intervalId);
  timeInSeconds = Number(inputElement.value);
  updateTimer();
  intervalId = setInterval(() => {
    timeInSeconds--;
    updateTimer();
    if (timeInSeconds <= 0) {
      clearInterval(intervalId);
    }
  }, 1000);
};

startButton.addEventListener('click', startTimer);