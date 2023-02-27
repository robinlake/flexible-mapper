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
    
    // .children.getElementById("checkbox");
    setTimeout(() => checkbox.click(), 1000);
    let copy = document.getElementById("copy-button").children[0].children[0];
    copy.click();
    let close = document.getElementById("button");
    setTimeout(() => close.click(), 500);
  }  
  

window.addEventListener('keypress',function(key){
    console.log(key.key)
    let keyvalue = key.key
    if (keyvalue === "b") {
        copyYoutubeTimestamp()
    }
    chrome.runtime.sendMessage(null,keyvalue,(response)=>{
        console.log("Sent key value"+response)
        });
})