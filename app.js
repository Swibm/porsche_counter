//объявляется переменная, которая будет считывать текущее значение счетчика
var currentNumberInCounter = Number(document.getElementById("counter_func").innerHTML)


//функция, увеличивающая текущее значение счетчика на 1 и проверка числа с изменением цвета самого числа
function increaseCurrentNumber() {
    currentNumberInCounter = currentNumberInCounter + 1
    document.getElementById("counter_func").innerHTML = currentNumberInCounter

    if (currentNumberInCounter < 0) 
    {
        document.getElementById("counter_func").style.color = "#653e30"
    }
    else if (currentNumberInCounter > 0) 
    {
        document.getElementById("counter_func").style.color = "#4fff55"
    }
    else 
    {
        document.getElementById("counter_func").style.color = "#e5d8d6"
    }
}

//функция, уменьшающая текущее значение счетчика на 1 и проверка числа с изменением цвета самого числа
function decreaseCurrentNumber() {
    currentNumberInCounter = currentNumberInCounter - 1
    document.getElementById("counter_func").innerHTML = currentNumberInCounter

    if (currentNumberInCounter < 0) 
    {
        document.getElementById("counter_func").style.color = "#653e30"
    }
    else if (currentNumberInCounter > 0) 
    {
        document.getElementById("counter_func").style.color = "#4fff55"
    }
    else 
    {
        document.getElementById("counter_func").style.color = "#e5d8d6"
    }
}

//функция, обнуляющая текущее значение счетчика и проверка числа с изменением цвета самого числа
function resetCurrentNumber() {
    currentNumberInCounter = 0
    document.getElementById("counter_func").innerHTML = currentNumberInCounter

    if (currentNumberInCounter < 0) 
    {
        document.getElementById("counter_func").style.color = "#653e30"
    }
    else if (currentNumberInCounter > 0) 
    {
        document.getElementById("counter_func").style.color = "#4fff55"
    }
    else 
    {
        document.getElementById("counter_func").style.color = "#e5d8d6"
    }
}

document.getElementById('button_increase').addEventListener("click", increaseCurrentNumber)
document.getElementById('button_reset').addEventListener("click", resetCurrentNumber)
document.getElementById('button_decrease').addEventListener("click", decreaseCurrentNumber)

