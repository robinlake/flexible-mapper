console.log('background.js')

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
    
    // .children.getElementById("checkbox");
    setTimeout(() => checkbox.click(), 500);
    let copy = document.getElementById("copy-button").children[0].children[0];
    copy.click();
    let close = document.getElementById("button");
    setTimeout(() => close.click(), 500);
  }  

chrome.runtime.onMessage.addListener((message,sender,sendResponse)=>{
    console.log(message)
    if (message === "b") {
        console.log("message is b")
    } else {
        console.log("message is not b")
    }
    console.log(sender)
    copyYoutubeTimestamp()
    sendResponse("Received message in background!!")
})


