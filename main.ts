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
    ..................................................
    ..................................................
    ..................................................
    ......444.......4.................................
    .....4434....4444.................................
    .....43334..44434.................................
    .....444444443333.................................
    ....4444444444444.................................
    ...44444444444444.................................
    .44444444444444444................................
    .444411444444914444...............................
    .4444914444449144444........................111...
    .4444914444449144444........................111...
    .4444914fff444444444.....................444111...
    .44444444f4444444444.....................444......
    .44444444f4444444444.....................444......
    .4444444fff444444444..................111.........
    .444ff44fff444f44444..................111.........
    .4444ff4f44444f44444..................111.........
    .44444f4fffffff44444...............444............
    ..4444fffff224444444...............444............
    ...44444444224444444...............444............
    ....441114444444444.............111111............
    ....44111144444111..............111111............
    ...4441111444411114444..........111111............
    ...44411114444111144441114444..44444..............
    ...444411114411114444111144444.44444..............
    ...444411114411114444111144444444444..............
    ...44444111141114444411114444444..................
    ...44444111141111444411144444444..................
    ...44444411141111444411114444444..................
    ...44441111141111444411114444444..................
    ...44441111144111144411114444444..................
    .....441111141111144411114444444..................
    .......4444441111144411144444444..................
    .......44444.111114441114444444...................
    .......44444.444....44444444444...................
    .......11111.444....444..4444.....................
    .......11111.444....444..4444.....................
    .......1111144444...444..44444....................
    ......44444444444...444.444444....................
    .....444444444444...444.444444....................
    ..11144444..444..1114444444444....................
    ..11111144....111111444444........................
    ..11111144....111111444444........................
    ..11111144....1111114.............................
    ..111.............................................
    ..................................................
    ..................................................
    ..................................................
    `, SpriteKind.Player)
mainMap()
