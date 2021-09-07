//Algoritmo Deposit profit
function depositProfit(deposit, rate, threshold){
    var years = 0;
    while(deposit < threshold){
        years ++;
        deposit = deposit + (deposit * (rate / 100));
    }
    return years;
}

console.log(depositProfit(100, 20, 170));