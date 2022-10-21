<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
include('connect.php');

$query="select Id, email,date,comments,status from moveoutrequest";
$resultarray = array();
$result=mysqli_query($conn,$query);
while($row = mysqli_fetch_assoc($result))
{
   $resultarray[] = array(
  'Id' => ($row['Id']),
  'email' => $row['email'],
  'date' => $row['date'],
  'comments' => $row['comments'],
  'status' => $row['status']
  );
}
echo json_encode($resultarray);

?>