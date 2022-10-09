const btnKick = document.getElementById("btn-chutar");
const btnRestart = document.getElementById("reiniciar");
const attempts = document.getElementById("tentativas");
const message = document.getElementById("message");
const result = document.getElementById("resultado");

const containerImg = document.getElementById("containerImg");

// const secretNumber = Math.floor(Math.random() * 11);
const secretNumber = 0;
let counterAttempts = 0;
let showAttempts = 3;

const numberOfAttempts = () => {
    setTimeout(() => {
        showAttempts = showAttempts - 1;
        attempts.innerText = `${showAttempts}`;

        if (showAttempts === 0) {
            result.innerText = `Você atingiu o limite de tentativas!`;
        }
    }, 1000);
};

const timeToClear = () => {
    setTimeout(() => {
        const inputValue = (document.getElementById("valor").value = "");
        result.innerText = "";
    }, 1000);
};

const showCongratulationsOnScreen = () => {
    const audio = document.querySelector("audio");

    result.innerText = `Parabéns, você acertou!`;

    const body = document.body;

    body.classList.toggle("showGifOnBody");

    audio.play();
};

btnKick.addEventListener("click", (event) => {
    event.preventDefault();

    const inputValue = document.getElementById("valor").value;
    const numericValue = parseInt(inputValue);

    if (numericValue || numericValue === 0) {
        if (counterAttempts < 3) {
            if (numericValue === secretNumber) {
                showCongratulationsOnScreen();
            } else if (numericValue > 10 || numericValue < 0) {
                result.innerText = `Ops, digite um número entre 0 e 10`;
            } else {
                result.innerText = `Você errou!`;
                counterAttempts++;

                const conditionNumber =
                    secretNumber > numericValue
                        ? (message.innerText = `O número sorteado é maior do que ${numericValue}`)
                        : (message.innerText = `O número sorteado é menor do que ${numericValue}`);

                timeToClear();
                numberOfAttempts();

                console.log(secretNumber);
            }
        }
    } else {
        result.innerText = `Digite um número!`;
        timeToClear();
    }
});

btnRestart.addEventListener("click", () => {
    window.location.reload();
});
