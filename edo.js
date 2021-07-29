function num1num2(){
	// test de la list
	//let num1num2;
	console.log("edin")
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

