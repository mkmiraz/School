(function(){
    $(document).ready(function(){

        $(window).scroll(function(){
            $('.menu_bar').toggleClass('active_nav', $(this).scrollTop() > -0);

        });

        var mixer = mixitup('.content');

    });
})(jQuery)

