    $(function(){
    $(window).on('mousewheel DOMMouseScroll',function(e){
        var $viewport=$('html,body')
        ,motionAnim=function(){
            var deota=e.originEvent.wheelDelta||e.originalEvent.detail*-1
            ,topVal=$(document).scrollTop()
            ,moveVal=1080;
            if(delta>0){
                topVal -= moveVal;
            }else{
                topVal += moveVal;
            }
            $viewport.stop().animate({scrollTop:topVal},300);
        }
        if(!$viewport.is(':animated')){
            motionAnim();
        }
        return false;
    });
    })