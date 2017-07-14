/* Put this into the html
 <div id="container">  
			<button onclick="constructorTest()">Test constructor</button>
*/

function constructorTest()
{	
show("This tests constructor");
var store = [];
var Item = makeStruct("id speaker country");
// thanks to http://stackoverflow.com/users/22364/markus-jarderot
var row = new Item(1, 'john', 'au');
store.push(row);
//console.info("speaker: ",row.speaker); // displays: john
var row = new Item(2, 'rose', 'nl');

store.push(row);
$.each(store,function(index,data){
show(index); 
show(data);
});
		
};
