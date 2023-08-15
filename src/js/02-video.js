import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const TIME_KEY = 'videoplayer-current-time';
const player = new Player(document.querySelector('iframe'));

player.on('timeupdate', throttle(data =>
    localStorage.setItem(TIME_KEY, JSON.stringify(data)), 1000)
);

player.setCurrentTime(
    JSON.parse(localStorage.getItem(TIME_KEY))?.seconds || 0
);