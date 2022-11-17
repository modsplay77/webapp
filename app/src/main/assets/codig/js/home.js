window.onload=inicio;
menu_visible=false;
function inicio(){
	document.getElementById("burger").onclick=menu;
	
}

function menu(){
	if (menu_visible==false){
		document.getElementById("links").style.visibility="visible";
		document.getElementById("inicio").style.visibility="hidden";
		menu_visible=true;
	}else{
		document.getElementById("links").style.visibility="hidden";
		document.getElementById("inicio").style.visibility="visible";
		menu_visible=false;
		
	}
	
	document.getElementById("links").style.backgroundColor="darkgrey";
	
	
}

