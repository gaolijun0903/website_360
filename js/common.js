;
$("#nav-search").on("focus",
function() {
    $(".search_custom").show();
});
$("#nav-search").on("blur",
function() {
    $(".search_custom").hide();
});
$(".nav_searchBtn").on("click",
function() {
    var a = $("#nav-search").val();
    window.location.href = "/Game.html?name=" + a;
});
$(".menu-button-po").on("click",
function() {
    $("#right").toggleClass("active");
    if ($("#right").hasClass("active")) {
        $("#nav-slide").slideDown();
    } else {
        $("#nav-slide").slideUp();
    }
});
$("#kflb li").on("click",
function() {
    var a = $(this).index();
    $(this).addClass("cur").siblings("li").removeClass("cur");
    $(".kflbqh").eq(a).show().siblings(".kflbqh").hide();
});
$(".wan-logout-btn").on("click",
function() {
    window.location.href = "/Logout.html";
});
$(".hc-login").on("click",function() {
    layer.open({
        type: 2,
        title: "用户登录",
        shadeClose: true,
        shade: 0.01,
        area: ["455px", "462px"],
        content: "loginwindow.html"
    });
});
$(".hc-reg").on("click",function() {
    layer.open({
        type: 2,
        title: "用户注册",
        shadeClose: true,
        shade: 0.01,
        area: ["455px", "521px"],
        content: "regwindow.html"
    });
});
function localdata(b, a) {
    b = b || "layui";
    if (!window.JSON || !window.JSON.parse) {
        return;
    }
    if (a === null) {
        return delete localStorage[b];
    }
    a = typeof a === "object" ? a: {
        key: a
    };
    try {
        var c = JSON.parse(localStorage[b]);
    } catch(d) {
        var c = {};
    }
    if ("value" in a) {
        c[a.key] = a.value;
    }
    if (a.remove) {
        delete c[a.key];
    }
    localStorage[b] = JSON.stringify(c);
    return a.key ? c[a.key] : c;
}