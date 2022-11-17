
window.onload=inicio2;
menu_visible=true









function inicio2(){
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
