
//---- start for calculating zakat------
var amt_home;
var amt_bank;
var amt_shares;
var amt_merchandise;
var amt_gold;

var amt_property;
var amt_other;
var amt_debts;
var amt_expenses;
var amt_nisab;
var amt_zakah1;
var amt_zakah2;
var amt_total;

function getIntValue(field) {
    if (isNaN(field.value)) {
        field.value = "0";
        return 0;
    } else if (field.value == "") {
        field.value = "0";
        return 0;
    } else {
        return parseFloat(field.value);
    }
}

function roundTwoDecimal(field) {
    var valueToRound;
    valueToRound = field.value;
    var t;
    var s = new String(Math.round(valueToRound * 100));
    while (s.length < 3) {
            s = '0' + s
            field.value = s.substr(0, t = (s.length - 2)) + '.' + s.substr(t, 2)
    }
}

function removeZero(field) {
    if (field.value == "0.00") {
        field.value = "";
        return
    }
}

function calcAmt(frm) {
    amt_home = getIntValue(document.getElementById("amount_home"));
    amt_bank = getIntValue(document.getElementById("amount_bank"));
    amt_shares = getIntValue(document.getElementById("amount_shares"));
    amt_merchandise = getIntValue(document.getElementById("amount_merchandise"));
    amt_gold = getIntValue(document.getElementById("amount_gold"));
    amt_property = getIntValue(document.getElementById("amount_property"));
    amt_other = getIntValue(document.getElementById("amount_other"));
    amt_debts = getIntValue(document.getElementById("amount_debts"));
    amt_expenses = getIntValue(document.getElementById("amount_expenses"));
    amt_nisab = getIntValue(document.getElementById("amount_nisab"));
    document.getElementById("amount_zakah1").value = amt_home + amt_bank + amt_shares + amt_merchandise + amt_gold + amt_property + amt_other;
    if ((document.getElementById("amount_zakah1").value - amt_debts - amt_expenses - amt_nisab) > 0) {
        document.getElementById("amount_zakah2").value = Math.round((document.getElementById("amount_zakah1").value - amt_debts - amt_expenses) * 100) / 100;
    } else {
        document.getElementById("amount_zakah2").value = "0";
    }
    if (document.getElementById("amount_zakah2").value > 0) {
        document.getElementById("zakahCalculated").value = Math.round(document.getElementById("amount_zakah2").value * .025 * 100) / 100;
    } else {
        document.getElementById("zakahCalculated").value = "0";
    }
    roundTwoDecimal(document.getElementById("amount_home"));
    roundTwoDecimal(document.getElementById("amount_bank"));
    roundTwoDecimal(document.getElementById("amount_shares"));
    roundTwoDecimal(document.getElementById("amount_merchandise"));
    roundTwoDecimal(document.getElementById("amount_gold"));
    roundTwoDecimal(document.getElementById("amount_property"));
    roundTwoDecimal(document.getElementById("amount_other"));
    roundTwoDecimal(document.getElementById("amount_debts"));
    roundTwoDecimal(document.getElementById("amount_expenses"));
    roundTwoDecimal(document.getElementById("amount_zakah1"));
    roundTwoDecimal(document.getElementById("amount_zakah2"));
    roundTwoDecimal(document.getElementById("zakahCalculated"));
    removeZero(document.getElementById("amount_home"));
    removeZero(document.getElementById("amount_bank"));
    removeZero(document.getElementById("amount_shares"));
    removeZero(document.getElementById("amount_merchandise"));
    removeZero(document.getElementById("amount_gold"));
    removeZero(document.getElementById("amount_property"));
    removeZero(document.getElementById("amount_other"));
    removeZero(document.getElementById("amount_debts"));
    removeZero(document.getElementById("amount_expenses"));
}
