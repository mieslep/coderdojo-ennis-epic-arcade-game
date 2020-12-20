controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (currentMap == "mainMap") {
    	
    } else if (currentMap == "johnsDungeon") {
    	
    } else if (currentMap == "philsGame") {
        mainMap()
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (currentMap == "mainMap") {
        if (mySprite.tileKindAt(TileDirection.Center, sprites.dungeon.collectibleInsignia)) {
            johnsDungeon()
        } else if (mySprite.tileKindAt(TileDirection.Center, myTiles.tile1)) {
            philsGame()
        }
    } else if (currentMap == "johnsDungeon") {
        if (mySprite.tileKindAt(TileDirection.Center, sprites.dungeon.collectibleRedCrystal)) {
            mainMap()
        }
    } else if (currentMap == "philsGame") {
    	
    }
})
function mainMap () {
    currentMap = "mainMap"
    tiles.setTilemap(tilemap`level`)
    scene.cameraFollowSprite(mySprite)
    if (mainMapLocation) {
        tiles.placeOnTile(mySprite, mainMapLocation)
    } else {
        tiles.placeOnRandomTile(mySprite, sprites.castle.shrub)
    }
    controller.moveSprite(mySprite, 100, 100)
}
// Cannot yet find a way to keep track of where you left the main map as the "location" variable is not available in the "button" block.
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass1, function (sprite, location) {
    if (currentMap == "mainMap") {
        mainMapLocation = location
    }
})
function philsGame () {
    currentMap = "philsGame"
    controller.moveSprite(mySprite, 100, 100)
    tiles.setTilemap(tiles.createTilemap(hex`21000700010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        `, [myTiles.transparency16,sprites.castle.tileDarkGrass3], TileScale.Sixteen))
    scene.cameraFollowSprite(mySprite)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(16, 3))
    mySprite.setImage(img`
        . . . . . . b b b b . . . . . . 
        . . . . . . b 4 4 4 b . . . . . 
        . . . . . . b b 4 4 4 b . . . . 
        . . . . . b 4 b b b 4 4 b . . . 
        . . . . b d 5 5 5 4 b 4 4 b . . 
        . . . . b 3 2 3 5 5 4 e 4 4 b . 
        . . . b d 2 2 2 5 7 5 4 e 4 4 e 
        . . . b 5 3 2 3 5 5 5 5 e e e e 
        . . b d 7 5 5 5 3 2 3 5 5 e e e 
        . . b 5 5 5 5 5 2 2 2 5 5 d e e 
        . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
        . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
        b d 3 2 d 5 5 5 d d d 4 4 . . . 
        b 5 5 5 5 d d 4 4 4 4 . . . . . 
        4 d d d 4 4 4 . . . . . . . . . 
        4 4 4 4 . . . . . . . . . . . . 
        `)
}
function johnsDungeon () {
    currentMap = "johnsDungeon"
    tiles.setTilemap(tilemap`johnsDungeon`)
}
let mainMapLocation: tiles.Location = null
let currentMap = ""
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
mainMap()
