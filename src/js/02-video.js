
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const SAVE_TIME = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

document.addEventListener('click', callBack);

function callBack() {
   player.on('timeupdate', throttle(onPlay, 1000));
    function onPlay(data) {
        const currentTime = data.seconds;
        localStorage.setItem(SAVE_TIME, JSON.stringify({ seconds: currentTime }));
    }
};

let timeData = JSON.parse(localStorage.getItem(SAVE_TIME)) ?? { seconds: 0 };
    player.setCurrentTime(timeData.seconds);