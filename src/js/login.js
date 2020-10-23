//导航下拉效果
// public中

//密码登录和二维码登录切换
$('.main_big_right_sml .main_big_right_img').click(function(){
    $('.main_big_right_sml').css('display','none');
    $('.main_big_right_mm').css('display','block');
})
$('.main_big_right_mm .main_big_right_img').click(function(){
    // $('.main_big_right_num').off('click');
    // console.log('click');
    $('.main_big_right_mm').css('display','none');
    $('.main_big_right_sml').css('display','block');
})

//扫码登录和密码登录切换
$('.login_left').click(function() {
    $('.normal').css('display','block');
    $('.phone').css('display','none');
})
$('.login_right').click(function() {
    $('.phone').css('display','block');
    $('.normal').css('display','none');
})
//手机验证码登录和普通登录切换
$('.login_left').click(function(){
    $(this).addClass('active');
    $('.login_right').removeClass('active');
})
$('.login_right').click(function(){
    $(this).addClass('active');
    $('.login_left').removeClass('active');
})

//号码下拉列表
$(function(){
    $('.main_big_right_number').click(function(){
        //点击a标签
		if($('.mian_big_right_num').is(':hidden')){//如果当前隐藏
		    $('.mian_big_right_num').show();//那么就显示div
		}else{//否则
		    $('.mian_big_right_num').hide();//就隐藏div
		}
    })
})

//普通登录
//邮箱手机号码验证
$('.normal #uname' || '.phone #uphone').blur(function(){
    var re = /^\d+$/g;
    if(re.test($(this).val())){
        $(this).next().text('合法').css('color','green');
    }else{
        $(this).next().text('邮箱或手机号不合法').css('color','red');
    }
})
//验证密码
$('.normal #upwd').blur(function(){
    var re = /^\d+$/g;
    if(re.test($(this).val())){
        $(this).next().text('合法').css('color','green');
    }else{
        $(this).next().text('密码不合法').css('color','red');
    }
})

//登录
$('.normal .log_sub').click(function(){
    //获取用户名
    let uname = $('.normal #uname').val();
    //获取密码
    let upwd = $('.normal #upwd').val();
    //获取cookie
    let str_cookie = $.cookie('users') ? $.cookie('users') : "";
    //转为对象
    let obj_cookie = convertStrToObj(str_cookie);
    //判断cookie
    if(uname in obj_cookie){
        if(upwd == obj_cookie[uname]){
            alert('登录成功');
            location.href = './list.min.html';
        }else{
            alert('密码不正确');
        }
    }else{
        alert('用户名不存在');
    }
})