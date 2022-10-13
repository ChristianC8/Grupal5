

function showMenu(){
    document.getElementById("smallMenuId").classList.toggle("show");
    if (document.getElementById("smallMenuId").classList.contains("show") && !document.getElementById("opcionesDiv").classList.contains("showDiv") ){
        document.getElementById("opcionesDiv").classList.toggle("showDiv"); 
        document.getElementById("carrousel").style.display = "block";
    }
}

function opciones(){
    document.getElementById("opcionesDiv").classList.toggle("showDiv"); 
    if(!document.getElementById("opcionesDiv").classList.contains("showDiv")){
        document.getElementById("carrousel").style.display = "none";
    }else{
        document.getElementById("carrousel").style.display = "block";
    }

}