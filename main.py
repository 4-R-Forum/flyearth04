def on_data_received():
    pass
serial.on_data_received(serial.delimiters(Delimiters.DOLLAR), on_data_received)
