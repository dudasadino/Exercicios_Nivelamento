function ForteTortilha(serviçal, moeda, Dia) {
   let Ouro = moeda * Dia;
   let Prata = moeda * Dia * 10;
   let Cobre = Prata * 10;

   console.log("em " + Dia + " dias o " + serviçal + " recebe em Ouro " + Ouro);
   console.log("em prata seria " + Prata);
   console.log("e em cobre seria " + Cobre);
   console.log("");
}

ForteTortilha("carteiro", 1, 1);
ForteTortilha("ferreiro", 100, 10);
ForteTortilha("alfaiate", 1, 10);