(function($){
     $(document).ready(function() {
      var bannerUrl = "https://www.fcc.gov/ecfs/search/proceedings?q=name:((17-108))";
      var banner = function(p){
            $('<div id="myModal" class="modal"><span class="close">&times;</span><a href="' + bannerUrl + '" target="_blank"><div class="modal-content"><div id="bannerCopy"></div><div id="timer"></div></div></a></div>').prependTo("body");
           var modal = document.getElementById('myModal');
           var span = document.getElementsByClassName("close")[0];
           modal.style.display = "block";
           span.onclick = function() {
             modal.style.display = "none";
             span.style.display= "none";
          }
      }

	  //bannerCopy
	  $.get( "https://datasf.org/bannercopy", function( data ) {
		  //var c = $(data).find('#md1 > .field-item').html(); 
		  var c = data
			if(c){ 
			banner();  
			$( "#bannerCopy" ).html(c);
			 
			var x = setInterval(function() {
			  var countDownDate = new Date("Jul 17, 2017 00:00:00").getTime();
			  var now = new Date().getTime();
			  var distance = countDownDate - now;
			  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			  document.getElementById("timer").innerHTML = "<a href='" + bannerUrl + "' target='_blank' >" + days + " days</a> and <a href='" + bannerUrl + "' target='_blank'>" + hours + ":"
			  + minutes + ":" + seconds + "</a> left to save the Internet! ";

			  if (distance < 0) {
				clearInterval(x);
				document.getElementById("timer").innerHTML = "&nbsp;";
			  }
			}, 1000);
		  }
      });
    });
}(jQuery));


