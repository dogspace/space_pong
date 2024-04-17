import { Scene } from 'phaser';


let trackColors = ['0x00aa00', '0x0000aa', '0xaa0000']
let lastBotDiff = 0
let lastTimeLimit = 0
let lastScoreLimit = 0


export class CreateLobby extends Scene {
    constructor () {
        super('CreateLobby');
    }

    create () {
        let width = this.scale.width
        let height = this.scale.height
        let xUnit = width / 10
        let yUnit = height / 20
        let labelWidth = Math.min(500, Math.max(150, xUnit * 1.5))
        let labelHeight = Math.min(200, Math.max(20, yUnit))
        let xMargin = xUnit * 2

        console.log('labelWidth: ' + labelWidth)
        console.log('xunit: ' + xUnit)
        console.log('labelHeight: ' + labelHeight)
        console.log('yunit: ' + yUnit)

        // Create labels
        let label1 = this.rexUI.add.roundRectangle(xMargin, labelHeight*2, labelWidth, labelHeight, 2, 0x222222).setOrigin(0, 0)
        let label2 = this.rexUI.add.roundRectangle(xMargin, labelHeight*4, labelWidth, labelHeight, 2, 0x222222).setOrigin(0, 0)
        let label3 = this.rexUI.add.roundRectangle(xMargin, labelHeight*6, labelWidth, labelHeight, 2, 0x222222).setOrigin(0, 0)
        let label4 = this.rexUI.add.roundRectangle(xMargin, labelHeight*8, labelWidth, labelHeight, 2, 0x222222).setOrigin(0, 0)
        let label5 = this.rexUI.add.roundRectangle(xMargin, labelHeight*10, labelWidth, labelHeight, 2, 0x222222).setOrigin(0, 0)
        let label1Text = this.add.text(0, 0, 'Invite Link', { fontFamily: 'Arial', fontSize: 20, color: '#ffffff', padding: 40 })
        let label2Text = this.add.text(0, 0, 'Add bot', { fontFamily: 'Arial', fontSize: 20, color: '#ffffff', padding: 40 })
        let label3Text = this.add.text(0, 0, 'Bot difficulty', { fontFamily: 'Arial', fontSize: 20, color: '#ffffff', padding: 40 })
        let label4Text = this.add.text(0, 0, 'Time Limit', { fontFamily: 'Arial', fontSize: 20, color: '#ffffff', padding: 40 })
        let label5Text = this.add.text(0, 0, 'Score Limit', { fontFamily: 'Arial', fontSize: 20, color: '#ffffff', padding: 40 })
        Phaser.Display.Align.In.LeftCenter(label1Text, label1)
        Phaser.Display.Align.In.LeftCenter(label2Text, label2)
        Phaser.Display.Align.In.LeftCenter(label3Text, label3)
        Phaser.Display.Align.In.LeftCenter(label4Text, label4)
        Phaser.Display.Align.In.LeftCenter(label5Text, label5)

        // Create buttons and sliders
        let buttonLeft = xMargin + labelWidth + 20
        let button1 = this.rexUI.add.roundRectangle(buttonLeft, labelHeight*2, labelWidth, labelHeight, 2, 0x222222).setOrigin(0, 0)
        let button2 = this.rexUI.add.roundRectangle(buttonLeft, labelHeight*4, labelWidth, labelHeight, 2, 0x222222).setOrigin(0, 0)
        let botDiff_box = this.rexUI.add.roundRectangle(buttonLeft, labelHeight*6, labelWidth, labelHeight, 2, 0x000000).setOrigin(0, 0)
        let timeLimit_box = this.rexUI.add.roundRectangle(buttonLeft, labelHeight*8, labelWidth, labelHeight, 2, 0x000000).setOrigin(0, 0)
        let scoreLimit_box = this.rexUI.add.roundRectangle(buttonLeft, labelHeight*10, labelWidth, labelHeight, 2, 0x000000).setOrigin(0, 0)
        let botDiff_track = this.rexUI.add.roundRectangle(0, 0, labelWidth, 0, 5, trackColors[0])
        let timeLimit_track = this.rexUI.add.roundRectangle(0, 0, labelWidth, 0, 5, trackColors[0])
        let scoreLimit_track = this.rexUI.add.roundRectangle(0, 0, labelWidth, 0, 5, trackColors[0])
        let botDiff_slider = this.rexUI.add.slider({
            x: 0, y: 0, width: labelWidth, height: labelHeight, orientation: 'x', input: 'click', track: botDiff_track,
            thumb: this.rexUI.add.roundRectangle(0, 0, 20, labelHeight, 6, 0xffffff),
            space: {
                top: labelHeight/3,
                bottom: labelHeight/3,
            },
            valuechangeCallback: (value) => {
                let v = this.getSliderValue(value)
                if (lastBotDiff != v) {
                    lastBotDiff = v
                    botDiff_track.setFillStyle(trackColors[v])
                    this.game.config.gameSettings.botDiff = v
                }
            }
        }).layout()
        let timeLimit_slider = this.rexUI.add.slider({
            x: 0, y: 0, width: labelWidth, height: labelHeight, orientation: 'x', input: 'click', track: timeLimit_track,
            thumb: this.rexUI.add.roundRectangle(0, 0, 20, labelHeight, 6, 0xffffff),
            space: {
                top: labelHeight/3,
                bottom: labelHeight/3,
            },
            valuechangeCallback: (value) => {
                let v = this.getSliderValue(value)
                if (lastTimeLimit != v) {
                    lastTimeLimit = v
                    timeLimit_track.setFillStyle(trackColors[v])
                    this.game.config.gameSettings.timeLimit = this.getTimeValue(v)
                }
            }
        }).layout()
        let scoreLimit_slider = this.rexUI.add.slider({
            x: 0, y: 0, width: labelWidth, height: labelHeight, orientation: 'x', input: 'click', track: scoreLimit_track,
            thumb: this.rexUI.add.roundRectangle(0, 0, 20, labelHeight, 6, 0xffffff),
            space: {
                top: labelHeight/3,
                bottom: labelHeight/3,
            },
            valuechangeCallback: (value) => {
                let v = this.getSliderValue(value)
                if (lastScoreLimit != v) {
                    lastScoreLimit = v
                    scoreLimit_track.setFillStyle(trackColors[v])
                    this.game.config.gameSettings.scoreLimit = this.getTimeValue(v)
                }
            }
        }).layout()
        Phaser.Display.Align.In.LeftCenter(botDiff_slider, botDiff_box)
        Phaser.Display.Align.In.LeftCenter(timeLimit_slider, timeLimit_box)
        Phaser.Display.Align.In.LeftCenter(scoreLimit_slider, scoreLimit_box)





        let lobbyBox = this.rexUI.add.roundRectangle(width-xMargin-labelWidth, labelHeight*2, labelWidth, yUnit*9, 6, 0x325342).setOrigin(0, 0)
        let startButton = this.rexUI.add.roundRectangle(xMargin, labelHeight*14, width-xMargin*2, labelHeight*4, 12, 0xddaadd).setOrigin(0, 0)

        
    }


    getSliderValue (value) {
        if      (value < 0.32) { return 0 }
        else if (value < 0.67) { return 1 }
        else                   { return 2 }
    }


    getTimeValue(value) {
        if      (value == 0) { return 5  }
        else if (value == 1) { return 10 }
        else                 { return 15 }
    }
}