//배너 높이
$(document).ready(function () {
    $("#banner").css("height", $(window).height() + 'px');
});

//리사이즈
window.onresize = function () {
    document.location.reload();
};

//네비게이션
$(document).ready(function () {
    scrollColor();
})
$(window).scroll(function () {
    scrollColor();
})

function scrollColor() {
    if ($(window).scrollTop() > 300) {
        $("#sticky, .menu_2>a").addClass("scroll")
    } else {
        $("#sticky, .menu_2>a").removeClass("scroll")
    }
}
if (window.matchMedia("(min-width:800px)").matches) {
    $(".menu_1").on("mouseenter focusin", function () {
        $("ul", this).show();
    }).on("mouseleave", function () {
        $("ul", this).hide();
    });
}

$("#hamWrap").click(function(){
    $("span",this).toggleClass("open");
    $("#navSmall").toggle()
})

$(".menu_1s").click(function(){
    $("ul",this).toggle();
    if($("i",this).hasClass("fa-plus")){
        $("i",this).removeClass("fa-plus").addClass("fa-minus");
    } else{
        $("i",this).removeClass("fa-minus").addClass("fa-plus");

    }
})

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
var indexNum = 0

for (i = 0; i < slideBox.length; i++) {
    slideBox[i].style.backgroundImage = 'url(img/small_' + (i + 1) + '.jpg)';
};


if (window.matchMedia("(min-width:800px)").matches) {

    for (i = 0; i < slideBox.length; i++) {
        slideBox[i].style.width = wrapWidth / 4 + "px";
    };

    function smallSlide() {
        slidesBox.style.left = - (wrapWidth / 4) * (indexNum + 1) + "px";
        indexNum++;
        if (indexNum > slideBox.length - 4) {
            slidesBox.style.left = "0px";
            indexNum = 0;
        }
    }

    function move(page) {
        slidesBox.style.left = - (wrapWidth / 4) * page + "px";
        indexNum = page;
    }

    $("#next").click(function () {
        if (indexNum < slideBox.length - 4) {
            move(indexNum + 1);
        } else {
            move(0);
        }
    })

    $("#prev").click(function () {
        if (indexNum > 0) {
            move(indexNum - 1);
        } else {
            move(slideBox.length - 4);
        }
    })
} else if (window.matchMedia("(min-width:600px)").matches) {

    for (i = 0; i < slideBox.length; i++) {
        slideBox[i].style.width = wrapWidth / 3 + "px";
    };

    function smallSlide() {
        slidesBox.style.left = - (wrapWidth / 3) * (indexNum + 1) + "px";
        indexNum++;
        if (indexNum > slideBox.length - 3) {
            slidesBox.style.left = "0px";
            indexNum = 0;
        }
    }

    function move(page) {
        slidesBox.style.left = - (wrapWidth / 3) * page + "px";
        indexNum = page;
    }

    $("#next").click(function () {
        if (indexNum < slideBox.length - 3) {
            move(indexNum + 1);
        } else {
            move(0);
        }
    })

    $("#prev").click(function () {
        if (indexNum > 0) {
            move(indexNum - 1);
        } else {
            move(slideBox.length - 3);
        }
    })
} else {
    for (i = 0; i < slideBox.length; i++) {
        slideBox[i].style.width = wrapWidth / 2 + "px";
    };

    function smallSlide() {
        slidesBox.style.left = - (wrapWidth / 2) * (indexNum + 1) + "px";
        indexNum++;
        if (indexNum > slideBox.length - 2) {
            slidesBox.style.left = "0px";
            indexNum = 0;
        }
    }

    function move(page) {
        slidesBox.style.left = - (wrapWidth / 2) * page + "px";
        indexNum = page;
    }

    $("#next").click(function () {
        if (indexNum < slideBox.length - 2) {
            move(indexNum + 1);
        } else {
            move(0);
        }
    })

    $("#prev").click(function () {
        if (indexNum > 0) {
            move(indexNum - 1);
        } else {
            move(slideBox.length - 2);
        }
    })
}

setInterval(smallSlide, 3000)

//section#3 크기
if (window.matchMedia("(min-width:800px)").matches) {

    $(function () {
        $("#text").css("width", ($('.container').width() / 2) + 'px')
    })
} else {
    $(function () {
        $("#text").css("width", "100%")
    })
}
if (window.matchMedia("(min-width:800px)").matches) {
$(document).on("scroll", function(){
    if($(window).scrollTop() > $("#form").position().top){
        $("#text>h1").animate({right:"0px"},"slow", function(){
            $("#text>h2").delay(200).animate({left:"0px"},"slow", function(){
                $("#text>p").delay(100).animate({bottom:"0px"},"slow")
            })
        })
    }
})
}else{
    $(document).on("scroll", function(){
        if($(window).scrollTop() > ($("#text").position().top - 350)){
            $("#text>h1").animate({right:"0px"},"slow", function(){
                $("#text>h2").delay(200).animate({left:"0px"},"slow", function(){
                    $("#text>p").delay(100).animate({bottom:"0px"},"slow")
                })
            })
        }
    })
}
//동영상
$("#cover i").click(function () {
    $("#cover").html("<iframe width='100%' height='100%' src='https://www.youtube.com/embed/k7NRCUU5qqQ?autoplay=1&mute=1'; allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>")
})

$("#cover div").hover(function () {
    $(this).css("animation-play-state", "paused")
}, function () {
    $(this).css("animation-play-state", "running")
})

//숫자증가
var count1 = count2 = count3 = count4 = 0;

function counter() {
    var num1 = setInterval(counter1, 6);
    function counter1() {
        count1++;
        if (count1 <= 532) {
            $(".countNum").eq(0).text(count1);
        } else {
            clearInterval(num1);
        }
    }
    var num2 = setInterval(counter2, 9);
    function counter2() {
        count2++;
        if (count2 <= 312) {
            $(".countNum").eq(1).text(count2);
        } else {
            clearInterval(num2);
        }
    }
    var num3 = setInterval(counter3, 11);
    function counter3() {
        count3++;
        if (count3 <= 220) {
            $(".countNum").eq(2).text(count3);
        } else {
            clearInterval(num3);
        }
    }
    var num4 = setInterval(counter4, 40);
    function counter4() {
        count4++;
        if (count4 <= 32) {
            $(".countNum").eq(3).text(count4);
        } else {
            clearInterval(num4);
        }
    }
}

document.addEventListener("scroll", function () {
    if ($(window).scrollTop() > ($("#count").position().top - 80) && $(window).scrollTop() < ($("#count").position().top - 40)) {
        counter();
    }
})

//리뷰
var reviewImgs = document.querySelectorAll(".reviewImg");
var imgIdx = 0;

for (imgIdx = 0; imgIdx < reviewImgs.length; imgIdx++) {
    reviewImgs[imgIdx].style.backgroundImage = 'url(img/review_' + (imgIdx + 1) + '.jpg)';
};

var reviewWidth = document.querySelector('#reviewSlide').offsetWidth;
var reviewBox = document.querySelectorAll('.reviewBox');

if (window.matchMedia("(min-width:800px)").matches) {

    for (i = 0; i < reviewBox.length; i++) {
        reviewBox[i].style.width = reviewWidth / 3 + "px";
    };

    function pager(pageNum) {
        $("#reviewList").animate({ left: `-${(reviewWidth * pageNum)}px` }, "fast", "linear");
    }

    $(".page").eq(0).click(function () {
        pager(0);
        $(this).addClass("on").siblings().removeClass("on");
    });

    $(".page").eq(1).click(function () {
        pager(1);
        $(this).addClass("on").siblings().removeClass("on");
    });

    $(".page").eq(2).click(function () {
        pager(2);
        $(this).addClass("on").siblings().removeClass("on");
    });

} else if (window.matchMedia("(min-width:600px)").matches) {

    for (i = 0; i < reviewBox.length; i++) {
        reviewBox[i].style.width = reviewWidth / 2 + "px";
    };

    for (i = 0; i < 2; i++) {
        var li = document.createElement("li");
        li.innerText = i + 4;
        li.setAttribute("class", "page");
        $("#pageList").append(li);
    };

    function pager(pageNum) {
        $("#reviewList").animate({ left: `-${(reviewWidth * pageNum)}px` }, "fast", "linear");
    }



    $(".page").eq(0).click(function () {
        pager(0);
        $(this).addClass("on").siblings().removeClass("on");
    });

    $(".page").eq(1).click(function () {
        pager(1);
        $(this).addClass("on").siblings().removeClass("on");
    });

    $(".page").eq(2).click(function () {
        pager(2);
        $(this).addClass("on").siblings().removeClass("on");
    });

    $(".page").eq(3).click(function () {
        pager(3);
        $(this).addClass("on").siblings().removeClass("on");
    });

    $(".page").eq(4).click(function () {
        pager(4);
        $(this).addClass("on").siblings().removeClass("on");
    });


} else {

    for (i = 0; i < reviewBox.length; i++) {
        reviewBox[i].style.width = reviewWidth  + "px";
    };

    $(document).ready(function(){
        $("#pageList").hide();
        $("#pageBtn").show();
    })

    var pageIdx =0;

    function pager(pageNum) {
        $("#reviewList").animate({ left: `-${(reviewWidth * pageNum)}px` }, "fast", "linear");
        pageIdx = pageNum;
    }

    $("#next_2").click(function () {
        if (pageIdx < reviewBox.length - 1) {
            pager(pageIdx+1);
        } else {
            pager(0);
        }
    })

    $("#prev_2").click(function () {
        if (pageIdx > 0) {
            pager(pageIdx - 1);
        } else {
            pager(reviewBox.length -1);
        }
    })

}

