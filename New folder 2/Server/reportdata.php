<?php
include('connect.php');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
try
{
    $query = "SELECT COUNT(username) AS TotalInspectors FROM Inspector";
    $resultarray = array();
    $result=mysqli_query($conn,$query);
    

    while($row = mysqli_fetch_assoc($result))
    {
       $TotalInspectors=$row['TotalInspectors'];
    }
    $query = "SELECT count(username) AS TotalResidents FROM Resident";
    $result=mysqli_query($conn,$query);
    while($row = mysqli_fetch_assoc($result))
    {
      $TotalResidents=$row['TotalResidents'];
    }
    $query = "SELECT COUNT(Id) AS Totalbusiness FROM Business";
    $result=mysqli_query($conn,$query);
    while($row = mysqli_fetch_assoc($result))
    {
      $Totalbusiness=$row['Totalbusiness'];
    }
   $query = "SELECT COUNT(Id) AS TotalCounties FROM Counties";
    $result=mysqli_query($conn,$query);
    while($row = mysqli_fetch_assoc($result))
    {
      $TotalCounties=$row['TotalCounties'];
    }
    $resultarray = [
      'TotalInspectors' => $TotalInspectors,
      'TotalResidents'=>$TotalResidents,
      'TotalCounties'=>$TotalCounties,
      'Totalbusiness'=>$Totalbusiness
      ];
    echo json_encode($resultarray);
}
catch(Exception $e)
{
    echo $e->getMessage();
}


?>