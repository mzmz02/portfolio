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

    //navigationの操作
    $('.navButton').click(function(){
        // メニューバーが開かれているなら
        if($('nav').hasClass('open')){
          $('nav').removeClass('open');
          $('nav').slideDown();
    
          // Font Awesomeを×にする
          $('header').children('span').removeClass().addClass('fas fa-times navButton');
    
        }
        // メニューバーが開かれていないなら
        else{
          $('nav').addClass('open');
          $('nav').slideUp();
    
          // Font Awesomeをメニューバーにする
          $('header').children('span').removeClass().addClass('fas fa-bars navButton');
        }
    });

});
