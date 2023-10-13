def on_data_received():
    global button, pitch, roll
    if input.button_is_pressed(Button.A):
        button = 1
    else:
        if input.button_is_pressed(Button.B):
            button = -1
        pitch = 0
        roll = 0
        serial.write_line("" + convert_to_text(button) + "," + convert_to_text(pitch) + "," + convert_to_text(roll))
serial.on_data_received(serial.delimiters(Delimiters.DOLLAR), on_data_received)

roll = 0
pitch = 0
button = 0
button = 0
pitch = 0
roll = 0