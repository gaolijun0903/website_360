;
function showSignDialog(a) {
    if (a === "signin") {
        $("#iframeSignin").show();
        $("#iframeSignup").hide();
        $(".tab_login").addClass("cur").siblings().removeClass("cur");
    } else {
        $("#iframeSignup").show();
        $("#iframeSignin").hide();
        $(".tab_reg").addClass("cur").siblings().removeClass("cur");
    }
    $("#signDialog").show();
}
function hideSignDialog() {
    $("#signDialog").hide();
}
$(".wan_360layer_close").on("click",
function() {
    hideSignDialog();
});
$(".tab_login").on("click",
function() {
    $(this).addClass("cur").siblings().removeClass("cur");
    $("#iframeSignin").show();
    $("#iframeSignup").hide();
});
$(".tab_reg").on("click",
function() {
    $(this).addClass("cur").siblings().removeClass("cur");
    $("#iframeSignup").show();
    $("#iframeSignin").hide();
});
$(function() {
    $(window).resize(b);
    function b() {
        if (window.innerWidth <= 1366) {
            $("body").addClass("thinScreen");
        } else {
            $("body").removeClass("thinScreen");
        }
    }
    b();
    $("#news").slide({
        mainCell: ".bd ul",
        autoPage: true,
        effect: "top",
        autoPlay: true,
        pnLoop: false,
        mouseOverStop: false
    });
    $(".loop1").slide({
        titCell: ".hd1 ul",
        mainCell: ".bd1 ul",
        autoPage: true,
        effect: "left",
        autoPlay: false,
        scroll: 4,
        vis: 4
    });
    $(".loop2").slide({
        titCell: ".hd2 ul",
        mainCell: ".bd2 ul",
        autoPage: true,
        effect: "left",
        autoPlay: false,
        scroll: 4,
        vis: 4
    });
    /*$(".loop3").slide({
        titCell: ".hd ul",
        mainCell: ".bd ul",
        autoPage: true,
        effect: "left",
        autoPlay: false,
        scroll: 5,
        vis: 5
    });
    $(".loop4").slide({
        titCell: ".hd ul",
        mainCell: ".bd ul",
        autoPage: true,
        effect: "left",
        autoPlay: false,
        scroll: 5,
        vis: 5
    });*/
    var a = new Swiper(".swiper1", {
        loop: true,
        autoplay: 3000,
        pagination: ".swiper-pagination",
        paginationClickable: true
    });
    $(".hotrank-div li").on("mouseenter",
    function() {
        if (!$(this).find(".list-rank").hasClass("list-rank-cur")) {
            $(this).find(".list-rank").addClass("list-rank-cur");
            $(this).siblings("li").find(".list-rank").removeClass("list-rank-cur");
        }
    });
    $(".fixed-tools .code").on("mouseenter",
    function() {
        $(this).find(".info").show();
    });
    $(".fixed-tools .code").on("mouseleave",
    function() {
        $(this).find(".info").hide();
    });
    $(".toTop").click(function() {
        $("body,html").animate({
            scrollTop: 0
        },
        500);
    });
});