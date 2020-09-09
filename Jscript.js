$('.Obtn').click(function(){
    $('.sidebar ul .Odbtn').toggleClass("show");
    $('.sidebar ul .first').toggleClass("rotate");
 });
 $('.sidebar ul li').click(function(){
    $(this).addClass("active").siblings().removeClass("active");
 });

 document.getElementById("mod").addEventListener("click",function()
    {
        document.getElementById("Modify").style.display="none";
        document.getElementById("details").style.display="block";
    })