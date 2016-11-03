export default Overlay = (function() {
  var overlayOpen = function(event) {
    var overlay = document.getElementById('overlay'),
        mask = document.getElementById('mask'),
        main = document.getElementById('main');

    mask.style.display = 'block';
    overlay.style.height = '450px';
    overlay.style.top = '0';
    overlay.classList.add('noscroll');

    disableBackgroundScrolling.disableAll('main', 'overlay', 'nextSibling');
  }

  var overlayClose = function() {
    var overlay = document.getElementById('overlay'),
        mask = document.getElementById('mask');

    mask.style.display = 'none';
    overlay.style.height = '0';
    overlay.style.top = '-50px';
  }

  return {
    open: overlayOpen,
    close: overlayClose
  }

})();
