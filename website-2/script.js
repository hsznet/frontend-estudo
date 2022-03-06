const originalSize = style.fontSize;
 
function mouseOver(){

    document.getElementById("itens").style.cursor = "pointer";


}

function mouseClickSobre(){
     
    var bool = true;
    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
    
    var f = document.getElementById('texto');
    
    if (bool == true){
        document.addEventListener('click', function(ev){
        f.style.opacity = 0;
        bool = false;
    
        

        sleep(1000).then(() => {
        f.style.opacity = 1;
        bool = true;
        f.innerHTML = "Olá, me chamo Heitor Luis Zamboni!";});
    });}


}

function mouseClickStacks(){
     
    var bool = true;
    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
    
    var f = document.getElementById('texto');
    
    if (bool == true){
        document.addEventListener('click', function(ev){
        f.style.opacity = 0;
        bool = false;
    
        

        sleep(1000).then(() => {
        f.style.opacity = 1;
        bool = true;
        f.innerHTML = "Para criar esse site, eu usei HTML, CSS e Javascript puros";});
    });}
 
function mouseUp(){
    
    var size = mouseClick(size);

    document.getElementById("itens").style.fontSize = `${size}px`;
}}
