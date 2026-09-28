<?php
// Database configuration.
// For local XAMPP development, the defaults below work with the standard setup.
// For hosting, set DB_HOST, DB_USER, DB_PASS, and DB_NAME as environment variables.

$host = getenv('DB_HOST') ?: 'localhost';
$user = getenv('DB_USER') ?: 'root';
$pass = getenv('DB_PASS') ?: '';
$dbname = getenv('DB_NAME') ?: 'portfolio_db';

$conn = mysqli_connect($host, $user, $pass, $dbname);

if (!$conn) {
    http_response_code(500);
    die('Database connection failed. Check your database configuration.');
}

mysqli_set_charset($conn, 'utf8mb4');
?>
