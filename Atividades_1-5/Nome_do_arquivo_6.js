function ForteTortilha ( profissao, moeda, Dia ){
      let trabalhador = profissao
      let Cobre = 0
      let Ouro = 0
      let Prata = 0
      let salario = 0

      if( moeda >= 10 && moeda < 100 ){
        salario = (Prata + moeda) / Dia
         return "em " + Dia + " dias o " + profissao + " recebe em Prata "  + salario
      }   if( moeda >= 100){
        salario = (Ouro + moeda) / Dia
         return "em " + Dia + " dias o " + profissao + " recebe em Ouro "  + salario
     
        }
        return "em " + Dia + " dias o " + profissao + " recebe em Cobre "  + (Cobre + moeda)/ Dia
    }
        
console.log(ForteTortilha("carteiro" ,10 , 10  ))
console.log(ForteTortilha("ferreiro" ,100 , 60  ))
console.log(ForteTortilha("alfaiate" ,6 , 40  ))
    /*Exemplo da questao 6

    entrada:
    Função: Ferreiro
    Custo: 2 Cobres/dia
    
    saida:
    Salário: em 20 dias, deve se pagar a 3 ferreiros 60 cobres
    
    uma moeda de ouro = 10 de prata
    uma moeda de prata = 10 cobre

    uma moeda de ouro = 10 reais (10 moedas de 1 real)
    uma moeda de prata = 1 real (10 moedas de 10 centav.)
    uma moeda de cobre = 10 centavo. (2 moedas de 5 centav.)*/
    
   
   
   
   
    //let ferreiro2 = 
   //let ferreiro3 = 
   
   //let salario = ( Ouro * Dia)



//}


//let ferreiro = 

//if (semaforo == "verde") {
 //   mensagem = "Pode passar";
//}





//function ForteTortilha (Ouro, Prata, Cobre){
   // let valores = (Ouro, Prata, Cobre)
    //let dias = 6
    
    
    //return valores
//}

//console.log(ForteTortilha(8, 8, 8))