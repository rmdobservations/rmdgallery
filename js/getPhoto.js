var storePhoto ;
var Item;

var count=0;
var PREFIX = 'https://api.flickr.com/services/rest/?&method=';
var SUFFIX='&format=json&jsoncallback=?';


function getPhoto(response){
	
	apiKey=response;
	
var userID= 'rmdobservations';
var geoLocation;
var images_per_page =3;
var tags='beverweerd,kever';
var tag_mode='all';
var extras=['geo','url_s','description'];
var format='json';

var PREFIX = 'https://api.flickr.com/services/rest/?&method=';
var methodPhoto = 'flickr.photos.search';
var methodLocation = 'flickr.photos.geo.getLocation';


var HREFprefix = '<a target="_blank" href="https://www.flickr.com/';

var jsonPhotoUrl = PREFIX +methodPhoto+'&api_key=' + apiKey + '&user_id=' + userID+ 	'&format='+format+ '&per_page='+images_per_page+'&tags=' + tags + 
	'&extras='+ extras+'&jsoncallback=?';
	


	$.getJSON(jsonPhotoUrl,callbackPhoto);

};
	
function callbackPhoto(data){
		
	Item = makeStruct("index photoURL title description owner id longitude latitude");
	
		//console.info("In .getJSON Photo: ",data);
		if(data.stat != 'fail') {
			console.log("Number of  .getJSON photos: ",data.photos.photo.length);
			 storePhoto = [];
	 
			$.each(data.photos.photo, function(index,item){
				/*console.info("RMD compare explicit array with item: ");
				console.info("Explicit array: ",data.photos.photo[i]);
				console.info("Item",item);
				
				console.info("Data long and lat:",item.longitude,
				item.latitude); */
				
				row = new Item(index,item.url_s,item.title,item.description._content,
							item.owner,item.id,
								item.longitude,item.latitude);
				storePhoto.push(row);
				
		})	
		
		constructDOM();
		console.info("finished");
		}
		else
		{	console.log("RMD failed to find geo information");

		}
		
     };
     
   
 function constructDOM(){
 		var imgCont = '<h1> This gets written over </h1>'
 	for (var i = 0; i < storePhoto.length; i++) {

		//console.info("photo data: ",storePhoto[i].id);
		id=storePhoto[i].id;
		var owner = storePhoto[i].owner;
		var photoURL = storePhoto[i].photoURL;
console.info("STorephoto",id,owner,photoURL);
	
 	
 		/* construct DOM container*/
				var imgCont = "<div class='class-container'" + ' style="background: url('  + storePhoto[i].photoURL + ') no-repeat;"' + ">";

imgCont += "<div class='image-info'><p class='top'>";
imgCont+= "<a class='title' href='https://www.flickr.com/photos/'>";


imgCont+= "<a class='title' href='https://www.flickr.com/photos/" + owner + '/' + 	storePhoto[i].id + "'" + ">" + storePhoto[i].title  +"</a>"  ;

imgCont += 	
	"<div class='bottom'><p><span class='infoTitle'>" + 
	storePhoto[i].description + '</span></p></div></div></div>'; 
	
	console.info('HTML Image: ',imgCont);
	
	
	$(imgCont).appendTo('#id-container');
	  
 			} /* end for loop */
 	$('.class-container').on('mouseenter', function(){
                console.info("Hover: ",this);
                    $(this).children('div').attr('class', 'image-info-active');
                });
                $('.class-container').on('mouseleave', function(){
                    $(this).children('div').attr('class', 'image-info');
                });	
 }
function show(value){
	
console.info("Show: ",value.toString,value);
}
function makeStruct(names) {

  var names = names.split(' ');
  var count = names.length;
  function constructor() {
    for (var i = 0; i < count; i++) {
      this[names[i]] = arguments[i];
    }
  }
  return constructor;
}
