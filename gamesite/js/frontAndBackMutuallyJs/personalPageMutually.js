/**
 * Created by Administrator on 2017/5/10.
 */
/** JS与后台数据交互 */
function personalPageMutuallyModule() {
    //排行列表功能
    rankingList();
    
    //查询个人信息
    selectUserInfo();
}

//排行列表功能
function  rankingList() {
    //请求数据
    getRankingListAjax();


    function getRankingListAjax() {
        $.ajax({
            type: "post",
            url: "http://localhost:8080/ccnb/userlol/order",
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
                        + '    <img class="gamelogoimgtop headimg" name="'+value.username+'" src="http://localhost:8080/ccnb/'+value.headimg+'">'
                        + '     </div>'
                        + '        <div class="info middle">'

                        + '        <div class="middlesub">'
                        +     value.username
                        + '       </div>'
                        + '        <div class="clear"></div>'

                        + '         <div class="middlesub">'
                        + '         <img class="gamelogoimgsmall" src="http://localhost:8080/ccnb/'+value.headimg+'">'
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
                        + '    <img class="gamelogoimgtop headimg" name="'+value.username+'" src="http://localhost:8080/ccnb/'+value.headimg+'">'
                        + '     </div>'
                        + '        <div class="info middle">'

                        + '        <div class="middlesub">'
                        +   value.username
                        + '       </div>'
                        + '        <div class="clear"></div>'

                        + '         <div class="middlesub">'
                        + '         <img class="gamelogoimgsmall"  src="http://localhost:8080/ccnb/'+value.headimg+'">'
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
                        + '    <img class="gamelogoimgtop headimg" name="'+value.username+'" src="http://localhost:8080/ccnb/'+value.headimg+'">'
                        + '     </div>'
                        + '        <div class="info middle">'

                        + '        <div class="middlesub">'
                        +     value.username
                        + '       </div>'
                        + '        <div class="clear"></div>'

                        + '         <div class="middlesub">'
                        + '         <img class="gamelogoimgsmall" src="http://localhost:8080/ccnb/'+value.headimg+'">'
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
                    // alert(value.username);

                    awardrankList.innerHTML=awardrankList.innerHTML+
                        '<li class="rankli integralli">'
                        + '<div class="rankliitem">'
                        + '  <div class="info left">'
                        + '    <img class="gamelogoimgtop headimg" name="'+value.username+'" src="http://localhost:8080/ccnb/'+value.headimg+'">'
                        + '     </div>'
                        + '        <div class="info middle">'

                        + '        <div class="middlesub">'
                        +     value.username
                        + '       </div>'
                        + '        <div class="clear"></div>'

                        + '         <div class="middlesub">'
                        + '         <img class="gamelogoimgsmall" src="http://localhost:8080/ccnb/'+value.headimg+'">'
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

function selectUserInfo() {

    selectUserInfoAjax();

    function selectUserInfoAjax(){
        $.ajax({
            type: "post",
            url: "http://localhost:8080/ccnb/ user/seluserbypr",
            data: {
                username:getParams("id")
            },
            dataType: "json",
//            contentType:'application/json',
            success: function (data) {
                // alert(data.Flag);

                $.each(data.rows, function(n, value) {

                    //个人信息界面展示
                    showUserInfo(value);
                });

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                // alert(XMLHttpRequest.status);
                // alert(XMLHttpRequest.readyState);
                // alert(textStatus);
                alert(AjaxErrorMessage());
            },
        });
    }

    //个人信息界面展示
    function showUserInfo(value) {
        var user_name=document.getElementById("user_name");
        var userImg=document.getElementById("userImg");
        var coupons=document.getElementById("coupons");
        var fans=document.getElementById("fans");
        var popularity=document.getElementById("popularity");
        var follow=document.getElementById("follow");


        user_name.innerHTML=value.username;
        userImg.style.backgroundImage="url('http://localhost:8080/ccnb"+value.headimg+"')";
        coupons.innerHTML=value.coupons;
        fans.innerHTML=value.fans;
        popularity.innerHTML=value.popularity;
        follow.innerHTML=value.follow;

    }

}