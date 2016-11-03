export default Sidebar = (function() {
  /* Set the width of the side navigation to 250px */
  var openNav = function() {
      var mask = document.getElementById('mask'),
          sideNav = document.getElementById('mySidenav'),
          main = document.getElementById('main');

      mask.style.display = 'block';
      sideNav.style.width = '75vw';
      main.classList.add('noscroll');
      disableBackgroundScrolling.disableAll('main', 'mySidenav', 'nextSibling');
  }

  /* Set the width of the side navigation to 0 */
  var closeNav = function() {
    var mask = document.getElementById('mask'),
        sideNav = document.getElementById('mySidenav'),
        main = document.getElementById('main');

    mask.style.display = 'none';
    sideNav.style.width = '0';
    main.classList.remove('noscroll');
    disableBackgroundScrolling.reset('main');
  }

  return {
    open: openNav,
    close: closeNav
  }
})();
