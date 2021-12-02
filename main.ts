radio.onReceivedString(function (receivedString) {
    Recived_word = receivedString
    basic.showString("Burger")
})
let Recived_word = ""
radio.setGroup(1)
