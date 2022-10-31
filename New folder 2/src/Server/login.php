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
    $query="select * from Login_Master where username='".$_POST['email']."' and password='".$_POST['password']."' and role='".$_POST['category']."'";
    $result=mysqli_query($conn,$query);
    $resultarray = array();
    if(mysqli_num_rows($result)==0) 
    {
        echo json_encode(["InvalidUser"=>1]);
    }
    else
    {
        while($row = mysqli_fetch_assoc($result))
        {
            $resultarray= json_encode([
            'Id' =>($row['username']),
            'Name' => $row['password'],
            'role'=>$row["role"]
            ]
            );
        }
        echo $resultarray;
    }
}
}
catch(Exception $e)
{
    echo $e->getMessage();
}
