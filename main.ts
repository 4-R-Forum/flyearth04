serial.onDataReceived(serial.delimiters(Delimiters.Dollar), function () {
    serial.writeLine("" + convertToText(button) + "," + convertToText(pitch) + "," + convertToText(roll))
})
let roll = 0
let pitch = 0
let button = 0
button = 0
pitch = 0
roll = 0
