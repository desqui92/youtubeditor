if (window.location.href.indexOf("watch") > -1) {
var style = (function() {
    // Create the <style> tag
    var style = document.createElement("style");

    // WebKit hack
    style.appendChild(document.createTextNode(""));

    // Add the <style> element to the page
    document.head.appendChild(style);
    return style;
})();
style.sheet.insertRule('::-webkit-scrollbar {width: 0px}', 0);
var botonextra = document.createElement("button");
var botonextramenu = document.createElement("div");
botonextra.setAttribute("id", "editore");
botonextra.setAttribute("title", "Edición");
botonextra.style.cssText = "background-color:transparent;border:0px solid white; cursor:pointer;";
botonextra.innerHTML += `<img src="https://i.imgur.com/HEBe2HH.png">`;
botonextramenu.innerHTML += `<div class="ytp-popup ytp-settings-menu" id="numerol" style="width: 554px; height: 169px; overflow-y:hidden;"><div class="ytp-panel" style="width: 554px; height: 169px;overflow-y:hidden;"><div class="ytp-panel-menu" role="menu" style="height: 149px;overflow-y:hidden;"><div class="ytp-menuitem" aria-haspopup="true" role="menuitem" tabindex="0"><div class="ytp-menuitem-icon"><img src="https://i.imgur.com/9PUYpiy.png" style="padding-left:20px;"></div><div class="ytp-menuitem-label">Brillo</div><div class="ytp-menuitem-label" style="display:table-cell;justify-content:right;align-items: center;padding-left: 90px;"><input id="inputuno" min="0" max="500" value="100" onchange="inputUno()" type="range" style="cursor:pointer; accent-color:red; color:white;width: 200px; background-color: transparent; border-width: 0px 0px 0px; border-top-style: initial; border-right-style: initial; border-left-style: initial; border-color: initial; border-image: initial; border-bottom-style: 0px solid white; text-align: center; --darkreader-inline-bgcolor: transparent; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-left: initial; --darkreader-inline-border-bottom: initial;" data-darkreader-inline-bgcolor="" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" step="1"></div><span id="valorinputuno" style="padding-right:20px"></span></div><div class="ytp-menuitem" aria-haspopup="true" role="menuitem" tabindex="0"><div class="ytp-menuitem-icon"><img src="https://i.imgur.com/pXvCRqJ.png" style="padding-left:20px;"></div><div class="ytp-menuitem-label"><div><span>Contraste</span></div></div><div class="ytp-menuitem-label" style="display:table-cell;justify-content:right;align-items: center;padding-left: 90px;"><input id="inputdos" min="0" max="500" value="100" onchange="inputDos()" type="range" style="cursor:pointer; accent-color:red; color:white;width: 200px; background-color: transparent; border-width: 0px 0px 0px; border-top-style: initial; border-right-style: initial; border-left-style: initial; border-color: initial; border-image: initial; border-bottom-style: 0px solid white; text-align: center; --darkreader-inline-bgcolor: transparent; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-left: initial; --darkreader-inline-border-bottom: initial;" data-darkreader-inline-bgcolor="" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" step="1"></div><span id="valorinputdos" style="padding-right:20px"></span></div><div class="ytp-menuitem" aria-haspopup="true" role="menuitem" tabindex="0"><div class="ytp-menuitem-icon"><img src="https://i.imgur.com/WDSUjA4.png" style="padding-left:20px;"></div><div class="ytp-menuitem-label">Saturación</div><div class="ytp-menuitem-label" style="display:table-cell;justify-content:right;align-items: center;padding-left: 90px;"><input id="inputtres" min="0" max="500" value="100" onchange="inputTres()" type="range" style="cursor:pointer; accent-color:red; color:white;width: 200px; background-color: transparent; border-width: 0px 0px 0px; border-top-style: initial; border-right-style: initial; border-left-style: initial; border-color: initial; border-image: initial; border-bottom-style: 0px solid white; text-align: center; --darkreader-inline-bgcolor: transparent; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-left: initial; --darkreader-inline-border-bottom: initial;" data-darkreader-inline-bgcolor="" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" step="1"></div><span id="valorinputtres" style="padding-right:20px"></span></div></div></div></div>`;
if(document.getElementById("editore") === null){
document.getElementsByClassName("ytp-chrome-controls")[0].appendChild(botonextra);
document.getElementsByClassName("ytp-chrome-controls")[0].appendChild(botonextramenu);  
}
var elb = document.getElementById("editore");
var inputunob = document.getElementById("inputuno");
var inputdosb = document.getElementById("inputdos");
var inputtresb = document.getElementById("inputtres");
document.getElementById("numerol").style.visibility = "hidden";


/*function modifyText(){
    if(document.getElementById("numerol").style.visibility === "hidden"){
    document.getElementById("numerol").style.visibility = "visible";
    }else if(document.getElementById("numerol").style.visibility === "visible"){
    document.getElementById("numerol").style.visibility = "hidden";    
    }
}*/


function inputUno(){
    document.getElementsByTagName("video")[0].style.filter = "brightness(" + document.getElementById("inputuno").value + "%)" + " contrast("+localStorage.getItem("Contraste")+"%)" + " saturate("+localStorage.getItem("Saturacion")+"%)";
    document.getElementById("valorinputuno").innerHTML = document.getElementById("inputuno").value + "%";
    localStorage.setItem("Brillo", document.getElementById("inputuno").value);
}
function inputDos(){
    document.getElementsByTagName("video")[0].style.filter = "brightness("+localStorage.getItem("Brillo")+"%)" + " contrast("+document.getElementById("inputdos").value+"%)" + " saturate("+localStorage.getItem("Saturacion")+"%)";
    document.getElementById("valorinputdos").innerHTML = document.getElementById("inputdos").value + "%";
    localStorage.setItem("Contraste", document.getElementById("inputdos").value);
}
function inputTres(){
    document.getElementsByTagName("video")[0].style.filter = "brightness("+localStorage.getItem("Brillo")+"%)" + " contrast("+localStorage.getItem("Contraste")+"%)" + " saturate("+document.getElementById("inputtres").value+"%)";
    document.getElementById("valorinputtres").innerHTML = document.getElementById("inputtres").value + "%";
    localStorage.setItem("Saturacion", document.getElementById("inputtres").value);
}



document.getElementById("inputuno").value = localStorage.getItem("Brillo");
document.getElementById("valorinputuno").innerHTML = localStorage.getItem("Brillo") + "%";
document.getElementById("inputdos").value = localStorage.getItem("Contraste");
document.getElementById("valorinputdos").innerHTML = localStorage.getItem("Contraste") + "%";
document.getElementById("inputtres").value = localStorage.getItem("Saturacion");
document.getElementById("valorinputtres").innerHTML = localStorage.getItem("Saturacion") + "%";
document.getElementsByTagName("video")[0].style.filter = "brightness(" + localStorage.getItem("Brillo") + "%)"+" "+"contrast(" + localStorage.getItem("Contraste") + "%)"+ " " + "saturate(" + localStorage.getItem("Saturacion") + "%)";


inputunob.addEventListener("change", inputUno);
inputdosb.addEventListener("change", inputDos);
inputtresb.addEventListener("change", inputTres);
//elb.addEventListener("click", modifyText, true);
elb.onclick = function () {
    if(document.getElementById("numerol").style.visibility === "hidden"){
    document.getElementById("numerol").style.visibility = "visible";
    }else if(document.getElementById("numerol").style.visibility === "visible"){
    document.getElementById("numerol").style.visibility = "hidden";    
    }
};

/*setTimeout(function(){
if(localStorage.getItem("ModoCine") && localStorage.getItem("ModoCine") == "activado"){
document.getElementById("page-manager").style.marginTop = "0px";
document.getElementById("player-container").style.maxHeight = "100vh";
document.getElementById("columns").style.marginTop = "200px";

document.getElementById("player-full-bleed-container").style.height = "100vh";
document.getElementsByClassName("video-stream html5-main-video")[0].style.width = "100%";
document.getElementsByClassName("video-stream")[0].style.height = "100vh";
document.getElementsByClassName("video-stream")[0].style.left = "0";
  document.getElementById("masthead-container").onmouseover = function () {
    document.getElementById("masthead-container").style.opacity = 1;
}
document.getElementById("masthead-container").onmouseout = function () {
    document.getElementById("masthead-container").style.opacity = 0;
}  
}else if(localStorage.getItem("ModoCine") && localStorage.getItem("ModoCine") == "desactivado"){
document.getElementById("columns").style.marginTop = "0px";
document.getElementById("page-manager").style.marginTop = "20px";
document.getElementsByClassName("video-stream")[0].style.marginLeft = "0";
document.getElementById("player-full-bleed-container").style.height = "0vh";
document.getElementById("masthead-container").style.opacity = 1;
document.getElementById("masthead-container").onmouseover = function () {
    document.getElementById("masthead-container").style.opacity = 1;
}
document.getElementById("masthead-container").onmouseout = function () {
    document.getElementById("masthead-container").style.opacity = 1;
}   
}
}, 2000);

document.getElementsByClassName("ytp-size-button")[0].onclick = function() {
if(document.getElementsByClassName("ytp-size-button")[0].getAttribute("data-title-no-tooltip") == "Modo cine"){
    
document.getElementById("page-manager").style.marginTop = "0px";
document.getElementById("player-container").style.maxHeight = "100vh";
document.getElementById("player-full-bleed-container").style.height = "100vh";
setTimeout(function(){
document.getElementsByClassName("video-stream html5-main-video")[0].style.width = "100%";
document.getElementById("columns").style.marginTop = "200px";

document.getElementsByClassName("video-stream")[0].style.height = "100vh";
document.getElementsByClassName("video-stream")[0].style.left = "0";
}, 2000);
document.getElementById("masthead-container").onmouseover = function () {
    document.getElementById("masthead-container").style.opacity = 1;
}
document.getElementById("masthead-container").onmouseout = function () {
    document.getElementById("masthead-container").style.opacity = 0;
}
localStorage.setItem("ModoCine", "activado");
}else{
document.getElementById("columns").style.marginTop = "0px";
document.getElementById("page-manager").style.marginTop = "20px"; 
document.getElementsByClassName("video-stream")[0].style.marginLeft = "0";
document.getElementById("player-full-bleed-container").style.height = "0vh";
document.getElementById("masthead-container").style.opacity = 1;
document.getElementById("masthead-container").onmouseover = function () {
    document.getElementById("masthead-container").style.opacity = 1;
}
document.getElementById("masthead-container").onmouseout = function () {
    document.getElementById("masthead-container").style.opacity = 1;
}
localStorage.setItem("ModoCine", "desactivado");
}
}*/
}
