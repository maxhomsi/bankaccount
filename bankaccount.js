class bankAccount { //sempre qto tem uma classe tem q fazer constructor
    constructor(accountNumber, owner){ //essas sao as classe conforme informado
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.transaction = [];

    }
    //ele informa que a classe tem 3 metodos:
    //balance - Esse metodo nao recebe nada informacao, apenas mostra o saldo

    balance(){
let sum = 0
for(let i = 0 ;  i < this.transaction.lenght; i++){ //criar um loop para verificar o saldo total
    sum += this.transaction[i].amount //o "i" eh o numero que passou pelo o loop e foi a resposta. entao o SUM eh a soma de todas as transacoes verificadas no loop. 

}
return sum;
    }


    charge(payee, amt){
        let currentBalance = this.balance
        if(amt > currentBalance){ //se o amt for maior que o dinheiro na conta, nao eh pra fazer nada

        } else {

        let chargeTransaction = new Transaction(-amt, payee) //motivo do -amt eh para que nao seja possivel depositar numero negativo, 
        //como diz no loop tem q ser > que 0 nao maior ou igual. Tb eh possivel colocar "-1*amt"
        this.transaction.push(chargeTransaction); //esta usando o push para enviar (assim como na linha 30)

        }
    }

    deposit(amt){
        if (amt <0){
            return; //se o deposito for menor quue 0 ( deposito negativo) nao eh pra fazer nada.
            //outra opcao seria colocar o if amt > 0 fazer o que foi pedido abaixo 
        }
        let depositTransaction = new Transaction(amt, "Deposito"); //nesse caso esta pegando o input do deposito
        this.transactions.push(depositTransaction); //esta usando o metodo push para enviar a informacao de deposito 


    }
}

class Transaction{ // aqui esta apenas mostrando as transacoes  
    constructor(amount, payee){
        this.amount = amount
        this.payee = payee
        this.date = new Date();
    }
}