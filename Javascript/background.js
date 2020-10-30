function backgroundChanger() {
    var R = Math.random() * (1 - 255)
    var G = Math.random() * (1 - 255)
    var B = Math.random() * (1 - 255)

    document.html.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
}
// Function to change main background color
function changeBodyBg(color){
    document.body.style.background = color;
}

// Function to change heading background color
function changeHeadingBg(color){
    document.getElementById("heading").style.background = color;
}