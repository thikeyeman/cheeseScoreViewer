<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Name Input</title>
<style>
#wrapper {
    border: 1px solid #888;
    display: inline-block;
    padding: 20px;
}
dt {
    float: left;
}
</style>
</head>

<body>
<div id="wrapper">
  <h1>名前登録フォーム </h1>
  <form action="" method="post">
    <dl>
      <dt>名前</dt>
      <dd>
        <input type="text" name="name">
      </dd>
      <br>
      <dt>
        <label for="yes_no_radio">ゲームをやりますか？</label>
      </dt>
      <br>
      <dd>
        <p>
          <input type="radio" name="yes_no" value="yes" checked>
          Yes
          </input>
          <input type="radio" name="yes_no" value="no">
          No
          </input>
        </p>
      </dd>
    </dl>
    <p>
      <input type="submit" value="リストに追加">
    </p>
  </form>
</div>
<?php
$name = '';
$yes_no = '';
if ( isset( $_POST[ 'name' ], $_POST[ 'yes_no' ] ) ) {
    $name = $_POST[ 'name' ];
    $yes_no = $_POST[ 'yes_no' ];
}

$db = new PDO( 'mysql:host=localhost;dbname=cheesescoredb', 'root', '', array( PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8' ) );

if ( $name != NULL ) {
    $stmt = $db->prepare( 'INSERT INTO players(name, game) VALUES(?,?)' );
    $stmt->execute( array( $name, $yes_no ) );
}
?>
<div id="wrapperList">
  <h1>List</h1
                
  <dl>
    
  </dl>
</div>
</body>
</html>