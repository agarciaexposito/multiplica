input.onButtonPressed(Button.A, function () {
    valorA += 1
    basic.showNumber(valorA)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(operacion(valorA, valorB))
})
input.onButtonPressed(Button.B, function () {
    valorB += 1
    basic.showNumber(valorB)
})
function operacion (multiplicando: number, multiplicador: number) {
    return multiplicando * multiplicador
}
let valorB = 0
let valorA = 0
valorA = 0
valorB = 0
basic.forever(function () {
	
})
