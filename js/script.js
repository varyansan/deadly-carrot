const loadingScreen = document.getElementById("loading-screen");
const loadingText = document.getElementById("loading-text");
const logo = document.getElementById("logo-wrapper");
const subtitle = document.getElementById("subtitle");
const button = document.getElementById("enter");

let glitchBusy = false;

/* ---------- ГЛИТЧ ---------- */

function glitch(){

    if(glitchBusy) return;

    glitchBusy = true;

    logo.classList.add("glitching");

    subtitle.textContent = "NO SIGNAL";

    setTimeout(()=>{

        logo.classList.remove("glitching");

        subtitle.textContent = "OFFLINE";

        glitchBusy = false;

    },150);

}

function randomGlitch(){

    glitch();

    setTimeout(randomGlitch,3000+Math.random()*5000);

}

setTimeout(randomGlitch,2500);


/* ---------- ENTER ---------- */

button.addEventListener("click", () => {

    button.disabled = true;

    button.textContent = "CONNECTING...";

    subtitle.textContent = "CONNECTING";

    logo.classList.add("glitching");

    setTimeout(() => {

        logo.classList.remove("glitching");

    }, 180);

    setTimeout(() => {

        loadingScreen.classList.add("show");

    }, 700);

    setTimeout(() => {

        loadingText.textContent = "INITIALIZING...";

    }, 1200);

    setTimeout(() => {

        loadingText.textContent = "LOADING ASSETS...";

    }, 2200);

    setTimeout(() => {

        loadingText.textContent = "ACCESS GRANTED";

    }, 3400);

    setTimeout(() => {

        // скрываем всё интро
        document.body.style.opacity = "0";
        document.body.style.transition = "opacity .35s ease";

        setTimeout(() => {
            window.location.href = "home.html";
        }, 350);

    }, 4700);

});