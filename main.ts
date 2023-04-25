let valor = 0
input.onButtonPressed(Button.A, function () {
    music.stopAllSounds()
    valor = randint(1, 6)
    music.startMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.Once)
    basic.showNumber(valor)
})
