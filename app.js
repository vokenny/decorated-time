(function () {
  'use strict';

  const body = document.querySelector('body');
  let hexcode = '#ffffff';

  function updateHexCodeTime() {
    const time = new Date().toISOString().substr(11, 8);
    hexcode = '#' + time.replaceAll(':', '');
  };

  function displayHexcodeTime() {
    const hexcodeContainer = document.getElementById('hex-code');

    const digits = hexcode.split('');
    const digitsHtml = digits
      .map(i => `<p class="digit">${i}</p>`)
      .reduce((prev, curr) => prev + curr);

    hexcodeContainer.innerHTML = digitsHtml;
    body.style.setProperty('--hexcode', hexcode);
  }

  setInterval(() => {
    updateHexCodeTime();
    displayHexcodeTime();
  }, 1000);

}());