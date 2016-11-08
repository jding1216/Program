<?php
    include "connect.php";

//    登录
    @$phone = $_POST['phone'];
    @$password = $_POST['password'];
    if($phone != '' && $password != ''){
        $sql = "select * from user where phone = '$phone'";
        $result = mysqli_query($link,$sql);
        if($result){
                $data = mysqli_fetch_assoc($result);
            if($password == $data['password']){
                  echo $data['phone'].$data['password'];
            }
        }
    }

//注册信息
   @$phone_sin = $_POST['phone_sin'];
   @$password_sin = $_POST['password_sin'];
    if($phone_sin != '' && $password_sin != ''){
            $sql = "insert into user  values('$phone_sin','$password_sin')";
            $result = mysqli_query($link,$sql);
            if($result){
//
                  echo $phone_sin;


            }
        }

?>