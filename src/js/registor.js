//导航下拉效果
// public中

//二维码
$('.reg b').hover(
    function(){
        $('.reg_mark').css('display','block');
    },
    function(){
        $('.reg_mark').css('display','none');
    }
)

//普通登录
//邮箱手机号码验证
$('.main_big_right #uname').blur(function(){
    var re = /^\d+$/g;
    if(re.test($(this).val())){
        $(this).next().text('合法').css('color','green');
    }else{
        $(this).next().text('邮箱或手机号不合法').css('color','red');
    }
})
//验证密码
$('.main_big_right #upwd').blur(function(){
    var re = /^\d+$/g;
    if(re.test($(this).val())){
        $(this).next().text('合法').css('color','green');
    }else{
        $(this).next().text('密码不合法').css('color','red');
    }
})

//注册
$('.reg .res_sub').click(function(){
    //存入cookie
    //获取用户名(手机号码)
    let uname = $('.main_big_right #uname').val();
    //获取密码
    let upwd = $('.main_big_right #upwd').val();
    //获取cookie
    let str_cookie = $.cookie('users') ? $.cookie('users') : "";
    //转为对象
    let obj_cookie = convertStrToObj(str_cookie);
    //判断
    if(uname in obj_cookie){
        alert('用户名已存在');
    }else{
        //添加到cookie
        /*
        users ： {
            uname ： xxx,
            upwd : xxx
        }
        */
        obj_cookie[uname] = upwd;
        //存到cookie
        $.cookie('users',JSON.stringify(obj_cookie));
        alert('注册成功');
    }
})


