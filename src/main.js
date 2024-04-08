// import { Boot } from './scenes/Boot';
// import { Game } from './scenes/Game';
// import { GameOver } from './scenes/GameOver';
// import { Preloader } from './scenes/Preloader';
import { Handler } from './scenes/HandlerScene';
import { Preload } from './scenes/PreloadScene';
import { MainMenu } from './scenes/MainMenu';


//
const MAX_SIZE_WIDTH_SCREEN = 1920
const MAX_SIZE_HEIGHT_SCREEN = 1080
const MIN_SIZE_WIDTH_SCREEN = 480
const MIN_SIZE_HEIGHT_SCREEN = 270
const SIZE_WIDTH_SCREEN = 1920//960
const SIZE_HEIGHT_SCREEN = 1080//540


const config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.RESIZE,
        parent: 'game',
        width: SIZE_WIDTH_SCREEN,
        height: SIZE_HEIGHT_SCREEN,
        min: {
            width: MIN_SIZE_WIDTH_SCREEN,
            height: MIN_SIZE_HEIGHT_SCREEN
        },
        max: {
            width: MAX_SIZE_WIDTH_SCREEN,
            height: MAX_SIZE_HEIGHT_SCREEN
        }
    },
    dom: {
        createContainer: true
    },
    scene: [
        Handler,
        Preload,
        MainMenu
    ]
}


// Global
const game = new Phaser.Game(config)
game.screenBaseSize = {
    maxWidth: MAX_SIZE_WIDTH_SCREEN,
    maxHeight: MAX_SIZE_HEIGHT_SCREEN,
    minWidth: MIN_SIZE_WIDTH_SCREEN,
    minHeight: MIN_SIZE_HEIGHT_SCREEN,
    width: SIZE_WIDTH_SCREEN,
    height: SIZE_HEIGHT_SCREEN
}

// const config = {
//     type: Phaser.AUTO,
//     width: 1024,
//     height: 768,
//     parent: 'game-container',
//     backgroundColor: '#000000',
//     scale: {
//         mode: Phaser.Scale.RESIZE,
//         //autoCenter: Phaser.Scale.CENTER_BOTH
//     },
//     scene: [
//         Boot,
//         Preloader,
//         MainMenu,
//         Game,
//         GameOver
//     ]
// };

//export default new Phaser.Game(config);
