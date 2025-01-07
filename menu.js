const textElement = document.getElementById("text");
const texts = ["Oliver Joshua Andersen", "ojandersen.dk"];
let index = 0;
let textIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = texts[textIndex];

  if (!isDeleting) {
    textElement.textContent = currentText.substring(0, index + 1);
    index++;
  } else {
    textElement.textContent = currentText.substring(0, index - 1);
    index--;
  }

  if (index === currentText.length && !isDeleting) {
    setTimeout(() => (isDeleting = true), 2000);
  }

  if (index === 0 && isDeleting) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
  }

  setTimeout(typeEffect, isDeleting ? 100 : 150);
}

typeEffect();
