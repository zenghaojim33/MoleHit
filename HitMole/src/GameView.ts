/**
 * GameView
 */
class GameView extends ui.GameUI {
    private moles:Array<Mole>;
    private molesNum:number = 9;
    private score:number;
    private hammer:Hammer;

    constructor() {
        super();
        var hitCallBackHd:Laya.Handler = Laya.Handler.create(this,this.setScore,null,false);
        this.score = 0;
        this.timeBar.value = 1;
        this.moles = new Array<Mole>();
        for (var i:number = 0 ; i<this.molesNum ; i++){
            var box:Laya.Box = this.getChildByName("item" + i) as Laya.Box;
            var mole:Mole = new Mole(box.getChildByName("normal") as Laya.Image,box.getChildByName("hit") as Laya.Image,box.getChildByName("scoreImg") as Laya.Image,21,hitCallBackHd);
            this.moles.push(mole);

        }

        //this.mole = new Mole(this.normal,this.hit,21);
        this.hammer = new Hammer();
        this.addChild(this.hammer);
        this.hammer.visible = false;
        
    }
    onLoop():void{
       // this.mole.show();
       this.timeBar.value -= (1/10);
       if (this.timeBar.value <= 0 ){
           this.gameOver();
           return;
       }
       var index = Math.floor(Math.random()*this.molesNum);
       this.moles[index].show();
       
    }

    setScore(type:number):void{
        this.score += (type == 1 ? -100 : 100);
        if (this.score < 0){
            this.score = 0;
        }
        this.updateScoreUI();
    }

    gameStart():void{
        this.hammer.visible =true;
        this.score = 0;
        this.updateScoreUI();
        this.timeBar.value = 1;
        this.hammer.start();
        Laya.timer.loop(1000,this,this.onLoop);
    }

    gameOver():void{
        Laya.timer.clear(this,this.onLoop);
        this.hammer.visible = false;
        this.hammer.end();
        console.log("Game over");
        if (!GameMain.gameOver){
            GameMain.gameOver = new GameOver();
        }
        GameMain.gameOver.centerX = 0;
        GameMain.gameOver.centerY = 40;
        GameMain.gameOver.setScore(this.score);

        Laya.stage.addChild(GameMain.gameOver);

    }
    updateScoreUI():void{
        var data :any = {};
        var temp:number = this.score;
        for (var i:number = 9; i > 0; i --){
            data["item" + i] = {index :Math.floor(temp%10)};
            temp/= 10; 
        }
        this.scoreNum.dataSource = data;

    }
}