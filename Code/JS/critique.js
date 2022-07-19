/*
Callum Brown
Norwich University of the Arts
Graphic Communication

BA3b Assessment (FMP)
*/





//-----CRITIQUE (JS)-----//





$(document).ready(function() {





	//-----PROTOTYPE ALERTS-----//
	$('.crit_Alert').click(function(){ // Activates function when either a disabled crit card or disabled button is clicked //
		if (confirm('Sorry, the crit you selected isn\'t available in this prototype, but we\'re working on it 🛠\n\nInstead you can view \'Emergency Service Show (Logo Concept)\'')) { // If 'OK', perform scroll function //
			$('body').animate({scrollTop: $("#anchor").offset().top}, 1000); // Scroll to crit cards (top row) //
		};
	});





	//-----LIGHTBOX-----//
	$('.lightbox_Visible_Trigger, .lightbox_Wrapper').click(function(){ // Activate function on either .lightbox_Trigger or .lightbox_Wrapper click//
		$('.lightbox_Wrapper').toggleClass('lightbox_Visibile'); // Toggle = Shows/Hides lightbox //
		$('body').toggleClass('scroll_Disabled'); // Toggle = disables body scroll when active //
	});

	$(".lightbox").click(function(e) {
		 e.stopPropagation();
	});





});
