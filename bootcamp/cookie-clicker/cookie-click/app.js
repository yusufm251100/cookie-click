const upgradeContainer = document.querySelector(".upgradeContainer");

console.log("test");

//we need to store two global values: cookie count and cookies per second
//choose one way, the one that's easier for you
let cookieCount = 0;
let cookiesPerSecond = 0;

//if you choose the stats object, you don't need the global variables above
// let stats = {
//   cookieCount: 0,
//   cookiesPerSecond: 0,
// };

//DOM manipulation
//select the DOM elements (buttons, imgs, p, ...)
const cookieButton = document.getElementById("cookie-button");
cookieButton.addEventListener("click", getCookie);
function getCookie() {
  console.log("YO!");
}
setInterval(function () {
  console.log("repetition");
}, 1000);

const cookieReset = document.getElementById("reset-button");
cookieReset.addEventListener("click", resetCookie);
function resetCookie() {
  console.log("reset");
}
setTimeout(function () {
  clearInterval(myInterval);
  console.log("reset");
}, 10000);

resetCookie();

// console.log("word".length);

//a way to store the shop upgrades that come from the API
let shopUpgrades = [];
async function getUpgrades() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  const data = await response.json();
  console.log(data);
  shopUpgrades = data;
  renderShop();
}
getUpgrades();

function renderShop() {
  shopUpgrades.forEach((item) => {
    let makeDiv = document.createElement("div");
    let makeButton = document.createElement("button");
    makeButton.textContent = "buy upgrade";
    makeButton.id = `item${item.id}`;
    makeDiv.className = "shopItemBox";
    makeDiv.textContent = `${item.name} upgradeCost:${item.cost} CpsIncrease:${item.increase}`;
    upgradeContainer.appendChild(makeDiv);
    upgradeContainer.appendChild(makeButton);
  });
}

function renderShopUpgrades() {
  const buyButton = document.createElement("button");
  buyButton.textContent = "Buy Upgrade";
  buyButton.id = `upgrade-${upgrade.id}`;
  //an event listener to click on the cookie button
  //select the cookie img or button
  //write your event handler and event listener

  //when I click on the cookie, the value of cookieCount goes up by one
}

//we need a timer that increases the cookieCount value by one every second
setInterval(function () {
  //I want to increase the value of cookieCount by one every second
  //I want to update the value displayed on the page (this task can also be a separate function, for example, updateCookieCount(), and you would call this function inside the setInterval function)
  //   updateCookieCount();
  //I want to store this value in local storage (this task can also be a separate function, for example, storeLocalStorage(), and you would call this function inside the setInterval function)
  //   storeLocalStorage()
}, 1000);

// function updateCookieCount() {
//I update the cookieCount value (this is just one option)
// }

// function storeLocalStorage(){
// I store the values in local storage (this is just one option)
// }

//==============================================
//extra function blocks to give you other ideas
//these building blocks are just possible solutions to probles you might find

//function saveLocalStorage() {
//a method that turns your data into string soup
//a method to set the data into key and values in local storage
