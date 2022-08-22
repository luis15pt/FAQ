"use strict";
//jQuery.noConflict();

jQuery(function($) {

    //on document ready
    $(document).ready(function() {    

        //open mobile menu
        $(".menu-trigger").on("click", function() {
            $(".header_fleio").toggleClass("menu-opened");
        });

        $("span#current-version").click(function() {
            var verOptions = $("ul#version-options");
            if (verOptions.is(":hidden")) {
                verOptions.css('display', 'block');
            } else {
                verOptions.css('display', 'none');
            }
            event.stopPropagation();
        });

        $(window).click(function() {
            var verOptions = $("ul#version-options");
            verOptions.css('display', 'none');
        });
    });
});
