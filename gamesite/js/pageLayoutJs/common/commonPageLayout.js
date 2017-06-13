/**
 * Created by Administrator on 2017/5/10.
 */

//公共的跳转模块

function commonSkipPageModule(){
    skipPageModule();
}

/**排行模块取消浮动*/
function rankingModule() {
    var $integralli=$(".integralli");/*获取上一张的按钮*/
    var integralli=document.getElementsByClassName("integralli");

    var $gamerankli=$(".gamerankli");/*获取上一张的按钮*/
    var gamerankli=document.getElementsByClassName("gamerankli");

    var $fivekilledli=$(".fivekilledli");/*获取上一张的按钮*/
    var fivekilledli=document.getElementsByClassName("fivekilledli");

    var $awardrankli=$(".awardrankli");/*获取上一张的按钮*/
    var awardrankli=document.getElementsByClassName("awardrankli");



    $integralli.hover(function () {
        integralli[0].style.width="100%";
        integralli[0].style.marginLeft="0";
    },function () {
        integralli[0].style.width="106%";
        integralli[0].style.marginLeft="-2.7%";

    });

    $gamerankli.hover(function () {
        gamerankli[0].style.width="100%";
        gamerankli[0].style.marginLeft="0";
    },function () {
        gamerankli[0].style.width="106%";
        gamerankli[0].style.marginLeft="-2.7%";

    });

    $fivekilledli.hover(function () {
        fivekilledli[0].style.width="100%";
        fivekilledli[0].style.marginLeft="0";
    },function () {
        fivekilledli[0].style.width="106%";
        fivekilledli[0].style.marginLeft="-2.7%";

    });

    $awardrankli.hover(function () {
        awardrankli[0].style.width="100%";
        awardrankli[0].style.marginLeft="0";
    },function () {
        awardrankli[0].style.width="106%";
        awardrankli[0].style.marginLeft="-2.7%";

    });




}