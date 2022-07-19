import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

function onTimeupdate(currentTime) {
  const value = JSON.stringify(currentTime.seconds);
  localStorage.setItem('videoplayer-current-time', `${value}`);
}
player.on('timeupdate', throttle(onTimeupdate, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
