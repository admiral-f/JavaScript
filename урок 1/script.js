'use strict';

let money = prompt ("Ваш бюджет на месяц?", 'руб');
let time = prompt("Введите дату в формате YYYY-MM-DD", new Date().toISOString().slice(0, 10));

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    savings: false
}

for (let i = 0; i < 2; i++){
    let exp1 = prompt ("Введите обязательную статью расходов в этом месяце", ''),
    exp2 = prompt ("Во сколько обойдется?", '');
    appData.expenses[exp1] = exp2;
}


alert("бюджет на 1 день: " + appData.budget / 30 + " руб.");