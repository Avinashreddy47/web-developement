<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
include('connect.php');

$query="select Id, Name from Counties";
$resultarray = array();
$result=mysqli_query($conn,$query);
while($row = mysqli_fetch_assoc($result))
{
   $resultarray[] = array(
  'Id' => ($row['Id']),
  'Counties' => $row['Name']
  );
}
echo json_encode($resultarray);

?>