var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * GameView
 */
var GameView = (function (_super) {
    __extends(GameView, _super);
    function GameView() {
        var _this = _super.call(this) || this;
        _this.molesNum = 9;
        var hitCallBackHd = Laya.Handler.create(_this, _this.setScore, null, false);
        _this.score = 0;
        _this.timeBar.value = 1;
        _this.moles = new Array();
        for (var i = 0; i < _this.molesNum; i++) {
            var box = _this.getChildByName("item" + i);
            var mole = new Mole(box.getChildByName("normal"), box.getChildByName("hit"), box.getChildByName("scoreImg"), 21, hitCallBackHd);
            _this.moles.push(mole);
        }
        //this.mole = new Mole(this.normal,this.hit,21);
        _this.hammer = new Hammer();
        _this.addChild(_this.hammer);
        _this.hammer.visible = false;
        return _this;
    }
    GameView.prototype.onLoop = function () {
        // this.mole.show();
        this.timeBar.value -= (1 / 10);
        if (this.timeBar.value <= 0) {
            this.gameOver();
            return;
        }
        var index = Math.floor(Math.random() * this.molesNum);
        this.moles[index].show();
    };
    GameView.prototype.setScore = function (type) {
        this.score += (type == 1 ? -100 : 100);
        if (this.score < 0) {
            this.score = 0;
        }
        this.updateScoreUI();
    };
    GameView.prototype.gameStart = function () {
        this.hammer.visible = true;
        this.score = 0;
        this.updateScoreUI();
        this.timeBar.value = 1;
        this.hammer.start();
        Laya.timer.loop(1000, this, this.onLoop);
    };
    GameView.prototype.gameOver = function () {
        Laya.timer.clear(this, this.onLoop);
        this.hammer.visible = false;
        this.hammer.end();
        console.log("Game over");
        if (!GameMain.gameOver) {
            GameMain.gameOver = new GameOver();
        }
        GameMain.gameOver.centerX = 0;
        GameMain.gameOver.centerY = 40;
        GameMain.gameOver.setScore(this.score);
        Laya.stage.addChild(GameMain.gameOver);
    };
    GameView.prototype.updateScoreUI = function () {
        var data = {};
        var temp = this.score;
        for (var i = 9; i > 0; i--) {
            data["item" + i] = { index: Math.floor(temp % 10) };
            temp /= 10;
        }
        this.scoreNum.dataSource = data;
    };
    return GameView;
}(ui.GameUI));
//# sourceMappingURL=GameView.js.map