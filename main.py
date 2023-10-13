def on_data_received():
    pass
serial.on_data_received(serial.delimiters(Delimiters.DOLLAR), on_data_received)

def on_forever():
    pass
basic.forever(on_forever)
