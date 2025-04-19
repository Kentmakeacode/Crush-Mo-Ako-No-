
function nextPage() {
    window.location.href = 'yes.html'; 
}

let isButtonMoving = false;

function moveButton() {
    if (isButtonMoving) return; 

    const noButton = document.getElementById('noButton');
    const randomX = Math.floor(Math.random() * 200) - 100; 
    const randomY = Math.floor(Math.random() * 200) - 100; 

    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
    isButtonMoving = true;

    setTimeout(() => {
        isButtonMoving = false;
    }, 500); 
}