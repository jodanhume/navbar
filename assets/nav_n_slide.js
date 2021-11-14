$(document).on('ready', function() {
    $(".lazy").slick({
    dots: true,
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    infinite: true,
    autoplay: true
    });
});


window.onscroll= function(){scrollFunction()};
function scrollFunction(){
    if(document.documentElement.scrollTop > 10){
        document.querySelector(".headerBg").style.width = "100%";
        document.querySelector(".headerBg").style.display = "block";
    }
    else {
        document.getElementById("header").style.backgroundColor = "rgba(10,10,10,0)";
        document.querySelector(".headerBg").style.display = "none";
        
        }
    }