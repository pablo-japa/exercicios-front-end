function exibirQuadrados(){
    let numero = parseInt(document.getElementById("numero").value);


    document.getElementById("resultado").innerHTML += "<table>";
    for( let i = 0; i < numero; i++ ){   
        for( let j = 0; j < numero; j++ ){
           resultado = (i + j)%2

           if(resultado ==0){
           document.getElementById("resultado").innerText += 0;
           } else{
            document.getElementById("resultado").innerText += 1;
           }
        
           document.getElementById("resultado").innerHTML += "<br>";
        }
    document.getElementById("resultado").innerHTML += "<table>";
    }

}
