/**
 *	Project: BizWorld
 *	Date: 15-Nov-2014
 *	Developer: Vannkorn
 */
 
 jQuery(function() {
	var BizWorld = {
		init: function() {
			this.carousel();
		},
		
		carousel: function() {
			var clickEvent = false;
			jQuery('#myCarousel').carousel({
				interval: 4000	
			}).on('click', '.list-group li', function() {
					clickEvent = true;
					jQuery('.list-group li').removeClass('active');
					jQuery(this).addClass('active');		
			}).on('slid.bs.carousel', function(e) {
				if(!clickEvent) {
					var count = jQuery('.list-group').children().length -1;
					var current = jQuery('.list-group li.active');
					current.removeClass('active').next().addClass('active');
					var id = parseInt(current.data('slide-to'));
					if(count == id) {
						jQuery('.list-group li').first().addClass('active');	
					}
				}
				clickEvent = false;
			});
		}
	}
	
	jQuery(document).ready( function() {
		BizWorld.init();
	});
 });