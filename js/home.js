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