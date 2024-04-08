import { Scene } from 'phaser';
import { Handler } from './HandlerScene';

export class Preload extends Scene {

    handlerScene = null
    sceneStopped = false

    constructor() {
        super({ key: 'preload' })
    }

    preload() {
        // Images
        this.load.setPath('assets')
        //this.load.image('logo', 'logo.png')

        this.width = this.game.screenBaseSize.width
        this.height = this.game.screenBaseSize.height

        this.handlerScene = this.scene.get('handler')
        this.handlerScene.sceneRunning = 'preload'
        this.sceneStopped = false

        
    }

    create() {
        const { width, height } = this
        // CONFIG SCENE         
        this.handlerScene.updateResize(this)
        // CONFIG SCENE 

        // GAME OBJECTS  
        //this.add.image(width / 2, height / 2, 'logo').setOrigin(.5)
        // GAME OBJECTS


        //
        this.handlerScene.launchScene('MainMenu')
    }
}