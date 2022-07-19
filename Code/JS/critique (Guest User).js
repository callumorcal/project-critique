//-----CRITIQUE (GUEST USER) (JS)-----//





$(document).ready(function() {





	//-----PROTOTYPE ALERTS-----//
	$('.guest_Alert').click(function(){ // Activates function when either a disabled crit card or disabled button is clicked //
		alert('Please sign in to use this feature 🔒');
	});





	//-----HERO TEXT ANIMATION-----//
	(function(){

    var words = [ // Word list //
      'projects',
			'network',
			'career',
			'skillset'
		],

		i = 3; // Starts the animation at 'Projects' //

    setInterval(function(){
        $('#hero_Animation').fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn();
        });
    }, 3000);

  })();





});
