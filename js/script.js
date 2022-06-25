function kg_to_pounds(kilogram) {
    return kilogram * 2.205
}

function kg_to_ounces(kilogram) {
    return kilogram * 35.274
}

function kg_to_grams(kilogram) {
    return kilogram * 1000
}

// dom elements
var pounds = document.getElementById('pounds')
var ounces = document.getElementById('ounces')
var grams = document.getElementById('grams')
var input_kilogram = document.getElementById('kilogram')

// onkey function
input_kilogram.onkeyup = () => {
    if (!isNaN(input_kilogram.value)) {
        grams.innerHTML = kg_to_grams(input_kilogram.value)
        ounces.innerHTML = kg_to_ounces(input_kilogram.value)
        pounds.innerHTML = kg_to_pounds(input_kilogram.value)
    }
}
