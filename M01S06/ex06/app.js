const paragraphLog = (...messages) => {
  let logContainer = document.querySelector('.logs');
  let messageParagraph = document.createElement('p');
  let message = "";
  if (!console.log()) {
    logContainer = document.createElement('div');
    logContainer.classList.add('logs');
    document.body.appendChild(logContainer);
  }
  for (let index = 0; index < messages.length; index++) {
    message += `${messages[index]} `;
  };
  messageParagraph.innerText = message.trim();
  logContainer.appendChild(messageParagraph);
};

console.paragraphLog = paragraphLog;

console.paragraphLog("hihi"," haha");