async function copyYoutubeTimestamp() {
    let buttons = document.getElementById("top-level-buttons-computed").getElementsByTagName("button");
    let shareButton = buttons[buttons.length - 1];
    console.log("buttons keybindings: ", buttons);
    console.log("shareButton: ", shareButton);
    shareButton.click();
    let checkboxWrapper = document.getElementById("start-at-wrapper");
    console.log("checkboxWrapper: ", checkboxWrapper);
    let checkbox = document.getElementById("start-at-checkbox");
    console.log("checkbox: ", checkbox);
    while (checkbox === null || checkbox === undefined) {
        checkboxWrapper = document.getElementById("start-at-wrapper");
        checkbox = document.getElementById("start-at-checkbox");
        await new Promise(resolve => setTimeout(resolve, 400));
    }
    console.log("checkboxWrapper: ", checkboxWrapper);
    console.log("checkbox: ", checkbox);
    await new Promise(resolve => setTimeout(resolve, 400));

    checkbox.click();
    await new Promise(resolve => setTimeout(resolve, 400));
    let copy = document.getElementById("copy-button").children[0].children[0];
    copy.click();
    await new Promise(resolve => setTimeout(resolve, 400));
    let close = document.getElementById("button");
    close.click();
  }  

  function toggleUIElements() {
    let bottomBar = document.getElementsByClassName("ytp-chrome-bottom")[0];
    console.log('bottomBar: ', bottomBar);
    let hidden = bottomBar.classList.contains("hidden");
    console.log('hidden: ', hidden);
    let controller = document.getElementsByClassName("vsc-controller")[0];
    console.log('controller: ', controller);
    bottomBar.classList.toggle("hidden");
    controller.classList.toggle("hidden");
  }


function keypressClosure() {
    let justPressedG = false;
    // video.initVideoControler();
    return (key) => {
        console.log('keypress closure')
        console.log("key.key: ", key.key)
        console.log("justPressedG: ", justPressedG)
        let keyvalue = key.key
        if (keyvalue === "b" && justPressedG) {
            copyYoutubeTimestamp();
            justPressedG = false;
        }
        if (keyvalue === "v" && justPressedG) {
            toggleUIElements();
            justPressedG = false;
        }
        if (keyvalue === "g") {
            justPressedG = true;
        } else {
            justPressedG = false;
        }
    }
}


function addVideoListeners() {
    const keypressListener = keypressClosure();
    window.addEventListener('keypress', keypressListener)}

function initVideoController() {
    console.log('initVideoController');
    const location = window.location.href
    const expression = /^https?:\/\/(www\.)?youtube\.com\/.*/;
    const regex = new RegExp(expression);
    if (location.match(regex)) {
        addVideoListeners();
    }
    console.log()
}

window.addEventListener("load", initVideoController)