var connectionUrl = 'http://asya.besaba.com/default.php';

function saveData(result) {
	var db = window.openDatabase("VialStorage", "1.0", "Vial Storage", 200000);
					
	db.transaction(
					function (tx) {
						tx.executeSql('DROP TABLE IF EXISTS CATEGORIES');
						}
					);
					
	db.transaction(
						function (tx) {
						tx.executeSql('DROP TABLE IF EXISTS GOODS');
						}
					);
					
	db.transaction(
						function (tx) {  
							tx.executeSql('CREATE TABLE IF NOT EXISTS CATEGORIES (id INTEGER PRIMARY KEY AUTOINCREMENT, categoryid TEXT, name TEXT)'); 
							});
					
	db.transaction(
						function (tx) {  
							tx.executeSql('CREATE TABLE IF NOT EXISTS GOODS (id INTEGER PRIMARY KEY AUTOINCREMENT, categoryid TEXT, name TEXT, tonnes TEXT, pieces TEXT)'); 
							});
											
	$.each(result.categories, function(k, res){					
							db.transaction( function (tx) { tx.executeSql('INSERT INTO CATEGORIES ( categoryid, name) VALUES (?,?)',[ res.id, res.name ],null,null);	});
							$.each(res.items,function(i,item)
							{
								db.transaction(
								function (tx) { 
									tx.executeSql('INSERT INTO GOODS (categoryid, name, tonnes,pieces) VALUES (?,?,?,?)',[ res.id, i , item.tonnes , item.pieses ],null,null);							
									});
							});
						});	
}
	
function getConnect() {
	var invocation = new XMLHttpRequest();
	var url = connectionUrl;
   
	invocation.open('GET', url, true);
	invocation.send(); 
	invocation.onreadystatechange = function(){
										if (invocation.readyState==4 && invocation.status==200)
										{
											var jsonResult = JSON.parse(invocation.responseText);
											if (jsonResult.categories) {
												saveData(jsonResult);
											}
										}
										};
}
	
function renderNavigation () {
		var db = window.openDatabase("VialStorage", "1.0", "Vial Storage", 200000);
		
		db.transaction(function (tx) { 
						tx.executeSql('SELECT * FROM CATEGORIES', [], function (tx, result) {
						for(var i = 0; i < result.rows.length; i++) {
							$('div.js-navigation').append( "<a href=\"details.html?id="+result.rows.item(i)['id']+"\"><b>" + result.rows.item(i)['name'] + "</b></a>" );
						}
						
						});
					}
		);
}

function renderDetailsTable(dataResult) {

	for(var i = 0; i < dataResult.rows.length; i++) {
		$('table').append("<tr><td>"+dataResult.rows.item(i)['name']+"</td><td>"+dataResult.rows.item(i)['tonnes']+"</td><td>"+dataResult.rows.item(i)['pieces']+"</td></tr>");
	}

}

var app = {

    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {

		this.onDeviceReady();
		$('.js-refresh').click(function(){
			$('.js-navigation').html('');
			renderNavigation();
			getConnect();
		});

    },
    // deviceready Event Handler

    onDeviceReady: function() {
	
		setTimeout(renderNavigation(), 50000);
    },

	
	getCategoryDetails : function() {
		var currentId = document.URL.split('?')[1].split('=')[1];
		var db = window.openDatabase("VialStorage", "1.0", "Vial Storage", 200000);
		db.transaction(function (tx) { 
						tx.executeSql('SELECT * FROM GOODS WHERE categoryid=?', [currentId], function (tx, dataResult) {
						
						setTimeout(renderDetailsTable(dataResult),10000);
						
						});
					});
	}
    
};