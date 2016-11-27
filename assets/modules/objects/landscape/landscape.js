(function ($) {

    /**
     * Landscape
     * 
     * @access public
     * @author [@esr360](http://twitter.com/esr360)
     * @param {object} custom - where custom config will be passed
     * 
     * @example
     *     $('.landscape').landscape({
     *         opaqueOnScroll: false
     *     });
     */
    $.fn.landscape = function(custom) {

        // Options
        var options = $.extend({
            opaqueOnScroll: '.landscape_hola'
        }, custom);

        if (options.opaqueOnScroll) {
            $(window).on('scroll', function() {
                var scrollTop = $(this).scrollTop();
                $(options.opaqueOnScroll).css({
                    'opacity' : 1 - scrollTop/900
                }); 
            });
        }

    };
 
}(jQuery));