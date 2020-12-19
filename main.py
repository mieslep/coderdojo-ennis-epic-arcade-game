def mainMap():
    global mySprite
    tiles.set_tilemap(tilemap("""
        level
    """))
    mySprite = sprites.create(img("""
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