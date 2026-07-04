const ambient = document.getElementById("ambient");

const images = [

    "img/rabbit.png",
    "img/heart.png",
    "img/cross.png"

];

function spawnSymbol(){

    const img = document.createElement("img");

    img.style.rotate = `${Math.random() * 360}deg`;

    img.src = images[Math.floor(Math.random()*images.length)];

    img.className = "ambient-symbol";

    const size = 50 + Math.random()*70;

    const opacity = 0.05 + Math.random() * 0.18;

    const duration = 10000 + Math.random()*8000;

    img.style.width = size + "px";

    img.style.left = Math.random()*95 + "%";

    img.style.top = Math.random()*90 + "%";

    img.style.opacity = opacity;

    img.style.animationDuration = duration + "ms";

    ambient.appendChild(img);

    setTimeout(()=>{

        img.remove();

    },duration);

}

for(let i=0;i<8;i++){

    setTimeout(spawnSymbol,i*600);

}

setInterval(spawnSymbol,1800);

/* ===========================
        LIVING WORDS
=========================== */

const words = document.querySelectorAll(".alive-word");

function animateWords(){

    words.forEach(word => word.classList.remove("alive"));

    const shuffled = [...words].sort(() => Math.random() - 0.5);

    const count = Math.floor(Math.random() * 3) + 1;

    for(let i = 0; i < count; i++){

        shuffled[i].classList.add("alive");

    }

    setTimeout(() => {

        shuffled.forEach(word => word.classList.remove("alive"));

    }, 700);

}

function randomGlow(){

    animateWords();

    const delay = 1200 + Math.random() * 2500;

    setTimeout(randomGlow, delay);

}

randomGlow();

const girl = document.getElementById("girl-wrapper");

window.addEventListener("scroll",()=>{

    const progress=Math.min(window.scrollY/window.innerHeight,1);

    girl.style.opacity=1-progress*0.55;

    girl.style.filter=`blur(${progress*2.5}px)`;

});

const content = document.getElementById("content");

window.addEventListener("scroll", () => {

    const progress = Math.min(window.scrollY / window.innerHeight, 1);

    content.style.opacity = 1 - progress * 1.2;

    content.style.filter =
        `blur(${progress * 12}px)`;

    content.style.transform =
        `translateY(calc(-50% - ${progress * 120}px))`;

});

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(section=>{

        const rect = section.getBoundingClientRect();

        const start = window.innerHeight * 0.8;
        const end = window.innerHeight * 0.2;

        let progress = (start - rect.top) / (start - end);
        progress = Math.max(0, Math.min(progress, 1));

        // Появление
        let opacity = 0.15 + progress * 0.85;
        let blur = 12 - progress * 12;
        let translate = 80 - progress * 80;

        // Уход (аналогично DEADLY CARROT)
        if(rect.bottom < window.innerHeight * 0.6){

            const leave =
                Math.min(
                    (window.innerHeight * 0.6 - rect.bottom) /
                    (window.innerHeight * 0.6),
                    1
                );

            opacity *= (1 - leave);

            blur += leave * 12;

            translate -= leave * 80;

        }

        section.style.opacity = opacity;

        section.style.filter = `blur(${blur}px)`;

        section.style.transform =
            `translateY(${translate}px)`;

    });

}

window.addEventListener("scroll", revealSections);

revealSections();

