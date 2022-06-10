var nav=document.getElementsByTagName("nav")[0];
var button=document.getElementsByClassName("button")[0];
var links=document.getElementsByClassName("links")[0];
var hidden=true;
if(window.screen.width>800) {
    window.addEventListener("scroll", function (e) {
        if (window.pageYOffset > 250) {
            nav.style.top = "0px";
        } else {
            nav.style.top = "-800px";
        }
    });
}else{
    nav.style.top="0px";
}
button.addEventListener("click",function (e) {
    if(hidden){
        links.style.display="block";
        hidden=false;
    }else{
        links.style.display="none";
        hidden=true;
    }
});
