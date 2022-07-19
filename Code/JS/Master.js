/*
Callum Brown
Norwich University of the Arts
Graphic Communication

BA3b Assessment (FMP)
*/





//-----MASTER (JS)-----//





$(document).ready(function() {





	//-----TOGGLE NAVIGATION-----//
	$('#menu_Trigger').click(function(){	// Activate function on #menu_Trigger click//
		$('.grid').toggleClass('hide_Grid') // Toggle = expands/shrinks .grid //
		$('nav').toggleClass('hide_Nav') // Toggle = moves nav //
	});





	//-----PROTOTYPE ALERTS-----//
	$('.alert').click(function(){ // Activate function on .alert click//
		alert('Sorry, the feature you selected isn\'t quite ready yet, but we\'re working on it 🛠'); // Alert message //
	});

	$('.alert_Confirm').click(function(){ // Activate function on .alert_Confirm click//
		return confirm('Sorry, the feature you selected isn\'t quite ready yet, but we\'re working on it 🛠 \n\nWould you like to learn more?'); // Alert message (option to proceed) //
	});





});
