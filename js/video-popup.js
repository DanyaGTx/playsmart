const videoBtn = document.querySelector('.video-btn');
const videoPopup = document.querySelector('.video-popup');
const videoPlayer = document.querySelector('.video-player');
const closePopUpOnIcon = document.querySelector('.video-popup__close-icon');
const playerOptions = '?autoplay=1&enablejsapi=1&version=3&playerapiid=ytplayer'
window.addEventListener('click', (event) => {
    if (event.target == videoPopup) {
        closePopUp()
    }
});

closePopUpOnIcon.addEventListener('click', () => {
    closePopUp()
})

videoBtn.addEventListener('click', () => {
    videoPopup.style.display = 'block';
    document.body.style.overflow = 'hidden';
    videoPlayer.src = videoBtn.getAttribute('data-video-url') + playerOptions
    
});

const closePopUp = () => {
    videoPopup.style.display = 'none';
    document.body.style.overflow = 'auto';
    videoPlayer.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
}


