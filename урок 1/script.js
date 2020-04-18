'use strict';
let money , time;

function start() {
    money = +prompt ("Ваш бюджет на месяц?", 'руб');
    time = prompt("Введите дату в формате YYYY-MM-DD", new Date().toISOString().slice(0, 10));

    while(isNaN(money) || money == "" || money==null) {
        money = +prompt ("Ваш бюджет на месяц?", 'руб');
    }
}

//start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++){
            let exp1 = prompt ("Введите обязательную статью расходов в этом месяце", ''),
            exp2 = prompt ("Во сколько обойдется?", '');
            if (typeof(exp1) === 'string' && typeof(exp1) != null && typeof(exp2) != null
                && exp1 != '' && exp2 != '' && exp1.length < 50){
                console.log('done');
                appData.expenses[exp1] = exp2;
            }   
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("бюджет на 1 день: " + appData.moneyPerDay + " руб.");
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100){
            console.log('Минимальный уровень');
        }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            console.log('Средний уровень');
        }else if (appData.moneyPerDay > 2000){
            console.log('Высокий уровень');
        }else {
            console.log('Error');
        }
    },
    checkSavings: function() {
        if (appData.savings == true){
            let save = +prompt ("Какова сумма накоплений?", 'руб'),
            persent = +prompt ("Под какой процент?", '%');
    
            appData.monthIncome = save/100/12*persent;
            alert('Доходы от накоплений в месяц с депозита: ' + appData.monthIncome + ' руб.');
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++){
            let exp1 = prompt ("Статья необязательных расходов?", '');
            if (typeof(exp1) === 'string' && typeof(exp1) != null
                && exp1 != '' && exp1.length < 50){
                console.log('done');
                appData.optionalExpenses[i+1] = exp1;
            }
            
        }
    },
    chooseIncome: function() {
        let i = 0;
        while (i < 1){
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
            if (typeof(items) === 'string' && typeof(items) != null && items != ''){
                    console.log('done');
                    appData.income = items.split(', ');
                    i++;
                }
            appData.income.push(prompt ('Может быть что-то еще', ''));
            appData.income.sort();
        };
        let msg = ''
        appData.income.forEach(function(item, i){
            msg = msg + (i+1) + ': ' + item + ', ';
        })
        alert( 'Способы доп. заборотка: ' + msg );
    }
};
