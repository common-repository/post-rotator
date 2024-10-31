/*  
*
* Post Rotator Wordpress Plugin - js
* Written by: Shai Barash
* Git: https://github.com/sirbolkins/postrotator
*
*/
jQuery(document).ready(function() {
  jQuery.noConflict();
  (function($) { 
	// get all the slides and initialize the pointer
	var post_rotator_arr = $(".post_rotator").get(),
		r_pointer = 0,
		auto_rotate = true;
	
        // get rotater params for shortcode. Ex.[post_rotator_params height=500px speed=15000]
	
	 post_rotator_height = $("#post_rotator_params").css("height");
	 post_rotator_speed = $("#post_rotator_params").html();
	 if(parseInt(post_rotator_speed)<1000)
	  post_rotator_speed = 2000;
	 if($("#post_rotator_params").hasClass("off"))
	  auto_rotate = false;
	
	// build the rotater gallery right before the first slide
	
	$(".post_rotator").eq(0).before('<div id="rotator_stage" style="height:'+post_rotator_height+'"><div id="post_rotator_arrow_left" style="line-height:'+post_rotator_height+'"><</div><div id="post_rotator_arrow_right" style="line-height:'+post_rotator_height+'">></div><ul id="rotator_prop" style="height:'+post_rotator_height+'"></ul></div>');
	
	// calculate the stage (100% * slides) and slides (stage / num of slides)
	
	var post_rotator_width = (100 * post_rotator_arr.length) + "%";
	var post_rotator_slide_width = (100 / post_rotator_arr.length) + "%";
	var post_rotator_slide_padding = "0, " + (5 / post_rotator_arr.length) + "%";
	
	// now build the slides html inside the rotater gallery
	for(var i=0;i<post_rotator_arr.length;i++)
	{
	  $("#rotator_prop").append('<li class="rotator_slide" style="width:'+post_rotator_slide_width+';height:'+post_rotator_height+';">'+$(post_rotator_arr).eq(i).html()+'</li>')
	}
	
	// once all the content is inside, set gallery width and remove the code used to build the gallery
	$("#rotator_prop").css("width", post_rotator_width);
	$(".post_rotator").remove();

        //get each individual slide height to influence gallery height. if slide is higher than the given width, increase the gallery height to that of the tallest slide.

        function fix_rotater_height() {
          var get_ends = $('.rotator_end').get();
          var end_helper, height_changed = false;
          var max_height = parseInt($("#rotator_stage").css("height"));

          $.each(get_ends, function(index, value){
            end_helper = $(value).position().top;
            if(end_helper > max_height)
            {
              max_height = end_helper;
              height_changed = true;
            }
          });

         // correct the measurement (add 50 px to the highest offset)
         if(height_changed)
         max_height += 50;
         max_height+= "px";
         $("#rotator_stage").css("height", max_height);
         $("#post_rotator_arrow_left").css("line-height", max_height);
         $("#post_rotator_arrow_right").css("line-height", max_height);
         $("#rotator_prop").css("height", max_height);
      }

        fix_rotater_height();
	
	// start the rotation interval
	if(auto_rotate)
	 var rotatorInterval = setInterval(function(){wppr_interval()},post_rotator_speed);
	
	// next slide
	function wppr_interval(){
	  r_pointer++;
	  if(r_pointer == post_rotator_arr.length)
	  {
	    r_pointer = 0;
	    $("#rotator_prop").animate({"left":"0"},500);
	  }
	  else
	    $("#rotator_prop").animate({"left":"-=100%"},250);
	}
	
	// previous slide
	function wppr_back(){
	  r_pointer--;
	  if(r_pointer < 0)
	  {
	   r_pointer = post_rotator_arr.length - 1;
	   var to_last_rotater = "-=" + (100 * (r_pointer)) + "%";
	   $("#rotator_prop").animate({"left" : to_last_rotater},500);
	  }
	  else
	    $("#rotator_prop").animate({"left" : "+=100%"},500,
		function(){
		  if(auto_rotate)
		    rotatorInterval = setInterval(function(){
			  wppr_interval()},post_rotator_speed);
		});
	}
	
	// rotater UI: click arrows
	
	$("#post_rotator_arrow_left").click(function(){
	 if(auto_rotate)
	   clearInterval(rotatorInterval);
	 wppr_back();
	});
	
	$("#post_rotator_arrow_right").click(function(){
	  if(auto_rotate)
	   clearInterval(rotatorInterval);
	  wppr_interval();
	  if(auto_rotate)
	   rotatorInterval = setInterval(function(){wppr_interval()},post_rotator_speed);
	});
	
  })(jQuery);
});
