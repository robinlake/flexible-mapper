console.log('background.js')
chrome.runtime.onMessage.addListener((message,sender,sendResponse)=>{
    console.log(message)
    if (message === "b") {
        console.log("message is b")
    }
    console.log(sender)
    sendResponse("Received message in background!!")
})