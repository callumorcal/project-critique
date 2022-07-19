/*
Callum Brown
Norwich University of the Arts
Graphic Communication

BA3b Assessment (FMP)
*/





//-----CRIT (JS)-----//





$(document).ready(function() {





	//-----MESSAGES-----//
	//-----Messages, Content-----//
	var messageCount = 11; // Default message count
	var messageIndex = 0; // Index pointer for 'var messages'

	//-----Messages, Edits-----//
		var user_Name = " Alex"; // String addition example —> "This is a comment!" + user_Name, <- (insert under 'var messages')
		var link = "<a href=\"http://google.co.uk\" target=\"_blank\">CLICK ME!</a>"; // String addition including HTML link —> "This is a comment including a link:" + link, <- (insert under 'var messages')
		var div = "<div id=\"myDiv\">Content here</div>"; // String addition including HTML div  —> "This is a comment including a div:" + div, <- (insert under 'var messages')

	var messages = [ // User comments (appear in linear order)
			"Interesting 👆!!!", // comment 12
			"Matthew, that’s a great idea 🙌! I think it would look excellent alongside the ident, but I am concerned by potential legibility issues across other identity assets e.g. wayfinding, event catalogues, online promotion etc. ", // comment 13
			"Do you guys have any thoughts on how I could incorporate this within the logo and across other identity assets?", // comment 14
			"If you decide to use this typographic device, I’d suggest doing so sparingly or on assets that contain little additional typographic information.", // comment 15
			"I agree Anas, the mirrored type shouldn’t be over used.", // comment 16
			"I also think it would be worth finding out what typeface is commonly used on UK emergency service vehicles and using this for your typographic experiments (within the logo and other identity assets). ", // comment 17
			"From first impressions, it looks like something similar to Frutiger Bold is commonly used 🧐?", // comment 18
			"Paula, have you considered creating a logo system out of this single ident? That could also be an interesting avenue to stretch this identity concept.", // comment 19
			"Guys, I’m just about to update the artboard so you can see some logo experiments that include the mirror type. I think it certainly has a potential worth developing!", // comment 20
			"Further feedback is unavailable to view in this v.1.0. prototype." // comment 21
	];

	var speedIndex = 0; // Index pointer for 'var speed'
	var speed = [10000, 15000, 40000, 20000, 5000]; //array containing different speeds of responses (1000 milliseconds = 1 second) (you can edit all of these - they cycle through the order that they are in this array)

	//-----Messages, Render-----//
	function showMessages() {
		messageCount++; // Increments the message count each time the function is executed
		$('#message' + messageCount).removeClass('new_Message'); // Removes the hideMessage class from the ID of the next message to be displayed - we know that the value of 'counter' is always between 12 and 21, so we can generate the ID of the div to target by concacenating '#message' and the value of counter
		document.getElementById("comment" + messageCount).innerHTML = messages[messageIndex]; //insert the message in the 'messages' array - index 0 = #message12, index 1 = #message13 etc
		messageIndex++; //increment the pointer for the messages so that the next message in the array appears each time
		document.getElementById("message_Count").innerHTML = messageCount; //update the value of the number of messages in the chat
		speedIndex++; //increment the index pointer for the speed array so that the next message is displayed at a different speed

		if (speedIndex > 4) { //this if statement keeps the value of 'speedIndex' between 0 and 4 so that a speed is always selected (change if you change the no. of speeds in the array)
			speedIndex = 0;
		}

		if (messageCount >= 21) {
			clearInterval(addMessages); //stop the messages appearing if the value of counter gets to 21 - if you don't do this the program will try to add messages to div IDs that don't exist and crash!
			clearInterval(timeCounter); //stop the clock counter from running too
			$('#crit_Timer_Icon i').removeClass('blue_Icon'); //make crit timer appear deactivated
		}
	}

	var addMessages = setInterval(function () {
		showMessages(); //execute the 'showMessages' function
	}, speed[speedIndex]); //set the speed of the interval to the current value of 'speedIndex' to get the speed from the 'speed' array





	//-----TIMER-----//
	var minutes = 4; // Deafult time display

	function clock() {
		minutes++; // Increment the number of minutes elapsed
		document.getElementById("crit_Timer").innerHTML = minutes; // Adjust the HTML
	}

	var timeCounter = setInterval(function () { // Controls the operation of the clock
		clock();
	}, 60000); // 60000 = 1 minute





	//-----TOGGLE CHAT-----//
	$('.chat > div:nth-of-type(1)').click(function(){
		$('.chat').toggleClass('close_Chat');
	});





	//-----TOOLBAR KEYBOARD SHORTCUTS-----//

	//-----Toolbar Keyboard Shortcuts, Pen Tool (P)-----//
	$(window).keypress(function(e){ // Sets Keypress function //
    if(e.charCode == 112){ // 'P' Key //
			alert('Sorry, the pen tool isn\'t quite ready yet, but we\'re working on it 🛠'); // Alert message //
		}
	});

	//-----Toolbar Keyboard Shortcuts, Eyedropper Tool (I)-----//
	$(window).keypress(function(e){ // Sets Keypress function //
		if(e.charCode == 105){ // 'I' Key //
			alert('Sorry, the eyedropper tool isn\'t quite ready yet, but we\'re working on it 🛠'); // Alert message //
		}
	});

	//-----Toolbar Keyboard Shortcuts, Focus Tool (F)-----//
	$(window).keypress(function(e){ // Sets Keypress function //
		if(e.charCode == 102){ // 'F' Key //
			alert('Sorry, the focus tool isn\'t quite ready yet, but we\'re working on it 🛠'); // Alert message //
		}
	});

	//-----Toolbar Keyboard Shortcuts, Zoom Tool (Z)-----//
	$(window).keypress(function(e){ // Sets Keypress function //
		if(e.charCode == 122){ // 'Z' Key //
			alert('Sorry, the zoom tool isn\'t quite ready yet, but we\'re working on it 🛠'); // Alert message //
		}
	});





});
