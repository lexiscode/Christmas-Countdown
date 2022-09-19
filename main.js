const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYears = '25 Dec 2022';

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}


function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);

//SOME ADDED FEATURES
//AUTOWRITE TEXT
const myText = document.getElementById('myBrandText')
const text = 'Powered By: Lexiscode!!!';
let index = 0;
function writeText(){
    myText.innerText = text.slice(0, index);
    index++;
    if (index > text.length){
        index = 0;
    }
}
setInterval(writeText, 200);

//XMAS SONG
const xmasSong = document.getElementById('audio');
function play(){
    xmasSong.play()
}

//RAIN
function createHeart(){
    const heart = document.createElement('div');
    heart.classList.add('heart');

    //The width size to which the heart falls should be between 100width
    heart.style.left = Math.random() * 100 + 'vw';

    //The animationDuration should be b/w 2-5 secs, some will fall faster than others.
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';

    heart.innerHTML = '💙';
    document.body.appendChild(heart);

    //Removes the hearts at the top edges after 5 secs so we barely see any there
    setTimeout(() => {
        heart.remove();
    }, 5000);
}
setInterval(createHeart, 300);

//Onload Default Image in thw <body> tag
function myFunction(){
    document.body.style.backgroundImage = 'url(pics1.jpg)';
}

//Dropdown Switch Between Images
function changeBackground(x){
    document.body.style.backgroundImage = "url('"+x+"')";
}
