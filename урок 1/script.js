'use strict';
let money , time;

function start(){
    money = +prompt ("Ваш бюджет на месяц?", 'руб');
    time = prompt("Введите дату в формате YYYY-MM-DD", new Date().toISOString().slice(0, 10));
    while(isNaN(money) || money == "" money==null ){
        money = +prompt ("Ваш бюджет на месяц?", 'руб');
    }
};

start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    savings: false
};

function chooseExpenses(){
    for (let i = 0; i < 2; i++){
        let exp1 = prompt ("Введите обязательную статью расходов в этом месяце", ''),
        exp2 = prompt ("Во сколько обойдется?", '');
        if (typeof(exp1) === 'string' && typeof(exp1) != null && typeof(exp2) != null
            && exp1 != '' && exp2 != '' && exp1.length < 50){
            console.log('done');
            appData.expenses[exp1] = exp2;
        }
        
    }
}

chooseExpenses();

appData.moneyPerDay = appData.budget / 30;

alert("бюджет на 1 день: " + appData.moneyPerDay + " руб.");

if (appData.moneyPerDay < 100){
    console.log('Минимальный уровень');
}else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log('Средний уровень');
}else if (appData.moneyPerDay > 2000){
    console.log('Высокий уровень');
}else {
    console.log('Error');
}