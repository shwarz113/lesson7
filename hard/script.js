let btn = document.getElementsByTagName("button")[0],
	circle = document.getElementsByClassName("circle")[0];

btn.addEventListener("click", function() {
	animate(function(timePassed) {
        circle.style.left = timePassed / 10 + 'px';
      }, 2000);
	animate(function(timePassed) {
        circle.style.top = timePassed / 10 + 'px';
      }, 2000);
	animate(function(timePassed) {
        circle.style.backgroundColor = "green";
        circle.style.height = 200 + timePassed / 5 + "px";
        circle.style.width = 200 + timePassed / 5 + "px";
      }, 1000);
});

function animate(draw, duration) {
      var start = performance.now();

      requestAnimationFrame(function animate(time) {
        // определить, сколько прошло времени с начала анимации
        var timePassed = time - start;

        console.log(time, start)
          // возможно небольшое превышение времени, в этом случае зафиксировать конец
        if (timePassed > duration) timePassed = duration;

        // нарисовать состояние анимации в момент timePassed
        draw(timePassed);

        // если время анимации не закончилось - запланировать ещё кадр
        if (timePassed < duration) {
          requestAnimationFrame(animate);
        }

      });
};