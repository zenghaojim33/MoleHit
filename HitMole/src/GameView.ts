/**
 * GameView
 */
class GameView extends ui.GameUI {
    private moles:Array<Mole>;
    private molesNum:number = 9;

    constructor() {
        super();
        this.timeBar.value = 1;
        this.moles = new Array<Mole>();
        for (var i:number = 0 ; i<this.molesNum ; i++){
            var box:Laya.Box = this.getChildByName("item" + i) as Laya.Box;
            var mole:Mole = new Mole(box.getChildByName("normal") as Laya.Image,box.getChildByName("hit") as Laya.Image,21);
            this.moles.push(mole);

        }
        //this.mole = new Mole(this.normal,this.hit,21);
        Laya.timer.loop(1000,this,this.onLoop);
    }
    onLoop():void{
       // this.mole.show();
       this.timeBar.value -= (1/90);
       if (this.timeBar.value <= 0 ){
           this.gameOver();
           return;
       }
       var index = Math.floor(Math.random()*this.molesNum);
       this.moles[index].show();
       
    }

    gameOver():void{
        Laya.timer.clear(this,this.onLoop);
        console.log("Game over");
    }
}