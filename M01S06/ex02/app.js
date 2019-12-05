let paraghraphElement = document.createElement('p');
let userAgentString = navigator.userAgent;
let message = 'Nu stim ce browser folosesti';

if (userAgentString.includes("Chrome")) {
  message = "Folosesti chrome";
}

if (userAgentString.includes("Edge")) {
  message = "Folosesti Egde";
}

paraghraphElement.innerText = message;
document.body.appendChild(paraghraphElement);

