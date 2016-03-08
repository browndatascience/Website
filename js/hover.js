$( document ).ready(function() {
	$("[rel='tooltip']").tooltip();

	$('.thumbnail').hover(
		function(){
$(this).find('.caption').slideDown(300); //.fadeIn(250)
},
function(){
$(this).find('.caption').slideUp(300,function(){$ (this).stop( true, true )}); //.fadeOut(205) and stop hover
}
); 
});

// $(document).ready(function() {

//   $(window).scroll(function () {
//       //if you hard code, then use console
//       //.log to determine when you want the 
//       //nav bar to stick.  
//       console.log($(window).scrollTop())
//     if ($(window).scrollTop() > 280) {
//       $('#nav_bar').addClass('navbar-fixed');
//     }
//     if ($(window).scrollTop() < 281) {
//       $('#nav_bar').removeClass('navbar-fixed');
//     }
//   });
// });