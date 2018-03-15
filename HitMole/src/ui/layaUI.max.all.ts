
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class GameUI extends View {
		public timeBar:Laya.ProgressBar;
		public scoreNum:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":25,"x":25,"skin":"ui/back.png"}},{"type":"Box","props":{"y":193,"x":158,"name":"item0"},"child":[{"type":"Image","props":{"y":3,"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":17,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":31,"x":66,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":84,"x":0,"skin":"ui/mask-01.png"}}]},{"type":"Box","props":{"y":189,"x":342,"name":"item1"},"child":[{"type":"Image","props":{"y":3,"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":17,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"skin":"ui/mask-02.png"}},{"type":"Image","props":{"y":37,"x":60,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":185,"x":542,"name":"item2"},"child":[{"type":"Image","props":{"y":3,"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":17,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"skin":"ui/mask-03.png"}},{"type":"Image","props":{"y":40,"x":64,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":283,"x":128,"name":"item3"},"child":[{"type":"Image","props":{"y":3,"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":17,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"skin":"ui/mask-04.png"}},{"type":"Image","props":{"y":41,"x":70,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":296,"x":342,"name":"item4"},"child":[{"type":"Image","props":{"y":3,"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":17,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"skin":"ui/mask-05.png"}},{"type":"Image","props":{"y":33,"x":62,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":285,"x":547,"name":"item5"},"child":[{"type":"Image","props":{"y":3,"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":17,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"skin":"ui/mask-06.png"}},{"type":"Image","props":{"y":42,"x":63,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":384,"x":126,"name":"item6"},"child":[{"type":"Image","props":{"y":3,"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":17,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"skin":"ui/mask-07.png"}},{"type":"Image","props":{"y":38,"x":61,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":387,"x":340,"name":"item7"},"child":[{"type":"Image","props":{"y":3,"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":17,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"skin":"ui/mask-08.png"}},{"type":"Image","props":{"y":32,"x":63,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":382,"x":559,"name":"item8"},"child":[{"type":"Image","props":{"y":3,"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":17,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"skin":"ui/mask-09.png"}},{"type":"Image","props":{"y":36,"x":59,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"ProgressBar","props":{"y":31,"x":7,"width":316,"var":"timeBar","value":1,"skin":"ui/progress_time.png","height":23}},{"type":"Box","props":{"y":69,"x":31,"var":"scoreNum"},"child":[{"type":"Clip","props":{"skin":"ui/clip_number.png","name":"item0","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":18,"skin":"ui/clip_number.png","name":"item1","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":36,"skin":"ui/clip_number.png","name":"item2","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":54,"skin":"ui/clip_number.png","name":"item3","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":72,"skin":"ui/clip_number.png","name":"item4","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":90,"skin":"ui/clip_number.png","name":"item5","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":108,"skin":"ui/clip_number.png","name":"item6","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":126,"skin":"ui/clip_number.png","name":"item7","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":144,"skin":"ui/clip_number.png","name":"item8","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":162,"skin":"ui/clip_number.png","name":"item9","clipX":10,"autoPlay":false}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameUI.uiView);

        }

    }
}

module ui {
    export class GameOverUI extends View {
		public restartBtn:Laya.Button;
		public scoreNum:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":500,"height":400},"child":[{"type":"Image","props":{"y":0,"x":0,"width":500,"skin":"ui/overBg.png","sizeGrid":"28,21,18,23","height":400}},{"type":"Image","props":{"y":73,"x":42,"skin":"ui/total Score.png"}},{"type":"Button","props":{"y":257,"x":161,"var":"restartBtn","stateNum":2,"skin":"ui/btn_restart.png"}},{"type":"Box","props":{"y":196,"x":160,"var":"scoreNum"},"child":[{"type":"Clip","props":{"skin":"ui/clip_number.png","name":"item0","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":18,"skin":"ui/clip_number.png","name":"item1","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":36,"skin":"ui/clip_number.png","name":"item2","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":54,"skin":"ui/clip_number.png","name":"item3","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":72,"skin":"ui/clip_number.png","name":"item4","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":90,"skin":"ui/clip_number.png","name":"item5","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":108,"skin":"ui/clip_number.png","name":"item6","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":126,"skin":"ui/clip_number.png","name":"item7","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":144,"skin":"ui/clip_number.png","name":"item8","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":162,"skin":"ui/clip_number.png","name":"item9","clipX":10,"autoPlay":false}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameOverUI.uiView);

        }

    }
}

module ui {
    export class GameStartUI extends View {
		public startBtn:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":55,"x":38,"skin":"ui/help.png"},"child":[{"type":"Button","props":{"y":357,"x":273,"var":"startBtn","stateNum":2,"skin":"ui/btn_start.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameStartUI.uiView);

        }

    }
}

module ui {
    export class HammerUI extends View {
		public hit:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":100},"child":[{"type":"Image","props":{"y":59,"x":62,"width":98,"skin":"ui/hammer.png","rotation":20,"pivotY":48,"pivotX":55,"height":77},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":58,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0}],"x":[{"value":66,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0}],"rotation":[{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":0},{"value":-20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":1},{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":5}]}}],"name":"hit","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.HammerUI.uiView);

        }

    }
}
