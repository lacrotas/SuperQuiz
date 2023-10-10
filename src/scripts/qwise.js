/* html elements */
const answerBlock = document.getElementById("answer");
const qwiseBlock = document.getElementById("qwise");
const qwiseLabel = document.getElementById("qwise_label");
const qwiseImage = document.getElementById("qwise_image");
const qwiseParagraph = document.getElementById("qwise_paragraph");
const buttonBack = document.getElementById("test_button-back");
const buttonContinion = document.getElementById("test_button-continion");
const historyBlock = document.querySelector(".container_history");

/* counter for rounds */
let currentRound = 0;
let roundsPass = 0;

/* arr with answer variation*/
let currentRoundArr = [];
let allRoundArr = [];

/* fill the array of answer */
function setCheckBoxAnswer(index) {
    if (event.currentTarget.className == "container_item-test") {
        event.currentTarget.className = "active container_item-test";
        currentRoundArr[index] = 1;
        QWISEQVESTION[currentRound].history.description = event.currentTarget.innerText;
    } else {
        event.currentTarget.className = "container_item-test";
        currentRoundArr[index] = 0;
    }
}
function setRadioAnswer(index) {
    if (event.currentTarget.className == "container_item-radio") {
        currentRoundArr[0] = index;
        QWISEQVESTION[currentRound].history.description = event.currentTarget.innerText;
    } else {
        currentRoundArr[0] = -1;
    }
    loadRadioRound();
}

/* html fill the history block */
function setHistoryBlock() {
    historyBlock.innerHTML = "";
    let historyItemClassName = "";
    for (let i = 0; i <= roundsPass; i++) {
        historyItemClassName = "history_item";
        if (i == 0) { historyItemClassName += " history_item-first"; }
        if (i + 1 > roundsPass) { historyItemClassName += " history_item-last"; }
        if (currentRound == i) { historyItemClassName += " active"; }
        historyBlock.innerHTML += `<div class="` + historyItemClassName + `" onclick="loadHistoryItem(` + i + `)">
                           <h3 class="item_label text_RallBold">`+ QWISEQVESTION[i].history.label + `</h3>
                           <p class="item_paragraph">`+ QWISEQVESTION[i].history.description + `</p>
                        </div>`;
    }
}

/* html fill the qwise block */
function loadRadioRound() {
    hideElements();
    let bufferArray = (currentRoundArr != []) ? currentRoundArr[0] : 15;
    for (let i = 0; i < QWISEQVESTION[1].answerArr.length; i++) {
        let className = (i == bufferArray) ? "container_item-radio active" : 'container_item-radio';
        answerBlock.innerHTML += `<div class="` + className + `" onclick="setRadioAnswer(` + i + `)">
                                        <div class="item_circle"></div>
                                        <p class="item_paragraph">`+ QWISEQVESTION[1].answerArr[i] + `</p>
                                  </div>`;
    }
}

function loadCheckBoxRound() {
    hideElements();
    for (let i = 0; i < QWISEQVESTION[currentRound].answerArr.length; i++) {
        let className = (currentRoundArr[i] == 1) ? "container_item-test active" : 'container_item-test';
        answerBlock.innerHTML += `<div class="container_inline">
                                    <div class="`+ className + `" onclick="setCheckBoxAnswer(` + i + `)">
                                        <svg class="item_svg" width = "12" height = "12" viewBox = "0 0 12 12" fill = "none"
                                            xmlns = "http://www.w3.org/2000/svg" >
                                            <path d="M1 11L11 1M11 11L1 1" stroke="black" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        </svg >
                                        <p class="item_paragraph">`+ QWISEQVESTION[currentRound].answerArr[i] + `</p>
                                    </div > 
                                    </div>`;
    }
}

function loadWinRound() {
    hideElements();
    qwiseImage.style.display = "block";//last round
    answerBlock.innerHTML = `
    <input type="text" class="test_input" placeholder="Ваше мнение сюда" />
    <div class="test_select">
       <div class="select_active-item" onclick="openSelect()">
          <p class="active_text" id="myselectInput">Очень понравился</p>
          <svg class="active_svg svg_disable" width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 11.5L11 1.5L1 11.5" stroke="black" stroke-width="2"/>
          </svg>
          <svg class="active_svg svg_enable" width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.5L11 11.5L21 1.5" stroke="black" stroke-width="2"/>
          </svg>
       </div>
       <div class="select_container">
          <div class="container_item" onclick="setActiveSelect()" >
            <p class="item_text">Очень понравился</p>
          </div>
          <div class="container_item" onclick="setActiveSelect()">
            <p class="item_text">Не понравился</p>
          </div>
          <div class="container_item" onclick="setActiveSelect()">
            <p class="item_text">Пройду еще раз</p>
          </div>
          <div class="container_item" onclick="setActiveSelect()">
            <p class="item_text">Посоветую пройти всем</p>
          </div>
       </div>
    </div>
    `;
}

function hideElements() {
    setHistoryBlock();
    answerBlock.innerHTML = "";
    if (currentRound == 0) { buttonBack.style.display = "none"; } else { buttonBack.style.display = "inline-block"; }
    qwiseLabel.innerHTML = QWISEQVESTION[currentRound].label;
    qwiseParagraph.innerHTML = QWISEQVESTION[currentRound].description;
}

function chooseRound() {
    switch (currentRound) {
        case 0:
            loadCheckBoxRound();
            qwiseImage.style.display = "none";
            break;
        case 1:
            loadRadioRound();
            qwiseImage.style.display = "none";
            break;
        case 2:
            loadWinRound();
            break;
    }
}
/* button handlers */
function backButton() {
    currentRound--;
    currentRoundArr = allRoundArr[currentRound];
    chooseRound();
}

function continionButton() {
    currentRound++;
    if (currentRound > roundsPass) {
        roundsPass++;
        allRoundArr.push(currentRoundArr);
        currentRoundArr = [];
    }
    if (currentRound > 2) {
        currentRound = 0;
        allRoundArr = [];
        roundsPass = 0;
        qwiseImage.style.display = "none";
        alert("Вы успешно заполнили форму");
    }

    chooseRound();
}

function loadHistoryItem(index) {
    allRoundArr.push(currentRoundArr);
    currentRound = index;
    currentRoundArr = allRoundArr[currentRound];
    chooseRound();
}


qwiseImage.style.display = "none";
loadCheckBoxRound();
