radio.onReceivedNumber(function (receivedNumber) {
    if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            # # # . .
            # . . . .
            # # # . .
            # . . . .
            # # # . .
            `)
        basic.showNumber(receivedNumber)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        # # # . .
        . # . . .
        # # # . .
        . . . . .
        `)
    basic.showNumber(TempInt)
})
let TempInt = 0
radio.setGroup(1)
basic.forever(function () {
    TempInt = input.temperature()
    TempInt = TempInt - 0
})
