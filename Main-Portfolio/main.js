const pre = document.querySelector("pre");

document.addEventListener("mousemove", (e) => {
    rotateElement(e, pre);
});

function rotateElement(event, element) {
    // get mouse position
    const x = event.clientX;
    const y = event.clientY;
    // console.log(x, y)

    // find the middle
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;
    // console.log(middleX, middleY)

    // get offset from middle as a percentage
    // and tone it down a little
    const offsetX = ((x - middleX) / middleX) * 45;
    const offsetY = ((y - middleY) / middleY) * 45;
    // console.log(offsetX, offsetY);

    // set rotation
    element.style.setProperty("--rotateX", offsetX + "deg");
    element.style.setProperty("--rotateY", -1 * offsetY + "deg");
}


// click event listener to the Skadoosh button
const button1 = document.getElementById('SkadooshButton');
button1.addEventListener('click', function () {
    alert('Ha Ha! This Button Does Nothing ........... Currently');
});

// click event listener to the Skadoosh button
const button2 = document.getElementById('contact-me');
button2.addEventListener('click', function () {
    alert('Ya! You Can Select From Given Options');
});
