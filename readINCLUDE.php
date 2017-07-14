<!DOCTYPE html>
<html>
<head>
<title>Photo Gallery</title>
<meta name="generator" content="Bluefish 2.2.7" >
<meta name="author" content="Rose Dlhopolsky" >
<meta name="date" content="2017-07-12T15:51:45+0200" >
<meta name="copyright" content="">
<meta name="keywords" content="">
<meta name="description" content="">
<meta name="ROBOTS" content="NOINDEX, NOFOLLOW">
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta http-equiv="content-type" content="application/xhtml+xml; charset=UTF-8">
<meta http-equiv="content-style-type" content="text/css">
<meta http-equiv="expires" content="0">

<link rel = "stylesheet" type = "text/css" media ="screen" href ="css/photoGallery.css" > 
</head>
<body>


<?php

// Thanks to http://stackoverflow.com/users/220819/jacob-relkin for jsonFlickrApi removal
//require_once ('../FirePHPCore/FirePHP.class.php');
//$firephp = FirePHP::getInstance(true);

$tagForm= str_replace(' ','',$_REQUEST['tags']);
/*$tags= "2015," .  "07," . "july," . "packed," . "fiets," . "houten";*/

//$firephp->info($tagForm, "tags ");
$tags = '"' . $tagForm . '"';
//$firephp->info($tags, "tags ");
$serverpath= $_SERVER["DOCUMENT_ROOT"]; 
//echo $serverpath . "<br />";

$inputfile=  "../../storage/includeData.txt";
	$api_key = rtrim(file_get_contents($inputfile,true));
//echo $api_key . "<br />";

$user_id = 'rmdobservations';
$format = 'json';
/*$per_page = "40";*/
/*&per_page={$per_page}*/
$tag_mode = 'all';

$url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&" .
	"api_key={$api_key}&user_id={$user_id}&format={$format}&" .
	"tag_mode={$tag_mode}&tags={$tags}";
//$firephp->info($url, "url");
//$firephp->info($tags, "tags");
$chandle = curl_init();
curl_setopt($chandle, CURLOPT_URL, $url);
curl_setopt($chandle, CURLOPT_RETURNTRANSFER, 1);
$data = curl_exec($chandle);
curl_close($chandle);
/* rm jsonFlickrApi from string, See header */
$data = str_replace('jsonFlickrApi(', '', $data);
$data = substr($data, 0, strlen($data) - 1); //strip out last paren
// When TRUE, returned objects wll be converted into assocatve arrays.
$response = json_decode($data, TRUE);
//$firephp->info($response, "photos found");
$image_html="<h2>Photos found</h2>";
$image_html = $image_html . "<h3>" . $tagForm . "</h3>";

switch ($response['photos']['total']) {
	case 0:
	//	$firephp->info($response['photos']['total'], " No matches ");
	echo "no matches " .  "<br />";
		break;

	default:
	
		$photos = $response['photos']['photo'];
		$count = 0;
		foreach ($photos as $value) {
			$title = $value['title'];
			
			$farmid = $value['farm'];
			$serverid = $value['server'];
			$id = $value['id'];
			$secret = $value['secret'];
			$owner = $value['owner'];
			$thumb_url = "https://farm{$farmid}.static.flickr.com/{$serverid}/{$id}_{$secret}_m.jpg";
			$page_url = "https://www.flickr.com/photos/{$owner}/{$id}";
			$image_html = $image_html . "<div class='class-container'>" .
				"<a href='{$page_url}'>" .
				"<img alt='{$title}' src='{$thumb_url}'/></a></div>";
		}
		$image_html = $image_html . "<div class='returnToMain'><a href='photoGallery.html'>Return and try more tags</a></div>";
		echo $image_html;
	
	break;
}
		
	
?>

</body>
</html>

