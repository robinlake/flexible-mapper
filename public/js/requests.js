document.getElementById('fetch_foo').onclick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: fetchAndSave('foo')
      });
    });
  }
  document.getElementById('fetch_bar').onclick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: fetchAndSave('bar')
      });
    });
  }

  async function fetchAndSave(route, fileType="txt"){
    console.log("fetchAndSave")
    const routes = {
        'foo': "http://127.0.0.1:8080/foo",
        'bar': "http://127.0.0.1:8080/bar",
    }

    setNotification("fetching something", "purple");
    fetch(routes[route])
    .then(resp => resp.blob())
    .then(blob => {
      downloadFile(blob, route, fileType);
      setNotification("profile complete", "green");
    })
  }

function downloadFile(file, name="download", fileType="txt") {
  let objectURL = window.URL.createObjectURL(file);
  let a = document.createElement('a');
  a.download = `${name}.${fileType}`;
  a.href = objectURL;
  a.click();
}

function setNotification(notification, color) {
  notificationElement = document.getElementById("notification");
  notificationElement.innerHTML = notification;
  notificationElement.style.color = color;
}
