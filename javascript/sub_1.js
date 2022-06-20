//width
$(document).ready(function () {
    $(".listSWrap").css("width", `${$('.container').width() / 3}px`)
})

//리사이즈
window.onresize = function () {
    document.location.reload();
};

//위젯
$(document).ready(function () {
    $(".widgetBtn").hover(function () {
        $(this).addClass('choice').siblings().removeClass('choice')
    }, function () { $(".widgetBtn").eq(0).addClass('choice').siblings().removeClass('choice') })
}
)

//이미지 적용
var photoList = document.querySelectorAll(".listS");

for (i = 0; i < photoList.length; i++) {
    photoList[i].style.backgroundImage = 'url(img/sub_1/dog_' + (i + 1) + '.jpg)';
};

//표
$(document).ready(function(){
    $("table tr:nth-child(1)>td:nth-child(2)").addClass("type");
    $("table tr:nth-child(1)>td:nth-child(4)").addClass("age");
    $("table tr:nth-child(2)>td:nth-child(2)").addClass("sex");
    $("table tr:nth-child(2)>td:nth-child(4)").addClass("vac");
    $("table tr:nth-child(3)>td:nth-child(2)").addClass("serg");
    $("table tr:nth-child(3)>td:nth-child(4)").addClass("care");
    });
    

//자세히보기
$(document).on("click", ".more", function () {
    var moreIdx = ($(this).parents(".listLine").index() / 2);
    var current = $(".more").index(this);

    var videoArr = ["https://www.youtube.com/embed/dThIqeN7CTU", "https://www.youtube.com/embed/Y5CV6ibP7Ao", "https://www.youtube.com/embed/ItppeQZHsvU", "https://www.youtube.com/embed/y9A5U4k8yAI"]
    var textArr_1 =["포메라니안","하이브리드견","말티푸","푸들"]
    var textArr_2 =["4개월령","3개월령","7개월령","7개월령"]
    var textArr_3 =["남아","여아","여아","남아"]
    var textArr_4 =["미접종","완료","완료","완료"]
    var textArr_5 =["미완료","미완료","완료","미완료"]
    var textArr_6 =["케어불가","케어불가","케어불가","케어불가"]
    $("iframe").eq(moreIdx).attr("src", videoArr[current]);
    $(".type").eq(moreIdx).text(textArr_1[current]);
    $(".age").eq(moreIdx).text(textArr_2[current]);
    $(".sex").eq(moreIdx).text(textArr_3[current]);
    $(".vac").eq(moreIdx).text(textArr_4[current]);
    $(".serg").eq(moreIdx).text(textArr_5[current]);
    $(".care").eq(moreIdx).text(textArr_6[current]);

    $(".detail").eq(moreIdx).stop().slideDown();

    var photoListMore = document.querySelectorAll(".img");

    for (j = 0; j < photoListMore.length; j++) {
        photoListMore[j].style.backgroundImage = 'url(img/sub_1/dog_' + (current+1) + '_' + (j + 1) + '.jpg)';
    };

    if ($(".more").eq(current).hasClass("moreOpen")) {
        $(".detail").not(":eq(" + moreIdx + ")").stop().slideUp();
        $(".more").removeClass("moreClose").addClass("moreOpen")
        $(".more").eq(current).addClass("moreClose").removeClass("moreOpen")
    } else {
        $(".detail").stop().slideUp();
        $(".more").eq(current).addClass("moreOpen").removeClass("moreClose")
    }
});

//닫기
$(".closeBtn").click(function () {
    var closeIdx = ($(this).parents(".detail").index() - 1) / 2
    $(".detail").eq(closeIdx).stop().slideUp();
    $(".more").addClass("moreOpen").removeClass("moreClose");
})


//더보기
var moreTxt = document.querySelector("#moreList");
var lineIdx = document.querySelectorAll(".listLine")
var listIdx = 0;

$("#moreList").click(function () {
    if ($(".listLine").eq(listIdx).is(":visible")) {
        listIdx++
        $(".listLine").eq(listIdx).slideDown();
        $(this).addClass("moreOpen_2").removeClass("moreClose_2")
    } else if($(".listLine").eq(3)){
        $(".listLine").not(":first").slideUp()
        $(this).addClass("moreClose_2").removeClass("moreOpen_2")
        listIdx=0;
    }
    // if ($(this).hasClass("moreOpen_2")) {
    //     $(this).removeClass("moreClose_2").addClass("moreOpen_2")
    //     $(this).addClass("moreClose_2").removeClass("moreOpen_2")
    // } else {
    //     $(this).addClass("moreOpen_2").removeClass("moreClose_2")
    // } 
    }

    
);

// $("#moreList").click(function () {
//     if ($("#board").height() > lineIdx.length * 420) {
//         $(".listLine").not(":first").slideUp();
//         listIdx = 1;
//         moreTxt.innerText = "더보기";
//     } else if ($("#board").height() >= ((lineIdx.length - 1) * 420)) {
//         $(".listLine").eq(listIdx).slideDown();
//         listIdx++;
//         moreTxt.innerText = "접기";
//     } else if ($("#board").height() < lineIdx.length * 420) {
//         $(".listLine").eq(listIdx).slideDown();
//         listIdx++;
//         moreTxt.innerText = "더보기";
//     }
// });


