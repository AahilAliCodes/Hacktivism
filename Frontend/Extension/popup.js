

//have the popup "frontend" talk to the content script running on the page itself
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    console.log("Send");
    chrome.tabs.sendMessage(tabs[0].id, "message", (response) => {
      console.log("Recv response = " + response.title);
      document.getElementById("title").innerText = response.title;
    });
  });