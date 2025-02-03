<?php
$localhost = "localhost";
$username = "root";
$password = "";
$dbname = "register";


$conn = mysqli_connect($localhost, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . mysqli_connect_error());
}


$fullname = $_POST["fullname"];
$username = $_POST["username"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$pswrd = $_POST["password"];
$cnf = $_POST["cnfm"];
$gender = $_POST["gender"];


$sql = "SELECT id FROM register WHERE username = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $username);
$stmt->execute();
$stmt->store_result();
if ($stmt->num_rows > 0) {
   
    
         echo '<script type="text/javascript">';
         echo 'alert("User name already taken, Please use another username");';
         echo '</script>';
    
    $stmt->close();
   
    // header("Location: index.html?error=Username already exists");
    exit();
}

$stmt->close();


if ($pswrd !== $cnf) {
    // header("Location: index.html?error=Passwords do not match");
    echo '<script type="text/javascript">';
         echo 'alert("Passowrd and confirm passowrd should be match");';
         echo '</script>';
    exit();
}


$stmt = $conn->prepare("INSERT INTO Register (fullname, username, email, phone, password, confirm_password, gender) VALUES (?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssss", $fullname, $username, $email, $phone, $pswrd, $cnf, $gender);


if ($stmt->execute()) {
    
     header("Location: index.html?success=true");
    // echo "registration done";
    exit();
} else {
    echo "Error: " . $stmt->error;
}


$stmt->close();
$conn->close();
?>
