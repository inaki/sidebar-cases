var disableBgScrolling = (function () {

  var disableTouch = function(context) {
    // console.log(context);
    return context.document.ontouchmove = function ( event ) {

        var isTouchMoveAllowed = true, target = event.target;

        while ( target !== null ) {
            if ( target.classList && target.classList.contains( 'noscroll' ) ) {
                isTouchMoveAllowed = false;
                break;
            }
            target = target.parentNode;
        }

        if ( !isTouchMoveAllowed ) {
            event.preventDefault();
        }

    };
  };

  var removeIOSRubberEffect = function( element ) {

      return element.addEventListener( 'touchstart', function () {

          var top = element.scrollTop, totalScroll = element.scrollHeight, currentScroll = top + element.offsetHeight;

          if ( top === 0 ) {
              element.scrollTop = 1;
          } else if ( currentScroll === totalScroll ) {
              element.scrollTop = top - 1;
          }

      } );

  };

  return {
    disableTouch: disableTouch,
    removeIOSRubberEffect: removeIOSRubberEffect
  };

})();


/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById('mySidenav').style.width = '75vw';
    document.getElementById('main').classList.add('noscroll');
    disableBgScrolling.disableTouch(this);
    disableBgScrolling.removeIOSRubberEffect( document.getElementsByClassName( 'scrollable' )[0] );
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').classList.remove('noscroll');
}
