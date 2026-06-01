const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");
const container = document.querySelector(".container");

noBtn.addEventListener("mouseover", () => {

    const maxX =
        container.clientWidth - noBtn.offsetWidth;

    const maxY =
        container.clientHeight - noBtn.offsetHeight;

    const newX =
        Math.floor(Math.random() * maxX);

    const newY =
        Math.floor(Math.random() * maxY);

    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;

});

yesBtn.addEventListener("click", () => {

    document.querySelector(".gif").style.display = "none";

    document.querySelector("h2").style.display = "none";

    yesBtn.style.display = "none";

    noBtn.style.display = "none";

    result.style.display = "block";

});
