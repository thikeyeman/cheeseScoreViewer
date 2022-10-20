<?php
$num = 1;
$db = new PDO( 'mysql:host=localhost;dbname=cheesescoredb', 'root', '', array( PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8' ) );
$stmt = $db->prepare( 'SELECT * FROM  players WHERE id = ?' );
$stmt->execute( array( $num ) );
while ( $row = $stmt->fetch() ) {
    $id = $row[ 'id' ];
    $name = htmlspecialchars( $row[ 'name' ], ENT_QUOTES, 'UTF-8' );
    $yes_no = htmlspecialchars( $row[ 'game' ], ENT_QUOTES, 'UTF-8' );
    $yes_no = str_replace( "\n", '<br>', $yes_no );
    echo $name;
}
?>