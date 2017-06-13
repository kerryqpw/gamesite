/**
 * Created by Administrator on 2017/5/2.
 */
window.onload=function () {
    /**界面布局JS*/

    //页面公用模块
    commonModule();
    //导航模块
    navigationModule();
    //Dialog模块
    dialogModule();
    //个人中心游戏切换模块
    personalInfoModule();
    //页面跳转模块
    skipPageModule();
    //创建战队模块
    createTreamModule();

    //排行榜模块
    rankingModule();
 

    /** 与后端交互JS */
    //前端后台交互模块初始化
    personalPageMutuallyModule();





}