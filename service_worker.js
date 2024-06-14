chrome.commands.onCommand.addListener((command) => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    const activeTab = tabs[0];
    const title = activeTab.title.match(/(.*) - \w+/)[1];
    const url = activeTab.url;
    const text = `[${title}](${url})`;
    chrome.tabs.sendMessage(activeTab.id, {command: "copy", text: text})
  });
})
