chrome.runtime.onMessage.addListener((message, _, __) => {
    if (message.command == "copy") {
      navigator.clipboard.writeText(message.text);
    }
});
