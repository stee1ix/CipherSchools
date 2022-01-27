const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const timer = document.getElementById('timer');

let milliseconds = 0,
	seconds = 0,
	minutes = 0,
	minutesString = '00',
	secondsString = '00';

timer.innerHTML = `${minutesString}:${secondsString}`;

function increment() {
	milliseconds += 1000;
	seconds = milliseconds / 1000;
	minutes = Math.floor(seconds / 60);
	console.log(seconds);
}

function makeStrings() {
	minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
	secondsString = seconds % 60 < 10 ? `0${seconds % 60}` : `${seconds % 60}`;
}

let interval;

function startTimer() {
	start.disabled = true;
	interval = setInterval(() => {
		increment();
		makeStrings();

		timer.innerHTML = `${minutesString}:${secondsString}`;
	}, 1000);
}

function stopTimer() {
	clearInterval(interval);
	start.disabled = false;
}

function resetTimer() {
	clearInterval(interval);

	milliseconds = 0;
	seconds = 0;
	minutes = 0;
	minutesString = '00';
	secondsString = '00';

	timer.innerHTML = `${minutesString}:${secondsString}`;
	start.disabled = false;
}

start.onclick = startTimer;
stop.onclick = stopTimer;
reset.onclick = resetTimer;
