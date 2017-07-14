<?php
#error_reporting(-1);
#ini_set('display_errors', true);
// Thanks to http://stackoverflow.com/users/220819/jacob-relkin for jsonFlickrApi removal
require_once ('../FirePHPCore/FirePHP.class.php');
$firephp = FirePHP::getInstance(true);

if (isset($_POST["points"])) {
	// Decode our JSON into PHP objects we can use
	$a = $_POST["points"];
	$raw = json_decode($a, true);
	}



$api_key = $raw[0]['keyname'];

		echo json_encode($api_key);
	
?>

