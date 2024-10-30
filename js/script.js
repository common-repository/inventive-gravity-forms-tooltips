// JavaScript Document 

jQuery(document).ready(function($) {
	
 jQuery(".inventive-gravity-tooltip").click(function()
 {
$(".inventive-gravity-tooltip").stop().fadeOut(); 
 });

if ($(".inventive-gravity-tooltip").length > 1) $(".inventive-gravity-tooltip").first().remove();	


$( ".gform_fields, .i3pd_container, .variations" ).find( ":input, label").hover(function(event){
	event.stopPropagation();

	if ($(this).attr("data-attribute_name") != undefined)
	{
	
	igt($(this).parent("td"),$(".woocommerce-variation-description").html());
		
	}
	else
	{
	
	$(this).closest(".gfield").find(".gfield_description").each(function() {

  if ($(this).html() != "") {

igt($(this).closest(".gfield"),$(this).html());
	    
  }
});
	}
	


	
});	
$( ".gform_fields, .i3pd_container, .variations" ).find( ":input, label").mouseleave(function(){
	$(".inventive-gravity-tooltip").stop().fadeOut();
	
});

  
});

function igt(li,html)
{

	  jQuery(".inventive-gravity-tooltip").appendTo(li);
	  jQuery(".inventive-tooltip-container").html(html);
      jQuery(".inventive-gravity-tooltip").stop().fadeIn();
	  
	  ///if tooltip is outside viewport, load it on top
	   var div = document.getElementById ("inventive-gravity-tooltip");
       if (div.getBoundingClientRect) {
       var rect = div.getBoundingClientRect();
	  if (rect.left < 0)
	  {
	  jQuery("#inventive-gravity-tooltip").removeClass("inventive-gravity-tooltip-left").addClass("inventive-gravity-tooltip-down");
      jQuery("#inventive-arrow").removeClass("inventive-arrow-right").addClass("inventive-arrow-up");
	  }
	  else
	  {
	  jQuery("#inventive-gravity-tooltip").not("inventive-gravity-tooltip").removeClass("*").addClass("inventive-gravity-tooltip-left");
      jQuery("#inventive-arrow").removeClass("inventive-arrow-up").addClass("inventive-arrow-right");  
	  }
	  
	   }	
}
