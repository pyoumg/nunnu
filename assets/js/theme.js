$('.datepicker').each(function () {
    var picker = new Pikaday({
        field: this
    });
});


$(function () { // 보이기 | 숨기기 
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            $('#topBtn').fadeIn();
        } else { $('#topBtn').fadeOut(); }
    });
    // 버튼 클릭시 
    $("#topBtn").click(function () {
        $("#topBtn").tooltip('hide');
        $('html, body').animate({
            scrollTop: 0
            // 0 까지 animation 이동합니다.
        }, 350);
        return false;
    });
    $('#topBtn').tooltip('show');

});




$(document).ready(function(){
  

    $(".toggleBtn").click(function(){
        $(this).hide();
    });
    document.title = "nunnu | pyoumg's archive"; 
    var fir=document.location.href.split(':');
    var fir2=fir[0];
    if (fir2=="http"){
        var url="https:"+fir[1];
        document.location=url;
    
    }
    
});



$(function () {

    $(".explanation").mouseover(function () {
        $(this).css("color", "#FFDAB9");
    });
    $(".explanation").mouseout(function () {
        $(this).css("color", "#F08080");
    });
});
$(function () {

    $("#avatar").mouseover(function () {
        $(this).attr("src", $(this).attr("src").replace("off", "on"));
    });
    $("#avatar").mouseout(function () {
        $(this).attr("src", $(this).attr("src").replace("on", "off"));
    });
});