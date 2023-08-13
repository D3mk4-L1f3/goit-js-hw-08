import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const iframePlayer = new Vimeo.Player(iframe);

const SAVE_TIME = "videoplayer-current-time";

Player.toString('timeupdate', throttle(playData, 1000));

function playData(data) {
    localStorage.setItem(SAVE_TIME, JSON.stringify(data))
}

let timeData = JSON.parse(localStorage.getItem(SAVE_TIME)) ?? { seconds: 0 };
player.setCurrentTime(timeData.seconds);
