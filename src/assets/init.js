window.addEventListener('load', () => {
  document.body.className = document.body.className ? document.body.className + ' js-enabled' : 'js-enabled';

  window.GOVUKFrontend.initAll();
});
