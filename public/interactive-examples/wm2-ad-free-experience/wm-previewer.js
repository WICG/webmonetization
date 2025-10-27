function getWmTag() {
  return document.querySelector('link[rel="monetization"]');
}

function uuid () {
  return 'fc23b14d-70e4-4d55-b0a0-dd86f70ce402'
}

function emitWm() {
  const wmTag = getWmTag();
  if (!wmTag) {
    throw new Error("cannot emit monetization event without link tag");
  }
  
  const paymentPointer = wmTag.href
  
  const wmEvent = new Event('monetization')
  wmEvent.paymentPointer = paymentPointer
  wmEvent.amountSent = { currency:'USD', value: (Math.random() * 0.00001).toFixed(9).toString() }
  wmEvent.incomingPayment = `${paymentPointer}incoming-payments/${uuid()}`,
  wmTag.dispatchEvent(wmEvent);
}

function isWm() {
  const pageUrl = new URL(window.location);
  return pageUrl.searchParams.get("wm") === "true";
}

function createWmWidget() {
  const div = document.createElement("div");
  div.style.position = "fixed";
  div.style.right = "0px";
  div.style.bottom = "0px";
  div.style.padding = "20px";

  const pageUrl = new URL(window.location);
  const isWm = pageUrl.searchParams.get("wm") === "true";

  const buttonDiv = document.createElement("a");
  buttonDiv.style.display = "block";
  buttonDiv.style.cursor = "pointer";
  buttonDiv.style.fontFamily = "sans-serif";
  buttonDiv.style.borderRadius = "5px";
  buttonDiv.style.backgroundColor = "black";
  buttonDiv.style.color = "white";
  buttonDiv.style.lineHeight = "30px";
  buttonDiv.style.paddingTop = "3px";
  buttonDiv.style.paddingLeft = "10px";
  buttonDiv.style.paddingRight = "10px";
  buttonDiv.innerText = isWm
    ? "View as non-web monetized visitor"
    : "View as web monetized visitor";

  div.appendChild(buttonDiv);
  buttonDiv.addEventListener("click", () => {
    pageUrl.searchParams.set("wm", isWm ? "false" : "true");
    window.location = pageUrl.href;
  });

  return div;
}

const STOPPED_ICON_SRC = 'https://cdn.glitch.com/09917b2c-dfe3-453d-be95-5e0af0bf966c%2Fwm-icon.svg?1584146864109'
const STARTED_ICON_SRC = 'https://cdn.glitch.com/09917b2c-dfe3-453d-be95-5e0af0bf966c%2Fwm-icon-animated.svg?1584146706079'

function createWmIcon() {
  const img = document.createElement("img");
  img.src = isWm() ? STARTED_ICON_SRC : STOPPED_ICON_SRC;
  img.style.position = "fixed";
  img.style.right = "20px";
  img.style.bottom = "70px";
  img.style.width = "40px";
  img.style.height = "40px";
  img.id = "wm-icon";

  return img;
}

function start() {
  // This is just for embedded demos
  if (window === window.top) {
    return;
  }
  

  window.MonetizationEvent = {}; // define MonetizationEvent

  const wmWidget = createWmWidget();
  const icon = createWmIcon();

  window.addEventListener("load", (event) => {
    document.body.appendChild(wmWidget);
    document.body.appendChild(icon);
  });

  if (isWm()) {
    window.addEventListener("load", (event) => {
      emitWm();
    });
  }
}

start();
