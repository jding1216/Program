/**
 * Created by Administrator on 2016/10/6.
 */
//document.write("<script src='js/myScroll.js'></script>");


/*window.onload = function () {
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


};*/


window.onload = function () {
    //登录注册

    var close = document.getElementsByClassName('close');
//    var close = document.getElementById('close');
    var login = document.getElementById('login');
    var phone = document.getElementById('phone_login');
    var mobile = document.getElementById('mobile');

    var btn = document.getElementById('btn');
    btn.onclick = function () {
        login.style.display = 'block';
    };


//    点击关闭
    for(var i = 0; i < close.length; i++ ){
        close[i].onclick = function () {
            login.style.display = 'none';
            phone.style.display = 'none';
            mobile.style.display = 'none';
        };
    }

// 连接数据库
    var submit = document.getElementsByClassName('submit');


    for(var i = 0 ; i < submit.length; i++){


        submit[i].onclick = function () {
            var phone_number = document.getElementById("phone_number").value;
            var password = document.getElementById("password").value;
            var phone_sin = document.getElementById("phone_sin").value;
            var password_sin = document.getElementById("password_sin").value;
            var btn = document.getElementById('btn');
            var xhr = null;
            //console.log(phone_number);
            if(window.XMLHttpRequest){
                xhr = new XMLHttpRequest();
            }else{
                xhr = new ActiveXObject('Microsoft.XMLHTTP');
            }

            var url = '../js/login.php';
            xhr.open('post',url,true);
            var param = '';
            if(phone_number != '' && password != ''){

                param = 'password='+password+'&phone='+phone_number;
            }else if(password_sin != '' && phone_sin != ''){

                param =  'password_sin='+password_sin+'&phone_sin='+phone_sin;
            }else{
                console.log("请输入完整的信息");
            }
//                自定义的请求头部信息 两个参数 头部字段的名称 头部字段的值  要成功请求 必须放在open()方法之后且seng()方法之前调用
            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

            xhr.send(param);

            xhr.onreadystatechange = function () {
                if(xhr.readyState == 4){
                    if(xhr.status == 200){
                        var data = xhr.responseText;
                        if(data){
                            console.log(data);
                            btn.innerHTML = data;
                        }
                    }
                }
            };
            phone.style.display = 'none';
            mobile.style.display = 'none';
            return false;
        }
    }

//    登录首页功能
    var mobile_login = document.getElementById('mobile_login');
    var log = document.getElementById('log');

    mobile_login.onclick = function () {
        login.style.display = 'none';
        phone.style.display = 'block';
    };
    log.onclick = function () {
        login.style.display = 'none';
        mobile.style.display = 'block';
    };

//    手机登录功能
    var other = document.getElementById('other_login');
    var noNumber = document.getElementById('no_phone');
    other.onclick = function () {
        login.style.display = 'block';
        phone.style.display = 'none';
    };
    noNumber.onclick = function () {
        phone.style.display = 'none';
        mobile.style.display = 'block';
    };

//    注册功能
    var back = document.getElementById('back');
    back.onclick = function () {
        mobile.style.display = 'none';
        login.style.display = 'block';
    };

//    判断输入是否符合要求
//    var phone_even = document.getElementsByClassName('phone_even');
//    var pwd = document.getElementsByClassName('pwd');
    var detail = document.getElementsByClassName('detail');
    var phone_number1 = document.getElementById("phone_number");
    var password1 = document.getElementById("password");
    var phone_sin1 = document.getElementById("phone_sin");
    var password_sin1 = document.getElementById("password_sin");

    phone_number1.onblur = function () {
        if(phone_number1.value.length != 11 && parseInt(phone_number1.value).length != 11){
            detail[0].style.display='block';
            detail[0].innerHTML = "请输入正确的电话号码";
        }
        else{
            detail[0].style.display='none';
        }
    };

    phone_sin1.onblur = function () {
        if(phone_sin1.value.length != 11 && parseInt(phone_sin1.value).length != 11){
            detail[1].style.display='block';
            detail[1].innerHTML = "请输入正确的电话号码";
        }
        else{
            detail[1].style.display='none';
        }
    };

    password_sin1.onmouseout = function () {
        if(password_sin1.value.length < 6){
            detail[1].style.display='block';
            detail[1].innerHTML = "请输入正确的密码";
        }
        else if(password_sin1.value.length == 0 || password_sin1.value.length >= 6){
            detail[1].style.display='none';
        }
    };



};

