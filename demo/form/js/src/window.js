/**
 * Created by My on 2016/4/1.
 */
// window.js
define(['jquery','jqueryUI','widget',],function($,$UI,widget){
    function window(){
        this.cfg={
            width:400,
            height:250,
            title:"标题",
            content:"",
            hasCloseBtn:true,
            hasMask:true,
            isDraggable:true,
            dragHandle:null,
            skinClassName:null,
            text4Aleratbtn:"确定",
            handler4AlertBtn:null,
            handler4CloseBtn:null,

            //confirm
            text4ConfirmBtn:"确定",
            text4CancelBtn:"取消",
            handler4ConfirmBtn:null,
            handlerCancelBtn:null

        }
    }

    window.prototype= $.extend({},new widget.Widget(),{
        renderUI:function(){

            var footerContent="";
            switch(this.cfg.winType){
                case "alert":
                    footerContent='<input type="button" value="'+
                            this.cfg.text4Aleratbtn+'"+class="window_alertBtn">';
                    break;
                case "confirm":
                    footerContent='<input type="button" value="'+
                            this.cfg.text4ConfirmBtn+'"class="window_confirmBtn"><input type="button" value="'+this.cfg.text4CancelBtn+
                            '"class="window_cancerBtn">';
                        break;
            }

            this.boundingBox=$(
                '<div class="window_boundingBox">'+
                    '<div class="window_header">'+this.cfg.title+'</div>'+
                    '<div class="window_body">'+this.cfg.content+'</div>'+
                    '<div class="window_footer">'+footerContent+'"></div>'+
                '</div>'
            );

            if(this.cfg.hasMask){
                this._mask=$('<div class="window_mask"></div>');
                this._mask.appendTo("body");
            }

            if(this.cfg.hasCloseBtn){
                this.boundingBox.append('<span class="window_closeBtn">X</span>');
            }
            this.boundingBox.appendTo("body");
        },

        bindUI:function(){
            var that=this;
            this.boundingBox.delegate(".window_alertBtn","click",function(){
                //that.fire("alert");
                that.destroy();
            }).delegate(".window_closeBtn","click",function(){
                //that.fire("close");
                that.destroy();
            }).delegate(".window_comfirmBtn","click",function(){
                //that.fire("confirm");
                that.destroy();
            }).delegate(".window_cancerBtn","click",function(){
                //that.fire("cancel");
                that.destroy();
            });

            if(this.cfg.handler4AlertBtn){
                this.on("alert",this.cfg.handler4AlertBtn);
            }
            if(this.cfg.handler4CloseBtn){
                this.on("close",this.cfg.handler4CloseBtn);
            }
            if(this.cfg.handler4ConfirmBtn){
                this.on("alert",this.cfg.handler4ConfirmBtn);
            }
            if(this.cfg.handlerCancelBtn){
                this.on("close",this.cfg.handlerCancelBtn);
            }
        },

        syncUI:function() {
            this.boundingBox.css({
                width: this.cfg.width + "px",
                height: this.cfg.height + "px",
                left: (this.cfg.left || (window.innerWidth - this.cfg.width) / 2) + "px",
                top:  (this.cfg.top  || (window.innerHeight - this.cfg.height) / 2) + "px"
            });

            if (this.cfg.skinClassName) {
                this.boundingBox.addClass(this.cfg.skinClassName);
            }

            if (this.cfg.isDraggable) {
                if (this.cfg.dragHandle) {
                    this.boundingBox.draggable({handle: this.cfg.dragHandle});
                }
                else {
                    this.boundingBox.draggable();
                }
            }
        },

        destructor:function(){
            this._mask&&this._mask.remove();
        },

        alert:function(cfg){
            $.extend(this.cfg,cfg,{winType:"alert"});
            this.render();
            return this;
        },
        confirm:function(cfg){
            $.extend(this.cfg,cfg,{winType:"confirm"});
            this.render();
            return this;
        }

    });

    return{
        window:window
    }
});