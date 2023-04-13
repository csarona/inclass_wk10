document.getElementById("sameAddress").addEventListener("click", function(){
    if(this.checked){ //this == sameAddress
        document.getElementById("home").value = document.getElementById("bill").value;
        document.getElementById("home").disabled = true;
    }
    else{
        document.getElementById("home").disabled = false;
        document.getElementById("home").value = "";
    }
})