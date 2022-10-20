<?php
$dsn = "mysql:host=localhost;dbname=cheesegamedb";
$username = "root";
$password = "";

try {
  $db = new PDO( $dsn, $username, $password );
  echo "You have connected!";
} catch ( PDOException $e ) {
  $errorMessage = $e->getMessage();
  exit();
}
?>