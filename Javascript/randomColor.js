function randomColor() {
    var R = Math.random() * (1 - 255);
    var G = Math.random() * (1 - 255);
    var B = Math.random() * (1 - 255);

    document.html.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
}
