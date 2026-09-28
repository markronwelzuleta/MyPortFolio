<?php
require "db.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo "NO_POST";
    exit;
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$password = $_POST['password'] ?? '';

if ($name === '' || $email === '' || $password === '') {
    echo "MISSING_FIELDS";
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "INVALID_EMAIL";
    exit;
}

if (strlen($password) < 6) {
    echo "WEAK_PASSWORD";
    exit;
}

$check = $conn->prepare("SELECT id FROM users WHERE email = ? LIMIT 1");
$check->bind_param("s", $email);
$check->execute();
$check->store_result();

if ($check->num_rows > 0) {
    echo "exists";
    exit;
}
$check->close();

$hashed = password_hash($password, PASSWORD_DEFAULT);
$query = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
$query->bind_param("sss", $name, $email, $hashed);

echo $query->execute() ? "success" : "failed";
$query->close();
$conn->close();
?>
