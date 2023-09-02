$(function(){    /* 基本形＝$(document).ready(function(){ */

    /* ヘッダーのメニューボタン */
    /* クリックでクラス「active」のつけ外し */
    /* active付き = メニュー表示中 */
    $(".header-menu-btn").click(function () {
        $(this).toggleClass('active');
        if( $(this).hasClass('active')) {
            $('#navi-window').show();
            $('.main-nav').addClass('open');
            $('.main-top-container').addClass('open');
        } else {
            $('#navi-window').hide();
            $('.main-nav').removeClass('open');
            $('.main-top-container').removeClass('open');
        }
    });

});
