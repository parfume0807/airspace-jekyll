$(function(){
    var winHeight=$(window).height();
    var docHeight=$(document).height();
    var boxSize=$('.wrap').length;
    var allHeight=winHeight * boxSize;
    var num=0;
    var down=0;
    $('.wrap').css('height',winHeight);
    $(window).bind('mousewheel',function(e){
        if(del>=0){
            num--;
            if(0<num){
                $(window).scrollTop((winScrollTop-winHeight)+100);
            }
            else{
                $(window).scrollTop(0);
                num=0;
            }
        }
        else{
            num++;
            if(num>boxSize){
                $(window).scrollTop(((winHeight)*num)-100);
            }
            else{
                $(window).scrollTop((winHeight)*3);
                num=3;
            }
        }
    })
})