<?php
header('Access-Control-Allow-Origin:*');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
include('connect.php');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
try {
    if (!empty($_POST)) {
        $query = "select  Id from ClinicAppointment order by Id desc limit 1";
        $result = mysqli_query($conn, $query);
        while ($row = mysqli_fetch_assoc($result)) {
            $last_id = $row["Id"];
            $last_id = $last_id + 1;
        }
        $query = "insert into ClinicAppointment values(
            " . $last_id . ",
            '" . $_POST["pfname"] ."',
            '" . $_POST["plname"] ."',
            '" . $_POST["selection"] ."',
            '" . $_POST["pcomments"] ."'            
            )";
        // echo $query;
        $result = mysqli_query($conn, $query);
        if ($result) {
            echo json_encode(["Registered" => 1]);
        }
    }
} catch (Exception $e) {
    echo $e->getMessage();
}
