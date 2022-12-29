const mockThatString = (text) => {
  const mockedStringArray = [...text].map((letter, index) => {
    if(index % 2 !== 0) return letter.toUpperCase();
    return letter.toLowerCase();
  });
  return mockedStringArray.join('');
}

const copyToClipboard = (selection) => {
  const el = document.createElement('textarea');
  el.value = mockThatString(selection);
  document.body.appendChild(el);
  el.select(); 
  document.execCommand('copy');
  document.body.removeChild(el);
};

chrome.contextMenus.create({
  "id": "copyAsMockedText",
  "title": "Copy as Mocked Text",
  "contexts": ["selection"]
});

chrome.contextMenus.onClicked.addListener(itemData => {
  copyToClipboard(itemData.selectionText);
});