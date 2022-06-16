$(document).ready(function () {
    $(".listSWrap").css("width", `${$('.container').width() / 3}px`)
})

madeDiv();

function madeDiv() {
    var div = document.createElement("div");
    div.setAttribute("class", "listLine");
    $(".detail").before(div);
    for (i = 0; i < 3; i++) {

        var div_2 = document.createElement("div");
        var div_3 = document.createElement("div");
        var div_4 = document.createElement("div");

        div_2.setAttribute("class", "listSWrap");
        div_3.setAttribute("class", "listS");
        div_4.setAttribute("class", "more");
        div_4.innerText = "자세히 보기";
        $(".listLine").append(div_2).find(div_2).append(div_3).find(div_3).append(div_4);


    }

    $(document).ready(function () {
        $(".listSWrap").css("width", `${$('.container').width() / 3}px`)
    })
    var photoList = document.querySelectorAll(".listS");

    for (i = 0; i < photoList.length; i++) {
        photoList[i].style.backgroundImage = 'url(img/sub_1/dog_' + (i + 1) + '.jpg)';
    };

};



$("#moreList").click(function () {
    madeDiv();
})


var photoList = document.querySelectorAll(".listS");

for (i = 0; i < photoList.length; i++) {
    photoList[i].style.backgroundImage = 'url(img/sub_1/dog_' + (i + 1) + '.jpg)';
};


var photoL = document.querySelectorAll(".img")
for (i = 0; i < photoL.length; i++) {
    photoL[i].style.backgroundImage = 'url(img/sub_1/dog_1_' + (i + 1) + '.jpg)';
};

$(".more").click(function () {
    $(".detail").toggle()
})

