serial.onDataReceived(serial.delimiters(Delimiters.Dollar), function () {
    if (input.buttonIsPressed(Button.A)) {
        button = 1
    } else {
        if (input.buttonIsPressed(Button.B)) {
            button = -1
        }
        pitch = 0
        roll = 0
        serial.writeLine("" + convertToText(button) + "," + convertToText(pitch) + "," + convertToText(roll))
    }
})
let roll = 0
let pitch = 0
let button = 0
button = 0
pitch = 0
roll = 0
