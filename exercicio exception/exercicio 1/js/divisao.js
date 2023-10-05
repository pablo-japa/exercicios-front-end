export default class divisao{
    divisaoMetodo(dividendo,divisor){
        try{
            if(divisor === 0 ){
                throw new Error("Divisão por zero não é aceita")
            }

            return dividendo / divisor;
        }catch(error){
            return "Erro" + error.mensage;
    
    }
    }
}

