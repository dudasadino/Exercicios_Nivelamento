/* 
Nome: Fulana
Idade: 89
RG: [999.999.999] - CPF: 000.000.000-99

Endereço:
Rua Fulana, 999, Sra. Fulana - Porto Alegre / RS
CEP: 99.999-000
*/
const pessoas = [
    {
        nome: "Ana",
        idade: 29,
        rg: "111.111.111",
        cpf: "001.000.000-00",
        endereco: {
            rua: "Rua Fulana1",
            numero: 999,
            bairro: "Sra. fulana",
            cidade: "Porto Alegre",
            estado: "RS",
            cep: "00.000-000"
        }
    },
    {
        nome: "Carlos",
        idade: 34,
        rg: "222.222.222",
        cpf: "002.000.000-00",
        endereco: {
            rua: "Rua Fulana3",
            numero: 999,
            bairro: "Sra. fulana",
            cidade: "Porto Alegre",
            estado: "RS",
            cep: "00.000-000"
        }
    },
    {
        nome: "Maria",
        idade: 24,
        rg: "444.222.444",
        cpf: "003.000.000-00",
        endereco: {
            rua: "Rua Fulana2",
            numero: 999,
            bairro: "Sra. fulana",
            cidade: "Porto Alegre",
            estado: "RS",
            cep: "00.000-000"
        }
    },
]

// pegar primeiro da lista
var inicio = 0
// pegar ultimo da lista
var final = pessoas.length - 1

for (i = inicio; i <= final; i++) {
    var nome = pessoas[i].nome
    var idade = pessoas[i].idade
    var rg = pessoas[i].rg
    var cpf = pessoas[i].cpf
    var rua = pessoas[i].endereco.rua
    var numero = pessoas[i].endereco.numero
    var bairro = pessoas[i].endereco.bairro
    var cidade = pessoas[i].endereco.cidade
    var estado = pessoas[i].endereco.estado
    var cep = pessoas[i].endereco.cep

    console.log(`Nome: ${nome}\nIdade: ${idade}\nRG: [${rg}] - CPF: ${cpf}
    
    Endereço:
    Rua ${rua}, ${numero}, ${bairro} - ${cidade} / ${estado}
    cep: ${cep}
    `)
}