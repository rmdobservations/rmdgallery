<?php
// The Simple API URL
$api_endpoint = 'https://vimeo.com/api/v2/';
// Curl helper function
function curl_get($url) {
	$curl = curl_init($url);
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($curl, CURLOPT_TIMEOUT, 30);
	curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1);
	$return = curl_exec($curl);
	curl_close($curl);
	return $return;
}
// Get the album
$album_idArray = array(3400940);
$idArray = array('insects');
// Load the videos and info
$videos = array(simplexml_load_string(curl_get($api_endpoint . 'album/' . $album_idArray[0] . '/videos.xml')));
$infoArr = array(simplexml_load_string(curl_get($api_endpoint . 'album/' . $album_idArray[0] . '/info.xml')));
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Video Gallery</title>

 <script type="text/javascript" src="js/jquery-2.2.0.min.js"></script>  
 <script type="text/javascript" src="js/videoGallery.js"></script> 
<link rel="stylesheet" type="text/css" media="screen" href="css/videoGallery.css">
	
</head>
<body>
<!-- To add a new group, copy and paste wrapper contents, increment index -->
	<h1>Video Collection</h1>
	<h2><a href="https://developer.vimeo.com/">Developer website</a></h2>
	<div id="stats">
		
		<h2>Insecten</h2>
		<div style="clear: both;"></div>
	</div>
	<div id="wrapper">
		<div id="embed"></div>
		<div id="insects">
			<ul>
		
			<?php foreach ($videos[0]->video as $video): ?>
			
				<li>
					<a href="<?php echo $video->url ?>">
						<img src="<?php echo $video->thumbnail_medium ?>" class="thumb" />
						<p><?=$video->title ?></p>
					</a>
				</li>
			<?php
endforeach ?>
			</ul>
		</div>
	</div>
	

</body>
</html>