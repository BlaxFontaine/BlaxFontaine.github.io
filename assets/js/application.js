var w = Math.round($(document).width() / 255);
var h = Math.round($(document).height() / 255);
var body = $(".main-title, i, .current, .title");

$(document).mousemove(function(e){
    var pageX = Math.round(e.pageX / w);
    var pageY = Math.round(e.pageY / h);
    body.css("color", "rgb("+pageX+","+pageY+",255)");
});