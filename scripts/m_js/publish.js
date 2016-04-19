/**
 * Created by Administrator on 2016/4/15.
 */
$(document).ready(function(){
  /*添加联系人*/
 $('.specialbtn').bind('click',function(){
    $('.specialcon').slideDown(); 
 })

    //下拉
    function pulldown(src,act){

        $(src).bind('click',function(e){
            $(this).find(act).slideToggle();
            var a= e.target;

            if($(a).parent().hasClass(act.substr(1))){
              $(this).html($(a).html())
            }

        })
    }






    //页面操作
    pulldown('.main li','.list')//盘源信息
})