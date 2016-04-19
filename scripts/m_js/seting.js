$(function(){
  
  $('.operation .btn').bind('click',function(){
  	$('.'+$(this).attr('data')).css('display','block')
  })
  $('.btn1').bind('click',function(){

  	$(this).parent().parent().css('display','none')
  })
  /*左侧导航*/
  $('#menu>li').hover(function(){
    $(this).addClass('active')
  },function(){

    $(this).removeClass('active')
  })

var prev;
  $('#menu').delegate('li','click',function(e){
    e.stopPropagation()
    if(prev){
      if(prev.parent().get(0)==$(this).parent().get(0)){
        prev.children('ul').slideUp();

      }else if(prev.parent().parent().parent().get(0)==$(this).parent().get(0)){

          prev.parent().parent().children('ul').slideUp();


      }else if(prev.children().get(0)===undefined){
        prev.parent().parent().parent().slideUp();
      }



    }
    $(this).children('ul').slideDown();
    prev=$(this);


    if($(this).children().get(0)===undefined){

        $(this).css('padding-left','40px')
    }
  })


})