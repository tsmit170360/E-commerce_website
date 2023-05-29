<?php
$name = $_POST['name'];
$email = $_POST['email'];
$password = $POST['pwd'];
echo "$name";

// database connection 
$conn = new mysqli("localhost", "root", "", "testme" );
if($conn->connect_error){
die('connection Failed: ' .$conn->connect_error);
}
else{
$stmt = $conn->prepare("Insert into Login_details(Name,email,password)
values()" );
$stmt->bind_param("sss",$name,$email,$password);
$stmt->execute();
echo "Loged in...";
$stmt->close();
$conn->close();
}
?>