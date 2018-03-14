
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class GameUI extends View {
		public timeBar:Laya.ProgressBar;
		public scoreNum:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":25,"x":25,"skin":"ui/back.png"}},{"type":"Box","props":{"y":193,"x":158,"name":"item0"},"child":[{"type":"Image","props":{"y":3,"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":17,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"skin":"ui/mask-01.png"}}]},{"type":"Box","props":{"y":189,"x":342,"name":"item1"},"child":[{"type":"Image","props":{"y":3,"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":17,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"skin":"ui/mask-02.png"}}]},{"type":"Box","props":{"y":185,"x":542,"name":"item2"},"child":[{"type":"Image","props":{"y":3,"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":17,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"skin":"ui/mask-03.png"}}]},{"type":"Box","props":{"y":283,"x":128,"name":"item3"},"child":[{"type":"Image","props":{"y":3,"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":17,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"skin":"ui/mask-04.png"}}]},{"type":"Box","props":{"y":296,"x":342,"name":"item4"},"child":[{"type":"Image","props":{"y":3,"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":17,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"skin":"ui/mask-05.png"}}]},{"type":"Box","props":{"y":285,"x":547,"name":"item5"},"child":[{"type":"Image","props":{"y":3,"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":17,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"skin":"ui/mask-06.png"}}]},{"type":"Box","props":{"y":384,"x":126,"name":"item6"},"child":[{"type":"Image","props":{"y":3,"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":17,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"skin":"ui/mask-07.png"}}]},{"type":"Box","props":{"y":387,"x":340,"name":"item7"},"child":[{"type":"Image","props":{"y":3,"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":17,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"skin":"ui/mask-08.png"}}]},{"type":"Box","props":{"y":382,"x":559,"name":"item8"},"child":[{"type":"Image","props":{"y":3,"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":17,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"skin":"ui/mask-09.png"}}]},{"type":"ProgressBar","props":{"y":31,"x":7,"width":316,"var":"timeBar","value":1,"skin":"ui/progress_time.png","height":23}},{"type":"Box","props":{"y":69,"x":31,"var":"scoreNum"},"child":[{"type":"Clip","props":{"skin":"ui/clip_number.png","name":"item0","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":18,"skin":"ui/clip_number.png","name":"item1","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":36,"skin":"ui/clip_number.png","name":"item2","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":54,"skin":"ui/clip_number.png","name":"item3","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":72,"skin":"ui/clip_number.png","name":"item4","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":90,"skin":"ui/clip_number.png","name":"item5","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":108,"skin":"ui/clip_number.png","name":"item6","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":126,"skin":"ui/clip_number.png","name":"item7","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":144,"skin":"ui/clip_number.png","name":"item8","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":162,"skin":"ui/clip_number.png","name":"item9","clipX":10,"autoPlay":false}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameUI.uiView);

        }

    }
}
