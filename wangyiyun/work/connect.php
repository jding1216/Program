<?php
$host="localhost";
$db_user="root";
$db_pass="zeng";
$db_name="db";
$timezone="Asia/Shanghai";

$link=mysqli_connect($host,$db_user,$db_pass,$db_name);


header("Content-Type: text/html; charset=utf-8");
date_default_timezone_set($timezone); //北京时间

//$sql = "select * from user";
//$result = mysqli_query($link,$sql);
//if($result){
//    echo var_dump(mysqli_fetch_assoc($result));
//}
?>
