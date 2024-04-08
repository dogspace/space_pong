import { Scene } from 'phaser';

export class MainMenu extends Scene {

    handlerScene = false
    sceneStopped = false

    constructor () {
        super('MainMenu');
    }

    preload () {
        this.sceneStopped = false
        this.width = this.game.screenBaseSize.width
        this.height = this.game.screenBaseSize.height
        this.handlerScene = this.scene.get('handler')
        this.handlerScene.sceneRunning = 'MainMenu'
    }

    create () {
        const { width, height } = this

        // Config scene
        this.handlerScene.updateResize(this)
        

        // Title
        const titleBox = this.add.rectangle(width / 2, height / 2, width, 200, 0xff00ff)
        const titleBoxText = this.add.text(0, 0, 'SPACE PONG', {
            fontSize: '80px',
            fill: '#FFF'
        })
        Phaser.Display.Align.In.Center(titleBoxText, titleBox)
    }

    // create () {
    //     //this.add.image(512, 384, 'background');
    //     //this.add.image(512, 300, 'logo');
    //     // this.add.text(512, 460, 'Main Menu', {
    //     //     fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
    //     //     stroke: '#000000', strokeThickness: 8,
    //     //     align: 'center'
    //     // }).setOrigin(0.5);

    //     // this.input.once('pointerdown', () => {
    //     //     this.scene.start('Game');
    //     // });

    //     const width = this.scale.width
    //     const height = this.scale.height
    //     const middle = width / 2
    //     const buttonWidth = Math.max(width/4, 500)
    //     const buttonHeight = 100

    //     // Title
    //     const titleBox = this.add.rectangle(middle, 150, width, 200, 0x0000ff)
    //     const titleBoxText = this.add.text(0, 0, 'SPACE PONG', {
    //         fontSize: '80px',
    //         fill: '#FFF'
    //     })
    //     Phaser.Display.Align.In.Center(titleBoxText, titleBox)

    //     // Create lobby button
    //     const createLobbyBox = this.add.rectangle(middle, 400, buttonWidth, buttonHeight, 0xff0000)
    //     createLobbyBox.alpha = 0.8
    //     const createLobbyBoxText = this.add.text(0, 0, 'CREATE LOBBY', {
    //         fontSize: '30px',
    //         fill: '#FFF'
    //     })
    //     Phaser.Display.Align.In.Center(createLobbyBoxText, createLobbyBox)

    //     // How to play button
    //     const tutorialBox = this.add.rectangle(middle, 700, buttonWidth, buttonHeight, 0xff0000)
    //     tutorialBox.alpha = 0.8
    //     const tutorialBoxText = this.add.text(0, 0, 'HOW TO PLAY', {
    //         fontSize: '30px',
    //         fill: '#FFF'
    //     })
    //     Phaser.Display.Align.In.Center(tutorialBoxText, tutorialBox)


    //     // Mouse hover effects
    //     createLobbyBox.setInteractive({ useHandCursor: true })
    //     createLobbyBox.on('pointerover', () => { this.buttonHover(createLobbyBox) });
    //     createLobbyBox.on('pointerout', () => { this.buttonRest(createLobbyBox) });
    //     tutorialBox.setInteractive({ useHandCursor: true })
    //     tutorialBox.on('pointerover', () => { this.buttonHover(tutorialBox) });
    //     tutorialBox.on('pointerout', () => { this.buttonRest(tutorialBox) });
    // }

    buttonHover(button) {
        //button.setStyle({ fill: '#777' })
        button.setAlpha(1)
    }

    buttonRest(button) {
        button.setAlpha(0.8)
    }
}
