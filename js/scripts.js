// Slider 

$(document).ready(function(){
	slider();
});

function slider(){

	$('.control-dot').first().addClass('active');
	$('.slider-unit').first().addClass('active');

	$('.control-dot').click(function(){
		var $this = $(this),
		    $dotLength = $this.parent().children(),
		    position = $dotLength.index($this);

		$('.control-dot').removeClass('active').eq(position).addClass('active');
		$('.slider-unit').removeClass('active').eq(position).addClass('active');
	});
};


// Count down 

// Set the date we're counting down to
var countDownDate = new Date("Dec 31, 2017 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("days").innerHTML = days + "d ";
    document.getElementById("hours").innerHTML =  hours + "h ";
    document.getElementById("minutes").innerHTML =  minutes + "m ";
    document.getElementById("seconds").innerHTML = seconds + "s ";
        
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "EXPIRED";
    }
}, 1000);