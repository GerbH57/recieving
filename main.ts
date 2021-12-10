radio.onReceivedString(function (receivedString) {
    Recived_word = receivedString
    for (let index = 0; index < 400000000000000000000; index++) {
        music.playMelody("E B C5 A B G A F ", 1e+308)
        basic.showString(receivedString)
    }
})
let Recived_word = ""
radio.setGroup(1)
pins.setAudioPin(AnalogPin.P0)
basic.forever(function () {
	
})
