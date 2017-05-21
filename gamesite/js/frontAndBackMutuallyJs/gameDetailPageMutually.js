/**
 * Created by Administrator on 2017/5/11.
 */
/** JS与后台数据交互 */
function gemeDetailPageMutuallyModule() {
    //新闻列表功能
    newsList();

    //战队列表功能
    fightTreamList();
    
}

//新闻列表功能
function newsList() {
    //请求新闻列表数据
    getnewsListAjax();

    function getnewsListAjax() {
        $.ajax({
            type: "post",
            url: "http://localhost:8080/ccnb/news/selectNewsAll",
            data: {
                "page": 1,
                "line": 5
            },
            dataType: "json",
//            contentType:'application/json',
            success: function (data) {
                // alert(data.count);
                // alert(data.list);
                // console.log(data);
                var informationlist=document.getElementById("informationlist")

                //积分排行
                $.each(data.list, function(n, value) {
                    // alert(value.username);
                    informationlist.innerHTML=informationlist.innerHTML
                        +'<li class="informationli">'
                        +' <div class="informationitem">'
                        +'   <div class="informationinfo left">'+value.newsTitle+'</div>'
                        +' <div class="informationinfo right">['+(n+1)+']</div>'
                        +'    <div class="clear"></div>'
                        +'     </div>'
                        +'    </li>';


                    if(n==0){
                        //第一条新闻详细展示
                        // alert("firstNew")
                        firsNewShow(value);
                    }

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
    //第一条新闻详细展示
    function firsNewShow(value) {
        var firstTitleLeft=document.getElementById("firstTitleLeft");
        var firstContentLeft=document.getElementById("firstContentLeft");
        var firstTitleRight=document.getElementById("firstTitleRight");
        var firstContntRight=document.getElementById("firstContntRight");

        var firstNewsImg=document.getElementById("firstNewsImg");


        firstTitleLeft.innerHTML=value.newsTitle;
        firstContentLeft.innerHTML=value.newsText.substring(0,38)+"...";
        firstTitleRight.innerHTML=value.newsTitle;
        firstContntRight.innerHTML=value.newsText.substring(0,119)+"...";

        firstNewsImg.src="http://localhost:8080/ccnb/"+value.newsImg;
    }
}

//战队列表功能
function fightTreamList() {

    //战队列表Ajax请求
    fightTreamListAjax();
    
    function fightTreamListAjax() {
        var fightTreamList=document.getElementById("fightTreamList");

        $.ajax({
            type: "post",
            url: "http://localhost:8080/ccnb/loltour/selteam",
            data: {
                "page": 1,
                "line": 8
            },
            dataType: "json",
//            contentType:'application/json',
            success: function (data) {
                // alert(data.count);
                // alert(data.total);

                //战队列表展示
                $.each(data.rows, function(n, value) {
                    // alert(value.username);
                    fightTreamList.innerHTML=fightTreamList.innerHTML
                        +'<div class="gameitem fondcolor_255-255-255">'
                        +'<div>'
                        +'<img class="gamelogoimgmiddle" src="http://localhost:8080/ccnb/'+value.logo+'">'
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