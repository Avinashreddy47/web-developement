<?php
header('Access-Control-Allow-Origin:  http://localhost:3000');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization,Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
$conn = mysqli_connect("localhost", "root", "","mercado_escolar");
?>
