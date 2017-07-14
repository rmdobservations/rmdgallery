// There are duplicates here which need to be translated into arrays. eventually. RMD 11 aug 2015

var oEmbedCallbackArray = ['embedVideo'];

var oEmbedCallback = 'embedVideo';

		// Set up the URL
		var oEmbedUrl = 'https://vimeo.com/api/oembed.json';

		// Load the first one in automatically?
		var loadFirst = true;
console.info("outside doc");

$(document).ready(function(){
// Tell Vimeo what function to call
		console.info("inside doc");
init('insects');
//init('ivn');
});
		// This function puts the video on the page
		function embedVideo(videoObj) {
			var videoEmbedCode = videoObj.html;
			console.info("what is video: ",videoObj);
				
			document.getElementById('embed').innerHTML = unescape(videoEmbedCode);
}

		// This function runs when the page loads and adds click events to the links
		function init(indexID) {
			
			var links = document.getElementById(indexID).getElementsByTagName('a');
console.info("Links f: ",links);
			for (var i = 0; i < links.length; i++) {
				// Load a video using oEmbed when you click on a thumb
		
					links[i].addEventListener('click', function(e) {
						var link = this;
						console.info("This is link at click: ",link);
						loadScript(oEmbedUrl + '?url=' + link.href +'&width=504&height=280&callback=' + oEmbedCallback);
						e.preventDefault();
					}, false);
				
			}

			// Load in the first video
			index=0
			if (loadFirst) {
				loadScript(oEmbedUrl + '?url=' + links[index].href + '&audio=0'+'&height=280&width=504&callback=' + oEmbedCallback);
			}
		}

		// This function loads the data from Vimeo
		function loadScript(url) {
			var js = document.createElement('script');
			js.setAttribute('src', url);
			document.getElementsByTagName('head').item(0).appendChild(js);
		}

		
