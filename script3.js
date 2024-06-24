const inp3 = document.querySelector(".inp3");
const btn3 = document.querySelector(".btn3");
let entity = "";

function toggleText() {
    if (inp3.value === "") {
    alert("Будь ласка, введіть текст");
    return;
    }

    if (btn3.textContent === "Приховати") {
        entity = inp3.value
    inp3.value = inp3.value.replace(/./g, "*");
    btn3.textContent = "Розкрити";
    } else {
        inp3.value = entity;
        entity = "";
    btn3.textContent = "Приховати";
    }
}

btn3.addEventListener("click", toggleText);