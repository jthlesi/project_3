//배너 높이
$(document).ready(function () {
    $("#banner").css("height", $(window).height() + 'px');
});

//리사이즈
window.onresize = function () {
    document.location.reload();
};

//배너
var idx = 2
setInterval(function () {
    $("#banner").css('background-image', 'url(img/banner_' + idx + '.jpg)');
    idx++;
    if (idx > 4) {
        idx = 1;
    }
}, 4000)

//작은슬라이드
var wrapWidth = document.querySelector('#slides').offsetWidth;
var slidesBox = document.querySelector("#slide_list");
var slideBox = document.querySelectorAll('.slide_box');
var imgBox = document.querySelectorAll('.img_box');

for(i=0;i<imgBox.length;i++){
imgBox[i].style.backgroundImage = 'url(img/small_'+(i+1)+'.jpg)';
};

  for (i = 0; i < slideBox.length; i++) {
    slideBox[i].style.width = wrapWidth / 4 + "px";
  };


