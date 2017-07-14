  function getInfo(){
	console.info("In .getJSON Info: ",this);
var userID= 'rmdobservations';
var geoLocation;
var images_per_page =3;
var tags='beverweerd,kever';
var tag_mode='all';
var extras=['geo','url_s','description'];
var format='json';
var methodInfo = 'flickr.photos.getInfo';
storeInfo = [];
 for (var i = 0; i < storePhoto.length; i++) {

		//console.info("photo data: ",storePhoto[i].id);
		id=storePhoto[i].id
var jsonGetInfo = PREFIX+methodInfo+'&api_key=' + apiKey + '&photo_id=' +
	id + SUFFIX;
		$.getJSON(jsonGetInfo,callbackInfo);
}
  

	

};
 function callbackInfo(data){
 	console.info("In .getJSON Info: ",data);

 }