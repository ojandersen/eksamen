const textElement = document.getElementById("text");
const texts = ["Oliver Joshua Andersen", "ojandersen.dk"]; // Tekster der skifter
let index = 0; // Hvilket tegn vi er på
let textIndex = 0; // Hvilken tekst vi skriver
let isDeleting = false; // Om vi er ved at slette eller ej

function typeEffect() {
  const currentText = texts[textIndex]; // Den aktuelle tekst vi skriver

  if (!isDeleting) {
    // Skriv ét bogstav ad gangen fra venstre mod højre
    textElement.textContent = currentText.substring(0, index + 1);
    index++;
  } else {
    // Slet ét bogstav ad gangen (backspace effekt)
    textElement.textContent = currentText.substring(0, index - 1);
    index--;
  }

  // Hvis teksten er færdigskrevet
  if (index === currentText.length && !isDeleting) {
    setTimeout(() => (isDeleting = true), 2000); // Vent 2 sekunder før sletning starter
  }

  // Hvis teksten er slettet helt
  if (index === 0 && isDeleting) {
    isDeleting = false; // Skift tilbage til skrivning
    textIndex = (textIndex + 1) % texts.length; // Skift til næste tekst
  }

  // Hastighed for at skrive og slette (vi gør begge lige hurtige for en mere naturlig effekt)
  setTimeout(typeEffect, isDeleting ? 100 : 150); // Juster hastigheden for sletning og skrivning
}

// Start skriveeffekten
typeEffect();
