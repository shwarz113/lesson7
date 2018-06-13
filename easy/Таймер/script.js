window.addEventListener("DOMContentLoaded", function() {
	let timer = document.getElementsByClassName("timer")[0],
		liveTimer = setTimeout(live, 1000);

	function live() {
		let now = new Date()
		let hours = minutes = seconds = "0";
		(now.getHours() < 10)?hours += now.getHours():hours = now.getHours();
		(now.getMinutes() < 10)?minutes += now.getMinutes():minutes = now.getMinutes();
		(now.getSeconds() < 10)?seconds += now.getSeconds():seconds = now.getSeconds();
		timer.textContent = hours + ":" + minutes + ":" + seconds;
		liveTimer = setTimeout(live, 1000);
	}
});