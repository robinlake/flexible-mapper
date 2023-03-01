console.log('keybindings script')

async function copyYoutubeTimestamp() {
    let buttons = document.getElementById("top-level-buttons-computed").getElementsByTagName("button");
    let shareButton = buttons[buttons.length - 1];
    console.log("buttons: ", buttons);
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
    await new Promise(resolve => setTimeout(resolve, 200));

    checkbox.click();
    await new Promise(resolve => setTimeout(resolve, 200));
    let copy = document.getElementById("copy-button").children[0].children[0];
    copy.click();
    await new Promise(resolve => setTimeout(resolve, 200));
    let close = document.getElementById("button");
    close.click();
  }  
  
function timeStampClosure() {
    let justPressedG = false;
    return (key) => {
        console.log("key.key: ", key.key)
        console.log("justPressedG: ", justPressedG)
        let keyvalue = key.key
        if (keyvalue === "b" && justPressedG) {
            copyYoutubeTimestamp();
            justPressedG = false;
        }
        if (keyvalue === "g") {
            justPressedG = true;
        } else {
            justPressedG = false;
        }

        chrome.runtime.sendMessage(null,keyvalue,(response)=>{
            console.log("Sent key value"+response)
            });
        }
};

const timeStampListener = timeStampClosure();

function toggleUIElements() {
    let bottomBar = document.getElementsByClassName("ytp-chrome-bottom")[0];
    let hidden = bottomBar.classList.contains("hidden");
    let controller = document.getElementsByClassName("vsc-controller")[0];
    bottomBar.classList.toggle("hidden");
    controller.classList.toggle("hidden");
  }

function hideBottomBarClosure() {
    let justPressedG = false;
    return (key) => {
        let keyvalue = key.key
        if (keyvalue === "a" && justPressedG) {
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

const hideBottomBarListener = hideBottomBarClosure();

window.addEventListener('keypress', timeStampListener)
window.addEventListener('keypress', hideBottomBarListener)