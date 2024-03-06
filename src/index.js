let saldo = victoryAndDefeat(100,20)
let ranks = ["Ferro","Bronze","Prata","Ouro","Diamante","lendario","imortal"]
let limitSaldo= [10,20,50,80,90,100,Infinity]
let myRank

for(let i=0; ranks.length; i++){
    if(calculo<=limitSaldo[i]){
        myRank=ranks[i]
        break
    }
}   
function victoryAndDefeat(victory,defeat){
    calculo = victory-defeat
    return calculo
}
console.log("O Herói tem de saldo de " +calculo+ " está no nível de " +myRank )
