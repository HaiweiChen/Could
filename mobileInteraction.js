/*移动端H5交互笔记*/
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// 1. 发送验证码
$('.dx-btn').click(function () {
  if ($(this).hasClass('gray')) {
    return false;
  }
  //定义倒计时时间为3秒
  $(this).text('90秒');
  //开始倒计时，并添加灰色class(灰色class定义了倒计时结束的按钮样式);
  $(this).addClass('gray');
  //每隔1000毫秒执行一次time方法
  t = setInterval('time()', 1000);
});
function time(){
  var btn = $('.dx-btn');
  // 截取按钮里的数字
  var sec =  btn.text().substring(0, btn.text().length - 1);
  //当剩余描述大于0的时候倒计时，小于0则清除倒计时并将按钮text变成重新发送；
  if (sec > 0) {
    sec--;
    btn.text(sec + '秒');
  } else {
    if (btn.text() != '重新发送') {
      btn.text('重新发送');
      clearInterval(t);
    }
      btn.removeClass('gray'); //移除灰色class
    }
}
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// 2.弹窗屏幕禁止滚动
// 弹窗按钮事件
$('.pop-btn').click(function(){
  $('.shadow').show();//弹窗图层显示
  //监听,并阻止touchmove事件,将阻止默认事件赋值给a
  document.addEventListener("touchmove", a = function (e) {
    e.preventDefault();
  }, false);
})；
$('.cancel-btn').click(function(){
  $(".shadow").hide();//弹窗图层隐藏
  //移除监听事件
  document.removeEventListener("touchmove", a, false);
});
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
//4.返回顶部
$(function(){
  $(window).scroll(function(){
    if($(this).scrollTop()!=0 & $(this).scrollTop() != 1){
      $('#top').fadeIn();
    }else{
      $('#top').fadeOut();
    }
  });
  $('#top').on('click',function(){
    $('html,body').animate({scrollTop:0},'1000');
  });
});
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
//5.列表滚动
//jQuery.textSlider.js
$(document).ready(function () {
  $(".right").textSlider({ line: 1, speed: 500, timer: 1000 });
});
//6.数字滚动
function number(str) {
  var list = $('.number li');
  var omm = $('#Allmm').val();
  if (omm.indexOf('.') != -1) {
    var omm1 = omm.split('.')[1];
    if (omm1.lenght == 1) {
      omm = omm + '0';
    }
  } else if (omm1.lenght == 0) {
    omm = omm + '.00';
  }
  var str = omm.replace('.', '');
  while (str.length < 11) {
    str = '0' + str;
  }
  $('.number li').each(function () {
    var index = list.index($(this));
    var num = str.charAt(index);
    var upHeight = '-' + 51 * num;
    list.eq(index).find('div').animate({ marginTop: upHeight }, '500');
  });
}
