//it works!! use dom to properly read in the stuff
console.log("execution underway! Set the seas ablaze")
//document.querySelector("body").innerHTML = "<h1> SET THE SEAS ABLAZE</h1>"


//use messages to communicate with the popup "frontend"
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Recv. Send response = " + document.title);
  sendResponse({ title: document.title });

  return true;
});