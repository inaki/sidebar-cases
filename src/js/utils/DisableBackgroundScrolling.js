export default DisableBackgroundScrolling = (function () {

    var disableTouch = function(elementId, touchTarget) {
        var elem = document.getElementById(elementId);
        elem.classList.add('noscroll');

        return document.ontouchmove = function ( evt ) {
            var isTouchMoveAllowed = true,
                target = evt.target;

            while ( target !== null ) {
                if ( target.classList && target.classList.contains( 'noscroll' ) ) {
                    isTouchMoveAllowed = false;
                    break;
                }
                target = touchTarget !== undefined ? target[touchTarget] : target.parentNode;
            }

            if ( !isTouchMoveAllowed ) {
                evt.preventDefault();
            }
        };
    };

    var disableElasticScrolling = function( elementId ) {
        var scrollable = document.getElementById(elementId);

        return scrollable.addEventListener( 'touchstart', function () {

            var top = scrollable.scrollTop,
                totalScroll = scrollable.scrollHeight,
                currentScroll = top + scrollable.offsetHeight;

            if ( top === 0 ) {
                scrollable.scrollTop = 1;
            } else if ( currentScroll === totalScroll ) {
                scrollable.scrollTop = top - 1;
            }
        });
    };

    var reset = function( elementId ) {
        document.getElementById(elementId).classList.remove('noscroll');
    };

    var disableAll = function(noscroll, scrollable, touchTarget){
        disableTouch(noscroll, touchTarget);
        disableElasticScrolling(scrollable);
    };

    return {
        disableTouch: disableTouch,
        disableElasticScrolling: disableElasticScrolling,
        reset: reset,
        disableAll: disableAll
    };
})();
