<?php
include('connect.php');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
try
{

    if (!empty($_POST)) {
    $query="select *  from login where username='".$_POST['email']."' and password='".$_POST['password']."'";
    $result=mysqli_query($conn,$query);
    $resultarray = array();
    if($result==False){
        return 2;
    }
   
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
            'category'=>$row['role']
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
