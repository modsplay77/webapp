

window.onload=inicio;
menu_visible=false;



function inicio(){

    document.getElementById("web1").onclick=open;
    document.getElementById("web2").onclick=open2;
    document.getElementById("web3").onclick=open3;
    document.getElementById("burger").onclick=menu;
    
}



          
          function open(){
    
            location.href='../web1/index.html';
        }
        function open2(){
    
            location.href='../web2/index.html';
        }
        function open3(){
    
            location.href='../web3/index.html';
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













