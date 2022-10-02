(function($) {
            "use strict";
                $(document).ready(function() {
                        $('.press press-black press-round press-ghost').on('click', function() {
                        $('body').addClass("modal-open");
                    });
                    $('.close-modal').on('click', function() {
                        $('body').removeClass("modal-open");
                    });
                });
        }(jQuery));
