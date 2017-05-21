/**
 * Created by Administrator on 2017/4/6.
 */
window.onload=function () {

    /**界面布局JS*/
    //banner模块初始化
    // bannerModule();
    //导航模块初始化
    navigationModule();
    //Dialog模块初始化
    dialogModule();
   //跳转页面模块初始化
    skipPageModule();
   

    //登录状态判断模块初始化
    isLogin();

    /** 与后端交互JS */
    //前端后台交互模块初始化
    commonPageMutuallyModule();
    
}