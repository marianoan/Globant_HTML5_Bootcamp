$(document).ready(function () {

    $('body').addClass('js');

    var $menu = $('#menu'),
      $menulink = $('.menuLink'),
      $wrap = $('#wrapper');

    $menulink.click(function () {
        console.log("hh");
        $menulink.toggleClass('active');
        $wrap.toggleClass('active');
        return false;
    });
});