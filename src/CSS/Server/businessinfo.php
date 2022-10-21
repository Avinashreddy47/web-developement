<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
include('connect.php');

$query="select Id, Name,Type,Address from Business";
$resultarray = array();
$result=mysqli_query($conn,$query);
while($row = mysqli_fetch_assoc($result))
{
   $resultarray[] = array(
  'Id' => ($row['Id']),
  'Name' => $row['Name'],
  'Type'=>($row['Type']),
  'Address'=>($row['Address'])
  );
}
echo json_encode($resultarray);

?>