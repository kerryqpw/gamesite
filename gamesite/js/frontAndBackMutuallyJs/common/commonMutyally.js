/**
 * Created by Administrator on 2017/5/10.
 */

/** JS与后台数据交互 */
function commonPageMutuallyModule() {
    //登录功能
    login();

    //注册功能
    register();

    //排行列表功能
    rankingList();
    
    //注销功能
    UserLogout();
}

//登录
function login(){
    var e1 = document.getElementById('login_overlay');
    var e2 = document.getElementById('register_overlay');

    var gotologin = document.getElementById('gotologin');
    var gotorigist = document.getElementById('gotorigist');

    var login_name_error = document.getElementById('login_name_error');
    var login_password_error = document.getElementById('login_password_error');



    //判断打开登录疼或者注册页面（e1为 登录页面、e2为注册页面）
    function onOrOffloginDialog() {
        e1.style.visibility = (e1.style.visibility == "visible") ? "hidden" : "visible";
    }

    //判断打开登录疼或者注册页面（e1为 登录页面、e2为注册页面）
    function onOrOffRegisterDialog() {
        e2.style.visibility = (e2.style.visibility == "visible") ? "hidden" : "visible";
    }

    /** JS与后台数据交换 */
    var login_submit = document.getElementById('login_submit');

    login_submit.onclick = function () {
        //重置验证提示信息
        login_name_error.innerHTML="请输入字母和数字";
        login_name_error.style.color="black";
        login_password_error.innerHTML="请输入数字密码";
        login_password_error.style.color="black";
        //登录
        loginAjax();
    };


    function loginAjax() {
        var login_name = document.getElementById('login_name').value;
        var login_password = document.getElementById('login_password').value;

        //数据验证
        if(login_name.length==0){
            login_name_error.innerHTML="登录名不能为空";
            login_name_error.style.color="red";
            return;
        }

        if(login_password.length==0){
            login_password_error.innerHTML="密码不能为空";
            login_password_error.style.color="red";
            return;
        }

        $.ajax({
            type: "post",
            url: "/ccnb/user/login",
            data: {
                "telephone": login_name,
                "password": login_password
            },
            dataType: "json",
//            contentType:'application/json',
            success: function (data) {
                // alert(data.Flag);
                // alert(data.Msg);

                if (data.Flag == "0") {
                    //关闭弹框
                    onOrOffloginDialog();
                    //保存用户登录状态和数据到本地session
                    /**本地存储*/
                    sessionSetItem("user_name",login_name);
                    sessionSetItem("isLogin","yes");
                    //修改页面展示

                    //隐藏登录注册
                    var nologined=document.getElementById("nologined");
                    nologined.style.display="none";

                    //显示用户登录信息
                    var logined=document.getElementById("logined");
                    logined.style.display="block";

                    //更改用户名信息
                    var login_name_span=document.getElementById("login_name_span");
                    login_name_span.innerHTML=sessiongetItem("user_name");

                }

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                // alert(XMLHttpRequest.status);
                // alert(XMLHttpRequest.readyState);
                // alert(textStatus);
                alert(AjaxErrorMessage());

            },
        });

    }
};

//注册功能
function register() {
    var e1 = document.getElementById('login_overlay');
    var e2 = document.getElementById('register_overlay');

    var gotologin = document.getElementById('gotologin');
    var gotorigist = document.getElementById('gotorigist');

    var register_name_error = document.getElementById('register_name_error');
    var register_password_error = document.getElementById('register_password_error');
    var affirm_password_error = document.getElementById('affirm_password_error');


    //判断打开登录疼或者注册页面（e1为 登录页面、e2为注册页面）
    function onOrOffloginDialog() {
        e1.style.visibility = (e1.style.visibility == "visible") ? "hidden" : "visible";
    }

    //判断打开登录疼或者注册页面（e1为 登录页面、e2为注册页面）
    function onOrOffRegisterDialog() {
        e2.style.visibility = (e2.style.visibility == "visible") ? "hidden" : "visible";
    }

    /** JS与后台数据交换 */
    var register_submit = document.getElementById('register_submit');
    var register_name;
    var register_password;
    var affirmpassword;

    register_submit.onclick = function () {
        register_name = document.getElementById('register_name').value;
        register_password = document.getElementById('register_password').value;
        affirmpassword=document.getElementById('affirmpassword').value;

        //重置验证提示信息
        register_name_error.innerHTML="请输入字母和数字";
        register_name_error.style.color="black";
        register_password_error.innerHTML="请输入数字密码";
        register_password_error.style.color="black";
        affirm_password_error.innerHTML="请输入确认密码";
        affirm_password_error.style.color="black";
        //注册
        registerAjax();
    };

    function registerAjax() {

        //数据验证

        //登录名非空验证
        if(register_name.length==0){
            register_name_error.innerHTML="登录名不能为空";
            register_name_error.style.color="red";
            return;
        }

        //密码非空验证
        if(register_password.length==0){
            register_password_error.innerHTML="密码不能为空";
            register_password_error.style.color="red";
            return;
        }

        //
        if(affirmpassword.length==0){
            affirm_password_error.innerHTML="确认密码不能为空";
            affirm_password_error.style.color="red";
            return;
        }

        //获取验证码
        getVerificationCode();
    }

    function getVerificationCode() {
        $.ajax({
            type: "post",
            url: "/ccnb/user/smss",
            data: {
                "telephone": register_name,
                "password": register_password
            },
            dataType: "json",
//            contentType:'application/json',
            success: function (data) {

                //如果获取验证码成功则注册
                if(data.Flag=="0"){
                    registerAjaxsubmit();

                }

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                // alert(XMLHttpRequest.status);
                // alert(XMLHttpRequest.readyState);
                // alert(textStatus);
                alert(AjaxErrorMessage());
            },
        });
    }

    function registerAjaxsubmit() {
        $.ajax({
            type: "post",
            url: "http://localhost:8080/ccnb/user/insuser",
            data: {
                "code" : "1240",
                "telephone": register_name,
                "password": register_password
            },
            dataType: "json",
//            contentType:'application/json',
            success: function (data) {
                // alert(data.Flag);
                // alert(data.Msg);

                if (data.Flag == "0") {
                    onOrOffRegisterDialog();
                }

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(XMLHttpRequest.status);
                alert(XMLHttpRequest.readyState);
                alert(textStatus);
            },
        });
    }

}

//排行列表功能
function  rankingList() {
    //请求数据
    getRankingListAjax();


    function getRankingListAjax() {
        $.ajax({
            type: "post",
            url: "/ccnb/userlol/order",
            data: {

            },
            dataType: "json",
//            contentType:'application/json',
            success: function (data) {
                var integralList=document.getElementById("integralList")
                var gamerankList=document.getElementById("gamerankList");
                var fivekilledList=document.getElementById("fivekilledList");
                var awardrankList=document.getElementById("awardrankList");

                //积分排行
                $.each(data.orderbyscore, function(n, value) {
                    // alert(value.username);
                    integralList.innerHTML=integralList.innerHTML+
                        '<li class="rankli integralli">'
                        + '<div class="rankliitem">'
                        + '  <div class="info left">'
                        + '    <img class="gamelogoimgtop headimg" name="'+value.username+'" src="/ccnb/'+value.headimg+'">'
                        + '     </div>'
                        + '        <div class="info middle">'

                        + '        <div class="middlesub">'
                        +     value.username
                        + '       </div>'
                        + '        <div class="clear"></div>'

                        + '         <div class="middlesub">'
                        + '         <img class="gamelogoimgsmall" src="/ccnb/'+value.headimg+'">'
                        + '        </div>'
                        + '       <div class="middlesubdownright">'+value.score+'</div>'
                        + '         <div class="clear"></div>'

                        + '         </div>'
                        + '         <div class="info right">NO.'+(n+1)+'</div>'
                        + '    <div class="clear"></div>'
                        + '     </div>'
                        + '  <div class="h2 bgcolor_cccccc mrleftandright-15px"></div>'

                        + '     </li>';

                });

                //排位排行
                $.each(data.orderbythequalifying, function(n, value) {
                    // alert(value.username);
                    gamerankList.innerHTML=gamerankList.innerHTML+
                        '<li class="rankli integralli">'
                        + '<div class="rankliitem">'
                        + '  <div class="info left">'
                        + '    <img class="gamelogoimgtop headimg" name="'+value.username+'" src="/ccnb/'+value.headimg+'">'
                        + '     </div>'
                        + '        <div class="info middle">'

                        + '        <div class="middlesub">'
                        +   value.username
                        + '       </div>'
                        + '        <div class="clear"></div>'

                        + '         <div class="middlesub">'
                        + '         <img class="gamelogoimgsmall"  src="/ccnb/'+value.headimg+'">'
                        + '        </div>'
                        + '       <div class="middlesubdownright">'+value.score+'</div>'
                        + '         <div class="clear"></div>'

                        + '         </div>'
                        + '         <div class="info right">NO.'+(n+1)+'</div>'
                        + '    <div class="clear"></div>'
                        + '     </div>'
                        + '  <div class="h2 bgcolor_cccccc mrleftandright-15px"></div>'

                        + '     </li>';
                });

                //五杀排行
                $.each(data.orderby5k, function(n, value) {
                    // alert(value.username);

                    fivekilledList.innerHTML=fivekilledList.innerHTML+
                        '<li class="rankli integralli">'
                        + '<div class="rankliitem">'
                        + '  <div class="info left">'
                        + '    <img class="gamelogoimgtop headimg" name="'+value.username+'" src="/ccnb/'+value.headimg+'">'
                        + '     </div>'
                        + '        <div class="info middle">'

                        + '        <div class="middlesub">'
                        +     value.username
                        + '       </div>'
                        + '        <div class="clear"></div>'

                        + '         <div class="middlesub">'
                        + '         <img class="gamelogoimgsmall" src="/ccnb/'+value.headimg+'">'
                        + '        </div>'
                        + '       <div class="middlesubdownright">'+value.score+'</div>'
                        + '         <div class="clear"></div>'

                        + '         </div>'
                        + '         <div class="info right">NO.'+(n+1)+'</div>'
                        + '    <div class="clear"></div>'
                        + '     </div>'
                        + '  <div class="h2 bgcolor_cccccc mrleftandright-15px"></div>'

                        + '     </li>';

                });

                //奖品排行
                $.each(data.orderbyreward, function(n, value) {

                    awardrankList.innerHTML=awardrankList.innerHTML+
                        '<li class="rankli integralli">'
                        + '<div class="rankliitem">'
                        + '  <div class="info left">'
                        + '    <img class="gamelogoimgtop headimg" name="'+value.username+'"  src="/ccnb/'+value.headimg+'">'
                        + '     </div>'
                        + '        <div class="info middle">'

                        + '        <div class="middlesub">'
                        +     value.username
                        + '       </div>'
                        + '        <div class="clear"></div>'

                        + '         <div class="middlesub">'
                        + '         <img class="gamelogoimgsmall" src="/ccnb/'+value.headimg+'">'
                        + '        </div>'
                        + '       <div class="middlesubdownright">'+value.score+'</div>'
                        + '         <div class="clear"></div>'

                        + '         </div>'
                        + '         <div class="info right">NO.'+(n+1)+'</div>'
                        + '    <div class="clear"></div>'
                        + '     </div>'
                        + '  <div class="h2 bgcolor_cccccc mrleftandright-15px"></div>'

                        + '     </li>';

                });

                //公共跳转页面初始化
                commonSkipPageModule();

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                // alert(XMLHttpRequest.status);
                // alert(XMLHttpRequest.readyState);
                // alert(textStatus);

                alert(AjaxErrorMessage());
            },
        });
    }
}

//注销登录
function  UserLogout() {
    var UserLogout=document.getElementById("UserLogout");
    UserLogout.onclick=function () {
        alert("注销");

        UserLogoutAjax();
    }


    function  UserLogoutAjax() {
        $.ajax({
            type: "post",
            url: "/ccnb/user/UserLogout",
            data: {
            },
            dataType: "json",
//            contentType:'application/json',
            success: function (data) {
                var nologined=document.getElementById("nologined");
                var logined=document.getElementById("logined");

                alert(data);
                if(data=="true"){
                    logined.style.display="none";
                    nologined.style.display="block";
                    
                    sessionclear();

                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(XMLHttpRequest.status);
                alert(XMLHttpRequest.readyState);
                alert(textStatus);
            },
        });
    }


}