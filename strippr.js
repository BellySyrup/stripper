switch (location.host) {
	case 'deadspin.com':
	case 'foodspin.deadspin.com':
	case 'thestacks.deadspin.com':
	case 'regressing.deadspin.com':
	case 'gawker.com':
	case 'defamer.gawker.com':
	case 'valleywag.gawker.com':
	case 'dodgeandburn.gawker.com':
	case 'gizmodo.com':
	case 'io9.com':
	case 'jalopnik.com':
	case 'jezebel.com':
	case 'kotaku.com':
	case 'lifehacker.com':
	case 'petapixel.com':
		post = $('.post');
		break;
	case 'www.engadget.com':
		post = $('.post-body');
		break;
	case 'blog.bufferapp.com':
	case 'elitedaily.com':
		post = $('.post-box');
		break;
	case 'www.macrumors.com':
		post = $('.article');
		break;
	case 'www.theverge.com':
		post = $('.article-body');
		break;
	case 'wow.joystiq.com':
		post = $('#content-container');
		break;
	default:
		alert(siteNotSupported);
		break;
}

if(typeof post != 'undefined'){
	console.log('strip');
	var strippr = '<div class="strippr"><div class="paythestrippr"></div></div>';
	var paythestrippr = '<div class="paythestrippr"></div>'
	$('body').append(strippr);
	$('.strippr').css(stripprcss);
	$('.paythestrippr').css(closecss);
	$('.strippr').append(post);

	$('.paythestrippr').click(function(){
		console.log('paythestrippr');
		$('.strippr').remove();
	});
	// $('body').fadeOut(function(){
	// 	$('body > *').remove();
	// 	$('body').append(post);
	// 	$('body').css(bodyStyles);
	// 	$('body > div').css(styles);
	// 	$('body').fadeIn();
	// });
}