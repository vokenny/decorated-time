(function () {
  'use strict';

  const body = document.querySelector('body');
  let hexcode = '#ffffff';

  function updateHexCodeTime() {
    const elem = document.getElementById('hex-code');
    const time = new Date().toISOString().substr(11, 8);
    hexcode = '#' + time.replaceAll(':', '');

    elem.innerText = hexcode;
    body.style.setProperty('--hexcode', hexcode);
  };

  setInterval(updateHexCodeTime, 1000);

}());