<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
include('connect.php');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$query=" update moveoutrequest set status='".$_POST['selection']."'where Id=". $_POST['reqid']."";
// echo $query;
$result = mysqli_query($conn, $query);
if($result)
{   
    echo json_encode(["update"=>1]);
}
else
{
    echo json_encode(["update"=>0]);
}
?>