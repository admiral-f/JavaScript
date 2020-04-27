'use strict';
let strBtn = document.querySelector("[id='start']"),
    budget = document.querySelector('.budget-value'),
    daybudget = document.querySelector('.daybudget-value'),
    level = document.querySelector('.level-value'),
    expenses = document.querySelector('.expenses-value'),
    optionalexpenses = document.querySelector('.optionalexpenses-value'),
    income = document.querySelector('.income-value'),
    monthsavings = document.querySelector('.monthsavings-value'),
    yearsavings = document.querySelector('.yearsavings-value'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value'),
    expensesItem = document.querySelectorAll('.expenses-item'),
    expensesBtn = document.getElementsByTagName("button")[0],
    optionalExpensesBtn = document.getElementsByTagName("button")[1],
    countBtn = document.getElementsByTagName("button")[2],
    optExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    chooseIncome = document.querySelector(".choose-income"),
    haveSavings = document.querySelector("#savings"),
    sumValue = document.querySelector("#sum"),
    percentValue = document.querySelector("#percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");


let money , time;

strBtn.addEventListener('click', function(){
    time = prompt("Введите дату в формате YYYY-MM-DD", new Date().toISOString().slice(0, 10));
    money = +prompt ("Ваш бюджет на месяц?", 'руб');

    while(isNaN(money) || money == "" || money==null) {
        money = +prompt ("Ваш бюджет на месяц?", 'руб');
    }
    appData.budget = money;
    appData.timeData = time;
    budget.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function() {
    let sum=0;
    for (let i = 0; i < expensesItem.length; i++){
        let exp1 = expensesItem[i].value,
            exp2 = expensesItem[++i].value;
        if (typeof(exp1) === 'string' && typeof(exp1) != null && typeof(exp2) != null
            && exp1 != '' && exp2 != '' && exp1.length < 50){
            console.log('done');
            appData.expenses[exp1] = exp2;
            sum += +exp2;
        } else {
            i = i-1;
        }   
    }
    expenses.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optExpensesItem.length; i++){
        let exp1 = optExpensesItem[i].value;
        appData.optionalExpenses[i] = exp1;
        optionalexpenses.textContent += appData.optionalExpenses[i] + ' '; 
    }
});

countBtn.addEventListener('click', function(){

    if (appData.budget != undefined){
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        daybudget.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100){
            level.textContent = 'Минимальный уровень достатка(';
        }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            level.textContent = 'Средний уровень достатка...';
        }else if (appData.moneyPerDay > 2000){
            level.textContent = 'Высокий уровень достатка!';
        }else {
            level.textContent = 'Error';
        };
    }else{
        daybudget.textContent = 'Произошла ошибка';
    }
     
});

chooseIncome.addEventListener('input', function(){
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    income.textContent = appData.income;
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,

    checkSavings: function() {
        if (appData.savings == true){
            let save = +prompt ("Какова сумма накоплений?", 'руб'),
            persent = +prompt ("Под какой процент?", '%');
    
            appData.monthIncome = save/100/12*persent;
            alert('Доходы от накоплений в месяц с депозита: ' + appData.monthIncome + ' руб.');
        }
    },
};

//for (var key in appData) {
//    console.log( "Ключ: " + key + " значение: " + appData[key] );
//    };