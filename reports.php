<?php
session_start();
error_reporting(0);
include('includes/dbconnection.php');
if (strlen($_SESSION['sturecmsaid']==0)) {
  header('location:logout.php');
  } else{
  
  ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="reports.css">
    <title>School Admin Dashboard</title>
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"/>
</head>
<body>

    <section id="m1">
        <div class="l">
            <img src="Images/logo.png" alt="">
            <h2>School Admin Dashboard</h2>
            
        </div>

        <div class="list">
            <li><a href="schooladmin.php">Dashboard</a></li>
            <li><a href="studentlist.php">Students </a></li>
            <li><a href="bowner.php">Buisness Owners</a></li>
            <li><a href="reports.php">Reports</a></li> 
        </div>
        
    </section>
    
    <section id="main">
        <div class="nav">
            <div class="a1">
                <div class="srch">
                    <i class="far fa-search"></i>
                    <input type="text" placeholder="Search" name="">
                </div>
            </div>

            <div class="pro">
                <a href="homepage.asp">Mercado Escolar Home</a>
                <img src="Images/img1.jpg" alt="">
            </div>
        </div>

        <h3 class="a2">Dashboard</h3>
        <div class="val">

            <?php 
                        $sql2 ="SELECT * from  student";
$query2 = $dbh -> prepare($sql2);
$query2->execute();
$results2=$query2->fetchAll(PDO::FETCH_OBJ);
$totst=$query2->rowCount();
?>

            <div class="v1">
                <i class="fas fa-users"></i>
                <div>
                    <h3><?php echo htmlentities($totst);?></h3>
                    <span>Students</span>
                </div>
            </div>

            <?php 
                        $sql1 ="SELECT * from  tblclass";
$query1 = $dbh -> prepare($sql1);
$query1->execute();
$results1=$query1->fetchAll(PDO::FETCH_OBJ);
$totowner=$query1->rowCount();
?>

            <div class="v1">
                <i class="fas fa-shopping-cart"></i>
                <div>
                    <h3><?php echo htmlentities($totowner);?></h3>
                    <span>Businesses</span>
                </div>
            </div>

            <?php 
                        $sql4 ="SELECT * from  clubs";
$query4 = $dbh -> prepare($sql4);
$query4->execute();
$results4=$query4->fetchAll(PDO::FETCH_OBJ);
$totclubs=$query4->rowCount();
?>

            <div class="v1">
                <i class="fas fa-acorn"></i>
                <div>
                    <h3><?php echo htmlentities($totclubs);?></h3>
                    <span>Total Clubs</span>
                </div>
            </div>

            <?php 
                        $sql3 ="SELECT * from  posts";
$query3 = $dbh -> prepare($sql3);
$query3->execute();
$results3=$query3->fetchAll(PDO::FETCH_OBJ);
$totposts=$query3->rowCount();
?>

            <div class="v1">
                <i class="fas fa-dollar-sign"></i>
                <div>
                    <h3><?php echo htmlentities($totposts);?></h3>
                    <span>Total Posts</span>
                </div>
            </div>
        </div>

        <dir class="b1">
            <h3 class="a3">Reports</h3>
            <h3 class="a3" style="text-align: center;">Dates for Report generation</h3>

                <div class="card">
                    
                   
                    <form class="forms-sample" method="post" action="between-date-reprtsdetails.php">
                      
                      <div class="form-group">
                        <label for="exampleInputName1">From Date:</label>
                        <input type="date" class="form-control" id="fromdate" name="fromdate" value="" required='true'>
                      </div>
                     <div class="form-group">
                        <label for="exampleInputName1">To Date:</label>
                        <input type="date" class="form-control" id="todate" name="todate" value="" required='true'>
                      </div>
                      <button type="submit" class="btn" name="submit">Submit</button>
                     
                    </form>
                </div>
            
        </dir>
    </section>


</body>
</html>

<?php }  ?>



