(function($) {

    //== used for all images placed within WP editor
    $('a[href$=".jpg"], a[href$=".jpeg"], a[href$=".gif"], a[href$=".png"]').each(function() {

        var link = $(this);
        var img = link.find('img');

        //if ( ( img.is('[class*="wp-image"]') || img.is('[class*="attachment"]') ) && ! img.is('[class*="gallery"]') ) {
        if ( img.is('[class*="wp-image"]') || img.is('[class*="attachment"]') ) {
            link.attr( 'data-modal-image', 'true' );
        }
    });

})( jQuery );