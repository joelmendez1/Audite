<?php
include 'conexion.php';

//Form Data
$email = $_POST['name'];
$password = $_POST['pass'];

// Create connection
$conn = new mysqli("localhost", "globaluser", "panchot9", "registro");
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO registro (email, passwordd)
VALUES ($email, $password)";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

