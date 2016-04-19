$(function(){

$('#nav li').hover(function(){
	$(this).find('ul').slideDown();
},function(){
	$(this).find('ul').slideUp();
   
})
/*tabs*/
$('.tabs li').bind('click',function(){
	$('.tabs li').removeClass('active')
    $(this).addClass('active')
	$('.comment-all').removeClass('comment-act');
	$('.comment-all').eq($(this).index()).addClass('comment-act');
})
/*发布信息*/
	$('#issue').bind('click',function(){
		$('.issue').toggleClass('appear')
	})
})
