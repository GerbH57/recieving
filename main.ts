// Sends string and plays alarm
radio.onReceivedString(function (receivedString) {
    Recived_word = receivedString
    for (let index = 0; index < 1e+308; index++) {
        music.playMelody("E B C5 A B G A F ", 1e+308)
        basic.showString(receivedString)
    }
})
// sets radio group to 1
let Recived_word = ""
radio.setGroup(1)
pins.setAudioPin(AnalogPin.P0)
