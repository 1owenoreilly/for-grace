const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const image = document.getElementById('display-image');
const question = document.getElementById('question');

let yesSize = 1.2;
let noTexts = [
    "Are you sure?",
    "Last chance!",
    "No Bubbl'r for you.",
];
let noClickCount = 0;

noBtn.addEventListener('click', () => {
    // 1. Make Yes button bigger
    yesSize += 0.5;
    yesBtn.style.transform = `scale(${yesSize})`;
    
    // 2. Change No button text
    if (noClickCount < noTexts.length) {
        noBtn.innerText = noTexts[noClickCount];
        noClickCount++;
    }

    // 3. Move No button to a random position
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener('click', () => {
    // Celebration state
    question.innerText = "MY GORGEOUS GIRL... I knew you'd say yes! ❤️";
    image.src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWY1MTR5NTRrbXY2ZXRhcWpzYmJ0NzdmZThlOXY0NDd4eWQ5cWtjNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MDJ9IbxxvDUQM/giphy.gif";
    
    // Hide buttons
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
});