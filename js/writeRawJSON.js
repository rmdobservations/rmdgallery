/*  Submit form data and use AJAX call to writeRawJSON.php to write form  data into raw.json */

$(document).ready(function() { 
var ourObj;
$("button#tagphotosearch").click(function(event){
			event.preventDefault();  
			event.stopImmediatePropagation();
			
				/* add  data from form to array arPoints for raw json */
				var keyname = document.getElementById('keyname').value;
			var ownername = document.getElementById('ownername').value;
			/* create an object */
			ourObj= 		[{"keyname":String(keyname), 
											"ownername": String(ownername)	
											}];
				
			console.info("new data object: ",ourObj);
			console.info("Number of elements: ",ourObj.length);
			console.info("All data:",ourObj);
			/*------------------------------------------------*/
		
			$.ajax({
	        url: "readJSON.php",
				type: "post",
      		data: {"points":JSON.stringify(ourObj)},
        		success: function(response){
        			/* send an event to read image information and display in div */
        			console.info("what us this?",typeof(response),response);
        			
        			
        				  	      }
		   	}); /* ajax */	
			
 			});	 				
 	
	});

function myFunction() {
	console.info("clear form");
   $('#myform').clearForm()
}

