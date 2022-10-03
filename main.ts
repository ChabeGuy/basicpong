input.onButtonPressed(Button.A, function () {
    if (GameStart == true) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        PaddleLeft.change(LedSpriteProperty.X, -1)
        if (PaddleRight.get(LedSpriteProperty.X) > 1) {
            PaddleRight.change(LedSpriteProperty.X, -1)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (GameStart == true) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        PaddleRight.change(LedSpriteProperty.X, 1)
        if (PaddleLeft.get(LedSpriteProperty.X) < 3) {
            PaddleLeft.change(LedSpriteProperty.X, 1)
        }
    }
})
let PaddleRight: game.LedSprite = null
let PaddleLeft: game.LedSprite = null
let GameStart = false
GameStart = false
music.playMelody("C E G C5 - G C5 C5 ", 400)
let Speed = 500
PaddleLeft = game.createSprite(1, 3)
PaddleRight = game.createSprite(2, 3)
GameStart = true
basic.pause(2000)
let Ball = game.createSprite(randint(0, 4), 0)
Ball.set(LedSpriteProperty.Direction, randint(45, -45))
basic.forever(function () {
    basic.pause(Speed)
    if (Ball.isTouching(PaddleLeft) || Ball.isTouching(PaddleRight)) {
        Ball.set(LedSpriteProperty.Direction, randint(45, -45))
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 1, 1, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        game.addScore(1)
        Speed += -25
    }
    Ball.move(1)
    if (Ball.get(LedSpriteProperty.Y) == 4) {
        music.playMelody("A B A G A G F F ", 120)
        game.gameOver()
    }
    Ball.ifOnEdgeBounce()
})
