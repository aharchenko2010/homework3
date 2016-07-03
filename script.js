var firstNum;
var operation;
var inp = document.getElementById ("calc-input");

function addNum (num) {
   inp.value = inp.value + num;
}

var b1 = document.getElementById ("but1");
   b1.onclick = function () {
   addNum (1);
}

var b2 = document.getElementById ("but2");
   b2.onclick = function () {
   addNum (2);
}

var b3 = document.getElementById ("but3");
   b3.onclick = function () {
   addNum (3);
}

var b4 = document.getElementById ("but4");
   b4.onclick = function () {
   addNum (4);
}

var b5 = document.getElementById ("but5");
   b5.onclick = function () {
   addNum (5);
}

var b6 = document.getElementById ("but6");
   b6.onclick = function () {
   addNum (6);
}

var b7 = document.getElementById ("but7");
   b7.onclick = function () {
   addNum (7);
}

var b8 = document.getElementById ("but8");
   b8.onclick = function () {
   addNum (8);
}

var b9 = document.getElementById ("but9");
   b9.onclick = function () {
   addNum (9);
}

var b0 = document.getElementById ("but0");
   b0.onclick = function () {
   addNum (0);
}

var butp = document.getElementById ("point");
   butp.onclick = function () {
      if (inp.value.indexOf(".") === -1) {
   addNum (".");
      }
}

document.getElementById ("plus").onclick = function () {
   firstNum = inp.value;
   inp.value = "";
   operation = "+";
}

document.getElementById ("minus").onclick = function () {
   firstNum = inp.value;
   inp.value = "";
   operation = "-";
}

document.getElementById ("deg").onclick = function () {
   firstNum = inp.value;
   inp.value = "";
   operation = "/";
}

document.getElementById ("multiple").onclick = function () {
   firstNum = inp.value;
   inp.value = "";
   operation = "*";
}

document.getElementById ("eq").onclick = function () {
   if (operation == "+") {
      inp.value = +firstNum + +inp.value;
   } else if (operation == "-") {
      inp.value = +firstNum - +inp.value;
   } else if (operation == "/") {
      inp.value = +firstNum / +inp.value;
   } else if (operation == "*") {
      inp.value = +firstNum * +inp.value;
   }  
}

document.getElementById ("plusmn").onclick = function () {
   inp.value = +inp.value * -1;
}

document.getElementById ("cancel").onclick = function () {
   inp.value = "";
}