chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
      text: "uno",
    });
  });


chrome.action.onClicked.addListener(async (tab) => {
    await chrome.action.setBadgeText({
        tabId: tab.id,
        text: "L",
      });
    await chrome.scripting
    .executeScript({
      target : {tabId : tab.id},
      files : [ "script.js" ],
    })
});