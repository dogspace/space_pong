import { Scene } from 'phaser';


let trackColors = ['0xFF7C7C', '0xFF3232', '0xA32020', '0x681515']
let lastBotDiff = 0
let lastBallSpeed = 0
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
        let labelWidth = Math.min(500, Math.max(150, xUnit * 1.25))
        let labelHeight = Math.min(200, Math.max(20, yUnit))
        let xMargin = xUnit * 2

        console.log('labelWidth: ' + labelWidth)
        console.log('xunit: ' + xUnit)
        console.log('labelHeight: ' + labelHeight)
        console.log('yunit: ' + yUnit)

        // Label backgrounds
        let inviteLink_label = this.rexUI.add.roundRectangle(xMargin, labelHeight*2, labelWidth, labelHeight, 2, 0x222222).setOrigin(0, 0)
        let addBot_label = this.rexUI.add.roundRectangle(xMargin, labelHeight*4, labelWidth, labelHeight, 2, 0x222222).setOrigin(0, 0)
        let botDiff_label = this.rexUI.add.roundRectangle(xMargin, labelHeight*6, labelWidth, labelHeight, 2, 0x222222).setOrigin(0, 0)
        let ballSpeed_label = this.rexUI.add.roundRectangle(xMargin, labelHeight*8, labelWidth, labelHeight, 2, 0x222222).setOrigin(0, 0)
        let scoreLimit_label = this.rexUI.add.roundRectangle(xMargin, labelHeight*10, labelWidth, labelHeight, 2, 0x222222).setOrigin(0, 0)
        
        // Label text
        let inviteLink_text = this.add.text(0, 0, 'Invite Link', { fontFamily: 'Arial', fontSize: 20, color: '#ffffff', padding: 20 })
        let addBot_text = this.add.text(0, 0, 'Add bot', { fontFamily: 'Arial', fontSize: 20, color: '#ffffff', padding: 20 })
        let botDiff_text = this.add.text(0, 0, 'Bot difficulty:  ', { fontFamily: 'Arial', fontSize: 20, color: '#ffffff', padding: 20 })
        let ballSpeed_text = this.add.text(0, 0, 'Ball Speed:  ', { fontFamily: 'Arial', fontSize: 20, color: '#ffffff', padding: 20 })
        let scoreLimit_text = this.add.text(0, 0, 'Score Limit:  ', { fontFamily: 'Arial', fontSize: 20, color: '#ffffff', padding: 20 })
        Phaser.Display.Align.In.LeftCenter(inviteLink_text, inviteLink_label)
        Phaser.Display.Align.In.LeftCenter(addBot_text, addBot_label)
        Phaser.Display.Align.In.LeftCenter(botDiff_text, botDiff_label)
        Phaser.Display.Align.In.LeftCenter(ballSpeed_text, ballSpeed_label)
        Phaser.Display.Align.In.LeftCenter(scoreLimit_text, scoreLimit_label)

        // Label slider values
        let botDiff_value = this.add.text(0, 0, '01', { fontFamily: 'Arial', fontSize: 20, color: '#ffffff', padding: 10 })
        let ballSpeed_value = this.add.text(0, 0, '20', { fontFamily: 'Arial', fontSize: 20, color: '#ffffff', padding: 10 })
        let scoreLimit_value = this.add.text(0, 0, '05', { fontFamily: 'Arial', fontSize: 20, color: '#ffffff', padding: 10})
        Phaser.Display.Align.In.RightCenter(botDiff_value, botDiff_label)
        Phaser.Display.Align.In.RightCenter(ballSpeed_value, ballSpeed_label)
        Phaser.Display.Align.In.RightCenter(scoreLimit_value, scoreLimit_label)

        // Buttons and sliders
        let margin = xMargin + labelWidth + 20
        let inviteLink_button = this.rexUI.add.roundRectangle(margin, labelHeight*2, labelHeight, labelHeight, 2, 0x222222).setOrigin(0, 0)
        let addBot_button = this.rexUI.add.roundRectangle(margin, labelHeight*4, labelHeight, labelHeight, 2, 0x222222).setOrigin(0, 0)
        inviteLink_button.setInteractive({ useHandCursor: true })
        addBot_button.setInteractive({ useHandCursor: true })
        let botDiff_box = this.rexUI.add.roundRectangle(margin, labelHeight*6, labelWidth, labelHeight, 2, 0x000000).setOrigin(0, 0)
        let ballSpeed_box = this.rexUI.add.roundRectangle(margin, labelHeight*8, labelWidth, labelHeight, 2, 0x000000).setOrigin(0, 0)
        let scoreLimit_box = this.rexUI.add.roundRectangle(margin, labelHeight*10, labelWidth, labelHeight, 2, 0x000000).setOrigin(0, 0)
        let botDiff_track = this.rexUI.add.roundRectangle(0, 0, labelWidth, 0, 5, trackColors[0])
        let ballSpeed_track = this.rexUI.add.roundRectangle(0, 0, labelWidth, 0, 5, trackColors[0])
        let scoreLimit_track = this.rexUI.add.roundRectangle(0, 0, labelWidth, 0, 5, trackColors[0])
        let botDiff_slider = this.rexUI.add.slider({
            x: 0, y: 0, width: labelWidth, height: labelHeight, orientation: 'x', input: 'click', track: botDiff_track,
            thumb: this.rexUI.add.roundRectangle(0, 0, 20, labelHeight, 6, 0xffffff),
            space: {
                top: labelHeight/3,
                bottom: labelHeight/3,
            },
            valuechangeCallback: (value) => {
                let v = this.getSliderPos(value)
                if (lastBotDiff != v) {
                    lastBotDiff = v
                    botDiff_track.setFillStyle(trackColors[v])
                    this.updateLabel(botDiff_value, v + 1)
                    this.game.config.gameSettings.botDiff = v + 1
                }
            }
        }).layout()
        let ballSpeed_slider = this.rexUI.add.slider({
            x: 0, y: 0, width: labelWidth, height: labelHeight, orientation: 'x', input: 'click', track: ballSpeed_track,
            thumb: this.rexUI.add.roundRectangle(0, 0, 20, labelHeight, 6, 0xffffff),
            space: {
                top: labelHeight/3,
                bottom: labelHeight/3,
            },
            valuechangeCallback: (value) => {
                let v = this.getSliderPos(value)
                if (lastBallSpeed != v) {
                    lastBallSpeed = v
                    ballSpeed_track.setFillStyle(trackColors[v])
                    let ballSpeed = [20, 40, 60, 80][v]
                    this.updateLabel(ballSpeed_value, ballSpeed)
                    this.game.config.gameSettings.timeLimit = ballSpeed
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
                let v = this.getSliderPos(value)
                if (lastScoreLimit != v) {
                    lastScoreLimit = v
                    scoreLimit_track.setFillStyle(trackColors[v])
                    let scoreLimit = [5, 10, 15, 20][v]
                    this.updateLabel(scoreLimit_value, scoreLimit)
                    this.game.config.gameSettings.scoreLimit = scoreLimit
                }
            }
        }).layout()
        Phaser.Display.Align.In.LeftCenter(botDiff_slider, botDiff_box)
        Phaser.Display.Align.In.LeftCenter(ballSpeed_slider, ballSpeed_box)
        Phaser.Display.Align.In.LeftCenter(scoreLimit_slider, scoreLimit_box)


        


        let lobbyBox = this.rexUI.add.roundRectangle(width-xMargin-labelWidth, labelHeight*2, labelWidth, yUnit*9, 6, 0x325342).setOrigin(0, 0)
        let startButton = this.rexUI.add.roundRectangle(xMargin, labelHeight*14, width-xMargin*2, labelHeight*4, 12, 0xddaadd).setOrigin(0, 0)
        startButton.setInteractive({ useHandCursor: true })
        
    }


    getSliderPos (value) {
        if      (value < 0.20) { return 0 }
        else if (value < 0.50) { return 1 }
        else if (value < 0.80) { return 2 }
        else                   { return 3 }
    }


    updateLabel (label, value) {
        value = value < 10 ? '0' + value : value
        label.text = value
    }

}