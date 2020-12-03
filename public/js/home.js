$(document).ready(function(){
})

$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();

    if(scrollTop > 700) {
        $('#header_cont').css("background-color", "var(--bg-dark)")
        $('#header_cont').css("border-color", "var(--accent)")
    } else {
        $('#header_cont').css("background-color", "transparent")
        $('#header_cont').css("border-color", "transparent")
    }

    $('.arrow').css({
        opacity: function () {
            var elementHeight = $(this).height(),
                opacity = ((elementHeight - scrollTop) / elementHeight);
            return opacity;
        }
    });
    $('.arrow').css("opacity", 1-$(window).scrollTop() / 400)

});
