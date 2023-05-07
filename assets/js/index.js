const btnKick = document.getElementById("btn-kick");
const btnRestart = document.getElementById("restart");
const attempts = document.getElementById("attempts");
const message = document.getElementById("message");
const result = document.getElementById("result");

const secretNumber = Math.floor(Math.random() * 11);
let counterAttempts = 0;
let showAttempts = 3;

const numberOfAttempts = () => {
    setTimeout(() => {
        showAttempts = showAttempts - 1;
        attempts.innerText = `${showAttempts}`;

        if (showAttempts === 0) {
            result.innerText = `Você atingiu o limite de tentativas!`;
            message.innerText = `O número sorteado é ${secretNumber}`;
        }
    }, 1000);
};

const timeToClean = () => {
    setTimeout(() => {
        document.getElementById("value").value = "";
        result.innerText = "";
    }, 1000);
};

const showCongratulationsOnScreen = () => {
    document.body.classList.toggle("showGifOnBody");
    document.querySelector("audio").play();
    result.innerText = `Parabéns, você acertou!`;
};

const checkNumber = (numericValue) => {
    if (counterAttempts < 3) {
        if (numericValue === secretNumber) {
            showCongratulationsOnScreen();
        } else if (numericValue > 10 || numericValue < 0) {
            result.innerText = `Ops, digite um número entre 0 e 10`;
        } else {
            result.innerText = `Você errou!`;
            counterAttempts++;

            message.innerText = `O número sorteado é ${
                secretNumber > numericValue ? "maior" : "menor"
            } do que ${numericValue}`;

            timeToClean();
            numberOfAttempts();
        }
    }
};

btnKick.addEventListener("click", (e) => {
    e.preventDefault();

    const numericValue = parseInt(document.getElementById("value").value);

    if (numericValue || numericValue === 0) {
        checkNumber(numericValue);
    } else {
        result.innerText = `Digite um número!`;
        timeToClean();
    }
});

btnRestart.addEventListener("click", () => {
    window.location.reload();
});
