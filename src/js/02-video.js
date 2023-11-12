import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoCurrentTime = document.getElementById('vimeo-player');
const player = new Vimeo(videoCurrentTime);

function onTimeUpdate(currentTime) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(currentTime.seconds)
  );
}

player.on('timeupdate', throttle(onTimeUpdate, 1000));

try {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    const parseSavedTime = JSON.parse(savedTime);
    player.setCurrentTime(parseSavedTime);
  }

  console.log('savedTime', savedTime);
} catch (error) {
  console.log('Сталась помилка');
}
