//네비게이션
$(window).scroll(function () {
    scrollColor();
})

function scrollColor() {
    if ($(window).scrollTop() > 300) {
        $("#sticky, .menu_1>ul").addClass("scroll")
    } else {
        $("#sticky, .menu_1>ul").removeClass("scroll")
    }
};

if (window.matchMedia("(min-width:800px)").matches) {
    $(".menu_1").on("mouseenter focusin", function () {
        $("ul", this).show();
    }).on("mouseleave", function () {
        $("ul", this).hide();
    });
}

$("#hamWrap").click(function () {
    $("span", this).toggleClass("open");
    if ($("#ham_1").hasClass("open")) {
        $("#navSmall").animate({ left: "0px" }, "fast")
    } else {
        $("#navSmall").animate({ left: "-100%" }, "fast")

    }
})

$(".menu_1s").click(function () {
    $("ul", this).toggle("fast");
    if ($("i", this).hasClass("fa-plus")) {
        $("i", this).removeClass("fa-plus").addClass("fa-minus");
    } else {
        $("i", this).removeClass("fa-minus").addClass("fa-plus");

    }
})