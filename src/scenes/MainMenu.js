import { Scene } from 'phaser';

export class MainMenu extends Scene {
    //cursors = Phaser.Types.Input.Keyboard.CursorKeys

    constructor () {
        super('MainMenu');
    }

    create () {
        //this.add.image(512, 384, 'background');
        //this.add.image(512, 300, 'logo');
        // this.add.text(512, 460, 'Main Menu', {
        //     fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
        //     stroke: '#000000', strokeThickness: 8,
        //     align: 'center'
        // }).setOrigin(0.5);

        // this.input.once('pointerdown', () => {
        //     this.scene.start('Game');
        // });

        const width = this.scale.width
        const height = this.scale.height
        const middle = width / 2
        const buttonWidth = Math.max(width/4, 500)
        const buttonHeight = 100

        // Title
        const titleBox = this.add.rectangle(middle, 150, width, 200, 0x0000ff)

        // Create lobby button
        const createLobbyBox = this.add.rectangle(middle, 400, buttonWidth, buttonHeight, 0xff0000)
        createLobbyBox.alpha = 0.8
        this.add.text(createLobbyBox.x, createLobbyBox.y, 'CREATE LOBBY', {
            fontSize: '30px',
            fill: '#FFF'
        })

        // Join lobby button
        const joinLobbyBox = this.add.rectangle(middle, 550, buttonWidth, buttonHeight, 0xff0000)
        joinLobbyBox.alpha = 0.8
        this.add.text(joinLobbyBox.x, joinLobbyBox.y, 'JOIN LOBBY', {
            fontSize: '30px',
            fill: '#FFF'
        })

        // Tutorial button
        const tutorialBox = this.add.rectangle(middle, 700, buttonWidth, buttonHeight, 0xff0000)
        tutorialBox.alpha = 0.8
        this.add.text(tutorialBox.x, tutorialBox.y, 'HOW TO PLAY', {
            fontSize: '30px',
            fill: '#FFF'
        })

        // Mouse hover effects
        createLobbyBox.setInteractive({ useHandCursor: true })
        createLobbyBox.on('pointerover', () => { this.buttonHover(createLobbyBox) });
        createLobbyBox.on('pointerout', () => { this.buttonRest(createLobbyBox) });
        joinLobbyBox.setInteractive({ useHandCursor: true })
        joinLobbyBox.on('pointerover', () => { this.buttonHover(joinLobbyBox) });
        joinLobbyBox.on('pointerout', () => { this.buttonRest(joinLobbyBox) });
        tutorialBox.setInteractive({ useHandCursor: true })
        tutorialBox.on('pointerover', () => { this.buttonHover(tutorialBox) });
        tutorialBox.on('pointerout', () => { this.buttonRest(tutorialBox) });
    }

    buttonHover(button) {
        //button.setStyle({ fill: '#777' })
        button.setAlpha(1)
    }

    buttonRest(button) {
        button.setAlpha(0.8)
    }
}
