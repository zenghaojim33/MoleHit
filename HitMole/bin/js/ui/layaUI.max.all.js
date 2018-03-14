var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var GameUI = (function (_super) {
        __extends(GameUI, _super);
        function GameUI() {
            return _super.call(this) || this;
        }
        GameUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameUI.uiView);
        };
        return GameUI;
    }(View));
    GameUI.uiView = { "type": "View", "props": { "width": 800, "height": 600 }, "child": [{ "type": "Image", "props": { "y": 25, "x": 25, "skin": "ui/back.png" } }, { "type": "Box", "props": { "y": 193, "x": 158, "name": "item0" }, "child": [{ "type": "Image", "props": { "y": 3, "x": 7, "skin": "ui/mouse_normal_1.png", "name": "normal" } }, { "type": "Image", "props": { "y": 17, "x": 6, "skin": "ui/mouse_hit_1.png", "name": "hit" } }, { "type": "Image", "props": { "y": 84, "skin": "ui/mask-01.png" } }] }, { "type": "Box", "props": { "y": 189, "x": 342, "name": "item1" }, "child": [{ "type": "Image", "props": { "y": 3, "x": 7, "skin": "ui/mouse_normal_1.png", "name": "normal" } }, { "type": "Image", "props": { "y": 17, "x": 6, "skin": "ui/mouse_hit_1.png", "name": "hit" } }, { "type": "Image", "props": { "y": 84, "skin": "ui/mask-02.png" } }] }, { "type": "Box", "props": { "y": 185, "x": 542, "name": "item2" }, "child": [{ "type": "Image", "props": { "y": 3, "x": 7, "skin": "ui/mouse_normal_1.png", "name": "normal" } }, { "type": "Image", "props": { "y": 17, "x": 6, "skin": "ui/mouse_hit_1.png", "name": "hit" } }, { "type": "Image", "props": { "y": 84, "skin": "ui/mask-03.png" } }] }, { "type": "Box", "props": { "y": 283, "x": 128, "name": "item3" }, "child": [{ "type": "Image", "props": { "y": 3, "x": 7, "skin": "ui/mouse_normal_1.png", "name": "normal" } }, { "type": "Image", "props": { "y": 17, "x": 6, "skin": "ui/mouse_hit_1.png", "name": "hit" } }, { "type": "Image", "props": { "y": 84, "skin": "ui/mask-04.png" } }] }, { "type": "Box", "props": { "y": 296, "x": 342, "name": "item4" }, "child": [{ "type": "Image", "props": { "y": 3, "x": 7, "skin": "ui/mouse_normal_1.png", "name": "normal" } }, { "type": "Image", "props": { "y": 17, "x": 6, "skin": "ui/mouse_hit_1.png", "name": "hit" } }, { "type": "Image", "props": { "y": 84, "skin": "ui/mask-05.png" } }] }, { "type": "Box", "props": { "y": 285, "x": 547, "name": "item5" }, "child": [{ "type": "Image", "props": { "y": 3, "x": 7, "skin": "ui/mouse_normal_1.png", "name": "normal" } }, { "type": "Image", "props": { "y": 17, "x": 6, "skin": "ui/mouse_hit_1.png", "name": "hit" } }, { "type": "Image", "props": { "y": 84, "skin": "ui/mask-06.png" } }] }, { "type": "Box", "props": { "y": 384, "x": 126, "name": "item6" }, "child": [{ "type": "Image", "props": { "y": 3, "x": 7, "skin": "ui/mouse_normal_1.png", "name": "normal" } }, { "type": "Image", "props": { "y": 17, "x": 6, "skin": "ui/mouse_hit_1.png", "name": "hit" } }, { "type": "Image", "props": { "y": 84, "skin": "ui/mask-07.png" } }] }, { "type": "Box", "props": { "y": 387, "x": 340, "name": "item7" }, "child": [{ "type": "Image", "props": { "y": 3, "x": 7, "skin": "ui/mouse_normal_1.png", "name": "normal" } }, { "type": "Image", "props": { "y": 17, "x": 6, "skin": "ui/mouse_hit_1.png", "name": "hit" } }, { "type": "Image", "props": { "y": 84, "skin": "ui/mask-08.png" } }] }, { "type": "Box", "props": { "y": 382, "x": 559, "name": "item8" }, "child": [{ "type": "Image", "props": { "y": 3, "x": 7, "skin": "ui/mouse_normal_1.png", "name": "normal" } }, { "type": "Image", "props": { "y": 17, "x": 6, "skin": "ui/mouse_hit_1.png", "name": "hit" } }, { "type": "Image", "props": { "y": 84, "skin": "ui/mask-09.png" } }] }, { "type": "ProgressBar", "props": { "y": 31, "x": 7, "width": 316, "var": "timeBar", "value": 1, "skin": "ui/progress_time.png", "height": 23 } }] };
    ui.GameUI = GameUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map