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
        $query = "select * from Login_Master where username='" . $_POST['email'] . "' and password='" . $_POST['password'] . "' and role='" . $_POST['category'] . "'";
        $result = mysqli_query($conn, $query);
        $resultarray = array();
        if (mysqli_num_rows($result) > 0) {
            echo json_encode(["Isvalid" => 1]);
        } else {
            $query = "insert into Resident 
                      values(
                      '" . $_POST['name'] . "',
                      '" . $_POST['email'] . "',
                      '" . $_POST['address'] . "'
                       )";
            $result = mysqli_query($conn, $query);
            $query = "insert into Login_Master values(
            '" . $_POST['email'] . "',
            '" . $_POST['password'] . "',
            '" . $_POST['category'] . "'
        )";
            $result = mysqli_query($conn, $query);
            if ($result) {
                echo json_encode(["Registered" => 1]);
                $to = $_POST['email'];
                $subject = "Registration Email - SIERMAR";
                $message = "Thank you for registering to SIERMAR. We are delighted to serve you\n.Please find the credentials below.\nUser Name :" . $_POST['email'] . "\nPassword :" . $_POST['password'] . "
                    ";
                mail($to, $subject, $message);
            }
        }
    }
} catch (Exception $e) {
    echo $e->getMessage();
}
