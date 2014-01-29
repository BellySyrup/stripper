chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {file:"jquery.js"}, function(){
  	chrome.tabs.executeScript(null, {file: "lang.js"});
  	chrome.tabs.executeScript(null, {file: "strippr.js"});
  });
});