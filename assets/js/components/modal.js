(function($) {

    /**
     * Contents
     */
    $('[data-modal-content]').magnificPopup({
        type:'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });

    /**
     * Images
     */
    $('[data-modal-image]').magnificPopup({
        type: 'image'
        // other options
    });

})( jQuery );

