namespace SpriteKind {
    export const trure = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
. . . . . 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 2 2 2 2 2 5 5 5 5 5 
. 5 5 5 5 2 5 5 5 5 5 2 5 5 5 5 
. 5 5 5 5 2 5 4 4 5 5 2 5 5 5 5 
. 5 5 5 5 2 5 5 4 5 5 2 5 5 5 5 
. 5 5 5 5 2 5 5 4 5 5 2 5 5 5 5 
. 5 5 5 5 2 5 4 4 4 5 2 5 5 5 5 
. 5 5 5 5 5 2 2 2 2 2 5 5 5 5 5 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . . . 5 5 5 5 5 5 5 . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    info.changeScoreBy(1)
})
let myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
tiles.setTilemap(tiles.createTilemap(
            hex`460008000303030303030303030303030303030303030303030c0c0c0c0c0c0c0c0c0c0c0c0c0c0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d14111111141111111111111111111111111111110303030303030303031403030303030303030303030c0c0c0c0c0c0c0e0e0e0c0c0c0c0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d11111111131313111114111111111111111111110303030308030303030303010303030309030303030c140c0c0c0c0c0c0c0c0c0c0c0c0d0d0d0d0d140d0d0d0d0d0d140d0d11110b11111111111111111111111111111111111403030303030303030303030303030303030303030c0c0c0e0e0e0e0c0c0c0e0e0c0c0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d1113131111111313131311111111110b111111110301010303030303010103030301010103030303030c0c0c0c0c0c0c0c0c0c0c0c0c0c140d0d0f0f0f0f0d0d0d0d0d0d100b1111111111111111111111111313131311111411030303030101010303030303030303030303030b030c0c0e0e0e0c0c0e0e0c0c0e0c0c0d0d0d0d0d0d0d0d0d0d0d0d0f0f0f11111113131311111111111111111111111111110403030303030303030303030301030303030101030c0c0c0c0c0c0c0c0c0c0c0c0c0b0d0d0f0d0d0d0d0d0d0d0f0d0d0d0d11111111111111111113111113111111111104020101010103030303030101010303030301030303030e0e0c0c0c0e0e0c0e0e0c0c0e0e0f0f0d0d0f0f0f0d0d0f0f0d0d0d0d1113111111111113131111111311111111131313`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . 
. . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 . . . 2 2 . . . . . . . . . . . . . . . . . . 2 2 . . . 2 2 2 2 . . . . . . . . . . 
. 2 2 . . . . . 2 2 . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 2 2 . . . . 
. . . . 2 2 2 . . . . . . . . . . . . . . . . 2 2 2 . . 2 2 . . 2 . . . . . . . . . . . . . . 2 2 2 . . . 2 2 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 . . . . 2 2 . . . . . . . . . . . . . . . . . 2 . . . . . . . 2 . . . . . . . . . . . . . 2 . . 2 . . . . . . . 
2 2 2 2 . . . . . 2 2 2 . . . . 2 . . . . 2 2 . . . 2 2 . 2 2 . . 2 2 2 2 . . 2 2 2 . . 2 2 . . . . . 2 . . . . . 2 2 . . . 2 . . . . 2 2 2 
`,
            [myTiles.tile0,sprites.builtin.forestTiles0,myTiles.tile1,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.collectibleInsignia,sprites.builtin.oceanDepths8,myTiles.tile2,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.chestClosed,sprites.dungeon.chestOpen,sprites.builtin.brick,sprites.castle.tileGrass1,sprites.builtin.oceanDepths0,sprites.castle.rock2,sprites.castle.tileGrass3,sprites.builtin.coral1,sprites.builtin.oceanDepths1,myTiles.tile3,sprites.dungeon.greenOuterNorth2],
            TileScale.Sixteen
        ))
myCorg.follow()
info.setScore(0)
