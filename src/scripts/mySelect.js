let isSelectOpen = false;

function openSelect() {
    const enableImage = document.querySelector(".svg_enable");
    const disableImage = document.querySelector(".svg_disable");
    const selectContainer = document.querySelector(".select_container");
    if (!isSelectOpen) {
        disableImage.style.display = "none"
        enableImage.style.display = "block";
        selectContainer.style.display = "block";
    } else {
        disableImage.style.display = "block"
        enableImage.style.display = "none";
        selectContainer.style.display = "none";
    }
    isSelectOpen = !isSelectOpen;
}
function setActiveSelect(){
    const mySelectInput = document.getElementById("myselectInput");
    mySelectInput.innerHTML = event.currentTarget.querySelector('.item_text').innerHTML;
}