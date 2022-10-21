<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
include('connect.php');

$query="select FlightId,Name,Source,Destination,Discount from Flight";
$resultarray = array();
$result=mysqli_query($conn,$query);
while($row = mysqli_fetch_assoc($result))
{
   $resultarray[] = array(
  'Id' => ($row['FlightId']),
  'Name' => $row['Name'],
  'Source' => $row['Source'],
  'Destination' => $row['Destination'],
  'Discount' => $row['Discount']
  );
}
echo json_encode($resultarray);

?>