'use strict';

var money = prompt ("Ваш бюджет на месяц?", 'руб');
var time = prompt("Введите дату в формате YYYY-MM-DD", '0000-00-00');

console.log(money);
console.log(time);

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    savings: false
}

let exp1 = prompt ("Введите обязательную статью расходов в этом месяце", '');
appData.expenses.exp1 = prompt ("Во сколько обойдется?", '');
console.log(exp1);
console.log(appData.expenses.exp1);
alert(appData.budget/30);