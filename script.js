document.getElementById('yesButton').addEventListener('click', function() {
    showPopUp('kisses.png');
    showPopUp('roses.png');
    setTimeout(function() {
        window.location.href = 'letter.html';
    }, 2000);
});

document.getElementById('noButton').addEventListener('click', function() {
    window.location.href = 'think-again.html';
});

function showPopUp(imgSrc) {
    const popUp = document.createElement('div');
    popUp.classList.add('pop-up');
    popUp.innerHTML = `<img src="${imgSrc}" alt="Pop Up">`;
    document.body.appendChild(popUp);
}

function showMessage() {
    const message = document.getElementById('loveMessage');
    message.classList.remove('hidden');
    document.getElementById('letter').classList.add('open');
}
