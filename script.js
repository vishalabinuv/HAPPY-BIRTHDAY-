// Password unlock

function checkPassword() {

    const password = document.getElementById("password").value;
    const correctPassword = "20.02.2026";

    if (password === correctPassword) {

        document.getElementById("password-screen").style.display = "none";
        document.getElementById("main").style.display = "block";

        startHearts();
        createFireworks();

    } else {

        document.getElementById("error").innerHTML =
        "❌ Wrong password ☹️. Try again ❤️‍🩹 . IF ANY HINT NEEDED TXT ME ";

    }

}


// Countdown

const birthday = new Date("July 31, 2026 00:00:00").getTime();

const countdown = setInterval(function () {

    const now = new Date().getTime();

    const distance = birthday - now;

    if (distance <= 0) {

        clearInterval(countdown);

        document.getElementById("countdown").innerHTML =
        "🎉 Happy Birthday Monica ❤️🎂";

        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    document.getElementById("countdown").innerHTML =
        days + " Days ❤️ " +
        hours + " Hours ❤️ " +
        minutes + " Minutes ❤️ " +
        seconds + " Seconds";

}, 1000);


// Floating Hearts

function startHearts() {

    setInterval(function () {

        let heart = document.createElement("div");

        heart.innerHTML = "❤️";
        heart.className = "heart";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (Math.random() * 20 + 20) + "px";

        document.body.appendChild(heart);

        setTimeout(function () {

            heart.remove();

        }, 5000);

    }, 300);

}


// Fireworks

function createFireworks() {

    for (let i = 0; i < 60; i++) {

        let fire = document.createElement("div");

        fire.innerHTML = "🎆";

        fire.style.position = "fixed";
        fire.style.left = Math.random() * 100 + "vw";
        fire.style.top = Math.random() * 100 + "vh";
        fire.style.fontSize = (Math.random() * 20 + 20) + "px";
        fire.style.animation = "explode 1.5s ease-out";

        document.body.appendChild(fire);

        setTimeout(function () {

            fire.remove();

        }, 1500);

    }

}
