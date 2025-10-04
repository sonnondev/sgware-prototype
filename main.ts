/**
 * RPS Multiplayer
 */
/**
 * Rock Paper Scissors
 */
/**
 * Buttons
 */
/**
 * RPS Singleplayer
 */
/**
 * Intro /
 * 
 * Channel Select
 */
/**
 * Singleplayer Rsr: 10-20
 */
/**
 * Rock, Paper, Scissors
 */
/**
 * A Presses
 */
/**
 * AB Presses
 */
radio.onReceivedNumber(function (receivedNumber) {
    if (rps == 1) {
        radio.sendNumber(1)
        MPF = 1
        basic.showString("Player Found")
        rps = 20
    }
    if (rps == 2) {
        MPF = 1
        basic.showString("Player Found")
        rps = 20
    }
    if (rps > 21) {
        rcsignal = 1
        rpsopplay = receivedNumber
    }
})
/**
 * Game select
 */
// B Presses
input.onButtonPressed(Button.A, function () {
    if (section == 1) {
        channel += -1
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    }
    if (section == 2) {
        if (game2 > 1) {
            game2 += -1
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        }
    }
    if (section == 3) {
        if (game2 == 1) {
            if (rps == 0) {
                if (rpsgamemode > 1) {
                    rpsgamemode += -1
                    music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
                }
            }
        }
    }
    if (rps == 14 || rps == 22) {
        if (rpsplay > 1) {
            rpsplay += -1
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (section == 1) {
        channel += 1
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    }
    if (section == 2) {
        if (game2 < 3) {
            game2 += 1
            music.play(music.tonePlayable(523, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        }
    }
    if (section == 3) {
        if (game2 == 1) {
            if (rps == 0) {
                if (rpsgamemode < 3) {
                    rpsgamemode += 1
                    music.play(music.tonePlayable(523, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
                }
            }
        }
    }
    if (rps == 14 || rps == 22) {
        if (rpsplay < 3) {
            rpsplay += 1
            music.play(music.tonePlayable(523, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        }
    }
})
let rpsbotplay = 0
let rpsround = 0
let rpsplay = 0
let rpsopplay = 0
let rcsignal = 0
let MPF = 0
let rpsgamemode = 0
let rps = 0
let game2 = 0
let channel = 0
let section = 0
section = 0
radio.setGroup(channel)
game2 = 1
rps = 0
rpsgamemode = 1
basic.forever(function () {
    if (rps == 1) {
        if (MPF == 0) {
            basic.showLeds(`
                . . . # .
                . . # # #
                . . . # .
                . . . # .
                # . . # .
                `)
            basic.showLeds(`
                . . . # .
                . . # # #
                # . . # .
                . . . # .
                # . . # .
                `)
            basic.showLeds(`
                # . . # .
                . . # # #
                # . . # .
                . . . # .
                # . . # .
                `)
            basic.showLeds(`
                . . . # .
                . . # # #
                . . . # .
                . . . # .
                . . . # .
                `)
        }
    }
})
basic.forever(function () {
    if (rps == 2) {
        if (MPF == 0) {
            basic.showLeds(`
                # . . # .
                . . . # .
                . . . # .
                . . # # #
                . . . # .
                `)
            basic.showLeds(`
                # . . # .
                . . . # .
                # . . # .
                . . # # #
                . . . # .
                `)
            basic.showLeds(`
                # . . # .
                . . . # .
                # . . # .
                . . # # #
                # . . # .
                `)
            basic.showLeds(`
                . . . # .
                . . . # .
                . . . # .
                . . # # #
                . . . # .
                `)
        }
    }
})
basic.forever(function () {
    if (section == 3) {
        if (game2 == 1) {
            if (rps == 0) {
                if (rpsgamemode == 1) {
                    basic.showLeds(`
                        # # # # #
                        # . . . .
                        # # # # #
                        . . . . #
                        # # # # #
                        `)
                }
                if (rpsgamemode == 2) {
                    basic.showLeds(`
                        # # # # #
                        # . # . #
                        # . # . #
                        # . # . #
                        # . # . #
                        `)
                }
                if (rpsgamemode == 3) {
                    basic.showLeds(`
                        # # # # #
                        . . . # .
                        . . . # .
                        # . . # .
                        # # # # .
                        `)
                }
            }
        }
    }
})
basic.forever(function () {
    if (rps == 20) {
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.clearScreen()
        basic.showLeds(`
            # # # # .
            # . . . #
            # # # . #
            # . . # .
            # . . . #
            `)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            # # # # #
            # . . . #
            # # # # #
            # . . . .
            # . . . .
            `)
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            . . . . #
            # # # # #
            `)
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.pause(1000)
        rps = 21
    }
})
basic.forever(function () {
    if (rps == 21) {
        if (rpsround == 1) {
            for (let index = 0; index < 3; index++) {
                basic.showLeds(`
                    # # # . .
                    . . # . .
                    . . # . .
                    . . # . .
                    # # # # #
                    `)
                music.play(music.tonePlayable(659, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            }
            rps = 22
        }
        if (rpsround == 2) {
            for (let index = 0; index < 3; index++) {
                basic.showLeds(`
                    # # # # #
                    . . . . #
                    # # # # #
                    # . . . .
                    # # # # #
                    `)
                music.play(music.tonePlayable(659, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            }
            rps = 22
        }
        if (rpsround == 3) {
            for (let index = 0; index < 3; index++) {
                basic.showLeds(`
                    # # # # #
                    . . . . #
                    # # # # #
                    . . . . #
                    # # # # #
                    `)
                music.play(music.tonePlayable(659, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            }
            rps = 22
        }
        if (rpsround == 4) {
            basic.showString("Game Over")
            control.reset()
        }
    }
})
basic.forever(function () {
    if (rps == 2) {
        if (MPF == 0) {
            radio.sendNumber(1)
            basic.pause(3000)
        }
    }
})
basic.forever(function () {
    if (rps == 22) {
        if (rpsplay == 1) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                . . # . .
                . . . . .
                `)
        }
        if (rpsplay == 2) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
        }
        if (rpsplay == 3) {
            basic.showLeds(`
                . . . . .
                . . # # .
                . # . . .
                . . # # .
                . . . . .
                `)
        }
    }
})
basic.forever(function () {
    if (rps == 24) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . # . #
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        rps = 25
    }
})
basic.forever(function () {
    if (rps == 23) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . # . #
            . . . . .
            . . . . .
            `)
        if (rcsignal == 1) {
            rcsignal = 0
            rps = 24
        }
    }
})
basic.forever(function () {
    if (rps == 17) {
        if (rpsplay == 1) {
            if (rpsbotplay == 1) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # # # # #
                    . . . . .
                    . . . . .
                    `)
            }
            if (rpsbotplay == 2) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
            }
            if (rpsbotplay == 3) {
                basic.showLeds(`
                    . . . . .
                    . . . . #
                    . . . # .
                    # . # . .
                    . # . . .
                    `)
            }
        }
        if (rpsplay == 2) {
            if (rpsbotplay == 1) {
                basic.showLeds(`
                    . . . . .
                    . . . . #
                    . . . # .
                    # . # . .
                    . # . . .
                    `)
            }
            if (rpsbotplay == 2) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # # # # #
                    . . . . .
                    . . . . .
                    `)
            }
            if (rpsbotplay == 3) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
            }
        }
        if (rpsplay == 3) {
            if (rpsbotplay == 1) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
            }
            if (rpsbotplay == 2) {
                basic.showLeds(`
                    . . . . .
                    . . . . #
                    . . . # .
                    # . # . .
                    . # . . .
                    `)
            }
            if (rpsbotplay == 3) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # # # # #
                    . . . . .
                    . . . . .
                    `)
            }
        }
        basic.pause(1000)
        rpsround += 1
        rps = 11
    }
})
basic.forever(function () {
    if (rps == 25) {
        if (rpsopplay == 1) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                . . # . .
                . . . . .
                `)
        }
        if (rpsopplay == 2) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
        }
        if (rpsopplay == 3) {
            basic.showLeds(`
                . . . . .
                . . # # .
                . # . . .
                . . # # .
                . . . . .
                `)
        }
        basic.pause(1000)
        rps = 26
    }
})
basic.forever(function () {
    if (section == 1 && input.buttonIsPressed(Button.AB)) {
        music.play(music.stringPlayable("G - C5 - C5 - - - ", 600), music.PlaybackMode.UntilDone)
        section = 2
    }
    if (section == 2 && input.buttonIsPressed(Button.AB)) {
        music.play(music.stringPlayable("C5 - A - G - - - ", 600), music.PlaybackMode.UntilDone)
        section = 3
    }
    if (section == 3) {
        if (game2 == 1) {
            if (rps == 0) {
                if (rpsgamemode == 2 && input.buttonIsPressed(Button.AB)) {
                    rps = 1
                    rpsplay = 1
                    rpsround = 1
                }
                if (rpsgamemode == 3 && input.buttonIsPressed(Button.AB)) {
                    rps = 2
                    rpsplay = 1
                    rpsround = 1
                }
                if (rpsgamemode == 1 && input.buttonIsPressed(Button.AB)) {
                    rps = 10
                    rpsplay = 1
                    rpsround = 1
                }
            }
        }
    }
    if (rps == 14 && input.buttonIsPressed(Button.AB)) {
        rps = 15
    }
    if (rps == 22 && input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(rpsplay)
        rps = 23
    }
})
basic.forever(function () {
    if (rps == 16) {
        if (rpsbotplay == 1) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                . . # . .
                . . . . .
                `)
        }
        if (rpsbotplay == 2) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
        }
        if (rpsbotplay == 3) {
            basic.showLeds(`
                . . . . .
                . . # # .
                . # . . .
                . . # # .
                . . . . .
                `)
        }
        basic.pause(1000)
        rps = 17
    }
})
basic.forever(function () {
    if (rps == 15) {
        rpsbotplay = randint(1, 3)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . # . #
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        rps = 16
    }
})
basic.forever(function () {
    if (rps == 14) {
        if (rpsplay == 1) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                . . # . .
                . . . . .
                `)
        }
        if (rpsplay == 2) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
        }
        if (rpsplay == 3) {
            basic.showLeds(`
                . . . . .
                . . # # .
                . # . . .
                . . # # .
                . . . . .
                `)
        }
    }
})
basic.forever(function () {
    if (rps == 11) {
        if (rpsround == 1) {
            for (let index = 0; index < 3; index++) {
                basic.showLeds(`
                    # # # . .
                    . . # . .
                    . . # . .
                    . . # . .
                    # # # # #
                    `)
                music.play(music.tonePlayable(659, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            }
            rps = 14
        }
        if (rpsround == 2) {
            for (let index = 0; index < 3; index++) {
                basic.showLeds(`
                    # # # # #
                    . . . . #
                    # # # # #
                    # . . . .
                    # # # # #
                    `)
                music.play(music.tonePlayable(659, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            }
            rps = 14
        }
        if (rpsround == 3) {
            for (let index = 0; index < 3; index++) {
                basic.showLeds(`
                    # # # # #
                    . . . . #
                    # # # # #
                    . . . . #
                    # # # # #
                    `)
                music.play(music.tonePlayable(659, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            }
            rps = 14
        }
        if (rpsround == 4) {
            basic.showString("Game Over")
            control.reset()
        }
    }
})
basic.forever(function () {
    if (rps == 10) {
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.clearScreen()
        basic.showLeds(`
            # # # # .
            # . . . #
            # # # . #
            # . . # .
            # . . . #
            `)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            # # # # #
            # . . . #
            # # # # #
            # . . . .
            # . . . .
            `)
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            . . . . #
            # # # # #
            `)
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.pause(1000)
        rps = 11
    }
})
basic.forever(function () {
    if (rps == 26) {
        if (rpsplay == 1) {
            if (rpsopplay == 1) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # # # # #
                    . . . . .
                    . . . . .
                    `)
            }
            if (rpsopplay == 2) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
            }
            if (rpsopplay == 3) {
                basic.showLeds(`
                    . . . . .
                    . . . . #
                    . . . # .
                    # . # . .
                    . # . . .
                    `)
            }
        }
        if (rpsplay == 2) {
            if (rpsopplay == 1) {
                basic.showLeds(`
                    . . . . .
                    . . . . #
                    . . . # .
                    # . # . .
                    . # . . .
                    `)
            }
            if (rpsopplay == 2) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # # # # #
                    . . . . .
                    . . . . .
                    `)
            }
            if (rpsopplay == 3) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
            }
        }
        if (rpsplay == 3) {
            if (rpsopplay == 1) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
            }
            if (rpsopplay == 2) {
                basic.showLeds(`
                    . . . . .
                    . . . . #
                    . . . # .
                    # . # . .
                    . # . . .
                    `)
            }
            if (rpsopplay == 3) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # # # # #
                    . . . . .
                    . . . . .
                    `)
            }
        }
        basic.pause(1000)
        rpsround += 1
        rps = 21
    }
})
// game selection
basic.forever(function () {
    if (section == 2) {
        if (game2 == 1) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                . . # . .
                . . . . .
                `)
        }
        if (game2 == 2) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # # # # #
                # . . . .
                # . . . .
                `)
        }
        if (game2 == 3) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # # # # #
                # . . . .
                # . . . .
                `)
        }
    }
})
// start screen and channel selection
basic.forever(function () {
    if (section == 0) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            . . . . #
            # # # # #
            `)
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            # # # # #
            # . . . .
            # . # # #
            # . . . #
            # # # # #
            `)
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.pause(100)
        section = 1
    }
    if (section == 1) {
        basic.showNumber(channel)
    }
})
basic.forever(function () {
	
})
