//배너높이
$(document).ready(function () {
    $("#subBanner_1").css("height", $(window).height() + 'px');
});

//리사이즈
function detectMediaSize() { 
    if ( window.matchMedia('(min-width: 0px) and (max-width: 599px)').matches ) {
    } else if ( window.matchMedia('(min-width: 600px) and (max-width: 799px)').matches ) {
    } else {
    }
};

window.addEventListener('resize', detectMediaSize, false);

detectMediaSize();   

//위젯
$(document).ready(function () {
    $(".widgetBtn:first").addClass("choice");
    $(".widgetBtn").hover(function () {
        $(this).addClass('choice').siblings().removeClass('choice');
    }, function () {
        $(".widgetBtn").eq(0).addClass('choice').siblings().removeClass('choice');
    })
}
);

//list 가로
if (window.matchMedia("(min-width:800px)").matches) {
    $(document).ready(function () {
        $(".listSWrap").css("width", `${$('.container').width() / 3}px`);
    });
} else if (window.matchMedia("(min-width:600px)").matches) {
    $(document).ready(function () {
        $(".listSWrap").css("width", `${$('.container').width() / 2}px`);
    });
} else {
    $(document).ready(function () {
        $(".listSWrap").css("width", "100%");
    });
};

//리스트 이미지
var photoList = document.querySelectorAll(".listS");

for (i = 0; i < photoList.length; i++) {
    photoList[i].style.backgroundImage = 'url(img/sub_1/dog_' + (i + 1) + '.jpg)';
};

//표
$(document).ready(function () {
    $("table tr:nth-child(1)>td:nth-child(2)").addClass("type");
    $(".listL>p:nth-of-type(2)>span").addClass("type_2");
    $("table tr:nth-child(1)>td:nth-child(4)").addClass("age");
    $("table tr:nth-child(2)>td:nth-child(2)").addClass("sex");
    $("table tr:nth-child(2)>td:nth-child(4)").addClass("vac");
    $("table tr:nth-child(3)>td:nth-child(2)").addClass("serg");
    $("table tr:nth-child(3)>td:nth-child(4)").addClass("care");
    $(".listL>p:nth-of-type(1)>span").addClass("care_2");
});

//자세히보기
$(document).on("click", ".more", function () {
    var moreIdx = ($(this).parents(".listLine").index() / 2);
    var current = $(".more").index(this);
    var videoArr = ["https://www.youtube.com/embed/dThIqeN7CTU", "https://www.youtube.com/embed/Y5CV6ibP7Ao", "https://www.youtube.com/embed/ItppeQZHsvU", "https://www.youtube.com/embed/y9A5U4k8yAI"];
    var textArr_1 = ["포메라니안", "하이브리드견", "말티푸", "푸들"];
    var textArr_2 = ["4개월령", "3개월령", "7개월령", "7개월령"];
    var textArr_3 = ["남아", "여아", "여아", "남아"];
    var textArr_4 = ["미접종", "완료", "완료", "완료"];
    var textArr_5 = ["미완료", "미완료", "완료", "미완료"];
    var textArr_6 = ["케어불가", "케어불가", "케어불가", "케어불가"];
    //자세히보기 텍스트 변경
    if (window.matchMedia("(min-width:600px)").matches) {
        $("iframe").eq(moreIdx).attr("src", videoArr[current]);
        $(".type").eq(moreIdx).text(textArr_1[current]);
        $(".type_2").eq(moreIdx).text(textArr_1[current]);
        $(".age").eq(moreIdx).text(textArr_2[current]);
        $(".sex").eq(moreIdx).text(textArr_3[current]);
        $(".vac").eq(moreIdx).text(textArr_4[current]);
        $(".serg").eq(moreIdx).text(textArr_5[current]);
        $(".care").eq(moreIdx).text(textArr_6[current]);
        $(".care_2").eq(moreIdx).text(textArr_6[current]);
    } else {
        $("iframe").eq(current).attr("src", videoArr[current]);
        $(".type").eq(current).text(textArr_1[current]);
        $(".type_2").eq(current).text(textArr_1[current]);
        $(".age").eq(current).text(textArr_2[current]);
        $(".sex").eq(current).text(textArr_3[current]);
        $(".vac").eq(current).text(textArr_4[current]);
        $(".serg").eq(current).text(textArr_5[current]);
        $(".care").eq(current).text(textArr_6[current]);
        $(".care_2").eq(current).text(textArr_6[current]);
    }
    //자세히보기
    if (window.matchMedia("(min-width:600px)").matches) {
        $(".detail").eq(moreIdx).stop().slideDown();
        
    } else {
        $(".detail").eq(current).stop().slideDown();
        
    }
    //스크롤이동
    if ($(".detail").eq(moreIdx).is(":visible")){
        $("html, body").stop().animate({scrollTop:$(".listSWrap").eq(current).offset().top},"fast");
    }

    //자세히보기 이미지 변경
    var photoListMore = document.querySelectorAll(".img");

    for (j = 0; j < 4; j++) {
        photoListMore[j].style.backgroundImage = 'url(img/sub_1/dog_' + (current + 1) + '_' + (j + 1) + '.jpg)';
    };
    for (j = 4; j < 8; j++) {
        photoListMore[j].style.backgroundImage = 'url(img/sub_1/dog_' + (current+1) + '_' + (j  -3) + '.jpg)';
    };
    for (j = 8; j < 12; j++) {
        photoListMore[j].style.backgroundImage = 'url(img/sub_1/dog_' + (current+1) + '_' + (j  -7) + '.jpg)';
    };
    for (j = 12; j < 16; j++) {
        photoListMore[j].style.backgroundImage = 'url(img/sub_1/dog_' + (current+1) + '_' + (j  -11) + '.jpg)';
    };

    //자세히보기 접기, 버튼 텍스트변경
    if (window.matchMedia("(min-width:600px)").matches) {
        if ($(".more").eq(current).hasClass("moreOpen")) {
            $(".detail").not(":eq(" + moreIdx + ")").stop().slideUp();
            $(".more").removeClass("moreClose").addClass("moreOpen");
            $(".more").eq(current).addClass("moreClose").removeClass("moreOpen");
        } else {
            $(".detail").stop().slideUp();
            $(".more").eq(current).addClass("moreOpen").removeClass("moreClose");
        }
    } else {
        if ($(".more").eq(current).hasClass("moreOpen")) {
            $(".detail").not(":eq(" + current + ")").stop().slideUp();
            $(".more").removeClass("moreClose").addClass("moreOpen");
            $(".more").eq(current).addClass("moreClose").removeClass("moreOpen");
        } else {
            $(".detail").stop().slideUp();
            $(".more").eq(current).addClass("moreOpen").removeClass("moreClose");
        }
    };
});

//닫기
$(document).on("click", ".closeBtn", function () {
    var closeIdx = ($(this).parents(".detail").index() - 1) / 2;
    var closeIdx_2 = $(".closeBtn").index(this);

    if (window.matchMedia("(min-width:600px)").matches) {
        $(".detail").eq(closeIdx).stop().slideUp();
        window.scrollBy(0,-$(".detail").height());
        $(".more").addClass("moreOpen").removeClass("moreClose");
    } else {
        $(".detail").eq(closeIdx_2).stop().slideUp();
        window.scrollBy(0,-$(".detail").height());
        $(".more").addClass("moreOpen").removeClass("moreClose");
    }
});

//재배치
if (window.matchMedia("(min-width:600px) and (max-width:799px)").matches) {
    //리스트 생성
    for (i = 0; i < 3; i++) {
        var div = document.createElement("div");
        div.setAttribute("class", "listLine");
        $("#board").append(div);
        $(`.listLine:eq(${i + 5})`).insertBefore("#moreList")
        $(".detail:eq(0)").clone().insertBefore("#moreList")
    };
    //리스트 재배치
    $(".listLine:eq(0) > .listSWrap:last").prependTo(".listLine:eq(1)");
    $(".listLine:eq(1) > .listSWrap:eq(3)").prependTo(".listLine:eq(2)");
    $(".listLine:eq(1) > .listSWrap:eq(2)").prependTo(".listLine:eq(2)");
    $(".listLine:eq(2) > .listSWrap:eq(4)").prependTo(".listLine:eq(3)");
    $(".listLine:eq(2) > .listSWrap:eq(3)").prependTo(".listLine:eq(3)");
    $(".listLine:eq(2) > .listSWrap:eq(2)").prependTo(".listLine:eq(3)");
    $(".listLine:eq(3) > .listSWrap:eq(5)").prependTo(".listLine:eq(4)");
    $(".listLine:eq(3) > .listSWrap:eq(4)").prependTo(".listLine:eq(4)");
    $(".listLine:eq(3) > .listSWrap:eq(3)").prependTo(".listLine:eq(4)");
    $(".listLine:eq(3) > .listSWrap:eq(2)").prependTo(".listLine:eq(4)");
    $(".listLine:eq(4) > .listSWrap:eq(6)").prependTo(".listLine:eq(5)");
    $(".listLine:eq(4) > .listSWrap:eq(5)").prependTo(".listLine:eq(5)");
    $(".listLine:eq(4) > .listSWrap:eq(4)").prependTo(".listLine:eq(5)");
    $(".listLine:eq(4) > .listSWrap:eq(3)").prependTo(".listLine:eq(5)");
    $(".listLine:eq(4) > .listSWrap:eq(2)").prependTo(".listLine:eq(5)");
    $(".listLine:eq(5) > .listSWrap:eq(4)").prependTo(".listLine:eq(6)");
    $(".listLine:eq(5) > .listSWrap:eq(3)").prependTo(".listLine:eq(6)");
    $(".listLine:eq(5) > .listSWrap:eq(2)").prependTo(".listLine:eq(6)");
    $(".listLine:eq(6) > .listSWrap:eq(2)").prependTo(".listLine:eq(7)");
} else if (window.matchMedia("(max-width:599px)").matches) {
    //자세히보기 재배치
    $(".detail:eq(0)").clone().insertAfter(".listSWrap");
    $("#board>.detail").remove();
};

//더보기
var moreTxt = document.querySelector("#moreList");
var lineIdx = document.querySelectorAll(".listLine");
var listIdx = 0;

if (window.matchMedia("(min-width:600px) and (max-width:799px)").matches) {
    $("#moreList").click(function () {
        if (listIdx < 7) {
            listIdx++;
            $(".listLine").eq(listIdx).slideDown();
        } else {
            $(".listLine").not(":first").slideUp();
            listIdx = 0;
        }
        //버튼 텍스트 변경
        setTimeout(function () {
            if (listIdx < 7) {
                $("#moreList").addClass("moreOpen_2").removeClass("moreClose_2");
            } else {
                $("#moreList").addClass("moreClose_2").removeClass("moreOpen_2");
            }
        }, 400);
    }
    );
} else {
    $("#moreList").click(function () {
        if (listIdx < 4) {
            listIdx++;
            $(".listLine").eq(listIdx).slideDown();
        } else {
            $(".listLine").not(":first").slideUp();
            listIdx = 0;
        };
        
        setTimeout(function () {
            if (listIdx < 4) {
                $("#moreList").addClass("moreOpen_2").removeClass("moreClose_2");
            } else {
                $("#moreList").addClass("moreClose_2").removeClass("moreOpen_2");
            }
        }, 400);
    }
    );
};

//펼치기
if (window.matchMedia("(min-width:600px)").matches){
$("#center").click(function () {
    $(this).stop().animate({ marginTop: 110 }, function () {
        $("#left_1").stop().animate({ marginTop: -110, marginLeft: -290 }, "slow");
        $("#left_2").stop().animate({ marginTop: -250, marginLeft: -105 }, "slow");
        $("#left_3").stop().animate({ marginTop: -250, marginLeft: 105 }, "slow");
        $("#left_4").stop().animate({ marginTop: -110, marginLeft: 290 }, "slow");
    })
});
} else{
    $("#center").click(function () {
        $(this).stop().animate({ marginTop: 110 }, function () {
            $("#left_1").stop().animate({ marginTop: -110,marginLeft: -130}, "slow");
            $("#left_2").stop().animate({ marginTop: -150,marginLeft: -45}, "slow");
            $("#left_3").stop().animate({ marginTop: -150,marginLeft: 45}, "slow");
            $("#left_4").stop().animate({ marginTop: -110, marginLeft: 130}, "slow");
        })
    }); 
}
//이미지 적용
var rollImg = document.querySelectorAll(".roll");

for (k = 0; k < rollImg.length - 1; k++) {
    rollImg[k].style.backgroundImage = 'url(img/sub_1/roll_' + (k + 1) + '.jpg)';
};
//혜택 텍스트 변경
$('.roll').hover(function () {
    var current = $(".roll").index(this);
    $(".rollTxt").eq(current + 1).stop().fadeIn().siblings().stop().hide();
}, function () {
    $(".rollTxt").eq(0).stop().fadeIn().siblings().stop().hide();
});
//강조
$("#center").click(function () {
    $(this).css("animation-play-state", "paused");
});