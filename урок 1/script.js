'use strict';

let money = prompt ("Ваш бюджет на месяц?", 'руб');
let time = prompt("Введите дату в формате YYYY-MM-DD", new Date().toISOString().slice(0, 10));

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    savings: false
};

for (let i = 0; i < 2; i++){
    let exp1 = prompt ("Введите обязательную статью расходов в этом месяце", ''),
    exp2 = prompt ("Во сколько обойдется?", '');
    if (typeof(exp1) === 'string' && typeof(exp1) != null && typeof(exp2) != null
        && exp1 != '' && exp2 != '' && exp1.length < 50){
        console.log('done');
        appData.expenses[exp1] = exp2;
    }
    
};
appData.moneyPerDay = appData.budget / 30;

alert("бюджет на 1 день: " + appData.moneyPerDay + " руб.");