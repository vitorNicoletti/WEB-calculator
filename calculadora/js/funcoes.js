
function soma(){
     
     alert(results)
}

function tudo(id){
    
    //0-1 soma,2-3 sub,4-5 multi, 6-7 div
    var Nsomas = document.getElementsByName("num");
    var results = 0;
    var Nres = document.getElementsByClassName("resposta") 
    if(id==0){
        results = parseInt(Nsomas[0].value) + parseInt(Nsomas[1].value)
        
    }
    else if(id==1){
        results = parseInt(Nsomas[2].value) - parseInt(Nsomas[3].value) 
        
    }
    else if(id==2){
        results = parseInt(Nsomas[4].value) * parseInt(Nsomas[5].value) 
        
    }
    else if(id==3){
        results = parseInt(Nsomas[6].value) / parseInt(Nsomas[7].value) 
        
    }

    if(results >= 0 || results<0) {
        Nres[id].value = results
    }
    
}
function limpa(id) {
    var Nsomas = document.getElementsByName("num")
    var Nres = document.getElementsByClassName("resposta")

    Nsomas[id*2].value = ""
    Nsomas[(id*2)+1].value = "" 

    Nres[id].value = ""

}