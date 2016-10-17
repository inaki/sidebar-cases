
document.ontouchmove = function ( event ) {

    var isTouchMoveAllowed = true, target = event.target;

    while ( target !== null ) {
        console.log(target);
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

var removeIOSRubberEffect = function( element ) {

    element.addEventListener( 'touchstart', function () {

        var top = element.scrollTop, totalScroll = element.scrollHeight, currentScroll = top + element.offsetHeight;

        if ( top === 0 ) {
            element.scrollTop = 1;
        } else if ( currentScroll === totalScroll ) {
            element.scrollTop = top - 1;
        }

    } );

}

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById('mySidenav').style.width = '75vw';
    document.getElementById('main').classList.add('noscroll');
    removeIOSRubberEffect( document.getElementsByClassName( 'scrollable' )[0] );
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').classList.remove('noscroll');
}
