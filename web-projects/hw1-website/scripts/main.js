const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/dumb-phone.webp") {
    myImage.setAttribute("src", "images/smartphone.jpeg");
  } else {
    myImage.setAttribute("src", "images/dumb-phone.webp");
  }
};



let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hi ${myName}, I'm Elliot`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Hi ${storedName}, I'm Elliot`;
}

myButton.onclick = () => {
  setUserName();
};
