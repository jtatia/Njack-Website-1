$(document).ready(function(){
	
	var flag_android=false;
	var flag_webdev=false;
	var flag_coding=false;
	var flag_linux=false;
	var flag_atleastoneopen=false;
		
	$(".description").css("margin-top",45+'vh');
	
	$("#LinuxCircle").mouseover(function(){
	$("#content-linux").fadeIn();
	});

	$("#LinuxCircle").mouseout(function(){
	$("#content-linux").fadeOut();
	});



	$("#WebdevCircle").mouseover(function(){
	$("#content-webdev").fadeIn();
	});

	$("#WebdevCircle").mouseout(function(){
	$("#content-webdev").fadeOut();
	});



	$("#CompCircle").mouseover(function(){
	$("#content-comp").fadeIn();
	});

	$("#CompCircle").mouseout(function(){
	$("#content-comp").fadeOut();
	});


	$("#AndroidCircle").mouseover(function(){
	$("#content-android").fadeIn();
	});
	
	$("#AndroidCircle").mouseout(function(){
	$("#content-android").fadeOut();
	});
	
	$("#Android").click(function(){
		
		if(flag_webdev==true)
		{
			$("#WD_text").fadeOut(500,function(){});
			flag_webdev=false;
		}
		
		if(flag_coding==true)
		{
			$("#C_text").fadeOut(500);
            flag_coding=false;			
		}
		
		if(flag_linux==true)
		{
			$("#L_text").fadeOut(500);
             flag_linux=false;			
		}
		
		if(flag_android==false)
	    {	
	        $("#A_text").fadeTo("slow",1.0);
			
			if(flag_atleastoneopen==false)
			$("html, body").animate({ scrollTop: $("#A_text").offset().top }, 900);
			
			flag_android=true;
			flag_atleastoneopen=true;
		}
		else
	    {
			$("html, body").animate({ scrollTop: $("#Android").offset().top-200}, 1000, function(){
			$( "#A_text" ).fadeTo( "slow" , 0.0);
			flag_android=false;
			flag_atleastoneopen=false;
			});			
		}
	});
	
	$("#Web_Development").click(function(){
		
		if(flag_android==true)
		{
			$("#A_text").fadeOut(500);
			flag_android=false;
		}
		
		if(flag_coding==true)
		{
			$("#C_text").fadeOut(500);
            flag_coding=false;			
		}
		
		if(flag_linux==true)
		{
			$("#L_text").fadeOut(500);
             flag_linux=false;			
		}
		
		if(flag_webdev==false)
	    {	
	        $("#WD_text").fadeTo("slow",1.0);
			
			if(flag_atleastoneopen==false)
			$("html, body").animate({ scrollTop: $("#WD_text").offset().top }, 900);
			
			flag_webdev=true;
			flag_atleastoneopen=true;
		}
		else
	    {
			$("html, body").animate({ scrollTop: $("#Android").offset().top-200}, 900, function(){
			$("#WD_text").fadeTo("slow",0.0);
			flag_webdev=false;
			flag_atleastoneopen=false;
			});			
		} 
	});
	
	$("#Coding").click(function(){
		
		if(flag_webdev==true)
		{
			$("#WD_text").fadeOut(500);
			flag_webdev=false;
		}
		
		if(flag_android==true)
		{
			$("#A_text").fadeOut(500);
            flag_android=false;			
		}
		
		if(flag_linux==true)
		{
			$("#L_text").fadeOut(500);
             flag_linux=false;			
		}
		
		if(flag_coding==false)
	    {	
	        $("#C_text").fadeTo("slow",1.0);
			
			if(flag_atleastoneopen==false)
			$("html, body").animate({ scrollTop: $("#C_text").offset().top }, 900);
			
			flag_coding=true;
			flag_atleastoneopen=true;
		}
		else
	    {
			$("html, body").animate({ scrollTop: $("#Android").offset().top-200}, 900, function(){
			$("#C_text").fadeTo("slow",0.0);
			flag_coding=false;
			flag_atleastoneopen=false;
			});			
		} 
	});
	
	$("#Linux").click(function(){
		
		if(flag_webdev==true)
		{
			$("#WD_text").fadeOut(500);
			flag_webdev=false;
		}
		
		if(flag_coding==true)
		{
			$("#C_text").fadeOut(500);
            flag_coding=false;			
		}
		
		if(flag_android==true)
		{
			$("#A_text").fadeOut(500);
             flag_android=false;			
		}
		
		if(flag_linux==false)
	    {	
	        $("#L_text").fadeTo("slow",1.0);
			
			if(flag_atleastoneopen==false)
			$("html, body").animate({ scrollTop: $("#L_text").offset().top }, 900);
			
			flag_atleastoneopen=true;
			flag_linux=true;
		}
		else
	    {
			$("html, body").animate({ scrollTop: $("#Android").offset().top-200}, 900, function(){
			$("#L_text").fadeTo("slow",0.0);
			flag_linux=false;
			flag_atleastoneopen=false;
			});			
		}
	});
	
});
