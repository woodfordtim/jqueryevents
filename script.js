$(document).ready(function() {
	
	// Create the slideToggle effects each of the paragraphs and
    // buttons
    
	$("#button_effects1").click(function(){
        $('#par1').slideToggle('1000');
    });
    $("#button_effects2").click(function(){
        $('#par2').slideToggle('1000');
    });
    $("#button_effects3").click(function(){
        $('#par3').toggle('1000');
    });
    $("#button_effects4").click(function(){
        $('#par4').toggle('1000');
    });
    $("#button_effects5").click(function(){
        $('#par5').toggle('1000');
    });
    $("#button_effects6").click(function(){
        $('#par6').toggle('1000');
    });
    
    
    // Use the fadeTo effect when the mouse hovers over a specific button
    // and fadeTo again when the mouse is no longer hovering over the button
    
     $("#button_effects1").mouseenter(function(){
        $('#button_effects1').fadeTo(1000, 0.5);
    });
    $("#button_effects1").mouseleave(function(){
        $('#button_effects1').fadeTo(1000, 1);
    });
    
}); 