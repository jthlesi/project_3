//배너 높이
$(document).ready(function(){
    $("#banner").css("height",$(window).height()+'px');
});

//리사이즈
window.onresize = function () {
    document.location.reload();
};

//배너
var i = 2

setInterval( function(){
        $("#banner").css('background-image','url(img/banner_'+i+'.jpg)');
        i++;
        if (i>4){
            i=1;
        }},4000)