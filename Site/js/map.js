function precarica( img ) {
			$( img ).each( function () {
				$( '<img/>' )[ 0 ].src = this;
			});
		}
		precarica([
				'Images/map-yellow.png',
				'Images/map-red.png',
				'Images/map-pink.png',
				'Images/map-green.png',
				'Images/map-blue.png'
			]);
				
	/*******jQuery for external title*********/
				
		jQuery(document).ready(function () {
			$('.title-blue').mouseout(function(){
				$("#map").attr('src', 'Images/map-original.png');
			}),
			$('.title-blue').mouseover( function(){
				$("#map").attr('src', 'Images/map-blue.png');
			});
			$('.title-red').mouseout(function(){
				$("#map").attr('src', 'Images/map-original.png');
			}),
			$('.title-red').mouseover( function(){
				$("#map").attr('src', 'Images/map-red.png');
			});
			$('.title-green').mouseout(function(){
				$("#map").attr('src', 'Images/map-original.png');
			}),
			$('.title-green').mouseover( function(){
				$("#map").attr('src', 'Images/map-green.png');
			});	
			$('.title-yellow').mouseout(function(){
				$("#map").attr('src', 'Images/map-original.png');
			}),
			$('.title-yellow').mouseover( function(){
				$("#map").attr('src', 'Images/map-yellow.png');
			});
			$('.title-pink').mouseout(function(){
				$("#map").attr('src', 'Images/map-original.png');
			}),
			$('.title-pink').mouseover( function(){
				$("#map").attr('src', 'Images/map-pink.png');
			});	
		});	