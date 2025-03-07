class MansionExterior extends AdventureScene {
    constructor() {
        super("MansionExterior", "Outside the mansion");
    }
    preload(){
        this.load.image('safe', 'safe.png');
        this.load.audio('buzz', 'buzzer.wav');
        this.load.audio('ding', 'ding.wav');
    }
    onEnter() {
        let buzz = this.sound.add('buzz');
        let door = this.add.text(100, 100, "🚪")
            .setFontSize(this.s * 10)
            .setInteractive()
            .on('pointerover', () => this.showMessage("A door beckons you"))
            .on('pointerdown', () => {
                this.showMessage("Enter");

                this.gotoScene('MansionInterior');
            });

        let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 ")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("An old key")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the key.");
                this.gainItem('key');
                this.tweens.add({
                    targets: key,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key.destroy()
                });
                this.playPickedSound();
            })
        
        
        let safe = this.add.sprite(200, 500, "safe")
            .setInteractive()
            .on('pointerover', ()=> {
                this.showMessage("A safe, it seems locked tight.")
            })
            .on('pointerdown', () => {
                 if (this.hasItem("First half of code") && this.hasItem("Second half of code")) {
                    this.showMessage("You open the safe and pick up a keycard");
                    this.gainItem("keycard");
                    this.playPickedSound();
                }
                else{
                    this.showMessage("It's locked tight.")
                    this.playBadSound()
                    this.tweens.add({
                        targets: safe,
                        x: '+=' + this.s,
                        repeat: 2,
                        yoyo: true,
                        ease: 'Sine.inOut',
                        duration: 100
                    });
                }
                
               
            })

        safe.setScale(.2);

      

    }
}

class MansionInterior extends AdventureScene {
    constructor() {
        super("MansionInterior", "Inside the mansion");
    }
    onEnter() {

        let door1 = this.add.text(100, 100, "🚪")
            .setFontSize(this.s * 10)
            .setInteractive()
            .on('pointerover', () => this.showMessage("A locked door, it seems to lead outside."))
            .on('pointerdown', () => {
                if(this.hasItem("key")){
                    this.showMessage("Go outside.");
                    this.gotoScene('Mausoleum');
                }
                else{
                    this.showMessage("The door is locked.");
                    this.playBadSound();
                }
                

                
            });
            let door2 = this.add.text(500, 100, "🚪")
            .setFontSize(this.s * 10)
            .setInteractive()
            .on('pointerover', () => this.showMessage("A locked door, this one seems to have a card reader on it."))
            .on('pointerdown', () => {
                if(this.hasItem("keycard")){
                    this.showMessage("Go through the door");
                    this.gotoScene('HiddenRoom');
                }
                else{
                    this.showMessage("The door is locked.");
                    this.playBadSound();
                }
                

                
            });
            let door3 = this.add.text(900, 100, "🚪")
            .setFontSize(this.s * 10)
            .setInteractive()
            .on('pointerover', () => this.showMessage("A door leading further into the mansion"))
            .on('pointerdown', () => {
                this.showMessage("Enter");
                this.gotoScene('Office');
                

                
            });

        this.add.text(this.w * 0.3, this.w * 0.4, "Go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Go back outside");
            })
            .on('pointerdown', () => {
                this.gotoScene('MansionExterior');
            });

        
    }
}

class Mausoleum extends AdventureScene {
    constructor() {
        super("demo3", "A dark mausoleum");
    }
    onEnter(){
        let coffin1 = this.add.text(400, 100, "⚰️")
            .setFontSize(this.s * 10)
            .setInteractive()
            .on('pointerover', () => this.showMessage("A coffin that has been half opened"))
            .on('pointerdown', () => {
                this.showMessage("You see a faint series of numbers that could be a code");
                this.gainItem("First half of code");
                this.playPickedSound();
                this.tweens.add({
                    targets: safe,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
                

                
        });

        let coffin2 = this.add.text(800, 100, "⚰️")
            .setFontSize(this.s * 10)
            .setInteractive()
            .on('pointerover', () => this.showMessage("A closed coffin "))
            .on('pointerdown', () => {
                this.showMessage("You try to open it but it is sealed shut");
            
                this.playBadSound();
                this.tweens.add({
                    targets: coffin2,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
                

                
        });

        this.add.text(this.w * 0.3, this.w * 0.4, "Go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Go back inside");
            })
            .on('pointerdown', () => {
                this.gotoScene('MansionInterior');
            });
    }   
}

class Office extends AdventureScene {
    constructor() {
        super('Office', 'An Old Office Room')
    }
    onEnter(){
        let books = this.add.text(200, 100, "📚")
            .setFontSize(this.s*10)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("A pile of books")
            })
            .on('pointerdown', () => {
                this.showMessage("You skim through it but find nothing ");            
                this.tweens.add({
                    targets: books,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });         
        })
        let computer = this.add.text(800, 100, "🖥️")
            .setFontSize(this.s*10)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("An old computer")
            })
            .on('pointerdown', () => {
                this.showMessage("Surprisingly it works and you find a series of numbers on it!");   
                this.gainItem("Second half of code");
                this.playPickedSound();         
                      
        })
        this.add.text(this.w * 0.3, this.w * 0.4, "Go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Go back");
            })
            .on('pointerdown', () => {
                this.gotoScene('MansionInterior');
            });
    
            
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    preload(){
        this.load.image('mansion', 'mansion.jpg');
    }
    create() {
        this.add.text(50,50, "The Mansion").setFontSize(50)
        this.add.text(50,100, "Inside the mansion lies a dark secret").setFontSize(40);
        this.add.text(50,150, "Click anywhere to begin.").setFontSize(20);
        this.add.sprite(700, 550, 'mansion');
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('MansionExterior'));
        });
    }
}

class HiddenRoom extends Phaser.Scene {
    constructor() {
        super('HiddenRoom');
    }
    preload(){
        this.load.image('portal', 'portal.png');
    }
    create() {
        this.add.sprite(500, 500, 'portal');
        this.add.text(50, 100, "The portal seems to have a mysterious temporal energy, you feel the urge to enter").setFontSize(20);
        this.add.text(365, 500, "Enter the portal").setFontSize(30);
        this.input.on('pointerdown', () => {this.gotoScene('intro')});
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, MansionExterior, MansionInterior, Mausoleum, Office, HiddenRoom],
    title: "Adventure Game",
    audio: {disableWebAudio: true}
});

