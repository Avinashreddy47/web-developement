<?php

include('connect.php');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
try {
  
    if (!empty($_POST)) {
        $query = "select * from login where username='" . $_POST['email'] . "' and password='" . $_POST['password'] . "' and role='". $_POST['category'] ."'";
        $result = mysqli_query($conn, $query);
        $resultarray = array();
        // if ($result !== false) {
        //     echo json_encode(["Isvalid" => 1]);
        // } else {
            $query = "insert into register values(
                '" . $_POST['email'] . "',
                '" . $_POST['password'] . "',
                '" . $_POST['category']. "'
                 )";
            $result = mysqli_query($conn, $query);
            
            $query = "insert into login values(
            '" . $_POST['email'] . "',
            '" . $_POST['password'] . "',
            '" . $_POST['category'] . "'
             )";
            $result = mysqli_query($conn, $query);
            
            if ($result) {
                echo json_encode(["Registered" => 1]);
                $to = $_POST['email'];
                $subject = "Registration Email - Mercado Escolar";
                $message = "Thank you for registering to Mercado Escolar. We are delighted to serve you\n.Please find the credentials below.\nUser Name :" . $_POST['email'] . "\nPassword :" . $_POST['password'] . "
                    ";
                // mail($to, $subject, $message);
            // }
            return $result;
        }
    }
} catch (Exception $e) {
    echo $e->getMessage();
}
