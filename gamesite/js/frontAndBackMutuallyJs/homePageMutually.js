/**
 * Created by Administrator on 2017/5/8.
 */

/**JS与后台交互*/

function homePageMutuallyModule() {


    //游戏列表功能接口
    gameList();
}

function gameList() {
    //请求数据
    getGameListAjax();
    
    
    function getGameListAjax() {
        $.ajax({
            type: "post",
            url: "/ccnb/game/selgame",
            data: {

            },
            dataType: "json",
//            contentType:'application/json',
            success: function (data) {
                var gamelist=document.getElementById("gamelist");

                //游戏列表
                $.each(data.rows, function(n, value) {
                    // alert(value.username);
                    gamelist.innerHTML=gamelist.innerHTML
                        +'<div class="gameitem fondcolor_255-255-255">'
                        +'<div>'
                        +'<img class="gamelogoimgmiddle80" src="http://localhost:8080/ccnb'+value.logo+'">'
                        +'</div>'
                        +'<div>'+value.name+'</div>'
                        +'</div>';

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
}




