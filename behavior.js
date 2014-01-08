
    /**
     * Stick sidebar
     * stick sidebar on top when scrolling
     **/
    var fixed = false;

    $(document).scroll(function() {
        if( $(this).scrollTop() > 1 ) {
            if( !fixed ) {
                fixed = true;
                $('#main-header').addClass("fixed");

            }
        } else {
            if( fixed ) {
                fixed = false;
                $('#main-header').removeClass("fixed");
            }
        }
});