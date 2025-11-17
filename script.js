const heartEmojis = ['❤️', '💙', '💜', '💛', '💚', '🧡', '🤎', '🖤', '🤍', '💖', '💘', '💝'];

function openLetter() {
    document.getElementById("letter").classList.add("show");
    document.getElementById("mailWrapper").classList.add("hide");
    startContinuousHeartRain();
}

function startContinuousHeartRain() {
    setInterval(() => {
        createHeart();
    }, 200);
}

function createHeart() {
    const heartContainer = document.getElementById("heartRain");
    const heart = document.createElement("span");
    heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    heartContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}