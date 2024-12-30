const musicIframe = document.querySelector('#background-music iframe');
const toggleMusicButton = document.getElementById('toggle-music');

toggleMusicButton.addEventListener('click', () => {
    const src = musicIframe.src;
    if (src.includes('mute=0')) {
        musicIframe.src = src.replace('mute=0', 'mute=1');
        toggleMusicButton.textContent = '🎵 Увімкнути музику';
    } else {
        musicIframe.src = src.replace('mute=1', 'mute=0');
        toggleMusicButton.textContent = '🎵 Вимкнути музику';
    }
});
