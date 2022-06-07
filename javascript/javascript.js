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
var index = 0;

for (index = 0; index < slideBox.length; index++) {
    slideBox[index].style.backgroundImage = 'url(img/small_' + (index + 1) + '.jpg)';
    slideBox[index].style.width = wrapWidth / 4 + "px";
};

var indexNum = 0

function smallSlide() {
    slidesBox.style.left = - (wrapWidth / 4) * (indexNum + 1) + "px";
    indexNum++;
    if (indexNum > slideBox.length - 4) {
        slidesBox.style.left = "0px";
        indexNum = 0;
    }
}

function move(page){
    slidesBox.style.left = - (wrapWidth / 4) * (page) + "px";
    indexNum=page;
}

$("#next").click(function(){
    if (indexNum < slideBox.length - 4) {
    move(indexNum+1);
} else {
    move(0);
}
})

$("#prev").click(function(){
    if (indexNum > 0 ) {
    move(indexNum-1);
} else {
    move(slideBox.length - 4);
}
})

setInterval(smallSlide, 3000)

//사진
