"""

Rock, Paper, Scissors

"""
"""

A Presses

"""
"""

AB Presses

"""
# B Presses

def on_button_pressed_a():
    global channel, game2, rpsgamemode
    if section == 1:
        channel += -1
        music.play(music.tone_playable(262, music.beat(BeatFraction.QUARTER)),
            music.PlaybackMode.UNTIL_DONE)
    if section == 2:
        if game2 > 1:
            game2 += -1
    if section == 3:
        if game2 == 1:
            if rps == 0:
                if rpsgamemode > 1:
                    rpsgamemode += -1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global channel, game2, rpsgamemode
    if section == 1:
        channel += 1
        music.play(music.tone_playable(523, music.beat(BeatFraction.QUARTER)),
            music.PlaybackMode.UNTIL_DONE)
    if section == 2:
        if game2 < 3:
            game2 += 1
    if section == 3:
        if game2 == 1:
            if rps == 0:
                if rpsgamemode < 3:
                    rpsgamemode += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

rpsgamemode = 0
rps = 0
game2 = 0
channel = 0
section = 0
section = 0
radio.set_group(channel)
game2 = 1
rps = 0
rpsgamemode = 1

def on_forever():
    if rps == 1:
        basic.show_leds("""
            # . . # .
            . . # # #
            . . . # .
            . . . # .
            . . . # .
            """)
        basic.show_leds("""
            # . . # .
            . . # # #
            # . . # .
            . . . # .
            . . . # .
            """)
        basic.show_leds("""
            # . . # .
            . . # # #
            # . . # .
            . . . # .
            # . . # .
            """)
basic.forever(on_forever)

def on_forever2():
    if section == 3:
        if game2 == 1:
            if rps == 0:
                if rpsgamemode == 1:
                    basic.show_leds("""
                        # # # # #
                        # . . . .
                        # # # # #
                        . . . . #
                        # # # # #
                        """)
                if rpsgamemode == 2:
                    basic.show_leds("""
                        # # # # #
                        # . # . #
                        # . # . #
                        # . # . #
                        # . # . #
                        """)
                if rpsgamemode == 3:
                    basic.show_leds("""
                        # # # # #
                        . . . # .
                        . . . # .
                        # . . # .
                        # # # # .
                        """)
basic.forever(on_forever2)

def on_forever3():
    global rps
    if section == 3:
        if game2 == 1:
            if rps == 0:
                if rpsgamemode == 2 and input.button_is_pressed(Button.AB):
                    rps = 1
basic.forever(on_forever3)

def on_forever4():
    pass
basic.forever(on_forever4)

# start screen and channel selection

def on_forever5():
    global section
    if section == 0:
        basic.show_leds("""
            # # # # #
            # . . . .
            # # # # #
            . . . . #
            # # # # #
            """)
        music.play(music.tone_playable(392, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        basic.show_leds("""
            # # # # #
            # . . . .
            # . # # #
            # . . . #
            # # # # #
            """)
        music.play(music.tone_playable(523, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        basic.pause(100)
        section = 1
    if section == 1:
        basic.show_number(channel)
basic.forever(on_forever5)

# game selection

def on_forever6():
    if section == 2:
        if game2 == 1:
            basic.show_leds("""
                # # # # #
                # . . . #
                # # # # #
                # . . . #
                # # # # #
                """)
        if game2 == 2:
            basic.show_leds("""
                # # # # #
                # . . . #
                # # # # #
                # . . . .
                # . . . .
                """)
        if game2 == 3:
            basic.show_leds("""
                # # # # #
                # . . . #
                # # # # #
                # . . . .
                # . . . .
                """)
basic.forever(on_forever6)

def on_forever7():
    pass
basic.forever(on_forever7)

def on_forever8():
    global section
    if section == 1 and input.button_is_pressed(Button.AB):
        music.play(music.string_playable("G - C5 - C5 - - - ", 600),
            music.PlaybackMode.UNTIL_DONE)
        section = 2
    if section == 2 and input.button_is_pressed(Button.AB):
        music.play(music.string_playable("C5 - A - G - - - ", 600),
            music.PlaybackMode.UNTIL_DONE)
        section = 3
basic.forever(on_forever8)
