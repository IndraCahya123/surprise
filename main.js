function main() {

    const firstQuestion = document.querySelector(".first-question");
    const firstAnswer = document.querySelector(".nama");
    const firstBtn = document.querySelector(".nama-btn");
    
    const secondQuestion = document.querySelector(".second-question");
    const secondAnswer = document.querySelector(".kesukaan1");
    const secondBtn = document.querySelector(".kesukaan1-btn");

    const thirdQuestion = document.querySelector(".third-question");
    const thirdAnswer = document.querySelector(".kesukaan2");
    const thirdBtn = document.querySelector(".kesukaan2-btn");

    const wishing = document.querySelector(".wish-box");

    firstBtn.addEventListener("click", () => {
        const nama = firstAnswer.value.toLowerCase();
        
        if (nama === "adel" || nama === "adelia" || nama === "adelia pramitha") {
            firstQuestion.classList.toggle("non-active");
            secondQuestion.classList.toggle("non-active");
        } else {
            wrongAnswer("yaahh bukan adel ini :(");
        }
    });

    secondBtn.addEventListener("click", () => {
        const minuman = secondAnswer.value.toLowerCase();
        
        if (minuman === "milo macchiato" || minuman === "milo machiato" || minuman === "milo machiatto") {
            secondQuestion.classList.toggle("non-active");
            thirdQuestion.classList.toggle("non-active");
        } else {
            wrongAnswer("salah jawabannya... :(");
        }
    });

    thirdBtn.addEventListener("click", () => {
        const makanan = thirdAnswer.value.toLowerCase();
        
        if (makanan === "cumi" || makanan === "mie pedes" || makanan === "seblak" || makanan === "cireng banjur" || makanan === "mie jupe") {
            thirdQuestion.classList.toggle("non-active");
            wishing.classList.toggle("non-active");
        } else {
            wrongAnswer("salah jawabannya... :(");
        }
    });


}

function wrongAnswer(message) {
    const container = document.querySelector(".container");

    container.innerHTML = `
    <h2>${message}</h2>
    <a href="./index.html" type="button">back</a>
    `;
}

main();