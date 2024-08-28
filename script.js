const compliments = [
  "You're amazing!",
  "You cheer the room up!",
  "Du är grym! (You are awesome!)",
  "Vous êtes extraordinaire! (You are extraordinary!)",
  "Você é incrível! (You are incredible!)",
  "素晴らしいですね (You are wonderful!)",
  "你很棒 (You are awesome!)",
  "तुम शानदार हो (You are fantastic!)",
"آپ خوبصورت ہےں (You are beautiful!)",
  "أنت رائع (You are marvellous!)",
  "Είσαι φοβερός/φοβερή! (You are awesome!)",
  "Wewe ni bora! (You are the best!)",
"Je bent geweldig! (You are amazing!)",
  "Eres muy agradable! (You are very nice!",
  "Kamu lucu! (You're cute!)",
  "Красавчик! (Impressive!)",
  "Kamu kelihatan bugar! (Looking fit!)"
];

const complimentElement = document.getElementById("compliment");
const generateButton = document.getElementById("generate-btn");

function getRandomCompliment() {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  return compliments[randomIndex];
}

generateButton.addEventListener("click", () => {
  const randomCompliment = getRandomCompliment();
  complimentElement.textContent = randomCompliment;
});

complimentElement.textContent = getRandomCompliment();