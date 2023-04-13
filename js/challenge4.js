document.querySelector('#challenge4_form').addEventListener("click", function(){
    
    let name = document.querySelector("#name").value; 
    let address = document.querySelector("#addr").value;
    let name_error = document.querySelector("#nameError");
    let add_error = document.querySelector("#addrError");
    

    
    if(name.length == 0 ){
        name_error.style.display = "block";
        
        event.preventDefault()
        
    }
    else{
        name_error.style.display = "none";
    }
    if(address.length == 0) {
        add_error.style.display = "block";
        event.preventDefault()
        

    }
    else{
        add_error.style.display = "none";
    }
    if (name.length == 0 || address.length == 0){
      
        event.preventDefault();
        return false;
        
    }
        

})