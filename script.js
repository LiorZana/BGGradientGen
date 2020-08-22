var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randButton1 = document.getElementById("randColor1");
var randButton2 = document.getElementById("randColor2");
var randBoth = document.getElementById("randBoth");

function setGradient() {
    body.style.background = 
    "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
};

css.textContent = 
"linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0))";

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


//Random color buttons:
function getRandomColor() 
{
    var color = "";
    for(var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    return "#" + color;
}

function randomizeColor() {
    (this === randButton1 ? color1 : color2).value = getRandomColor();
    setGradient();
}

randButton1.addEventListener("click", randomizeColor);
randButton2.addEventListener("click", randomizeColor);

randBoth.addEventListener("click", function() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    setGradient();
});

