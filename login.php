<?php
$name = $_POST['kullanici'];
$password = $_POST['sifre'];


if ((strlen($name) > 0) && (strlen($password) > 0) && (strpos($name, '@') > 0) && ($name == "forsomes@hotmail.com") && ($password == "123")) {
    //kullanici adinin @'e kadar olan kısmını al
    $ad = substr($name, 0, strpos($name, '@'));
    $message = "HOŞ GELDİNİZ $ad";
    echo "<script type='text/javascript'>alert('$message');window.location.replace('hakkimda.html');</script>";

    
} else {
    //kullanici-sifre yanlis login sayfasina yonlendir
    header("Location: login.html");
    exit();
}

?>