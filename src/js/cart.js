//关闭提示信息
$('.my a').click(function(){
    $(this).parent().remove();
})

// 添加商品到购物车
//获取cookie
let str_cookie = $.cookie('products') ? $.cookie('products') : '';
//转为对象
let obj_cookie = convertStrToObj(str_cookie);
console.log(str_cookie,obj_cookie);
//遍历对象
for(let key in obj_cookie){
    let good = obj_cookie[key];
    //添加到页面
    $('tbody').append(
        `
        <td>
            <img src="${good.src}" alt="">
            <ul>
                <li>${key}</li>
                <li>${good.color}</li>
            </ul>
        </td>
        <td>￥${good.price}</td>
        <td><button> - </button>
            <input type="text" name="" id="good_num" value="${good.num}">
            <button> +</button></td>
        <td>￥${good.price*good.num}</td>
        <td><a href="">删除</a></td>
        `
    )
}

