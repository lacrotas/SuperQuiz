const inputThirdName = document.getElementById("third_name");
const inputThirdNameBlock = document.querySelector(".grid_input-thirdname");

function formValidation() {
    if (inputThirdName.value == "") {
        inputThirdNameBlock.className = "grid_container grid_input-thirdname warning";
        return false;
    }
    inputThirdNameBlock.className = "grid_container grid_input-thirdname";
    return true;
}

function setTextOfFile(value) {
    const strArr = value.split("\\");
    document.getElementById("container_file-text").innerHTML = strArr[strArr.length - 1];
}