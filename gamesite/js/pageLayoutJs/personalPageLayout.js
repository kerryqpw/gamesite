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
}
/**Dialog模块*/
function  dialogModule() {
    /*打开和关闭战队模态框*/
    var mytermimg=document.getElementById("mytermimg");

    var e1 = document.getElementById('createtream_overlay_select');
    var e2 = document.getElementById('createtream_overlay_create');

    //判断打开创建战队或者查看战队（e1为查看战队、e2为创建战队）
    function onOrOffSelectTreamDialog() {
        e1.style.visibility = (e1.style.visibility == "visible") ? "hidden" : "visible";
    }
    //判断打开创建战队或者查看战队（e1为查看战队、e2为创建战队）
    function onOrOffCreateTreamDialog() {
        e2.style.visibility = (e2.style.visibility == "visible") ? "hidden" : "visible";
    }

    /* 开启模态框 */
    mytermimg.onclick=function () {
        //判断打开创建战队或者查看战队（e1为查看战队、e2为创建战队）
        onOrOffCreateTreamDialog();
    };

    /* 关闭模态框 */
    var cleanTream_select = document.getElementById('cleanTream_select');
    var cleanTream_create = document.getElementById('cleanTream_create');

    //关闭创建战队
    cleanTream_select.onclick=function () {
        onOrOffSelectTreamDialog();
    };

    //关闭查看战队
    cleanTream_create.onclick=function () {
        onOrOffCreateTreamDialog();
    };
}
/**页面跳转模块*/
function skipPageModule() {
    //点击首页进入首页面
    var gotoHomePage = document.getElementById("gotoHomePage");

    //图片点击事件
    gotoHomePage.onclick=function () {
        alert("goto 首页");

        window.location.href='../../index.html';
    };

    //点击新闻进入详细页面
    var gotoinfo = document.getElementById("gotoinfo");

    //图片点击事件
    gotoinfo.onclick=function () {
        alert("goto 详细页面");

        window.location.href='gameDetailPage.html';
    };

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
/**页面公用模块*/
function commonModule(){
    //获取web加载后页面的宽高
    var pageWidth=window.innerWidth;
    var pageHeight= document.body.scrollHeight;
}
/**个人中心游戏切换模块*/
function personalInfoModule() {
    /*个人中心游戏切换**/
    var $gameitem=$(".gameitem");
    $gameitem.hover(function () {
        index=$(this).index();
        $gameitem.eq(index).addClass('gameitemOn').siblings().removeClass('gameitemOn');
    },function () {
        // alert("out")
    });
}

/**创建战队模块*/
function createTreamModule(){

    //战队头像上传
    $('#selectHeadimg').click(function() {
        $('#treamitemFile').click(); // 模拟文件上传按钮点击操作
    });

    //选择文件后将文件名显示
    $('#treamitemFile').change(function () {
        $('#browsetreaminput').val($(this).val());
    });
}




