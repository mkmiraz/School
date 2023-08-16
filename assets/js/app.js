$(".bars").click(function(){
    $('.nav_area').toggleClass('active');
    $('.bars').toggleClass('active_bars');
});

$('.sub_nav').click(function(){
    $('.sub_nav_area').fadeToggle(100);

});

$('.slider_box').owlCarousel({
    loop:true,
    items:1,
    autoplay:true,
    autoplayHoverPause:true,
    smartSpeed:1000,
    autoplayTimeout:5000,
    animateOut:'fadeOut',
    animateIn:'fadeIn'
})

$('.result_btn').click(function(){
    $('.show_result').slideToggle();

});



let printBtn = document.getElementById('print');
printBtn.addEventListener('click', function() {
    print();
});




