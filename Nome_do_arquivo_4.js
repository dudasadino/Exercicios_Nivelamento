function media(n1, n2, n3) {


    let calculo = (n1 + n2 + n3) / 3

    switch (calculo) {
        case 1:
            (calculo == 7);
            return "aprovada";
            break;
        default:

            return "reprovada";
            break;
    }


}
console.log(media(7, 7, 7))

