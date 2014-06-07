// Responsive logo
$(document).ready(function() {
	$width = $('#header-logo').width();

	$('#header-logo img').css({
		'max-width' : $width,
		'height' : 'auto'
	});
});

$('body').on('pagebeforecreate', function(event) {
	$.ajax({
		url : 'http://fguedes.techtree.biz/kamapp/api/api.php?format=json&position=the-two-dragons',
		cache : false,
		success : function(data) {
			buildHtml = [];
			buildHtml.push('<li>');
			buildHtml.push('<a href="#">');
			buildHtml.push('<img src="' + data.image + '">');
			buildHtml.push('<h2>' + data.name + '</h2>');
			buildHtml.push('<p>');
			buildHtml.push('Pleasure:');
			switch (data.pleasure) {
				case 1:
					buildHtml.push('<i class="icon-star"></i>');
					break;
				case 2:
					buildHtml.push('<i class="icon-star"></i> <i class="icon-star"></i>');
					break;
				case 3:
					buildHtml.push('<i class="icon-star"></i> <i class="icon-star"></i> <i class="icon-star"></i>');
					break;
				case 4:
					buildHtml.push('<i class="icon-star"></i> <i class="icon-star"></i> <i class="icon-star"></i> <i class="icon-star"></i>');
					break;
				case 5:
					buildHtml.push('<i class="icon-star"></i> <i class="icon-star"></i> <i class="icon-star"></i> <i class="icon-star"></i> <i class="icon-star"></i>');
					break;
			}

			buildHtml.push('<br />');

			buildHtml.push('Difficulty:');
			switch (data.difficulty) {
				case 1:
					buildHtml.push('<i class="icon-star"></i>');
					break;
				case 2:
					buildHtml.push('<i class="icon-star"></i> <i class="icon-star"></i>');
					break;
				case 3:
					buildHtml.push('<i class="icon-star"></i> <i class="icon-star"></i> <i class="icon-star"></i>');
					break;
				case 4:
					buildHtml.push('<i class="icon-star"></i> <i class="icon-star"></i> <i class="icon-star"></i> <i class="icon-star"></i>');
					break;
				case 5:
					buildHtml.push('<i class="icon-star"></i> <i class="icon-star"></i> <i class="icon-star"></i> <i class="icon-star"></i> <i class="icon-star"></i>');
					break;
			}

			buildHtml.push('</p>');
			buildHtml.push('</a>');
			buildHtml.push('</li>');

			$('ul#list-positions').append(buildHtml.join(''));
			$('ul#list-positions').listview('refresh');
		}
	});
}); 