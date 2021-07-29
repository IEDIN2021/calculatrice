function num1num2(){
	// test de la list
	//let num1num2;
	console.log("work")
	let num1 = document.getElementById("getToNumber").value; 
	let num2 = document.getElementById("getToNumber1").value; 
	let add = +num1 + +num2;
	let sus = +num1 - +num2;
	let div = +num1 / +num2;
	let mul = +num1 * +num2;

	document.getElementById("resultat-add").innerHTML = add;
	document.getElementById("resultat-sus").innerHTML = sus;
	document.getElementById("resultat-div").innerHTML = div;
	document.getElementById("resultat-mul").innerHTML = mul;
}


function add1(){
	// test de la list
	//let num1num2;
	console.log("work")
	let num1 = document.getElementById("getToNumbersus11").value; 
	let num2 = document.getElementById("getToNumbersus22").value; 
	let add1 = +num1 + +num2;
	document.getElementById("resultat-add1").innerHTML = add1;
	
	

}
function sus1(){
	// test de la list
	//let num1num2;
	console.log("work")
	let num1 = document.getElementById("getToNumbersus11").value; 
	let num2 = document.getElementById("getToNumbersus22").value; 
	let sus1 = +num1 - +num2;
	document.getElementById("resultat-sus1").innerHTML = sus1;
}
function mul1(){
	// test de la list
	//let num1num2;
	console.log("work")
	let num1 = document.getElementById("getToNumbersus11").value; 
	let num2 = document.getElementById("getToNumbersus22").value; 
	let mul1 = +num1 * +num2;
	document.getElementById("resultat-mul1").innerHTML = mul1;
}
function div1(){
	// test de la list
	//let num1num2;
	console.log("work")
	let num1 = document.getElementById("getToNumbersus11").value; 
	let num2 = document.getElementById("getToNumbersus22").value; 
	let div1 = +num1 / +num2;
	document.getElementById("resultat-div1").innerHTML = div1;
}