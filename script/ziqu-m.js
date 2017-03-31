/**
 * Created by duanhao on 17/2/22.
 */


$(window).scroll(function(event){
    var wScrollY = window.scrollY; // 当前滚动条位置
    if(wScrollY >= 130){
        //$('.titleBar').css('opacity','1');
        //$('.container-fluid').css('margin-top','50px');
    }else{
        //$('.titleBar').css('opacity','0');
        //$('.container-fluid').css('margin-top','0px');
    }
});