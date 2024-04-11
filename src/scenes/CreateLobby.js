import { Scene } from 'phaser';


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

        // Create label buttons and sliders
        let buttonLeft = xMargin + labelWidth + 20
        let button1 = this.rexUI.add.roundRectangle(buttonLeft, labelHeight*2, labelWidth, labelHeight, 2, 0x222222).setOrigin(0, 0)
        let button2 = this.rexUI.add.roundRectangle(buttonLeft, labelHeight*4, labelWidth, labelHeight, 2, 0x222222).setOrigin(0, 0)
        let slideBox1 = this.rexUI.add.roundRectangle(buttonLeft, labelHeight*6, labelWidth, labelHeight, 2, 0x000000).setOrigin(0, 0)
        let slideBox2 = this.rexUI.add.roundRectangle(buttonLeft, labelHeight*8, labelWidth, labelHeight, 2, 0x000000).setOrigin(0, 0)
        let slideBox3 = this.rexUI.add.roundRectangle(buttonLeft, labelHeight*10, labelWidth, labelHeight, 2, 0x000000).setOrigin(0, 0)
        let trackColors = { green: 0x00aa00, blue: 0x0000aa, red: 0xaa0000 }
        let track1 = this.rexUI.add.roundRectangle(0, 0, labelWidth, 0, 5, trackColors.green)
        let track2 = this.rexUI.add.roundRectangle(0, 0, labelWidth, 0, 5, trackColors.green)
        let track3 = this.rexUI.add.roundRectangle(0, 0, labelWidth, 0, 5, trackColors.green)
        let slider1 = this.rexUI.add.slider({
            x: 0, y: 0, width: labelWidth, height: labelHeight, orientation: 'x', input: 'click', track: track1,
            thumb: this.rexUI.add.roundRectangle(0, 0, 20, labelHeight, 6, 0xffffff),
            space: {
                top: labelHeight/3,
                bottom: labelHeight/3,
            },
            valuechangeCallback: function (value) {
                if      (value < 0.32) { track1.setFillStyle(trackColors.green) }
                else if (value < 0.67) { track1.setFillStyle(trackColors.blue) }
                else                   { track1.setFillStyle(trackColors.red) }
            }
        }).layout()
        let slider2 = this.rexUI.add.slider({
            x: 0, y: 0, width: labelWidth, height: labelHeight, orientation: 'x', input: 'click', track: track2,
            thumb: this.rexUI.add.roundRectangle(0, 0, 20, labelHeight, 6, 0xffffff),
            space: {
                top: labelHeight/3,
                bottom: labelHeight/3,
            },
            valuechangeCallback: function (value) {
                if      (value < 0.32) { track2.setFillStyle(trackColors.green) }
                else if (value < 0.67) { track2.setFillStyle(trackColors.blue) }
                else                   { track2.setFillStyle(trackColors.red) }
            }
        }).layout()
        let slider3 = this.rexUI.add.slider({
            x: 0, y: 0, width: labelWidth, height: labelHeight, orientation: 'x', input: 'click', track: track3,
            thumb: this.rexUI.add.roundRectangle(0, 0, 20, labelHeight, 6, 0xffffff),
            space: {
                top: labelHeight/3,
                bottom: labelHeight/3,
            },
            valuechangeCallback: function (value) {
                if      (value < 0.32) { track3.setFillStyle(trackColors.green) }
                else if (value < 0.67) { track3.setFillStyle(trackColors.blue) }
                else                   { track3.setFillStyle(trackColors.red) }
            }
        }).layout()
        Phaser.Display.Align.In.LeftCenter(slider1, slideBox1)
        Phaser.Display.Align.In.LeftCenter(slider2, slideBox2)
        Phaser.Display.Align.In.LeftCenter(slider3, slideBox3)





        let lobbyBox = this.rexUI.add.roundRectangle(width-xMargin-labelWidth, labelHeight*2, labelWidth, yUnit*9, 6, 0x325342).setOrigin(0, 0)
        let startButton = this.rexUI.add.roundRectangle(xMargin, labelHeight*14, width-xMargin*2, labelHeight*4, 12, 0xddaadd).setOrigin(0, 0)

        
    }

    updateSlider (color, value) {
        let green = 0x00ff00
        let blue = 0x0000ff
        let red = 0xff0000
        if (value < 0.34 && meep != green) { meep = green }
        else if (value < 0.67 && meep != blue) { meep = blue }
        else if (meep != red) { meep = red}
        console.log(meep)
    }
}