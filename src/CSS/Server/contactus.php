<?php
header('Access-Control-Allow-Origin:*');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
include('connect.php');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
try
{
    if (!empty($_POST)) {
        $to = 'rohithram150@gmail.com';
        $subject = "Contact US - SIERMAR";
        $message = "Customer has reached to SIERMAR\nPlease find below details.\nFirst Name :" . $_POST['name'] . "\nLastName :" . $_POST['lastname'] . "\nPhone Number:".$_POST['phone']." \nEmail ".$_POST['email']."\nQuery : ".$_POST['query']."
            ";
        mail($to, $subject, $message);
    }
}
catch(Exception $e)
{
    echo  $e->getMessage();
}
?>