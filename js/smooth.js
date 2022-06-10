$("a").click(function (e) {

   if(this.hash!==""){
       e.preventDefault();
       var cel=this.hash;
    if(window.screen.width>800) {
        $("html,body").animate(
            {scrollTop: $(cel).offset().top - 59}, 800, function () {
                if (window.screen.width < 800) {
                    console.log("AC")
                    $(".links").css("display", "none");
                    hidden = true;
                }
                window.location.hash = cel;
                window.scrollTo(0, $(cel).offset().top - 59);
            }
        );
    }else{
        window.scrollTo(0, $(cel).offset().top - 59);
    }
   }
});
