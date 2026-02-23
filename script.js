var form = document.getElementById("form");
var result = document.getElementById("result");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var rate = Number(document.getElementById("rate").value);
    var hours = Number(document.getElementById("hours").value);
    var pass = Number(document.getElementById("pass").value);

    var monthlyCost = rate * hours * 4;
    var difference = monthlyCost - pass;

    var html = '<p class="greeting">Привет, ' + name + '! </p>';
    html += "<p>Цена за час: <b>" + rate + " KZT</b></p>";
    html += "<p>Часов в неделю: <b>" + hours + "</b></p>";
    html += "<p>Расходы за месяц (почасово): <b>" + monthlyCost + " KZT</b></p>";
    html += "<p>Цена абонемента: <b>" + pass + " KZT</b></p>";

    if (monthlyCost > pass) {
        html += '<p class="verdict">✅ Тебе однозначно стоит взять абонемент! Ты сэкономишь ' + difference + " KZT в месяц.</p>";
        result.className = "save";
    } else if (monthlyCost < pass) {
        html += '<p class="verdict">❌ Абонемент не нужен. Продолжай платить по часам, так выгоднее на ' + (pass - monthlyCost) + " KZT.</p>";
        result.className = "no-save";
    } else {
        html += '<p class="verdict">⚖️ Сумма одинаковая! Выбирай что удобнее.</p>';
        result.className = "equal";
    }

    result.innerHTML = html;
});
