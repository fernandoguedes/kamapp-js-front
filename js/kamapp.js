// Responsive logo
$(document).ready(function() {
     $width = $('#header-logo').width();
     $('#header-logo img').css({
		'max-width' : $width , 'height' : 'auto'
     });
     	
	$.ajax({
		url: "http://fguedes.techtree.biz/kamapp/api/api.php?format=json&position=the-two-dragons",
		cache: false,
		success: function(data) {
			console.log(data);
		}	
	});

});

