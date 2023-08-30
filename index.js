

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('Cheques.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('Myprogress');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));



let songs = [
    { songName: "Cheques", filePath: "Cheques.mp3", coverPath: "1.jpg" },
    { songName: "Heartless", filePath: "Heartless.mp3", coverPath: "2.jpg" },
    { songName: "Heeriye", filePath: "Heeriye.mp3", coverPath: "heeriye.jpg" },
    { songName: "Qadar", filePath: "Qadar.mp3", coverPath: "qadar.jpg" },
    { songName: "Vaaste", filePath: "Vaaste.mp3", coverPath: "vaaste.jpg" },
    { songName: "What", filePath: "What.mp3", coverPath: "what-jhumka.jpg" },
    { songName: "Sakhiyaan ", filePath: "7.mp3", coverPath: "7.jpg" },
    { songName: "Bhula Dena ", filePath: "8.mp3", coverPath: "8.jpg" },
    { songName: "Tumhari Kasam ", filePath: "9.mp3", coverPath: "9.jpg" },
    { songName: "Na Jaana ", filePath: "10.mp3", coverPath: "10.jpg" },
];

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('op')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName("op")).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})



document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
       
    }
    else {
        songIndex += 1;
      
    }
    audioElement.src = `${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

});

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
     
    }
    audioElement.src = `${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});
