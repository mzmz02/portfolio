$(function(){

    //トップに戻る
    $('.topButton').click(function(){
        $('html,body').scrollTop(0); //ページのトップに移動する
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
