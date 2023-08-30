function getRandom() {
    return Math.floor(Math.random()*3 +1);
  }



    let jugador;
    let cp;
    let ganados_pc=0;
    let perdidos_pc=0;
    let ganados_juagador=0;
    let perdidos_jugador;
    let intentos=7;
    let empates=0;
    
    

    do{

        opcion_jugador=parseInt(prompt("Bienvenido a piedra papelo tijera escoje una opcion para jugar\n 1......papel\n 2......Piedra \n 3......Tijera"));


        while(opcion_jugador>3 && opcion_jugador<0){
            alert("Numero fuera de rango vuelve aintentar");
            opcion_jugador=prompt("opc");
        }
        
        cp=getRandom();
        

        if(opcion_jugador==cp){
            empates++;
            alert("empate");
            continue;
        }
        if(opcion_jugador==1 && cp==2){
            alert("Ganaste");
            ganados_juagador++;
            continue;
        }

        if(opcion_jugador==1 && cp==3){
            alert("perdiste");
            ganados_pc++;
        }

        if(opcion_jugador==2 && cp==1){
            alert("ganaste");
            ganados_juagador++;
        }
        if(opcion_jugador==3 && cp==1){
            alert("Ganaste");
            ganados_juagador++;

        }
        if(opcion_jugador==3 && cp==2){
            alert("perdiste");
            ganados_pc++;
        }

        


    }while(intentos--);

    alert("resultados \n pc= "+ganados_pc+"\n tu= "+ganados_juagador+"\nempate: "+empates )
