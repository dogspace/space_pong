import { Scene } from 'phaser';


export class Preloader extends Scene {
    constructor () {
        super('Preloader');
    }

    init () {        
        //  We loaded this image in our Boot Scene, so we can display it here
        //this.add.image(512, 384, 'background');

        // Create progress bar, use the 'progress' event from LoaderPlugin to update the bar (460px wide)
        this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);
        const bar = this.add.rectangle(512-230, 384, 4, 28, 0xffffff);
        this.load.on('progress', (progress) => {
            bar.width = 4 + (460 * progress);
        });
    }

    preload () {
        // Load RexUI plugin
        this.load.plugin({
            key: 'rexuiplugin',
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
            sceneKey: 'rexUI'
        });

        //  Load game assets
        this.load.setPath('assets');
        this.load.image('logo', 'logo.png');
    }

    create () {
        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.

        //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
        this.scene.start('MainMenu');
    }
}
