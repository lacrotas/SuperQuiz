const modalWindow = document.getElementById("modalContact");

const modalFirst = document.getElementById("modalFirst");
const modalSecond = document.getElementById("modalSecond");

let isModalActive = false;
let currentAsnwer = "";

function openModalWindow() {
    if (isBurgerOpen) {
        openBurger();
    }
    if (isModalActive) {
        modalWindow.style.display = "none";
        isModalActive = !isModalActive;
        document.body.style.overflow = "auto";
    } else {
        modalWindow.style.display = "block";
        modalFirst.style.display = "block";
        modalSecond.style.display = "none";
        isModalActive = !isModalActive;
        document.body.style.overflow = "hidden";
    }
}

function setActive() {
    if (currentAsnwer != event.currentTarget && currentAsnwer != "") {
        currentAsnwer.className = "container_item-radio";
        currentAsnwer = event.currentTarget;
    } else {
        currentAsnwer = event.currentTarget;
    }
    if (event.currentTarget.className == "container_item-radio") {
        event.currentTarget.className = "active container_item-radio";
    } else {
        event.currentTarget.className = "container_item-radio";
    }
}

function modalContion() {
    if (formValidation()) {
        modalFirst.style.display = "none";
        modalSecond.style.display = "block";
    }
}

window.onload = () => {
    modalWindow.style.display = "none";
}