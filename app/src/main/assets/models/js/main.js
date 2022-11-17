window.onload=inicio;

var j=imagenes.length;
var indice;
var lista_prod=[];
menu_visible=false;


function inicio(){
	document.getElementById("burger").onclick=menu;
	document.getElementById("aspa").onclick=cerrar;
	document.getElementById("left").onclick=anterior;
	document.getElementById("rigth").onclick=siguiente;
	
	
	
	
	window.onkeydown=teclado;
	
	
	
	
	for (i=0; i<j; i++){
		document.getElementById("container").innerHTML +=
		`<div class="producto" id="h${i}" ><div class="foto" onclick="ampliar(this)"><img src="img/${imagenes[i]}"></div>`;
	}
}

function ampliar(f){
	
indice=(f.parentNode.getAttribute("id")).substr(1);
	
	document.getElementById("ampliar").style.display='block';
	repetir();
	

}
	



	
function cerrar(){
	document.getElementById("ampliar").style.display='none';
	
}

function siguiente(){
	indice++;
	repetir();
	
}

function anterior(){
	indice--;
	repetir();
	
}

function repetir(){
	
	
	document.getElementsByClassName("fotoamp")[0].innerHTML= `<div class="fotoamp"><img src="img/${imagenes[indice]}"</div>`;
	
	
	
	if (indice==0){
	document.getElementById("left").style.visibility="hidden";
		
}
	else {
		document.getElementById("left").style.visibility="visible";
	}
	
		if (indice==j-1){
	document.getElementById("rigth").style.visibility="hidden";
		
}
	else {
		document.getElementById("rigth").style.visibility="visible";
	}
}


function teclado(k){      //moverse con el cursor//
	let codigo=k.keyCode;
	if (codigo==37){
		if (indice>0 && document.getElementById("ampliar").style.display=="block"){
		anterior();
		}
	}
	if (codigo==39){
		if (indice<j-1 && document.getElementById("ampliar").style.display=="block"){
                        siguiente();
                }
	
	}
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




