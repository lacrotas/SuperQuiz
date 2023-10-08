const headerModal = document.getElementById("burger");

let isBurgerOpen = false;

function openBurger() {
    if (!isBurgerOpen) {
        headerModal.style.display = "flex";
        document.body.style.overflow = "hidden";
        event.currentTarget.src ="./assets/images/burgerActive.png";
    }else{
        headerModal.style.display = "none";
        document.body.style.overflow = "auto";
        event.currentTarget.src ="./assets/images/burger.png";
    }
    isBurgerOpen =!isBurgerOpen;
}