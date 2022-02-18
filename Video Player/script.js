// get dom elements
const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

function toggleVideoStatus(){
    if(video.paused){
        video.play();
    } else {
        video.pause();
    }
}

function updatePlayIcon(){
    if(video.paused){
        play.innerHTML = `<i class="fa fa-play fa-2x"></i>`
    } else {
        play.innerHTML = `<i class="fa fa-pause fa-2x"></i>`
    }
}

function stopVideo(){
    video.currentTime = 0;
    video.pause();
}

function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    let mins = Math.floor(video.currentTime / 60);
    if(mins < 10) {
        mins = '0' + String(mins);
    }

    let secs = Math.floor(video.currentTime % video.duration);
    if(secs < 10) {
        secs = '0' + String(secs);
    } 

    timestamp.innerHTML = `${mins}:${secs}`; 
}

function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

// 2. Event Listener for Play Button
play.addEventListener('click', toggleVideoStatus);

// 3. Event Listener for Stop Button
stop.addEventListener('click', stopVideo);

// 4. Event Listener for Progress Bar
progress.addEventListener('change', setVideoProgress);