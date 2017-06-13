/**
 * Created by Administrator on 2017/4/18.
 */
window.onload=function () {

    /** 界面布局 JS*/
    
    //导航模块初始化
    navigationModule();
    //比赛模块
    matchModule()
    //跳转页面模块
    skipPageModule();
    //Dialog模块
    dialogModule();

   //排行榜模块
    rankingModule();

    //登录状态判断
    isLogin();

    /** 与后端交互JS */
    //前端后台交互模块初始化
    commonPageMutuallyModule();
    gemeDetailPageMutuallyModule();

}


























// var fightTeamArray = new Array();
// var fightTeamitems = document.getElementsByClassName("fightTeamitem");
// // var index=3;    //定义当前图片下标
// // var showCount=0;
//
// for (var i = 0; i < fightTeamitems.length; i++) {
//     // if(i>=index){
//     //     addClass(fightTeamitems[i], 'show');
//     //     showCount++;
//     // }
//     if(i>6){
//         addClass(fightTeamitems[i], 'hide');
//
//     }
// }




    // for (var i = 0; i < fightTeamitems.length; i++) {
    //     fightTeamArray.push(fightTeamitems[i]);
    // }
    // fightTeamArray.pop();

    // var index=3;    //定义当前图片下标
    // var showCount=0;
    // var length=fightTeamitems.length;   //图片个数
    //
    // for (var i = 0; i < fightTeamitems.length; i++) {
    //     if(i>=index){
    //         addClass(fightTeamitems[i], 'show');
    //         showCount++;
    //     }
        // if(i>6){
        //     addClass(fightTeamitems[i], 'show');
        //
        // }
    // }
    // alert(showCount);
    // if(7-showCount>0){
    //     for (var i = 0; i < 7-showCount; i++) {
    //
    //             addClass(fightTeamitems[i], 'show');
    //
    //     }
    // }

    //数组重新排列
    // fightTeamitems.pop();
    // var index=0;    //定义当前图片下标
    // var length=fightTeamitems.length;   //图片个数
    // index++;

    //for (var i=0;i<fightTeamitems.length;i++){
        // alert(fightTeamitems[i]);
        // if(i-index>5){
        //     addClass(fightTeamitems[i], 'hide');
        //
        // }else {
        //
        // }
        //修改元素的属性
        // fightTeamitems[i].style.display="none";
        // fightTeamitems[i].className="hide";

    //}
    // for(var item in fightTeamitems){
    //     alert(item);
    // }



//}