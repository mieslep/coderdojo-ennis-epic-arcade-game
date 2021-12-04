def mainMap():
    global mySprite
    tiles.set_tilemap(tilemap("""
        level
    """))
    mySprite = sprites.create(img("""
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
        """),
        SpriteKind.player)
    controller.move_sprite(mySprite, 100, 100)
    tiles.place_on_tile(mySprite, tiles.get_tile_location(0, 0))
    tiles.place_on_random_tile(mySprite, sprites.castle.tile_grass3)
    scene.camera_follow_sprite(mySprite)

def on_overlap_tile(sprite, location):
    johnsDungeon()
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.collectible_insignia,
    on_overlap_tile)

def johnsDungeon():
    tiles.set_tilemap(tilemap("""
        johnsDungeon
    """))
mySprite: Sprite = None
mainMap()