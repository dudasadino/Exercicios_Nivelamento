function media(n1, n2, n3) {


    let calculo = (n1 + n2 + n3) / 3

    if (calculo >= 7) {
        return "aprovada";
    }
    return "reprovada";
}
console.log(media(7, 7, 7))
