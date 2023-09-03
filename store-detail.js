$(function(){    /* 基本形＝$(document).ready(function(){ */

    /* 店舗情報の詳細表示のON/OFF */
    $('.stores-list-item').click(function(){
        let $detail = $(this).find('.store-details');
        if($detail.hasClass('open')) {
            $detail.removeClass('open');
            $detail.slideUp(400);
            $(this).find('.detail-btn').text('<詳細表示>');
        } else {
            $detail.addClass('open'); 
            $detail.slideDown(400);
            $(this).find('.detail-btn').text('<詳細を閉じる>');
        }
    });

});
