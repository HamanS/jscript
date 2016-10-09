/*
// калькулятор
var disp = document.getElementById("displ"); // дисплей
var num = document.getElementsByClassName("num");// числовые кнопки
var clear = document.getElementById("delete");// очистка дисплея
var firstNum;// первое число
var operation;// операция с первым числом
var actions = document.getElementsByClassName("action");// действие
var pb = document.getElementById("point");// точка
var pmb = document.getElementById("plusmn");// +-

	
	clear.onclick = function () {
      disp.value = "";
	  operation = "";
	  firstNum = "";
      } // Сброс значения с дисплея
	  
	num[0].onclick = function() {
	  disp.value = disp.value + num[0].value;
	  }//1
	  
    num[1].onclick = function() {
	  disp.value = disp.value + num[1].value;
	  }//2
	  
	num[2].onclick = function() {
	  disp.value = disp.value + num[2].value;
	  }//3
	  
	num[3].onclick = function() {
	  disp.value = disp.value + num[3].value;
	  }//4
	
	num[4].onclick = function() {
	  disp.value = disp.value + num[4].value;
	  }//5
	  
	num[5].onclick = function() {
	  disp.value = disp.value + num[5].value;
	  }//6
	  
	num[6].onclick = function() {
	  disp.value = disp.value + num[6].value;
	  }//7
	  
	num[7].onclick = function() {
	  disp.value = disp.value + num[7].value;
	  }//8
	  
	num[8].onclick = function() {
	  disp.value = disp.value + num[8].value;
	  }//9
	  
	num[9].onclick = function() {
		if (disp.value === "0") {
			disp.value = "0";
		}else{disp.value = disp.value + num[9].value;
		}
	  }//0
	 
	 
	actions[0].onclick = function() {
	  firstNum = disp.value;
	  operation = actions[0].value;
	  disp.value = "";
      }// деление
	  
	actions[1].onclick = function() {
	  firstNum = disp.value;
	  operation = actions[1].value;
	  disp.value = "";
      }// умножение
	  
	actions[2].onclick = function() {
	  firstNum = disp.value;
	  operation = actions[2].value;
	  disp.value = "";
      }// вычитание
	  
	actions[3].onclick = function() {
	  firstNum = disp.value;
	  operation = actions[3].value;
	  disp.value = "";
      }// сложение
	 
	pb.onclick = function() {
		if (disp.value.indexOf(".") == -1){
			disp.value += ".";
		}
	} // ограничение точек в числе
	 
	pmb.onclick = function() {
		disp.value = disp.value*"-1";
	} //функция плюс-минус
	 
	 document.getElementById("result").onclick = function () {
		 switch(operation) {
			 case "+":
				disp.value = +firstNum + +disp.value;
				break;
				
			 case "-":
				disp.value = firstNum - disp.value;
				break;
				
			 case "/":
			    if (firstNum == 0) {
					disp.value = "А вот и неправильно!";
				} else {disp.value = firstNum / disp.value;
				}
				break;
				
			 case "*":
				disp.value = firstNum * disp.value;
				break;
		 }
	 }//результат вычеслений после нажатия на знак равенства
*/
	// тест
var strong = document.getElementsByClassName("strongTest");//строгий тест
var soft = document.getElementsByClassName("softTest");//мягкий тест

   function res () {
		   var result = 0;
			if (strong[0].checked) {
						result += 1;
					}
			if (strong[6].checked) {
						result += 1;
					}
			if (strong[10].checked) {
						result += 1;
					}
					   
			var res1 = 0;
			if (soft[0].checked) {
						res1 -= 0.5;
					}
			if (soft[1].checked) {
						res1 += 0.5;
					}
			if (soft[2].checked) {
						res1 -= 0.5;
					}
			if (soft[3].checked) {
						res1 += 0.5;
					}
			if (res1 > 0) {
				result += res1;
			}

			var res2 = 0;
			if (soft[4].checked) {
						res2 += 0.5;
					}
			if (soft[5].checked) {
						res2 += 0.5;
					}
			if (soft[6].checked) {
						res2 -= 0.5;
					}
			if (soft[7].checked) {
						res2 -= 0.5;
					}
			if (res2 > 0) {
						result += res2;
					}
		alert("Ваш результат:" + result);
	}
	
	