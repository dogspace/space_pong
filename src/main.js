import { Preloader } from './scenes/Preloader';
import { MainMenu } from './scenes/MainMenu';
import { CreateLobby } from './scenes/CreateLobby';


const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: (window.innerWidth * 929) / 1920,
    parent: 'game-container',
    backgroundColor: '#000000',
    scale: {
        mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
        //mode: Phaser.Scale.RESIZE,
        //mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
        Preloader,
        MainMenu,
        CreateLobby,
    ]
};

export default new Phaser.Game(config);