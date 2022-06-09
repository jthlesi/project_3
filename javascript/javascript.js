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

//section#3 크기
$(document).ready(function () {
    $("#photo").css("flex-basis", ($(window).width() / 2) + 'px');
    $("#photo").css("left", -(($(window).width() / 2) - (($(".container").width() / 2))) + 'px');
    $("#text").css("left", -(($(window).width() / 2) - (($(".container").width() / 2))) + 'px');
    $("#text").css("flex-basis", ((($(".container").width() / 2))) + 'px');
});

//동영상
$("#cover i").click(function(){
    $("#cover").html("<iframe width='740' height='400' src='https://www.youtube.com/embed/k7NRCUU5qqQ?autoplay=1&mute=1'; allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>")
})


    $("#cover div").hover(function(){
        $(this).css("animation-play-state","paused")
    },function(){$(this).css("animation-play-state","running")
})

//숫자증가

    var count1=count2=count3=count4=0;
    counter();
    function counter(){
        time1=setInterval(count1Fn, 3);
        function count1Fn(){
            count1++;
            if(count1>532){
                clearInterval(time1);
            }else{
                $(".countNum").eq(0).text(count1);
            }
        }
        time2=setInterval(count2Fn, 5);
        function count2Fn(){
            count2++;
            if(count2>312){
                clearInterval(time2);
            }else{
                $(".countNum").eq(1).text(count2);
            }
        }
        time3=setInterval(count3Fn, 7);
        function count3Fn(){
            count3++;
            if(count3>220){
                clearInterval(time3);
            }else{
                $(".countNum").eq(2).text(count3);
            }
        }
        time4=setInterval(count4Fn, 30);
        function count4Fn(){
            count4++;
            if(count4>32){
                clearInterval(time4);
            }else{
                $(".countNum").eq(3).text(count4);
            }
        }
    }

