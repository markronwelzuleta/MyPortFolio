<?php
require "db.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo "NO_POST";
    exit;
}

$email = trim($_POST["email"] ?? '');
$password = $_POST["password"] ?? '';

if ($email === '' || $password === '') {
    echo "invalid";
    exit;
}

$stmt = $conn->prepare("SELECT username, password FROM users WHERE email = ? LIMIT 1");
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows === 0) {
    echo "invalid";
    exit;
}

$stmt->bind_result($username, $hashedPassword);
$stmt->fetch();

if (password_verify($password, $hashedPassword)) {
    echo $username;
} else {
    echo "invalid";
}

$stmt->close();
$conn->close();
?>
