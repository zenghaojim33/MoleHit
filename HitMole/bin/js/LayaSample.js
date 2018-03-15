// 程序入口
var GameMain = (function () {
    function GameMain() {
        Laya.init(800, 600);
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
        Laya.stage.bgColor = "#ffcccc";
        var resArray = [
            { url: "res/atlas/ui.atlas", type: Laya.Loader.ATLAS },
            { url: "ui/back.png", type: Laya.Loader.IMAGE },
            { url: "ui/help.png", type: Laya.Loader.IMAGE }
        ];
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onLoaded));
    }
    GameMain.prototype.onLoaded = function () {
        // var view:GameView = new GameView();
        // Laya.stage.addChild(view);
        GameMain.gameStart = new GameStart();
        Laya.stage.addChild(GameMain.gameStart);
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map