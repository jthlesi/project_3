$(document).ready(function () {
    $(".listSWrap").css("width", `${$('.container').width() / 3}px`)
})

//리사이즈
window.onresize = function () {
    document.location.reload();
};

var photoList = document.querySelectorAll(".listS");

for (i = 0; i < photoList.length; i++) {
    photoList[i].style.backgroundImage = 'url(img/sub_1/dog_' + (i + 1) + '.jpg)';
};

var videoArr = ["https://www.youtube.com/embed/dThIqeN7CTU", "https://www.youtube.com/embed/Y5CV6ibP7Ao", "https://www.youtube.com/embed/ItppeQZHsvU", "https://www.youtube.com/embed/y9A5U4k8yAI"]
var photoL = document.querySelectorAll(".img");

$(document).ready(function () {
    $(".more").click(function () {
        var moreIdx = ($(this).parents(".listLine").index() / 2);
        var listWrapIdx = $(this).parents(".listSWrap").index();
        var current = $(".more").index(this);
        $(".detail").eq(moreIdx).stop().slideToggle();
        for (i = 0; i < photoL.length; i++) {
            photoL[i].style.backgroundImage = 'url(img/sub_1/dog_' + (listWrapIdx + 1) + '_' + (i + 1) + '.jpg)';
        };
        $("iframe").eq(moreIdx).attr("src", videoArr[current]);
        if ($(".detail").is(':visible')) {
            $(".more").eq(current).text('닫기');
        } else {
            $(".more").text('자세히 보기')
        }
    });
});

var moreTxt = document.querySelector("#moreList");
var lineIdx = document.querySelectorAll(".listLine")
var listIdx = 1;

$("#moreList").click(function () {
    if ($("#board").height() > lineIdx.length * 420) {
        $(".listLine").not(":first").slideUp();
        listIdx = 1;
        moreTxt.innerText = "더보기";
    } else if ($("#board").height() >= ((lineIdx.length - 1) * 420)) {
        $(".listLine").eq(listIdx).slideDown();
        listIdx++;
        moreTxt.innerText = "접기";
    } else if ($("#board").height() < lineIdx.length * 420) {
        $(".listLine").eq(listIdx).slideDown();
        listIdx++;
        moreTxt.innerText = "더보기";
    }
});


