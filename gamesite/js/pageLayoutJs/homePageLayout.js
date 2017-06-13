/**
 * Created by Administrator on 2017/5/8.
 */
/**定义*/

/** banner*/
function bannerModule() {
    /*点击 下一张按钮 被点击的时候 图片进行切换 小圆点切换*/
    var $pic=$(".pic");  /*获取图片点击区域*/
    var $next=$(".next");/*获取下一张的按钮*/
    var $prev=$(".prev");/*获取上一张的按钮*/

    var $img=$(".pic img");   /*获取pic下所有的img*/
    var $lib=$(".lib span");  /*获取所有的小圆点*/
    var index=0;    //定义当前图片下标
    var length=$img.length;   //图片个数

    //图片从左向右切换
    function changeImage() {
        index++;
        /* 图片  第几张   淡入显示        其他兄弟   淡出隐藏       */
        index=index%length;
        $img.eq(index).fadeIn(300).siblings().fadeOut(300);
        $lib.eq(index).addClass('on').siblings().removeClass('on');

    }
    //图片从右向左切换
    function changeImageRighttoLeft() {
        index--;
        /* 图片  第几张   淡入显示        其他兄弟   淡出隐藏       */
        index=index<0?length:index;
        $img.eq(index).fadeIn(300).siblings().fadeOut(300);
        $lib.eq(index).addClass('on').siblings().removeClass('on');

    }

    //开启图片从左向右切换定时器
    var intervalHandle = setInterval(changeImage,1000);

    /**逻辑*/

    //下一张点击时图片向右移动一张
    $next.click(function () {
        //关闭图片切换定时器
        clearInterval(intervalHandle);
        //图片从左向右切换
        changeImage();

    })

    //下一张移除焦点时开启定时器
    $next.hover(function () {

    },function () {
        //关闭图片切换定时器
        clearInterval(intervalHandle);
        //开启图片切换定时器
        intervalHandle = setInterval(changeImage,1000);

    });

    //上一张点击时图片向左移动一张
    $prev.click(function () {
        //关闭图片切换定时器
        clearInterval(intervalHandle);
        //图片从右向左切换
        changeImageRighttoLeft();

    })

    //上一张移除焦点时开启定时器
    $prev.hover(function () {


    },function () {
        //关闭图片切换定时器
        clearInterval(intervalHandle);
        //开启图片切换定时器
        intervalHandle = setInterval(changeImage,1000);

    });

    $lib.hover(function () {/*移入小圆点上*/
        //关闭图片切换定时器
        clearInterval(intervalHandle);
        index=$(this).index(); //index默认为被移入的小圆点的下标
        $img.eq(index).fadeIn(300).siblings().fadeOut(300);
        $lib.eq(index).addClass('on').siblings().removeClass('on');
    },function () {
        //开启图片切换定时器
        intervalHandle = setInterval(changeImage,1000);

    });

    $pic.hover(function () {
        //关闭图片切换定时器
        clearInterval(intervalHandle);

    },function () {
        //开启图片切换定时器
        intervalHandle = setInterval(changeImage,1000);

    });

    //图片点击事件进入活动详细页面
    $pic.click(function () {
        //图片点击处理
        alert("图片点击处理index:"+index);
        window.location.href='gamesite/web/gameDetailPage.html';
    });


}
/** navigation */
function navigationModule() {
    /**点击排行 页面跳转到排行*/
    var paihang=document.getElementById("paihang");

    paihang.onclick=function () {
        document.getElementsByClassName("ranking")[0].scrollIntoView();
    };

    /**报名点击事件*/
    var $applyentrance=$(".applyentrance");

    $applyentrance.click(function () {
        //报名处理
        alert("报名处理index:"+index);
    });

    /**点击活动 页面跳转到报名*/
    var activity=document.getElementById("activity");

    activity.onclick=function () {

        document.getElementsByClassName("applywindow")[0].scrollIntoView();
    };
}
/** dialog */
function dialogModule() {
    /**模态框*/
    var e1 = document.getElementById('login_overlay');
    var e2 = document.getElementById('register_overlay');

    var gotologin=document.getElementById('gotologin');
    var gotorigist=document.getElementById('gotorigist');

    //判断打开登录或者注册页面（e1为 登录页面、e2为注册页面）
    function onOrOffloginDialog() {
        e1.style.visibility = (e1.style.visibility == "visible") ? "hidden" : "visible";
    }
    //判断打开登录或者注册页面（e1为 登录页面、e2为注册页面）
    function onOrOffRegisterDialog() {
        e2.style.visibility = (e2.style.visibility == "visible") ? "hidden" : "visible";
    }

    /* 开启模态框 */
    gotologin.onclick=function () {
        //判断打开登录或者注册页面（e1为 登录页面、e2为注册页面）
        onOrOffloginDialog();
    };

    gotorigist.onclick=function () {
        //判断打开登录或者注册页面（e1为 登录页面、e2为注册页面）
        onOrOffRegisterDialog();
    }

    /* 关闭模态框 */
    var cleanLogin_data = document.getElementById('cleanLogin_data');
    var cleanRegister_data = document.getElementById('cleanRegister_data');

    //关闭登录页面
    cleanLogin_data.onclick=function () {
        onOrOffloginDialog();
    };
    //关闭注册页面
    cleanRegister_data.onclick=function () {
        onOrOffRegisterDialog();
    }
}

function skipPageModule() {
    //点击新闻跳转到新闻详细
    var gotoinfo=document.getElementById("gotoinfo");
    gotoinfo.onclick=function () {
        alert("goto 详细页面");
        window.location.href='gamesite/web/gameDetailPage.html';

    };

    //点击头像跳转到个人页面
    var personalInfo=document.getElementById("personalInfo");
    personalInfo.onclick=function () {
        alert("goto 个人页面");
        window.location.href='gamesite/web/personalPage.html?id='+sessiongetItem("user_name");

    };

    skiptoOtherPersonalPage();

    function skiptoOtherPersonalPage(){
        //点击头像跳转到个人页面
        var $headimg=$(".headimg");  /*获取图片点击区域*/
        // alert($headimg.length);
        //图片点击事件进入个人页面
        $headimg.click(function (e) {
            // alert("id="+id);
            alert("goto 个人页面");

            window.location.href='gamesite/web/personalPage.html?id='+$(e.target).attr('name');
        });
    }

}

/** isLogin */
function isLogin() {
    if(sessiongetItem("isLogin")=="yes"){
        //隐藏登录注册
        var nologined=document.getElementById("nologined");
        nologined.style.display="none";
        //显示用户登录信息
        var logined=document.getElementById("logined");
        logined.style.display="block";
        var login_name_span=document.getElementById("login_name_span");
        login_name_span.innerHTML=sessiongetItem("user_name");
    }else {
        //显示登录注册
        var nologined=document.getElementById("nologined");
        nologined.style.display="block";
        //隐藏用户登录信息
        var logined=document.getElementById("logined");
        logined.style.display="none";
    }
}
