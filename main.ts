sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.melt)
})
tiles.setTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 90, 90)
scene.cameraFollowSprite(mySprite)
mySprite.setPosition(137, 104)
let snake = sprites.create(img`
    . . . c c c c c c . . . . . . . 
    . . c 6 7 7 7 7 6 c . . . . . . 
    . c 7 7 7 7 7 7 7 7 c . . . . . 
    c 6 7 7 7 7 7 7 7 7 6 c . . . . 
    c 7 c 6 6 6 6 c 7 7 7 c . . . . 
    f 7 6 f 6 6 f 6 7 7 7 f . . . . 
    f 7 7 7 7 7 7 7 7 7 7 f . . . . 
    . f 7 7 7 7 6 c 7 7 6 f . . . . 
    . . f c c c c 7 7 6 f c c c . . 
    . . c 6 2 7 7 7 f c c 7 7 7 c . 
    . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
    . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
    . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
    . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
    . . c 6 1 1 1 1 1 7 6 6 c c . . 
    . . . c c c c c c c c c c . . . 
    `, SpriteKind.Enemy)
animation.runImageAnimation(
snake,
[img`
    . . . . . . c c c c c c . . . . 
    . . . . . c 6 7 7 7 7 6 c . . . 
    . . . . c 7 7 7 7 7 7 7 7 c . . 
    . . . c 6 7 7 7 7 7 7 7 7 6 c . 
    . . . c 7 7 7 c 6 6 6 6 c 7 c . 
    . . . f 7 7 7 6 f 6 6 f 6 7 f . 
    . . . f 7 7 7 7 7 7 7 7 7 7 f . 
    . . c f 6 7 7 c 6 7 7 7 7 f . . 
    . c 7 7 f 6 7 7 c c c c f . . . 
    c 7 7 7 7 f c 6 7 7 7 2 7 c . . 
    c c 6 7 7 6 c f c 7 7 2 7 7 c . 
    . . c 6 6 6 c c f 6 7 1 1 1 1 c 
    . . f 6 6 6 6 c 6 6 1 1 1 1 1 f 
    . . f c 6 6 6 6 6 1 1 1 1 1 6 f 
    . . . f 6 6 6 1 1 1 1 1 1 6 f . 
    . . . . f c c c c c c c c c . . 
    `,img`
    . . . . . . . c c c c c c . . . 
    . . . . . . c 6 7 7 7 7 6 c . . 
    . . . . . c 7 7 7 7 7 7 7 7 c . 
    . . . . c 6 7 7 7 7 7 7 7 7 6 c 
    . . . . c 7 7 7 c 6 6 6 6 c 7 c 
    . . . . f 7 7 7 6 f 6 6 f 6 7 f 
    . . . . f 7 7 7 7 7 7 7 7 7 7 f 
    . . . . f 6 7 7 c 6 7 7 7 7 f . 
    . . c c c f 6 7 7 c c c c f . . 
    . c 7 7 7 c c f 7 7 7 2 6 c . . 
    c 7 7 7 7 6 f c 7 7 2 7 7 6 c . 
    c c c 6 6 6 c 6 6 7 1 1 1 1 c . 
    . . c 6 6 6 6 6 6 1 1 1 1 1 c . 
    . . c 6 6 6 6 6 1 1 1 1 1 6 c . 
    . . c c 6 6 7 1 1 1 1 1 6 c . . 
    . . . c c c c c c c c c c . . . 
    `],
500,
true
)
snake.follow(mySprite, 50)
snake = sprites.create(img`
    . . . c c c c c c . . . . . . . 
    . . c 6 7 7 7 7 6 c . . . . . . 
    . c 7 7 7 7 7 7 7 7 c . . . . . 
    c 6 7 7 7 7 7 7 7 7 6 c . . . . 
    c 7 c 6 6 6 6 c 7 7 7 c . . . . 
    f 7 6 f 6 6 f 6 7 7 7 f . . . . 
    f 7 7 7 7 7 7 7 7 7 7 f . . . . 
    . f 7 7 7 7 6 c 7 7 6 f . . . . 
    . . f c c c c 7 7 6 f c c c . . 
    . . c 6 2 7 7 7 f c c 7 7 7 c . 
    . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
    . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
    . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
    . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
    . . c 6 1 1 1 1 1 7 6 6 c c . . 
    . . . c c c c c c c c c c . . . 
    `, SpriteKind.Enemy)
animation.runImageAnimation(
snake,
[img`
    . . . . . . c c c c c c . . . . 
    . . . . . c 6 7 7 7 7 6 c . . . 
    . . . . c 7 7 7 7 7 7 7 7 c . . 
    . . . c 6 7 7 7 7 7 7 7 7 6 c . 
    . . . c 7 7 7 c 6 6 6 6 c 7 c . 
    . . . f 7 7 7 6 f 6 6 f 6 7 f . 
    . . . f 7 7 7 7 7 7 7 7 7 7 f . 
    . . c f 6 7 7 c 6 7 7 7 7 f . . 
    . c 7 7 f 6 7 7 c c c c f . . . 
    c 7 7 7 7 f c 6 7 7 7 2 7 c . . 
    c c 6 7 7 6 c f c 7 7 2 7 7 c . 
    . . c 6 6 6 c c f 6 7 1 1 1 1 c 
    . . f 6 6 6 6 c 6 6 1 1 1 1 1 f 
    . . f c 6 6 6 6 6 1 1 1 1 1 6 f 
    . . . f 6 6 6 1 1 1 1 1 1 6 f . 
    . . . . f c c c c c c c c c . . 
    `,img`
    . . . . . . . c c c c c c . . . 
    . . . . . . c 6 7 7 7 7 6 c . . 
    . . . . . c 7 7 7 7 7 7 7 7 c . 
    . . . . c 6 7 7 7 7 7 7 7 7 6 c 
    . . . . c 7 7 7 c 6 6 6 6 c 7 c 
    . . . . f 7 7 7 6 f 6 6 f 6 7 f 
    . . . . f 7 7 7 7 7 7 7 7 7 7 f 
    . . . . f 6 7 7 c 6 7 7 7 7 f . 
    . . c c c f 6 7 7 c c c c f . . 
    . c 7 7 7 c c f 7 7 7 2 6 c . . 
    c 7 7 7 7 6 f c 7 7 2 7 7 6 c . 
    c c c 6 6 6 c 6 6 7 1 1 1 1 c . 
    . . c 6 6 6 6 6 6 1 1 1 1 1 c . 
    . . c 6 6 6 6 6 1 1 1 1 1 6 c . 
    . . c c 6 6 7 1 1 1 1 1 6 c . . 
    . . . c c c c c c c c c c . . . 
    `],
500,
true
)
snake.follow(mySprite, 60)
game.onUpdate(function () {
	
})
