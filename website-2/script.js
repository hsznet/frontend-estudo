const element = document.querySelector('.itens');
const style = getComputedStyle(element);
 
const originalSize = style.fontSize;
 
function mouseOver(){

    document.getElementById("itens").style.cursor = "pointer";


}

function mouseClick(size){
     
    
    const element = document.querySelector('.itens');
    const style = getComputedStyle(element);

    
    var size = style.fontSize;
    
    size = parseInt(size);
    var new_size = size - 10
    

    new_size = new_size.toString();

    document.getElementById("itens").style.fontSize = `${new_size}px`;
    document.getElementById("itens").style.cursor = "pointer";

    return size;
 }

 
 
 function mouseUp(){
    
    var size = mouseClick(size);

    document.getElementById("itens").style.fontSize = `${size}px`;
 }
