
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/eui/eui.js",
	"libs/modules/res/res.js",
	"libs/modules/tween/tween.js",
	"bin-debug/core/BevNode.js",
	"bin-debug/core/BevNodePrioritySelector.js",
	"bin-debug/core/BevNodePrecondition.js",
	"bin-debug/core/BevNodeTerminal.js",
	"bin-debug/core/BevNodeFactory.js",
	"bin-debug/core/BevNodePreconditionAnd.js",
	"bin-debug/core/BevNodePreconditionFalse.js",
	"bin-debug/core/BevNodePreconditionNot.js",
	"bin-debug/core/BevNodePreconditionOr.js",
	"bin-debug/core/BevNodePreconditionTrue.js",
	"bin-debug/AssetAdapter.js",
	"bin-debug/core/BevNodeSequence.js",
	"bin-debug/core/BevNodeNonePrioritySelector.js",
	"bin-debug/core/BevNodeLoop.js",
	"bin-debug/display/BevNodeOutputParam.js",
	"bin-debug/display/DrawObject.js",
	"bin-debug/display/HasFacedTarget.js",
	"bin-debug/display/HasReachedTarget.js",
	"bin-debug/display/NodeBreathe.js",
	"bin-debug/display/NodeFaceTo.js",
	"bin-debug/display/NodeIdle.js",
	"bin-debug/display/NodeMoveTo.js",
	"bin-debug/core/BevNodeParallel.js",
	"bin-debug/ThemeAdapter.js",
	"bin-debug/Main.js",
	"bin-debug/LoadingUI.js",
	"bin-debug/display/BevNodeInputParam.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    egret_native.requireFiles();
    egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "showAll",
		contentWidth: 640,
		contentHeight: 1136,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel(egret.TextField.default_fontFamily, 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};