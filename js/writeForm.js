/*  Submit form data and use AJAX call to readForm */

$(document).ready(function() { 

$("button#tagphotosearch").click(function(event){
	
			event.preventDefault();  
			event.stopImmediatePropagation();
			
				/* add  data from form to array arPoints for raw json */
				var keyname = document.getElementById('keyname').value;
		
        			
        			getPhoto(keyname);
        				  	      });
		   				
 	
	});

function myFunction() {
	console.info("clear form");
   $('#myform').clearForm()
}

