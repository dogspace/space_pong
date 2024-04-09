import { Scene } from 'phaser';


export class MainMenu extends Scene {
    //cursors = Phaser.Types.Input.Keyboard.CursorKeys

    constructor () {
        super('MainMenu');
    }

    create () {
        const width = this.scale.width
        const height = this.scale.height
        const middleX = width / 2
        const middleY = height / 2
        const buttonWidth = Math.max(width/4, 200)
        const buttonHeight = Math.max(height/10, 40)
        //console.log('WIDTH: ' + width + '    HEIGHT: ' + height)

        // Title
        const titleBox = this.add.rectangle(middleX, buttonHeight * 2, width, buttonHeight * 2, 0xa0a000)
        const titleText = this.add.text(0, 0, 'SPACE PONG', {
            fontFamily: 'Arial Black', fontSize: 60, color: '#ffffff',
            stroke: '#000000', strokeThickness: 10,
            align: 'center'
        })
        Phaser.Display.Align.In.Center(titleText, titleBox)

        // Create lobby button
        const createLobbyBox = this.add.rectangle(middleX, middleY, buttonWidth, buttonHeight, 0x6f00ff, 0.6)
        createLobbyBox.setStrokeStyle(6, 0xffffff, 1)
        const createLobbyBoxText = this.add.text(0, 0, 'CREATE LOBBY', {
            fontFamily: 'Arial Black', fontSize: 20, color: '#ffffff',
            stroke: '#000000', strokeThickness: 3,
            align: 'center'
        })
        Phaser.Display.Align.In.Center(createLobbyBoxText, createLobbyBox)

        // Tutorial button
        const tutorialBox = this.add.rectangle(middleX, middleY + buttonHeight * 2, buttonWidth, buttonHeight, 0x6f00ff, 0.6)
        tutorialBox.setStrokeStyle(6, 0xffffff, 1)
        const tutorialBoxText = this.add.text(tutorialBox.x, tutorialBox.y, 'HOW TO PLAY', {
            fontFamily: 'Arial Black', fontSize: 20, color: '#ffffff',
            stroke: '#000000', strokeThickness: 3,
            align: 'center'
        })
        Phaser.Display.Align.In.Center(tutorialBoxText, tutorialBox)

        // Button hover effects
        createLobbyBox.setInteractive({ useHandCursor: true })
        createLobbyBox.on('pointerover', () => { this.buttonHover(createLobbyBox) });
        createLobbyBox.on('pointerout', () => { this.buttonRest(createLobbyBox) });
        tutorialBox.setInteractive({ useHandCursor: true })
        tutorialBox.on('pointerover', () => { this.buttonHover(tutorialBox) });
        tutorialBox.on('pointerout', () => { this.buttonRest(tutorialBox) });

        // Button click actions
        createLobbyBox.on('pointerdown', () => { this.scene.start('') })
    }

    buttonHover(button) {
        button.fillAlpha = 1
    }

    buttonRest(button) {
        button.fillAlpha = 0.6
    }
}