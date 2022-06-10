var dots=document.getElementsByClassName("dot");
var slides=document.getElementsByClassName("slide");
var next=document.getElementById("next");
var prev=document.getElementById("prev");
var index=0;
var i=0;
window.onload=function () {
    slides[0].className+=" active";
    dots[0].className+=" dotActive";
    for( var dot in dots){
        dots[dot].addEventListener("click",function (e) {
            var id=e.target.id;
            for(i=0; i<dots.length;i++){
                dots[i].classList.remove("dotActive");
            }
            for( i=0; i<slides.length;i++){
                slides[i].classList.remove("active");
            }
            dots[id-1].className+=" dotActive";
            slides[id-1].className+=" active";
            i=id-1;
        });
    }
};
prev.addEventListener("click",function (e) {
    index--;
    if(index<0){
        index=slides.length-1;
    }
    for(var x=0; x<dots.length;x++){
        dots[x].classList.remove("dotActive");
    }
    for(var x=0; x<slides.length;x++){
        slides[x].classList.remove("active");
    }
    dots[index].className+=" dotActive";
    slides[index].className+=" active";
});
next.addEventListener("click",function (e) {
    index++;
    if(index>=slides.length){
        index=0;
    }
    for(var x=0; x<dots.length;x++){
        dots[x].classList.remove("dotActive");
    }
    for(var x=0; x<slides.length;x++){
        slides[x].classList.remove("active");
    }
    dots[index].className+=" dotActive";
    slides[index].className+=" active";
});
