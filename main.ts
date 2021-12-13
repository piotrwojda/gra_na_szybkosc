input.onButtonPressed(Button.A, function () {
    pressed_button = 1
})
input.onButtonPressed(Button.B, function () {
    pressed_button = 2
})
let button = 0
let reaction_time = 0
let pressed_button = 0
let _4digit = grove.createDisplay(DigitalPin.P1, DigitalPin.P15)
basic.showIcon(IconNames.Happy)
basic.pause(2000)
basic.forever(function () {
    for (let index = 0; index < 3; index++) {
        reaction_time = 0
        pressed_button = 0
        basic.clearScreen()
        basic.pause(randint(200, 1000))
        button = randint(1, 2)
        if (button == 1) {
            basic.showArrow(ArrowNames.West)
        } else {
            basic.showArrow(ArrowNames.East)
        }
        while (pressed_button == 0) {
            reaction_time += 1
            basic.pause(1)
        }
        _4digit.show(reaction_time)
        if (button == pressed_button) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Skull)
        }
        basic.pause(2000)
    }
})
