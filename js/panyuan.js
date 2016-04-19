$(function(){


 $('.leibie').bind('click',function(){
 	  $(this).find('ul').slideToggle();
 })
 /*筛选框*/
 $('.leibie ul').delegate('li','click',function(ev){
  if($(this).attr('id')=="leibie_last"){
    $(this).parent().prev().css('display','none')
  }else{
     $(this).parent().prev().css('display','block')
  }
  if(!$(this).parent().parent().hasClass('large')){

  $(this).parent().prev().prev().html($(this).html());
  saixuan($(this).attr('data'));/*确定每一种类型下只有一个标签*/
  $('<div class="yixuan1" data='+$(this).attr('data')+'><span>'+$(this).html()+'</span><img src="image/cha.png" alt=""></div>').insertBefore($('.clearall'))

  }else{
  var mianji=$(this).html().split('-');
 $(this).parent().parent().next().html(mianji[0]);
 $(this).parent().parent().next().next().next().html(mianji[1]);
 saixuan($(this).attr('data'));
  $('<div class="yixuan2"data='+$(this).attr('data')+'>'+$(this).html()+'<img src="image/cha.png" alt=""></div>').insertBefore($('.clearall'))

  }
  $(this).parent().slideUp();
  ev.stopPropagation();
  

 })

 /*搜索按钮*/
$('.sousuo').mousedown(function(){
	$(this).css('background','#ad1012')
});

/*添加*/
$('button').click(function(){
	$('.row').eq(0).clone(true).appendTo($('.tablebody'))
})
/*标签删除*/
$('.yixuan').delegate('img','click',function(){
	$(this).parent().remove();
})
/*-----清空-----*/
$('.clearall').bind('click',function(){
 $(this).parent().children().remove();
 $('<div type><span>已选标签：</span></div><div class="yixuan1"data="leibie" type><span>类别</span><img src="image/cha.png" alt=""></div><div class="clearall" type>清空</div>').appendTo($('.yixuan'));
})
/*侧滑页*/
/*---出来-----*/
$('.fymc').bind('click',function(){
  $('.cehua').css('transform','translateX(0)')
})
/*-----------------关闭-----------*/
$('.close').bind('click',function(){
  $('.cehua').css('transform','translateX(100%)')

})
$('.cehua_three li').bind('click',function(){
  $('.cehua_three li').removeClass('current');
$(this).addClass('current');
$('.con-card').removeClass('currentcard');
$('.con-card').eq($(this).index()).addClass('currentcard');
})
/*侧滑导航*/
    $('.cehuanav li').bind('click',function(){
        $(this).find('div').css('transform','scale(1,1)')
    })


 /*更多信息*/
    $('.more').bind('click',function(){

        $(this).parent().find('.hide').slideToggle();
        if($(this).find('p').html()!='隐藏详细信息'){
          $(this).find('p').html('隐藏详细信息')
        }else{
          $(this).find('p').html('更多详细信息')
        }
        
        $(this).find('img').toggleClass('morerotatz')
    })

/*函数*/

function saixuan(value){
  $('.yixuan div').each(function(i,obj){
    if($(obj).attr('data')==value){
      $(obj).remove();
    }
  })
}
function tabs(nav,con,act){
    var li=$(nav);
    var table=$(con);
    li.children().bind('click',function(){
        li.children().removeClass(act)
        $(this).addClass(act);
        table.parent().animate({marginLeft:-(table.width()*$(this).index()+1)},1000)
    })
}

    /*查看记录*/
    tabs('.record ul','.table table','recordact')



/*侧滑该记录*/
    $('.record div table').each(function(i,obj){
        $(obj).css('left',i*$(obj).width())
    })

})