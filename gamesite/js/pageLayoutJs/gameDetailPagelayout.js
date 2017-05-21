/**
 * Created by Administrator on 2017/5/8.
 */
/**导航模块*/
function navigationModule() {
    /**点击排行 页面跳转到排行*/
    var paihang=document.getElementById("paihang");

    paihang.onclick=function () {

        document.getElementsByClassName("ranking")[0].scrollIntoView();
    };

    /**点击活动 页面跳转到报名*/
    var activity=document.getElementById("activity");

    activity.onclick=function () {

        document.getElementsByClassName("applywindow")[0].scrollIntoView();
    };

    /**点击新闻 页面跳转到报名*/
    var information=document.getElementById("information");

    information.onclick=function () {

        document.getElementsByClassName("information")[0].scrollIntoView();
    };
}
/**比赛模块*/
function matchModule() {
    /**赛事切换栏*/
    var matchindex=0;

    var tabitems = document.getElementsByClassName("tabitem");
    var matchlists = document.getElementsByClassName("matchlist");

    var $tabitem=$(".tabitem");  /*获取所有的比赛场次标签*/
    var $matchlist=$(".matchlist");  /*获取所有的比赛列表 */


    $tabitem.hover(function () {
        index=$(this).index();
        // matchlists[index].style.display="block"
        //选中的比赛的标签增加变背景颜色类 未选择的比赛的标签移出颜色类
        $tabitem.eq(index).addClass('tabitemOn').siblings().removeClass('tabitemOn');

        //选中的比赛的标签对应的列表增加显示类，移出隐藏类   未选择的比赛的标签对应的列表增加隐藏列，移出显示类
        $matchlist.eq(index).addClass('show');
        $matchlist.eq(index).removeClass('hide');
        $matchlist.eq(index).siblings().addClass("hide");
        $matchlist.eq(index).siblings().removeClass('show')
        // alert(index+"in");
    },function () {
        // alert(index+"out");
        // matchlists[index].style.display="none"

    });
}
/**跳转页面模块*/
function skipPageModule() {
    var personalInfo = document.getElementById("personalInfo");

    //跳转到个人页面
    personalInfo.onclick=function () {
        alert("goto 个人页面");

        // document.getElementsByClassName("ranking")[0].scrollIntoView();
        window.location.href='personalPage.html?id='+sessiongetItem("user_name");
    };

    var gotoHomePage=document.getElementById("gotoHomePage");
    //跳转到主页面
    gotoHomePage.onclick=function () {
        alert("goto 主页面");
        window.location.href='../../index.html';
    }

    skiptoOtherPersonalPage();

    function skiptoOtherPersonalPage(){
        var headimg=document.getElementsByClassName("headimg");

        // alert("headinglength:"+headimg.length);
        if(headimg.length>0){
            for( var i =0;i<headimg.length;i++){
                headimg[i].onclick=function () {
                    alert(this.name);
                    window.location.href='personalPage.html?id='+this.name;

                }
            }

       }
    }


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