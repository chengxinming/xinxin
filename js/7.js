$(function(){
    $(".hongselvyou3>p").mouseover(function(){
        $(this).addClass("active").siblings("p").removeClass("active");
        $(this).css("color","white").siblings("p").css("color","");
        var index=$(this).index();
        console.log(index);
       $(".hongselvyou13").eq(index).addClass("selected").siblings().removeClass("selected");
    })
 })