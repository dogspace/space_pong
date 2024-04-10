import { Scene } from 'phaser';


export class CreateLobby extends Scene {
    constructor () {
        super('CreateLobby');
    }

    create () {
        this.rexUI.add.roundRectangle(500, 300, 100, 100, 20, 0x008888)
        
        this.rexUI.add.slider({
            x: 1000,
            y: 500,
            width: 400,
            height: 20,
            orientation: 'x',
            track: this.rexUI.add.roundRectangle(0, 0, 0, 30, 6, 0x008888),
            thumb: this.rexUI.add.roundRectangle(0, 0, 20, 50, 6, 0xffffff),
            // indicator: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, 0xaaaaaa),
            // valuechangeCallback: function (value) {
            //     print0.text = value;
            // },
            // space: {
            //     top: 4,
            //     bottom: 4,                
            // },
            input: 'click'
        }).layout()

        
    }
}