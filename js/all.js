

$(document).ready(function () {
    $(".bar").click(function() {
        $(".menu-collapsed").toggleClass("menu-expanded");
        $(".menu > li > ul").removeClass("openMenu");
        
    });

    $(".menu > li > a").click(function() {
        $(this).next().toggleClass('openMenu');
        $(this).parent().siblings().find('.submenu').removeClass('openMenu');
    });
    
});