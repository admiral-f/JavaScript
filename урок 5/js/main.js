'use strict';
let inputRUB = document.getElementById('rub'),
    inputUSD = document.getElementById('usd');

inputRUB.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json: charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200){
            let data = JSON.parse(request.response);

            inputUSD.value = inputRUB.value / data.usd;
        } else {
            inputUSD.value = 'что-то пошло не так!';
        }
    });
})