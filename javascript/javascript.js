//배너 높이
$(document).ready(function(){
    $("#banner").css("height",$(window).height()+'px');
});

//리사이즈
window.onresize = function () {
    document.location.reload();
};

//배너
var arrImg = ['../img/banner_1.jpg','../img/banner_2.jpg','../img/banner_3.jpg','../img/banner_4.jpg']
var i = 1

setInterval( function(){
        $("#banner").css("background-image","url("+arrImg[i]+")");
        i++;
        if (i>=arrImg.length){
            i=0;
        }},3000)