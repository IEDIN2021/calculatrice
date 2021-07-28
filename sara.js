// calculatrice

function enter () {
    console.log("I'm here!")
    let input;
    let result;
    let resultHTML;
    let cleanInput;
    //Prendre l'input de le formulaire et le savoir stocke dans un variable    
    resultHTML = document.getElementById("ciao")
    input = document.getElementById("getToNumber")


    console.log("Input", input)
    console.log("Input", input.value)
    console.log("Input", typeof input.value)

    cleanInput = parseInt(input.value)

    //Sauvagarde l'input
    result = isPair(cleanInput)

    console.log(resultHTML)
    if (result === true) {
        console.log('Paire')
        resultHTML.innerText = "C'est paire"
        //afficher le message c'est paire
    } else {
        console.log('Impair')
        resultHTML.innerText = "C'est impaire"
        //afficher le message c'est impaire
    }
}

function isPair(numberToTest) {
    let result = 0;
    result = numberToTest / 2
    if (Number.isInteger(result)) {
        return true
    } else {
        return false
    }

}
