/**
 * Created by Administrator on 2016/10/7.
 */
//document.write("<script src='myScroll.js'></script>");
window.onload = function () {

    /// 我的音乐
    //导航排他
    var bgs = document.getElementsByClassName("bg");
    var tris = document.getElementsByClassName("r_tri");

    for(var i = 0; i < 4; i++){
        bgs[i].index = i;
        tris[i].index = i;
        bgs[i].onclick = function (){
            for (var j = 0; j < 4; j++){
                bgs[j].style.background = "url('./images/topbar.png') right -300px no-repeat";
                tris[j].style.display = 'none';
            }
            //bgs[this.index].style.background = "url('./images/topbar.png') left -155px no-repeat ";
            bgs[this.index].style.cssText = "background: url('./images/topbar.png') left -155px no-repeat !important ";

            tris[this.index].style.display = 'block';

        }
    }
    // 歌单显示与隐藏
    var create = document.getElementById("create");
    var menu = document.getElementById('cre_menu');
    var cre = document.getElementById('cre');
    var flag = 1;
    create.onclick = function () {
        if (flag){
            menu.style.display = "none";
            flag = !flag;
            cre.style.transform = "rotate(-90deg)";
        }else{
            menu.style.display = "block";
            flag = !flag;
            cre.style.transform = "rotate(0deg)";

        }

    };
    //登录下拉
    var tri = document.getElementById('tri');
    tri.onmouseover = function () {
        this.style.background = "url('./images/topbar.png') -228px -418px no-repeat";
    };
    tri.onmouseout = function () {
        this.style.background = "url('./images/topbar.png') -228px -380px no-repeat";
    };



//    回到顶部
    var backup = document.getElementById("backup");
    var leader = 0, target = 0;
    var timer;
    window.onscroll = function () {
        leader = scroll().top;
        console.log(leader);
        if (leader > 0){
            backup.style.display = "block";
        }else{
            backup.style.display = "none";
        }
    };

    backup.onclick = function () {
        clearInterval(timer);
        timer = setInterval(function () {
            leader = leader + (target - leader) / 10;
            window.scrollTo(0, leader);
            console.log(parseInt(leader));
            if (parseInt(leader) == 0){
                window.scroll(0, 0);
                clearInterval(timer);
            }
        }, 20)
    };

}