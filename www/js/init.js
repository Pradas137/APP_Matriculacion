document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
	console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

	$(document).ready(function(){
		$(document).bind('deviceready', function(){
			var blog = $('#blog');
			$.ajax({
				url: '/institut.json',
				dataType: 'jsonp',
				jsonp: 'jsoncallback',
				timeout: 5000,
				success: function(data, status){
					$.each(data, function(i,item){ 
						var blogpost = '<div data-role="collapsible" data-collapsed="true" data-content-them="f"><h4>'+item.title+'</h4>'+ '<p>'+item.date+'<br>'+ item.blog_text+'</p></div>';
						blog.append(blogpost);
					});
				},
				error: function(){
					blog.text('We could not load your data, please try again.');
				}
			});
		});
	});
}