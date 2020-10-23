//尺码信息改变
$('.size span').each(function(i,value){
    $(this).click(function(){
        $('.size_mark span').eq(i).css('display','block').siblings().css('display','none');
        
        $(this).css('background','#666').siblings().css('background','');
    })
})

// 商品数量改变
$('.msg .num button:first').click(function(){
    var num = parseInt($(this).next().val());
    if(num > 1){
        $(this).next().val(num-1);
    }else{
        $(this).next().val(1);
    }
})
$('.msg .num button:last').click(function(){
    var num = parseInt($(this).prev().val()) ;
    $(this).prev().val(num+1);
})
$('.num').find('input').blur(function(){
    var re = /^\d+$/g;
    if(re.test($(this).val())){
        $(this).val();
    }else{
        $(this).val(1);
    }
})
//售后服务
var flag = true;
$('.msg10 a').click(function(){
    if(flag){
        $(this).find('span').css('transform','rotate(270deg)');
        $(this).next().css('display','block');
        $('.msg10_mark').animate({
            top : 0
        },500);
        flag = false;
    }else{
        $(this).find('span').css('transform','rotate(90deg)');
        
        $('.msg10_mark').animate({
            top : "-100%"
        },500);
        $(this).next().css('display','none');
        flag = true;
    }
})



//加入到购物车
$('.add a:first').click(function(){
    //获取商品名
    let good_name = $('.main_r').find('#good_name').text();
    console.log(good_name);
    //获取商品价格
    let good_price = parseInt(/(\d+)/.exec($('.price').find('#good_price').text())) ;
    console.log(good_price);
    //获取商品颜色
    let good_color = $('.color').find('#good_color').text();
    //获取商品图片
    let good_src = $('.color').find('#good_src').attr('src');
    //获取商品尺码
    // $('.size span').each(function(i,value){
    //     if($(this).css)
    // })
    // let goog_size = $('.size').find()
    //获取商品数量
    let good_num = $('.num').find('#good_num').val();
    //获取cookie
    let str_cookie = $.cookie('products') ? $.cookie('products') : "";
    //转为对象
    let obj_cookie = convertStrToObj(str_cookie);
    console.log(str_cookie,obj_cookie)
    //判断是否在cookie
    if(good_name in obj_cookie){
        // num++;
        obj_cookie[good_name].num ++;
        alert('加入购物车成功');
    }else{
        obj_cookie[good_name] = {
            price : good_price,
            color : good_color,
            src : good_src,
            num : good_num
        }
        alert('加入购物车成功');
    }
    //放入cookie
    $.cookie('products',JSON.stringify(obj_cookie));
    console.log(obj_cookie);
})