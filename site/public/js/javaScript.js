let count = 1; 
let vaiVolta = true;
document.getElementById("radio1").checked = true; 

setInterval( function() {     
        nextImage(); 
    }, 5000);  
    
    function nextImage() {     
        
        if (count < 4 && vaiVolta == true){
        count++   
    }
    else {vaiVolta = false}

    if (count > 1 && vaiVolta == false){
        count--
    }
    
    else {vaiVolta = true}

        document.getElementById("radio"+count).checked = true;  
    }