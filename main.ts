controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.tileKindAt(TileDirection.Center, sprites.dungeon.collectibleInsignia)) {
        johnsDungeon()
    } else if (mySprite.tileKindAt(TileDirection.Center, sprites.dungeon.collectibleRedCrystal)) {
        mainMap()
    }
})
function mainMap () {
    tiles.setTilemap(tilemap`level`)
    scene.cameraFollowSprite(mySprite)
    tiles.placeOnTile(mySprite, mainMapLocation)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    mainMapLocation = location
})
function johnsDungeon () {
    tiles.setTilemap(tilemap`johnsDungeon`)
}
let mainMapLocation: tiles.Location = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 4 b 
    b d d c d 5 5 b 5 4 4 4 4 4 b . 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mainMap()
tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass1)
