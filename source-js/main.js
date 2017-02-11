$(document).ready(function () {
    $(function () {
        $('.accordion-content').hide();

        $('.accordion').on('click', '.accordion-trigger', function (e) {
            e.preventDefault();

            $('.accordion-content:visible').slideUp(300);

            $(this)
                .next('.accordion-content')
                .not(':animated')
                .slideToggle(300);
        });
    });

    $(".tab_content").hide();
    $(".tab_content:first").show();

    /* if in tab mode */
    $("ul.tabs li").click(function () {

        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading").removeClass("d_active");
        $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

    });
    /* if in drawer mode */
    $(".tab_drawer_heading").click(function () {

        $(".tab_content").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading").removeClass("d_active");
        $(this).addClass("d_active");

        $("ul.tabs li").removeClass("active");
        $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
    });


    /* Extra class "tab_last"
     to add border to right side
     of last tab */
    $("ul.tabs li").last().addClass("tab_last");

var survol_themeroller = document.getElementById("survol_themeroller");
var tooltip_themeroller = document.getElementById("tooltip_themeroller");

var survol_age = document.getElementById("survol_age");
var tooltip_age = document.getElementById("tooltip_age");

var survol = document.getElementById("survol");
var tooltip = document.getElementById("tooltip");

survol.onmouseover = function(){
    tooltip.className = "visible";
};

survol.onmouseout = function(){
    tooltip.className = "hidden";
};

survol_themeroller.onmouseover = function(){
    tooltip_themeroller.className = "visible";
};

survol_themeroller.onmouseout = function(){
    tooltip_themeroller.className = "hidden";
};

survol_age.onmouseover = function(){
    tooltip_age.className = "visible";
};

survol_age.onmouseout = function(){
    tooltip_age.className = "hidden";
};

$(".modal").hide();
$("#login").click(function () {
    $(".modal").show();
});
    $(".vex-close").click(function () {
        $(".modal").hide();
    })
});