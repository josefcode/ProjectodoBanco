
// Uma vez decidido qual será o tipo de dados para representar as contas das
// contas, crie uma conta de teste e verifique se as propriedades mencionadas
// acima são criadas corretamente.

let Usuorios = function(numero, tipo, saldo, titular){
    this.numero = numero,
    this.tipo = tipo,
    this.saldo = saldo,
    this.titular=titular
}

// Agora que sabemos como representar usuários e suas contas, o cliente nos
// forneceu uma lista de contas que devemos ser capazes de criar. Para isso,
// devemos gerar uma função construtora que facilite a criação das contas
// bancárias correspondentes mais rapidamente.

let abigael = new Usuorios (5486273622, "Conta Corrente", 27771, "Abigael Natte");
let ramon = new Usuorios (1183971869, "Conta Poupança", 8675, "Ramon Connell");
let jarret  = new Usuorios (9582019689, "Conta Poupança", 27363, "Jarret Lafuente");
let ansel = new Usuorios (1761924656, "Conta Poupança", 32415, "Ansel Ardley");
let jacki = new Usuorios (7401971607, "Conta Poupança", 18789, "Jacki Shurmer");
let jobi = new Usuorios (630841470, "Conta Corrente", 28776, "Jobi Mawtus");
let thomasin = new Usuorios (4223508636, "Conta Corrente", 2177, "Thomasin Latour");
let lonnie = new Usuorios (185979521, "Conta Poupança", 25994, "Lonnie Verheijden");
let alonso = new Usuorios (3151956165, "Conta Corrente", 7601, "Alonso Wannan");
let bendite = new Usuorios (2138105881, "Conta Poupança", 33196, "Bendite Huggett");

// console.log(abigael)

// A partir dos 10 usuários, gereuma lista onde todos eles convergem (lista de
//     objetos)

let listaDeObjetos = [abigael, ramon, jarret, ansel, jacki, jobi, thomasin, lonnie, alonso, bendite];

// um objeto literal ele será composto pela lista de objetos
// gerados no ponto anterior. fazer deposito , saque .


let banco = {
    clientes: listaDeObjetos, 
        consultarCliente: function (titular) {
       
            for ( i in this.clientes) {
              if (this.clientes[i].titular === titular) {
                return this.clientes[i];
            }
        }
             return `cliente ${titular} nao existe`;
   
         },

          deposito : function (titular, saldo) {
                 for (i in this.clientes){
                         if (this.clientes[i].titular === titular){
                       this.clientes[i].saldo += saldo
                        return `Deposito realizado, seu novo saldo é: ${this.clientes[i].saldo}`;
                     }
                 } return `cliente ${titular} nao existe`
            },

             saque : function (titular, saque) {
                     for ( i in this.clientes){
                          if (this.clientes[i].titular === titular){
             
                             if ((this.clientes[i].saldo - saque)< 0){
                               return `Fundos insuficientes`
                                 } else {
                                     this.clientes[i].saldo-= saque
                                     return `Extração feita com sucesso, seu
                                     novo saldo é: ${this.clientes[i].saldo} `;
                                     }
                                }
                            }
                        }    
}; 

console.log(banco.c("Lonnie Verheijden"));
console.log(banco.deposito("Lonnie Verheijden", 25998));
console.log(banco.saque("Lonnie Verheijden", 25998));
