$(function(){

    //トップに戻る
    $('.topButton').click(function(){
        $('html,body').scrollTop(0); //ページのトップに移動する
    });

    // 画像をクリックでポップアップを表示
    $('.buttonPortfolio').click(function(){
        $('.popPortfolio').fadeIn();
    });
    
    $('.buttonTravel').click(function(){
        $('.popTravel').fadeIn();
    });


    // クリックイベント全てに対しての処理
    $(document).on('click touchend', function(event) {
        // 表示したポップアップ以外の部分をクリックしたとき
        if (!$(event.target).closest('.buttonPortfolio').length) {
            $('.popPortfolio').fadeOut();
        }
        if (!$(event.target).closest('.buttonTravel').length) {
            $('.popTravel').fadeOut();
        }
    });

});
