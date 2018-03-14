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
        _this.timeBar.value = 1;
        _this.moles = new Array();
        for (var i = 0; i < _this.molesNum; i++) {
            var box = _this.getChildByName("item" + i);
            var mole = new Mole(box.getChildByName("normal"), box.getChildByName("hit"), 21);
            _this.moles.push(mole);
        }
        //this.mole = new Mole(this.normal,this.hit,21);
        Laya.timer.loop(0, _this, _this.onLoop);
        return _this;
    }
    GameView.prototype.onLoop = function () {
        // this.mole.show();
        this.timeBar.value -= (1 / 90);
        if (this.timeBar.value <= 0) {
            this.gameOver();
            return;
        }
        var index = Math.floor(Math.random() * this.molesNum);
        this.moles[index].show();
    };
    GameView.prototype.gameOver = function () {
        Laya.timer.clear(this, this.onLoop);
        console.log("Game over");
    };
    return GameView;
}(ui.GameUI));
//# sourceMappingURL=GameView.js.map