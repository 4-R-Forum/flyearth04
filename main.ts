let button = 0
let pitch = 0
let roll = 0
serial.onDataReceived(serial.delimiters(Delimiters.Dollar), function () {
    button = 0
    if (input.buttonIsPressed(Button.AB)) {
        button = 99
    } else {
        if (input.buttonIsPressed(Button.A)) {
            button = 1
        }
        if (input.buttonIsPressed(Button.B)) {
            button = -1
        }
    }
    pitch = input.rotation(Rotation.Pitch)
    roll = input.rotation(Rotation.Roll)
    serial.writeLine("" + convertToText(button) + "," + convertToText(pitch) + "," + convertToText(roll))
})
