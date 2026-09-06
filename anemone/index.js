const myAudioElement = new Audio("files/audio/anemone-waiting-zahere.wav")
const player = document.querySelector('.audio')
const imgPause = document.querySelector('.img-pause')
const imgPlay = document.querySelector('.img-play')

// Handle audio player button
player.addEventListener('click', () => {
    if(myAudioElement.paused) {
        myAudioElement.play()
        myAudioElement.loop = true

        imgPause.classList.remove("icon-removed")
        imgPlay.classList.add("icon-removed")
    }
    else {
        myAudioElement.pause()
        imgPlay.classList.remove("icon-removed")
        imgPause.classList.add("icon-removed")
    }
})