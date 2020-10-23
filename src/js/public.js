/*header */
$('.h_left').mouseenter(function(){
    $(this).css('background','#dcdcdc');
    $('.h_mark').css('display' , 'block').animate({
        top : 32
    });
})
$('.h_left').mouseleave(function(){
    $(this).css('background','');
    $('.h_mark').css('display' , 'none');
})
$('.h_mark').mouseenter(function(){
    $('.h_left').css('background','#dcdcdc');
    $('.h_mark').css('display' , 'block');
})
$('.h_mark').mouseleave(function(){
    $('.h_left').css('background','');
    $('.h_mark').css('display' , 'none');
})
//英文变中文
$('.h_mark ul li a').each(function(i,value){
    $(value).mouseenter(function(){
        $('.en' + (i + 1)).css('display' , 'none');
        $('.ch' + (i + 1)).css('display' , 'block');
    })
})
$('.h_mark ul li a').each(function(i,value){
    $(value).mouseleave(function(){
        $('.en' + (i + 1)).css('display' , 'block');
        $('.ch' + (i + 1)).css('display' , 'none');
    })
})

//关注有货
$('.h_right ul .follow').mouseenter(function(){
    $( this).css('background','#dcdcdc');
    $('.fol_mark').css('display','block');
})
$('.h_right ul .follow').mouseleave(function(){
    $( this).css('background','');
    $('.fol_mark').css('display','none');
})
//客户服务
$('.h_right ul .service').mouseenter(function(){
    $(this).css('background','#dcdcdc');
    $('.ser_mark p').css('display','block');
})
$('.h_right ul .service').mouseleave(function(){
    $(this).css('background','');
    $('.ser_mark p').css('display','none');
})
//手机版
$('.h_right ul .phone').mouseenter(function(){
    $( this).css('background','#dcdcdc');
    $('.pho_mark').css('display','block');
})
$('.h_right ul .phone').mouseleave(function(){
    $( this).css('background','');
    $('.pho_mark').css('display','none');
})

//导航下拉效果（登录注册购物车页面）
$('.li_grey').each(function(i,value){
    $(value).hover(
        function(){
            $(this).css({
                background : '#efefef'
            });
            $(this).find('.li_mark').each(function(i,value){
                $(value).css('display','block');
            })
        },
        function(){
            $(this).css({
                background : ''
            })
            $('.li_mark').each(function(i,value){
                $(value).css('display','none');
            })
        }
    )
})

//购物车
$('.input .icon-gouwuche').hover(
    function(){
        $('.gwc_mark').css('display','block');
    },
    function(){
        $('.gwc_mark').css('display','none');
    }
)
$('.gwc_mark').hover(
    function(){
        $('.gwc_mark').css('display','block');
    },
    function(){
        $('.gwc_mark').css('display','none');
    }
)
//二级导航
$('.li_mark').each(function(i,value){
    $(value).hover(
        function(){
            $('.nav_mark_box').css('display','block');
            $('.nav_mark').css('display','block');
            $('.nav_mark_box').hover(
                function(){
                    $(this).css('display','block');
                },
                function(){
                    $(this).css('display','none');
                }
            )
            $('.nav_mark').hover(
                function(){
                    $(this).css('display','block');
                    $('.nav_mark .nav_mark_ul li a p').each(function(){
                        $(this).hover(
                            function(){
                                $(this).css('text-decoration','underline')
                            },
                            function(){
                                $(this).css('text-decoration','none')
                            }
                        )
                    });
                },
                function(){
                    $(this).css('display','none');
                    $('.nav_mark_box').css('display','none');
                }
            )
        },
        function(){
            $('.nav_mark_box').css('display','none');
            $('.nav_mark').css('display','none');
        }
    )
})

// 回到顶部按钮
$('.to_top .to_top_ewm').hover(
    function(){
        $('.to_top_mark').css('opacity','1');
    },
    function(){
        $('.to_top_mark').css('opacity','0');
    }
)
$(function() {
    $('.to-top').toTop();
    $('.to_top').toTop();
    $('.to_top').off('click');
});

//右侧广告框
$('.ad .close').click(function(){
    $('.ad').css('display','none');
})

//字符串转为对象方法
function convertStrToObj(str){
    if(str){
        return JSON.parse(str);
    }else{
        return {};
    }
}