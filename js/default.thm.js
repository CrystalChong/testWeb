window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/skins/AchieveItem.exml'] = window.AchieveItem = (function (_super) {
	__extends(AchieveItem, _super);
	function AchieveItem() {
		_super.call(this);
		this.skinParts = ["head","icon","num","get","noget","achievename","des"];
		
		this.currentState = "noget";
		this.height = 139;
		this.width = 572;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.achievename_i(),this.des_i()];
		this.get_i();
		
		this.noget_i();
		
		this._Image7_i();
		
		this.states = [
			new eui.State ("get",
				[
					new eui.AddItems("get","",2,"achievename")
				])
			,
			new eui.State ("noget",
				[
					new eui.AddItems("noget","",2,"achievename"),
					new eui.SetProperty("num","textAlign","left")
				])
			,
			new eui.State ("isget",
				[
					new eui.AddItems("_Image7","",1,"")
				])
		];
	}
	var _proto = AchieveItem.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 139;
		t.scale9Grid = new egret.Rectangle(63,14,378,88);
		t.source = "windowUI_json.BY_YQOH_08";
		t.width = 572;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 21;
		t.elementsContent = [this._Image2_i(),this.head_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "windowUI_json.BY_llcj_06";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.head_i = function () {
		var t = new eui.Image();
		this.head = t;
		t.horizontalCenter = 0;
		t.source = "windowUI_json.BY_llcj_01";
		t.verticalCenter = 0;
		return t;
	};
	_proto.get_i = function () {
		var t = new eui.Group();
		this.get = t;
		t.anchorOffsetX = 67.5;
		t.anchorOffsetY = 39;
		t.horizontalCenter = 196.5;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Group2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "windowUI_json.BY_YQOH_10";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "windowUI_json.BY_YQOH_03";
		t.verticalCenter = 17;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 6;
		t.elementsContent = [this.icon_i(),this.num_i()];
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "mainUI_json.BY_JSL_07";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.num_i = function () {
		var t = new eui.Label();
		this.num = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 27;
		t.text = "0";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.x = 33.33;
		t.y = 2.33;
		return t;
	};
	_proto.noget_i = function () {
		var t = new eui.Group();
		this.noget = t;
		t.verticalCenter = 0;
		t.x = 414.66;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 78;
		t.source = "windowUI_json.BY_llcj_08";
		t.width = 135;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "windowUI_json.nofinish";
		t.verticalCenter = 0;
		return t;
	};
	_proto.achievename_i = function () {
		var t = new eui.Label();
		this.achievename = t;
		t.fontFamily = "SimHei";
		t.size = 28;
		t.stroke = 2;
		t.text = "学海无涯";
		t.textColor = 0xffffff;
		t.x = 129.92;
		t.y = 36.55;
		return t;
	};
	_proto.des_i = function () {
		var t = new eui.Label();
		this.des = t;
		t.fontFamily = "SimHei";
		t.size = 22;
		t.text = "通过搜索进入游戏";
		t.textColor = 0x000000;
		t.x = 129.92;
		t.y = 85.53;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		this._Image7 = t;
		t.source = "windowUI_json.BY_YQOH_07";
		t.verticalCenter = 0;
		t.x = 422;
		return t;
	};
	return AchieveItem;
})(eui.Skin);generateEUI.paths['resource/skins/AchieveSkin.exml'] = window.AchieveSkin = (function (_super) {
	__extends(AchieveSkin, _super);
	function AchieveSkin() {
		_super.call(this);
		this.skinParts = ["achieveList","close_btn"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = AchieveSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.verticalCenter = -55.5;
		t.elementsContent = [this._Image1_i(),this._Scroller1_i(),this._Image2_i(),this._Image3_i(),this.close_btn_i(),this._Image4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 835;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(67,68,2,2);
		t.source = "mainUI_json.By_yxz_05";
		t.width = 606;
		t.y = 112;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 717.58;
		t.horizontalCenter = 0.5;
		t.width = 572;
		t.y = 194.33;
		t.viewport = this.achieveList_i();
		return t;
	};
	_proto.achieveList_i = function () {
		var t = new eui.DataGroup();
		this.achieveList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 771.64;
		t.itemRendererSkinName = AchieveItem;
		t.width = 572;
		t.y = 1.52;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.verticalGap = 10;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "mainUI_json.title";
		t.x = 132;
		t.y = 56.48;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "mainUI_json.BY_JSL_03";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new eui.Image();
		this.close_btn = t;
		t.source = "mainUI_json.By_bbsz_04";
		t.x = 583.39;
		t.y = 92.48;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "windowUI_json.BY_llcj_10";
		t.y = 69;
		return t;
	};
	return AchieveSkin;
})(eui.Skin);generateEUI.paths['resource/skins/AnnouncementSkin.exml'] = window.AnnouncementSkin = (function (_super) {
	__extends(AnnouncementSkin, _super);
	function AnnouncementSkin() {
		_super.call(this);
		this.skinParts = ["context","close_btn","order"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Scroller1_i(),this.close_btn_i(),this.order_i()];
	}
	var _proto = AnnouncementSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 783;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(73,31,15,54);
		t.source = "mainUI_json.By_yxz_05";
		t.verticalCenter = -31.5;
		t.width = 552;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "windowUI_json.BYYDA_012";
		t.verticalCenter = -422.5;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 480;
		t.horizontalCenter = 0;
		t.verticalCenter = -85;
		t.width = 470;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.context_i()];
		return t;
	};
	_proto.context_i = function () {
		var t = new eui.Label();
		this.context = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.lineSpacing = 8;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 29;
		t.text = "可领取免费体力邀请好友，可领取免费体力邀请好友，可领取免费体力邀请好友，可领取免费体力邀请好友，可领取免费体力邀请好友，可领取免费体力邀请好友，可领取免费体力邀请好友，可领取免费体力邀请好友，可领取免费体力邀请好友，可领取免费体力邀请好友，可领取免费体力邀请好友，可领取免费体力邀请好友，可领取免费体力邀请好友，可领取免费体力邀请好友，可领取免费体力邀请好友，可领取免费体力邀请好友，可领取免费体力邀请好友，可领取免费体力邀请好友，可领取免费体力邀请好友，可领取免费体力邀请好友，可领取免费体力邀请好友，可领取免费体力邀请好友，";
		t.textColor = 0x000000;
		t.width = 470;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new eui.Image();
		this.close_btn = t;
		t.horizontalCenter = 268;
		t.source = "mainUI_json.By_bbsz_04";
		t.verticalCenter = -408.5;
		return t;
	};
	_proto.order_i = function () {
		var t = new eui.Image();
		this.order = t;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(53,9,28,60);
		t.source = "windowUI_json.BYYDA_013";
		t.verticalCenter = 234;
		return t;
	};
	return AnnouncementSkin;
})(eui.Skin);generateEUI.paths['resource/skins/BornViewSkin.exml'] = window.BornViewSkin = (function (_super) {
	__extends(BornViewSkin, _super);
	function BornViewSkin() {
		_super.call(this);
		this.skinParts = ["lightAni","sceneAni","base0","image0","image2","image1","bg","image","des","preBox","rolebox","door"];
		
		this.height = 1280;
		this.width = 720;
		this.lightAni_i();
		this.sceneAni_i();
		this.elementsContent = [this.base0_i(),this._Group1_i()];
		
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [270],[],this._Object1,"rotation");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"x");
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [234.32],[],this._Object3,"x");
		eui.Binding.$bindProperties(this, [721.54],[],this._Object3,"y");
		eui.Binding.$bindProperties(this, ["image2"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"x");
	}
	var _proto = BornViewSkin.prototype;

	_proto.lightAni_i = function () {
		var t = new egret.tween.TweenGroup();
		this.lightAni = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._To1_i()];
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 1500;
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto.sceneAni_i = function () {
		var t = new egret.tween.TweenGroup();
		this.sceneAni = t;
		t.items = [this._TweenItem2_i(),this._TweenItem3_i(),this._TweenItem4_i()];
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._To2_i()];
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 400;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Wait1_i(),this._Set1_i(),this._To3_i()];
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 400;
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 400;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Wait2_i(),this._Set2_i(),this._To4_i()];
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 800;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 400;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto.base0_i = function () {
		var t = new eui.Rect();
		this.base0 = t;
		t.alpha = 1;
		t.fillAlpha = 1;
		t.height = 1700;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 720;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 116;
		t.width = 1413;
		t.x = 0;
		t.elementsContent = [this.bg_i(),this.preBox_i(),this.rolebox_i(),this.door_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Group();
		this.bg = t;
		t.x = 0;
		t.y = -192;
		t.elementsContent = [this.image0_i(),this.image2_i(),this.image1_i()];
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.anchorOffsetY = 0;
		t.height = 1078;
		t.scale9Grid = new egret.Rectangle(176,88,1061,3);
		t.source = "scene0_json.1";
		t.x = 720;
		t.y = 0;
		return t;
	};
	_proto.image2_i = function () {
		var t = new eui.Image();
		this.image2 = t;
		t.anchorOffsetY = 0;
		t.height = 626;
		t.scale9Grid = new egret.Rectangle(176,345,1061,15);
		t.source = "scene0_json.4";
		t.x = 720;
		t.y = 1078;
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.source = "scene0_json.2";
		t.x = -400;
		t.y = 721.54;
		return t;
	};
	_proto.preBox_i = function () {
		var t = new eui.Group();
		this.preBox = t;
		t.x = 0;
		t.y = -210;
		t.elementsContent = [this._Rect1_i(),this.image_i(),this.des_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.height = 1700;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "mainUI_json.BY_JSL_01";
		t.verticalCenter = -155.5;
		t.visible = false;
		return t;
	};
	_proto.des_i = function () {
		var t = new eui.Label();
		this.des = t;
		t.fontFamily = "SimHei";
		t.lineSpacing = 15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 60;
		t.stroke = 2;
		t.text = "在公元2020年的某一天，阳光晴朗万里无云。突然一阵光芒，你出生了！！";
		t.width = 600;
		t.x = 60;
		t.y = 540;
		return t;
	};
	_proto.rolebox_i = function () {
		var t = new eui.Group();
		this.rolebox = t;
		t.height = 50;
		t.width = 50;
		t.x = 362.68;
		t.y = 530.21;
		return t;
	};
	_proto.door_i = function () {
		var t = new eui.Image();
		this.door = t;
		t.source = "scene0_json.3";
		t.visible = false;
		t.x = 286.32;
		t.y = 250;
		return t;
	};
	return BornViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/EnergyShopSkin.exml'] = window.EnergyShopSkin = (function (_super) {
	__extends(EnergyShopSkin, _super);
	function EnergyShopSkin() {
		_super.call(this);
		this.skinParts = ["close_btn","sign","video_btn","get1","get3","get5"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group5_i()];
	}
	var _proto = EnergyShopSkin.prototype;

	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 1280;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 720;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.close_btn_i(),this._Image3_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 610;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(67,68,2,2);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mainUI_json.By_yxz_05";
		t.width = 552;
		t.x = 84;
		t.y = 268.15;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "windowUI_json.BY_qd_02";
		t.x = 205.00000000000003;
		t.y = 200;
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new eui.Image();
		this.close_btn = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mainUI_json.By_bbsz_04";
		t.x = 589;
		t.y = 246.00000000000003;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "windowUI_json.BY_TLSD_01";
		t.y = 242.06;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 110;
		t.y = 351.3;
		t.elementsContent = [this._Rect1_i(),this._Image4_i(),this.video_btn_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseWidth = 2;
		t.fillColor = 0xDDD7D7;
		t.height = 2;
		t.width = 500;
		t.x = 0;
		t.y = 91.35;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "windowUI_json.BY_TLSD_05";
		t.x = 24;
		t.y = 6.66;
		return t;
	};
	_proto.video_btn_i = function () {
		var t = new eui.Group();
		this.video_btn = t;
		t.x = 303.8;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this.sign_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 65;
		t.scale9Grid = new egret.Rectangle(51,28,18,20);
		t.source = "windowUI_json.BY_YQOH_1";
		t.width = 160;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.sign_i = function () {
		var t = new eui.Image();
		this.sign = t;
		t.horizontalCenter = 0;
		t.source = "windowUI_json.video";
		t.y = 15.52;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 32;
		t.text = "x3";
		t.textColor = 0x000000;
		t.x = 115;
		t.y = 17.66;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 110;
		t.y = 482.6066666666666;
		t.elementsContent = [this._Rect2_i(),this._Image6_i(),this.get1_i(),this._Label3_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseWidth = 2;
		t.fillColor = 0xDDD7D7;
		t.height = 2;
		t.width = 500;
		t.x = 0;
		t.y = 91.35;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mainUI_json.tili";
		t.x = 39.97;
		t.y = 15.97;
		return t;
	};
	_proto.get1_i = function () {
		var t = new eui.Group();
		this.get1 = t;
		t.x = 303.8;
		t.y = 0;
		t.elementsContent = [this._Image7_i(),this._Label2_i(),this._Image8_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 65;
		t.scale9Grid = new egret.Rectangle(51,28,18,20);
		t.source = "windowUI_json.BY_YQOH_10";
		t.width = 160;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 28;
		t.stroke = 2;
		t.text = "1500";
		t.textColor = 0xffffff;
		t.x = 61.96;
		t.y = 19.18;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -42.5;
		t.scaleX = 0.65;
		t.scaleY = 0.65;
		t.source = "windowUI_json.top_tl";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 32;
		t.text = "x1";
		t.textColor = 0x000000;
		t.x = 115;
		t.y = 17.66;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 110;
		t.y = 613.6033333333332;
		t.elementsContent = [this._Rect3_i(),this._Image9_i(),this.get3_i(),this._Label5_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseWidth = 2;
		t.fillColor = 0xDDD7D7;
		t.height = 2;
		t.width = 500;
		t.x = 0;
		t.y = 91.35;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "windowUI_json.BY_TLSD_05";
		t.x = 24;
		t.y = 6.66;
		return t;
	};
	_proto.get3_i = function () {
		var t = new eui.Group();
		this.get3 = t;
		t.x = 303.8;
		t.y = 0;
		t.elementsContent = [this._Image10_i(),this._Label4_i(),this._Image11_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 65;
		t.scale9Grid = new egret.Rectangle(51,28,18,20);
		t.source = "windowUI_json.BY_YQOH_10";
		t.width = 160;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 28;
		t.stroke = 2;
		t.text = "4000";
		t.textColor = 0xFFFFFF;
		t.x = 61.96;
		t.y = 19.18;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -42.5;
		t.scaleX = 0.65;
		t.scaleY = 0.65;
		t.source = "windowUI_json.top_tl";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 32;
		t.text = "x3";
		t.textColor = 0x000000;
		t.x = 115;
		t.y = 17.66;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 110;
		t.y = 745.27;
		t.elementsContent = [this._Rect4_i(),this._Image12_i(),this.get5_i(),this._Label7_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseWidth = 2;
		t.fillColor = 0xDDD7D7;
		t.height = 2;
		t.width = 500;
		t.x = 0;
		t.y = 91.35;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "windowUI_json.BY_TLSD_06";
		t.x = 16.02;
		t.y = -2.65;
		return t;
	};
	_proto.get5_i = function () {
		var t = new eui.Group();
		this.get5 = t;
		t.x = 303.8;
		t.y = 0;
		t.elementsContent = [this._Image13_i(),this._Label6_i(),this._Image14_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 65;
		t.scale9Grid = new egret.Rectangle(51,28,18,20);
		t.source = "windowUI_json.BY_YQOH_10";
		t.width = 160;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 28;
		t.stroke = 2;
		t.text = "6000";
		t.textColor = 0xFFFFFF;
		t.x = 61.96;
		t.y = 19.18;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -42.5;
		t.scaleX = 0.65;
		t.scaleY = 0.65;
		t.source = "windowUI_json.top_tl";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 32;
		t.text = "x5";
		t.textColor = 0x000000;
		t.x = 115;
		t.y = 17.66;
		return t;
	};
	return EnergyShopSkin;
})(eui.Skin);generateEUI.paths['resource/skins/FailViewSkin.exml'] = window.FailViewSkin = (function (_super) {
	__extends(FailViewSkin, _super);
	function FailViewSkin() {
		_super.call(this);
		this.skinParts = ["rolebox","coin","restart_btn","back_btn","energytext","addenergy","labelCountDown","addcoin","cointext","title"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group3_i()];
	}
	var _proto = FailViewSkin.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 1;
		t.elementsContent = [this._Rect1_i(),this.rolebox_i(),this._Image1_i(),this.coin_i(),this.restart_btn_i(),this.back_btn_i(),this._Group1_i(),this._Group2_i(),this._Label1_i(),this.title_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseWidth = 90;
		t.fillAlpha = 0.5;
		t.height = 895;
		t.strokeAlpha = 0.3;
		t.width = 586;
		t.x = 0;
		t.y = 60.4;
		return t;
	};
	_proto.rolebox_i = function () {
		var t = new eui.Group();
		this.rolebox = t;
		t.height = 50;
		t.touchEnabled = false;
		t.width = 50;
		t.x = 293;
		t.y = 569.4;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "mainUI_json.BY_JSL_07";
		t.x = 190.71;
		t.y = 137;
		return t;
	};
	_proto.coin_i = function () {
		var t = new eui.Label();
		this.coin = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.stroke = 2;
		t.text = "+0";
		t.textColor = 0xfdfd01;
		t.width = 222;
		t.x = 270.71;
		t.y = 146;
		return t;
	};
	_proto.restart_btn_i = function () {
		var t = new eui.Group();
		this.restart_btn = t;
		t.horizontalCenter = 0.5;
		t.verticalCenter = 199;
		t.width = 319;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(25,12,11,2);
		t.source = "mainUI_json.BY_JSL_04";
		t.width = 319;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "mainUI_json.BY_JJSG_03";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "mainUI_json.BY_JJSG_04";
		t.x = 36.33;
		t.y = 35.66;
		return t;
	};
	_proto.back_btn_i = function () {
		var t = new eui.Group();
		this.back_btn = t;
		t.height = 108;
		t.width = 319;
		t.x = 134;
		t.y = 743;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 108;
		t.scale9Grid = new egret.Rectangle(25,12,11,2);
		t.source = "mainUI_json.BY_JSL_05";
		t.width = 319;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "mainUI_json.BY_JJSG_05";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 228;
		t.y = -105;
		t.elementsContent = [this._Image7_i(),this.energytext_i(),this.addenergy_i(),this._Image8_i(),this.labelCountDown_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "mainUI_json.Byy_syy_02";
		t.x = 18;
		t.y = 4;
		return t;
	};
	_proto.energytext_i = function () {
		var t = new eui.Label();
		this.energytext = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 28;
		t.stroke = 2;
		t.text = "200";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 114;
		t.x = 51;
		t.y = 17.5;
		return t;
	};
	_proto.addenergy_i = function () {
		var t = new eui.Image();
		this.addenergy = t;
		t.source = "mainUI_json.Byy_syy_03";
		t.x = 170;
		t.y = 4;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "mainUI_json.tili";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labelCountDown_i = function () {
		var t = new eui.Label();
		this.labelCountDown = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 24;
		t.stroke = 2;
		t.text = "00:59";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 114;
		t.x = 52.57;
		t.y = 55.04;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -5.380000000000003;
		t.y = -105;
		t.elementsContent = [this._Image9_i(),this.addcoin_i(),this._Image10_i(),this.cointext_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "mainUI_json.Byy_syy_02";
		t.x = 18;
		t.y = 4;
		return t;
	};
	_proto.addcoin_i = function () {
		var t = new eui.Image();
		this.addcoin = t;
		t.source = "mainUI_json.Byy_syy_03";
		t.visible = false;
		t.x = 168;
		t.y = 4;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "mainUI_json.BY_JSL_07";
		t.x = -6;
		t.y = 0;
		return t;
	};
	_proto.cointext_i = function () {
		var t = new eui.Label();
		this.cointext = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 28;
		t.stroke = 2;
		t.text = "200";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 114;
		t.x = 51;
		t.y = 17.5;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "点击魔法棒可快速查找答案！";
		t.y = 891;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Group();
		this.title = t;
		t.height = 0;
		t.horizontalCenter = 10;
		t.verticalCenter = -337.5;
		t.width = 0;
		return t;
	};
	return FailViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/FriendItem.exml'] = window.FriendItem = (function (_super) {
	__extends(FriendItem, _super);
	function FriendItem() {
		_super.call(this);
		this.skinParts = ["head","username","num","icon","get","invite"];
		
		this.currentState = "invite";
		this.height = 116;
		this.width = 504;
		this.elementsContent = [this._Image1_i(),this.head_i(),this._Label1_i(),this.num_i(),this.icon_i()];
		this.username_i();
		
		this._Image2_i();
		
		this._Image3_i();
		
		this._Image4_i();
		
		this.get_i();
		
		this.invite_i();
		
		this.states = [
			new eui.State ("invite",
				[
					new eui.AddItems("invite","",1,"")
				])
			,
			new eui.State ("get",
				[
					new eui.AddItems("username","",2,"num"),
					new eui.AddItems("_Image3","get",0,""),
					new eui.AddItems("_Image4","get",1,""),
					new eui.AddItems("get","",1,""),
					new eui.SetProperty("_Label1","verticalCenter",-17.5),
					new eui.SetProperty("num","verticalCenter",-17.5),
					new eui.SetProperty("icon","verticalCenter",-17.5)
				])
			,
			new eui.State ("isget",
				[
					new eui.AddItems("username","",2,"num"),
					new eui.AddItems("_Image2","",1,""),
					new eui.SetProperty("_Label1","verticalCenter",-17.5),
					new eui.SetProperty("num","verticalCenter",-17.5),
					new eui.SetProperty("icon","verticalCenter",-17.5)
				])
		];
	}
	var _proto = FriendItem.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "windowUI_json.BY_YQOH_08";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.head_i = function () {
		var t = new eui.Image();
		this.head = t;
		t.source = "windowUI_json.BY_YQOH_06";
		t.verticalCenter = 0;
		t.x = 24;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "SimHei";
		t.size = 25;
		t.text = "奖励：";
		t.textColor = 0xd54544;
		t.verticalCenter = 0.5;
		t.x = 136.5;
		return t;
	};
	_proto.username_i = function () {
		var t = new eui.Label();
		this.username = t;
		t.fontFamily = "SimHei";
		t.size = 25;
		t.text = "吃芒果的小仓鼠";
		t.textColor = 0x9b9999;
		t.verticalCenter = 24.5;
		t.x = 136.58;
		return t;
	};
	_proto.num_i = function () {
		var t = new eui.Label();
		this.num = t;
		t.fontFamily = "SimHei";
		t.size = 25;
		t.text = "x5";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.x = 257.68;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "mainUI_json.tili";
		t.verticalCenter = 0.5;
		t.x = 211.58;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.source = "windowUI_json.BY_YQOH_07";
		t.verticalCenter = 0;
		t.x = 353;
		return t;
	};
	_proto.get_i = function () {
		var t = new eui.Group();
		this.get = t;
		t.x = 345;
		t.y = 19;
		t.elementsContent = [];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.source = "windowUI_json.BY_YQOH_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.horizontalCenter = 0;
		t.source = "windowUI_json.BY_YQOH_03";
		t.verticalCenter = 0;
		return t;
	};
	_proto.invite_i = function () {
		var t = new eui.Group();
		this.invite = t;
		t.x = 345;
		t.y = 19;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "windowUI_json.BY_YQOH_10";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "windowUI_json.BY_YQOH_04";
		t.verticalCenter = 0;
		t.x = 21.5;
		return t;
	};
	return FriendItem;
})(eui.Skin);generateEUI.paths['resource/skins/FriendSkin.exml'] = window.FriendSkin = (function (_super) {
	__extends(FriendSkin, _super);
	function FriendSkin() {
		_super.call(this);
		this.skinParts = ["close_btn","friendList"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = FriendSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 9.5;
		t.verticalCenter = -60.5;
		t.width = 720;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.close_btn_i(),this._Label1_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 766;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(67,68,2,2);
		t.source = "mainUI_json.By_yxz_05";
		t.width = 552;
		t.y = 68.15;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "windowUI_json.BY_qd_02";
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "windowUI_json.BY_YQOH_01";
		t.y = 43.15;
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new eui.Image();
		this.close_btn = t;
		t.source = "mainUI_json.By_bbsz_04";
		t.x = 589;
		t.y = 46;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "邀请好友，可领取免费体力";
		t.textColor = 0x000000;
		t.y = 150;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 601.16;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 504;
		t.y = 196.57;
		t.viewport = this.friendList_i();
		return t;
	};
	_proto.friendList_i = function () {
		var t = new eui.DataGroup();
		this.friendList = t;
		t.itemRendererSkinName = FriendItem;
		t.width = 500;
		t.x = -4;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		return t;
	};
	return FriendSkin;
})(eui.Skin);generateEUI.paths['resource/skins/GameHomeSkin.exml'] = window.GameHomeSkin = (function (_super) {
	__extends(GameHomeSkin, _super);
	function GameHomeSkin() {
		_super.call(this);
		this.skinParts = ["start","pvp","moregame","rank","helprank","logo","setup","energytext","addenergy","energyImg","labelCountDown","addcoin","coinImg","cointext","rolebox","redPoint","achieve","announcement","changeskin"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group3_i()];
	}
	var _proto = GameHomeSkin.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Rect1_i(),this.start_i(),this.pvp_i(),this.moregame_i(),this.rank_i(),this.helprank_i(),this.logo_i(),this._Image4_i(),this.setup_i(),this._Group1_i(),this._Group2_i(),this.rolebox_i(),this.achieve_i(),this.announcement_i(),this.changeskin_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1246;
		t.scale9Grid = new egret.Rectangle(176,85,1061,5);
		t.source = "scene0_json.1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 694;
		t.scale9Grid = new egret.Rectangle(176,358,1061,17);
		t.source = "scene0_json.4";
		t.x = 0;
		t.y = 1246;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.35;
		t.height = 2000;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.start_i = function () {
		var t = new eui.Group();
		this.start = t;
		t.anchorOffsetX = 171;
		t.anchorOffsetY = 60.5;
		t.height = 121;
		t.width = 342;
		t.x = 360;
		t.y = 1320.5;
		t.elementsContent = [this._Image3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "mainUI_json.kaishi";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pvp_i = function () {
		var t = new eui.Group();
		this.pvp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75.5;
		t.rotation = 359.72;
		t.visible = false;
		t.width = 98.61;
		t.x = 617.82;
		t.y = 749.33;
		return t;
	};
	_proto.moregame_i = function () {
		var t = new eui.Image();
		this.moregame = t;
		t.source = "mainUI_json.Byy_syy_09";
		t.visible = false;
		t.x = 600.5;
		t.y = 384.62;
		return t;
	};
	_proto.rank_i = function () {
		var t = new eui.Image();
		this.rank = t;
		t.source = "mainUI_json.Byy_syy_08";
		t.visible = false;
		t.x = 236.60000000000002;
		t.y = 1416;
		return t;
	};
	_proto.helprank_i = function () {
		var t = new eui.Image();
		this.helprank = t;
		t.source = "mainUI_json.by_zlp_03";
		t.visible = false;
		t.x = 384;
		t.y = 1416;
		return t;
	};
	_proto.logo_i = function () {
		var t = new eui.Image();
		this.logo = t;
		t.source = "mainUI_json.Byy_syy_06";
		t.x = 158.98;
		t.y = 483.27;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "mainUI_json.Byy_syy_05";
		t.x = 250;
		t.y = 1162;
		return t;
	};
	_proto.setup_i = function () {
		var t = new eui.Image();
		this.setup = t;
		t.source = "mainUI_json.Byy_syy_01";
		t.x = 30;
		t.y = 518.27;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 253;
		t.y = 386;
		t.elementsContent = [this._Image5_i(),this.energytext_i(),this.addenergy_i(),this.energyImg_i(),this.labelCountDown_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "mainUI_json.Byy_syy_02";
		t.x = 18;
		t.y = 4;
		return t;
	};
	_proto.energytext_i = function () {
		var t = new eui.Label();
		this.energytext = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 28;
		t.stroke = 2;
		t.text = "200";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 114;
		t.x = 51;
		t.y = 17.5;
		return t;
	};
	_proto.addenergy_i = function () {
		var t = new eui.Image();
		this.addenergy = t;
		t.source = "mainUI_json.Byy_syy_03";
		t.x = 170;
		t.y = 4;
		return t;
	};
	_proto.energyImg_i = function () {
		var t = new eui.Image();
		this.energyImg = t;
		t.source = "mainUI_json.tili";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labelCountDown_i = function () {
		var t = new eui.Label();
		this.labelCountDown = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 24;
		t.stroke = 2;
		t.text = "00:59";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 114;
		t.x = 52.57;
		t.y = 55.04;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 19.62;
		t.y = 386;
		t.elementsContent = [this._Image6_i(),this.addcoin_i(),this.coinImg_i(),this.cointext_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "mainUI_json.Byy_syy_02";
		t.x = 18;
		t.y = 4;
		return t;
	};
	_proto.addcoin_i = function () {
		var t = new eui.Image();
		this.addcoin = t;
		t.source = "mainUI_json.Byy_syy_03";
		t.visible = false;
		t.x = 168;
		t.y = 4;
		return t;
	};
	_proto.coinImg_i = function () {
		var t = new eui.Image();
		this.coinImg = t;
		t.source = "mainUI_json.BY_JSL_07";
		t.x = -6;
		t.y = 0;
		return t;
	};
	_proto.cointext_i = function () {
		var t = new eui.Label();
		this.cointext = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 28;
		t.stroke = 2;
		t.text = "200";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.width = 114;
		t.x = 51;
		t.y = 17.5;
		return t;
	};
	_proto.rolebox_i = function () {
		var t = new eui.Group();
		this.rolebox = t;
		t.height = 50;
		t.width = 50;
		t.x = 359.98;
		t.y = 1178.98;
		return t;
	};
	_proto.achieve_i = function () {
		var t = new eui.Group();
		this.achieve = t;
		t.x = 597.5;
		t.y = 884.84;
		t.elementsContent = [this._Image7_i(),this.redPoint_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "mainUI_json.chengjiu";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.redPoint_i = function () {
		var t = new eui.Image();
		this.redPoint = t;
		t.source = "mainUI_json.by_sy_01";
		t.x = 67.5;
		t.y = 29.16;
		return t;
	};
	_proto.announcement_i = function () {
		var t = new eui.Image();
		this.announcement = t;
		t.source = "mainUI_json.BYYDA_011";
		t.visible = false;
		t.x = 31;
		t.y = 623;
		return t;
	};
	_proto.changeskin_i = function () {
		var t = new eui.Group();
		this.changeskin = t;
		t.x = 601.83;
		t.y = 752.36;
		t.elementsContent = [this._Image8_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "mainUI_json.noskin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return GameHomeSkin;
})(eui.Skin);generateEUI.paths['resource/skins/panel/SelectItem.exml'] = window.SelectItem = (function (_super) {
	__extends(SelectItem, _super);
	function SelectItem() {
		_super.call(this);
		this.skinParts = ["showAni","hideAni","icon","group"];
		
		this.currentState = "normal";
		this.height = 140;
		this.width = 140;
		this.showAni_i();
		this.hideAni_i();
		this.elementsContent = [this.group_i()];
		this._Image2_i();
		
		this._Image3_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("select",
				[
					new eui.SetProperty("_Image1","source","mainUI_json.By_yxz_04")
				])
			,
			new eui.State ("correct",
				[
					new eui.AddItems("_Image3","group",1,""),
					new eui.SetProperty("_Image1","source","mainUI_json.By_yxz_04")
				])
			,
			new eui.State ("error",
				[
					new eui.AddItems("_Image2","group",1,""),
					new eui.SetProperty("_Image1","source","mainUI_json.By_yxz_04")
				])
		];
		
		eui.Binding.$bindProperties(this, ["group"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleY");
		eui.Binding.$bindProperties(this, ["group"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"scaleY");
	}
	var _proto = SelectItem.prototype;

	_proto.showAni_i = function () {
		var t = new egret.tween.TweenGroup();
		this.showAni = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto.hideAni_i = function () {
		var t = new egret.tween.TweenGroup();
		this.hideAni = t;
		t.items = [this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._To2_i()];
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.icon_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(22,13,16,2);
		t.source = "mainUI_json.By_yxz_05";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.fillMode = "scale";
		t.horizontalCenter = 0;
		t.source = "ItemUI_json.item38";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.source = "mainUI_json.BY_ppzk_05";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.horizontalCenter = 0;
		t.source = "mainUI_json.BY_ppzk_04";
		t.y = 30.95;
		return t;
	};
	return SelectItem;
})(eui.Skin);generateEUI.paths['resource/skins/GameTopViewSkin.exml'] = window.GameTopViewSkin = (function (_super) {
	__extends(GameTopViewSkin, _super);
	function GameTopViewSkin() {
		_super.call(this);
		this.skinParts = ["select0","select1","select2","select3","step_0","step_1","step_2","now_lable","next_lable","megicnum","sign","megic","tips","xxbox","megictips"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.select0_i(),this.select1_i(),this.select2_i(),this.select3_i(),this._Group1_i(),this.tips_i(),this.xxbox_i(),this.megictips_i()];
	}
	var _proto = GameTopViewSkin.prototype;

	_proto.select0_i = function () {
		var t = new eui.Component();
		this.select0 = t;
		t.bottom = 222;
		t.skinName = "SelectItem";
		t.visible = false;
		t.x = 50;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Component();
		this.select1 = t;
		t.bottom = 222;
		t.skinName = "SelectItem";
		t.visible = false;
		t.x = 210;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Component();
		this.select2 = t;
		t.bottom = 222;
		t.skinName = "SelectItem";
		t.visible = false;
		t.x = 370;
		return t;
	};
	_proto.select3_i = function () {
		var t = new eui.Component();
		this.select3 = t;
		t.bottom = 222;
		t.horizontalCenter = 240;
		t.skinName = "SelectItem";
		t.visible = false;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 72;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.step_0_i(),this.step_1_i(),this.step_2_i(),this._Image4_i(),this._Image5_i(),this.now_lable_i(),this.next_lable_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "mainUI_json.By_yxz_02";
		t.x = 32;
		t.y = 10.63;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "mainUI_json.By_yxz_02";
		t.x = 125.96;
		t.y = 10.63;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "mainUI_json.By_yxz_02";
		t.x = 219.3;
		t.y = 9.96;
		return t;
	};
	_proto.step_0_i = function () {
		var t = new eui.Image();
		this.step_0 = t;
		t.source = "mainUI_json.green";
		t.visible = false;
		t.x = 35.33;
		t.y = 12.67;
		return t;
	};
	_proto.step_1_i = function () {
		var t = new eui.Image();
		this.step_1 = t;
		t.source = "mainUI_json.green";
		t.visible = false;
		t.x = 128.2;
		t.y = 12.67;
		return t;
	};
	_proto.step_2_i = function () {
		var t = new eui.Image();
		this.step_2 = t;
		t.source = "mainUI_json.green";
		t.visible = false;
		t.x = 221.27;
		t.y = 12.67;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "mainUI_json.By_yxz_06";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "mainUI_json.By_yxz_06";
		t.x = 287.56;
		t.y = 0;
		return t;
	};
	_proto.now_lable_i = function () {
		var t = new eui.Label();
		this.now_lable = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 28;
		t.text = "1";
		t.textAlign = "center";
		t.textColor = 0x323232;
		t.width = 52.5;
		t.wordWrap = false;
		t.x = -0.83;
		t.y = 10.63;
		return t;
	};
	_proto.next_lable_i = function () {
		var t = new eui.Label();
		this.next_lable = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 28;
		t.text = "2";
		t.textAlign = "center";
		t.textColor = 0x323232;
		t.width = 52.5;
		t.wordWrap = false;
		t.x = 286.98;
		t.y = 10.63;
		return t;
	};
	_proto.tips_i = function () {
		var t = new eui.Group();
		this.tips = t;
		t.width = 89;
		t.x = 29.73;
		t.y = 195.12;
		t.elementsContent = [this._Image6_i(),this.megicnum_i(),this.sign_i(),this.megic_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "mainUI_json.By_yxz_07";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.megicnum_i = function () {
		var t = new eui.Label();
		this.megicnum = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.stroke = 2;
		t.strokeColor = 0x79331d;
		t.text = "x0";
		t.textAlign = "center";
		t.textColor = 0xfdfd50;
		t.width = 52.5;
		t.wordWrap = false;
		t.x = 44.5;
		t.y = 52;
		return t;
	};
	_proto.sign_i = function () {
		var t = new eui.Image();
		this.sign = t;
		t.source = "mainUI_json.video1";
		t.x = 55.25;
		t.y = 54;
		return t;
	};
	_proto.megic_i = function () {
		var t = new eui.Image();
		this.megic = t;
		t.anchorOffsetX = 39;
		t.anchorOffsetY = 59;
		t.source = "mainUI_json.megic";
		t.visible = false;
		t.x = 39;
		t.y = 59;
		return t;
	};
	_proto.xxbox_i = function () {
		var t = new eui.Group();
		this.xxbox = t;
		t.height = 0;
		t.width = 0;
		t.x = 360;
		t.y = 260;
		return t;
	};
	_proto.megictips_i = function () {
		var t = new eui.Image();
		this.megictips = t;
		t.source = "mainUI_json.tips2";
		t.visible = false;
		t.x = 130;
		t.y = 213;
		return t;
	};
	return GameTopViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/GetAchieveSkin.exml'] = window.GetAchieveSkin = (function (_super) {
	__extends(GetAchieveSkin, _super);
	function GetAchieveSkin() {
		_super.call(this);
		this.skinParts = ["showAni","close_btn","icon1","num1","video_btn","icon0","num0","get_btn","head","des","group"];
		
		this.height = 1280;
		this.width = 720;
		this.showAni_i();
		this.elementsContent = [this.group_i()];
		
		eui.Binding.$bindProperties(this, ["group"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleY");
	}
	var _proto = GetAchieveSkin.prototype;

	_proto.showAni_i = function () {
		var t = new egret.tween.TweenGroup();
		this.showAni = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 400;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.horizontalCenter = 0;
		t.verticalCenter = -152;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.close_btn_i(),this._Image3_i(),this.video_btn_i(),this.get_btn_i(),this._Image9_i(),this.head_i(),this.des_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "mainUI_json.BY_JSL_01";
		t.x = 46.87;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 262;
		t.scale9Grid = new egret.Rectangle(52,53,37,45);
		t.source = "mainUI_json.By_yxz_05";
		t.width = 760;
		t.x = 0;
		t.y = 218.54;
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new eui.Image();
		this.close_btn = t;
		t.source = "mainUI_json.BY_ZDLL_05";
		t.x = 687.57;
		t.y = 238.37;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "scene0_json.BY_CJS_04";
		t.y = 180.56;
		return t;
	};
	_proto.video_btn_i = function () {
		var t = new eui.Group();
		this.video_btn = t;
		t.x = 429;
		t.y = 409.7;
		t.elementsContent = [this._Image4_i(),this.icon1_i(),this.num1_i(),this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "scene0_json.BY_CJS_05";
		t.x = 0;
		t.y = 10.42;
		return t;
	};
	_proto.icon1_i = function () {
		var t = new eui.Image();
		this.icon1 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "mainUI_json.tili";
		t.x = 51.2;
		t.y = 19.34;
		return t;
	};
	_proto.num1_i = function () {
		var t = new eui.Label();
		this.num1 = t;
		t.bold = true;
		t.border = false;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 31.5;
		t.size = 28;
		t.stroke = 2;
		t.text = "×5";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.width = 100;
		t.y = 22.67;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "mainUI_json.BY_JKGG_053";
		t.x = 176.67;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -2.5;
		t.source = "scene0_json.BY_CJS_09";
		t.y = 60;
		return t;
	};
	_proto.get_btn_i = function () {
		var t = new eui.Group();
		this.get_btn = t;
		t.x = 129;
		t.y = 420.12;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this.icon0_i(),this.num0_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "scene0_json.BY_CJS_06";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "scene0_json.BY_CJS_10";
		t.y = 49.53;
		return t;
	};
	_proto.icon0_i = function () {
		var t = new eui.Image();
		this.icon0 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "mainUI_json.tili";
		t.x = 50.5;
		t.y = 9.65;
		return t;
	};
	_proto.num0_i = function () {
		var t = new eui.Label();
		this.num0 = t;
		t.bold = true;
		t.border = false;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 37;
		t.size = 28;
		t.stroke = 2;
		t.text = "×5";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.width = 100;
		t.y = 12.16;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 97;
		t.horizontalCenter = 0.5;
		t.source = "windowUI_json.BY_llcj_06";
		t.width = 97;
		t.y = 268.23;
		return t;
	};
	_proto.head_i = function () {
		var t = new eui.Image();
		this.head = t;
		t.source = "windowUI_json.BY_llcj_01";
		t.x = 340;
		t.y = 272.27;
		return t;
	};
	_proto.des_i = function () {
		var t = new eui.Label();
		this.des = t;
		t.bold = true;
		t.border = false;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0.5;
		t.size = 28;
		t.text = "我的内心毫无波动";
		t.textColor = 0x353323;
		t.y = 376.4;
		return t;
	};
	return GetAchieveSkin;
})(eui.Skin);generateEUI.paths['resource/skins/GetChipSkin.exml'] = window.GetChipSkin = (function (_super) {
	__extends(GetChipSkin, _super);
	function GetChipSkin() {
		_super.call(this);
		this.skinParts = ["icon","close_btn","need","get","des","des0","num","xiangao","back","rolemask","back1","rolemask1","rolemask2","rolebox"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.icon_i(),this.close_btn_i(),this.get_i(),this.des_i(),this.des0_i(),this.num_i(),this.rolebox_i(),this._Image5_i()];
	}
	var _proto = GetChipSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 722;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(73,31,15,54);
		t.source = "mainUI_json.By_yxz_05";
		t.verticalCenter = -31.5;
		t.width = 516;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 1;
		t.source = "skinUI_json.BYYSP_SD_06";
		t.verticalCenter = -376.5;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.horizontalCenter = 107;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "skinUI_json.chip104";
		t.verticalCenter = 3;
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new eui.Label();
		this.close_btn = t;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "不了,谢谢";
		t.verticalCenter = 422;
		return t;
	};
	_proto.get_i = function () {
		var t = new eui.Group();
		this.get = t;
		t.horizontalCenter = -5;
		t.verticalCenter = 319.5;
		t.elementsContent = [this._Image3_i(),this.need_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 115;
		t.scale9Grid = new egret.Rectangle(125,39,117,26);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mainUI_json.BY_JSL_04";
		t.width = 310;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.need_i = function () {
		var t = new eui.Image();
		this.need = t;
		t.horizontalCenter = 30;
		t.source = "skinUI_json.morechip";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "mainUI_json.BY_JKGG_05";
		t.x = 22;
		t.y = 39;
		return t;
	};
	_proto.des_i = function () {
		var t = new eui.Label();
		this.des = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "幸运女神送给你了大魔导师碎片×2";
		t.textAlign = "center";
		t.textColor = 0x693a3b;
		t.verticalCenter = -241;
		t.width = 510;
		return t;
	};
	_proto.des0_i = function () {
		var t = new eui.Label();
		this.des0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "集齐4个碎片，就可以兑换大魔导师皮肤了！";
		t.textAlign = "center";
		t.textColor = 0x693A3B;
		t.verticalCenter = 211;
		t.width = 480;
		return t;
	};
	_proto.num_i = function () {
		var t = new eui.BitmapLabel();
		this.num = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "sz_fnt";
		t.height = 35.15;
		t.horizontalCenter = 178;
		t.rotation = 0.16;
		t.text = "×2";
		t.verticalCenter = 69.5;
		t.width = 62;
		return t;
	};
	_proto.rolebox_i = function () {
		var t = new eui.Group();
		this.rolebox = t;
		t.horizontalCenter = -119;
		t.verticalCenter = -4.5;
		t.elementsContent = [this.xiangao_i(),this.back_i(),this.rolemask_i(),this.back1_i(),this.rolemask1_i(),this.rolemask2_i()];
		return t;
	};
	_proto.xiangao_i = function () {
		var t = new eui.Image();
		this.xiangao = t;
		t.scaleX = 0.79;
		t.scaleY = 0.79;
		t.source = "skinUI_json.xian4";
		t.x = 78;
		t.y = 10;
		return t;
	};
	_proto.back_i = function () {
		var t = new eui.Rect();
		this.back = t;
		t.fillColor = 0x949494;
		t.height = 314;
		t.visible = false;
		t.width = 258;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.rolemask_i = function () {
		var t = new eui.Image();
		this.rolemask = t;
		t.scaleX = 1.6;
		t.scaleY = 1.6;
		t.source = "skinUI_json.4_new";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.back1_i = function () {
		var t = new eui.Image();
		this.back1 = t;
		t.scaleX = 1.6;
		t.scaleY = 1.6;
		t.source = "skinUI_json.4_new";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.rolemask1_i = function () {
		var t = new eui.Rect();
		this.rolemask1 = t;
		t.fillColor = 0x949494;
		t.height = 0;
		t.scaleY = -1;
		t.width = 258;
		t.x = 0;
		t.y = 314;
		return t;
	};
	_proto.rolemask2_i = function () {
		var t = new eui.Image();
		this.rolemask2 = t;
		t.scaleX = 1.6;
		t.scaleY = 1.6;
		t.source = "skinUI_json.4_new";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -110;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "skinUI_json.diban";
		t.verticalCenter = 146;
		return t;
	};
	return GetChipSkin;
})(eui.Skin);generateEUI.paths['resource/skins/GrowSkin.exml'] = window.GrowSkin = (function (_super) {
	__extends(GrowSkin, _super);
	function GrowSkin() {
		_super.call(this);
		this.skinParts = ["bg","close_btn","rolebox","sjbox0","sjbox1"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.bg_i(),this.close_btn_i(),this._Image2_i(),this.rolebox_i(),this.sjbox0_i(),this.sjbox1_i(),this._Image3_i(),this._Image4_i()];
	}
	var _proto = GrowSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.scale9Grid = new egret.Rectangle(90,908,540,61);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "VJJ_04_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new eui.Group();
		this.close_btn = t;
		t.x = 200;
		t.y = 924.37;
		t.elementsContent = [this._Image1_i(),this._Label1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 115;
		t.scale9Grid = new egret.Rectangle(125,39,117,26);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mainUI_json.BY_JSL_04";
		t.width = 310;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.border = false;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 60;
		t.text = "真开心";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mainUI_json.BY_ZDLL_03";
		t.x = 149;
		t.y = 244;
		return t;
	};
	_proto.rolebox_i = function () {
		var t = new eui.Group();
		this.rolebox = t;
		t.height = 100;
		t.width = 100;
		t.x = 361.52;
		t.y = 769.84;
		return t;
	};
	_proto.sjbox0_i = function () {
		var t = new eui.Group();
		this.sjbox0 = t;
		t.height = 100;
		t.horizontalCenter = -40;
		t.width = 100;
		t.y = 245.87;
		return t;
	};
	_proto.sjbox1_i = function () {
		var t = new eui.Group();
		this.sjbox1 = t;
		t.height = 100;
		t.horizontalCenter = 140;
		t.width = 100;
		t.y = 245.87;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "mainUI_json.VJJ_01";
		t.y = 741.09;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "mainUI_json.BY_JSL_03";
		t.y = 225.24;
		return t;
	};
	return GrowSkin;
})(eui.Skin);generateEUI.paths['resource/skins/HelpRankSkin.exml'] = window.HelpRankSkin = (function (_super) {
	__extends(HelpRankSkin, _super);
	function HelpRankSkin() {
		_super.call(this);
		this.skinParts = ["rankList","myhelp","headicon","myrank","myname","numicon","close_btn"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = HelpRankSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.verticalCenter = -55.5;
		t.elementsContent = [this._Image1_i(),this._Scroller1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Group1_i(),this.close_btn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 717;
		t.scale9Grid = new egret.Rectangle(67,68,2,2);
		t.source = "mainUI_json.By_yxz_05";
		t.width = 533;
		t.x = 64;
		t.y = 112;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 505.16;
		t.width = 500;
		t.x = 80;
		t.y = 174.57;
		t.viewport = this.rankList_i();
		return t;
	};
	_proto.rankList_i = function () {
		var t = new eui.DataGroup();
		this.rankList = t;
		t.itemRendererSkinName = HelpRankItem;
		t.width = 500;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "mainUI_json.title";
		t.x = 132;
		t.y = 56.48;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "windowUI_json.by_zlp_04";
		t.x = 184;
		t.y = 74;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "mainUI_json.BY_JSL_03";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 83;
		t.y = 680.73;
		t.elementsContent = [this._Image5_i(),this._Label1_i(),this._Label2_i(),this.myhelp_i(),this.headicon_i(),this.myrank_i(),this.myname_i(),this.numicon_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "windowUI_json.by_zlp_02";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 24;
		t.text = "助力";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.width = 48;
		t.x = 338.19;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.size = 24;
		t.text = "次";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.width = 30;
		t.x = 448.89;
		return t;
	};
	_proto.myhelp_i = function () {
		var t = new eui.BitmapLabel();
		this.myhelp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "sz_fnt";
		t.height = 27.5;
		t.letterSpacing = -3;
		t.text = "0";
		t.textAlign = "center";
		t.verticalCenter = 0.5;
		t.width = 76;
		t.x = 381.35;
		return t;
	};
	_proto.headicon_i = function () {
		var t = new eui.Image();
		this.headicon = t;
		t.source = "windowUI_json.by_zlp_01";
		t.verticalCenter = 0;
		t.x = 64;
		return t;
	};
	_proto.myrank_i = function () {
		var t = new eui.Label();
		this.myrank = t;
		t.anchorOffsetX = 0;
		t.size = 23;
		t.text = "100";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.width = 62;
		t.x = 0;
		return t;
	};
	_proto.myname_i = function () {
		var t = new eui.Label();
		this.myname = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 24;
		t.text = "我的昵称";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalCenter = 0.5;
		t.width = 153;
		t.x = 143.74;
		return t;
	};
	_proto.numicon_i = function () {
		var t = new eui.Image();
		this.numicon = t;
		t.source = "windowUI_json.icon_no1";
		t.verticalCenter = 0;
		t.x = 14;
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new eui.Image();
		this.close_btn = t;
		t.source = "mainUI_json.By_bbsz_04";
		t.x = 543.39;
		t.y = 94.48;
		return t;
	};
	return HelpRankSkin;
})(eui.Skin);generateEUI.paths['resource/skins/InviteViewSkin.exml'] = window.InviteViewSkin = (function (_super) {
	__extends(InviteViewSkin, _super);
	function InviteViewSkin() {
		_super.call(this);
		this.skinParts = ["close_btn","complete0","invite_btn0","complete1","invite_btn1","complete2","invite_btn2","complete3","invite_btn3","complete4","invite_btn4","change_btn","reward","progress","getreward_btn","des0","des1","talk0","talk1","talk2","talk3","talk4","parGroup"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.parGroup_i()];
	}
	var _proto = InviteViewSkin.prototype;

	_proto.parGroup_i = function () {
		var t = new eui.Group();
		this.parGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1020.58;
		t.horizontalCenter = 0;
		t.verticalCenter = 29.5;
		t.width = 620.24;
		t.elementsContent = [this._Image1_i(),this.close_btn_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this.change_btn_i(),this._Label6_i(),this._Image23_i(),this._Image24_i(),this.reward_i(),this.progress_i(),this.getreward_btn_i(),this.des0_i(),this.des1_i(),this.talk0_i(),this.talk1_i(),this.talk2_i(),this.talk3_i(),this.talk4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1022;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(57,94,6,6);
		t.source = "mainUI_json.By_yxz_05";
		t.width = 636;
		t.y = 0;
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new eui.Image();
		this.close_btn = t;
		t.source = "mainUI_json.By_bbsz_04";
		t.x = 560;
		t.y = -9;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.horizontalCenter = -0.12000000000000455;
		t.scale9Grid = new egret.Rectangle(11,13,4,4);
		t.source = "windowUI_json.BY_YQOH_26";
		t.y = 344.81;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.37999999999999545;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "windowUI_json.BY_qd_02";
		t.y = -56.56;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -0.12000000000000455;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "windowUI_json.BY_YQOH_01";
		t.y = -13.41;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -0.12000000000000455;
		t.source = "windowUI_json.BY_YQOH_25";
		t.y = 82.11;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 431;
		t.y = 361.85;
		t.elementsContent = [this.complete0_i(),this.invite_btn0_i()];
		return t;
	};
	_proto.complete0_i = function () {
		var t = new eui.Image();
		this.complete0 = t;
		t.source = "windowUI_json.BY_YQOH_07";
		t.visible = false;
		t.x = 15.95;
		t.y = 3.18;
		return t;
	};
	_proto.invite_btn0_i = function () {
		var t = new eui.Group();
		this.invite_btn0 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Label1_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "windowUI_json.BY_YQOH_10";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "windowUI_json.BY_YQOH_04";
		t.x = 80.2;
		t.y = 19.5;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "mainUI_json.tili";
		t.x = 17.1;
		t.y = 17;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 28;
		t.stroke = 2;
		t.text = "5";
		t.x = 54.12;
		t.y = 20.15;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 431;
		t.y = 468.85;
		t.elementsContent = [this.complete1_i(),this.invite_btn1_i()];
		return t;
	};
	_proto.complete1_i = function () {
		var t = new eui.Image();
		this.complete1 = t;
		t.source = "windowUI_json.BY_YQOH_07";
		t.visible = false;
		t.x = 15.95;
		t.y = 3.18;
		return t;
	};
	_proto.invite_btn1_i = function () {
		var t = new eui.Group();
		this.invite_btn1 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Label2_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "windowUI_json.BY_YQOH_10";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "windowUI_json.BY_YQOH_04";
		t.x = 80.2;
		t.y = 19.5;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "mainUI_json.tili";
		t.x = 17.1;
		t.y = 17;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 28;
		t.stroke = 2;
		t.text = "5";
		t.x = 54.12;
		t.y = 20.15;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 431;
		t.y = 575.52;
		t.elementsContent = [this.complete2_i(),this.invite_btn2_i()];
		return t;
	};
	_proto.complete2_i = function () {
		var t = new eui.Image();
		this.complete2 = t;
		t.source = "windowUI_json.BY_YQOH_07";
		t.visible = false;
		t.x = 15.95;
		t.y = 3.18;
		return t;
	};
	_proto.invite_btn2_i = function () {
		var t = new eui.Group();
		this.invite_btn2 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Label3_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "windowUI_json.BY_YQOH_10";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "windowUI_json.BY_YQOH_04";
		t.x = 80.2;
		t.y = 19.5;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "mainUI_json.tili";
		t.x = 17.1;
		t.y = 17;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 28;
		t.stroke = 2;
		t.text = "5";
		t.x = 54.12;
		t.y = 20.15;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 431;
		t.y = 682.85;
		t.elementsContent = [this.complete3_i(),this.invite_btn3_i()];
		return t;
	};
	_proto.complete3_i = function () {
		var t = new eui.Image();
		this.complete3 = t;
		t.source = "windowUI_json.BY_YQOH_07";
		t.visible = false;
		t.x = 15.95;
		t.y = 3.18;
		return t;
	};
	_proto.invite_btn3_i = function () {
		var t = new eui.Group();
		this.invite_btn3 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Label4_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "windowUI_json.BY_YQOH_10";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "windowUI_json.BY_YQOH_04";
		t.x = 80.2;
		t.y = 19.5;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "mainUI_json.tili";
		t.x = 17.1;
		t.y = 17;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 28;
		t.stroke = 2;
		t.text = "5";
		t.x = 54.12;
		t.y = 20.15;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.x = 431;
		t.y = 789.85;
		t.elementsContent = [this.complete4_i(),this.invite_btn4_i()];
		return t;
	};
	_proto.complete4_i = function () {
		var t = new eui.Image();
		this.complete4 = t;
		t.source = "windowUI_json.BY_YQOH_07";
		t.visible = false;
		t.x = 15.95;
		t.y = 3.18;
		return t;
	};
	_proto.invite_btn4_i = function () {
		var t = new eui.Group();
		this.invite_btn4 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Label5_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "windowUI_json.BY_YQOH_10";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "windowUI_json.BY_YQOH_04";
		t.x = 80.2;
		t.y = 19.5;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "mainUI_json.tili";
		t.x = 17.1;
		t.y = 17;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 28;
		t.stroke = 2;
		t.text = "5";
		t.x = 54.12;
		t.y = 20.15;
		return t;
	};
	_proto.change_btn_i = function () {
		var t = new eui.Group();
		this.change_btn = t;
		t.x = 431.48;
		t.y = 897.7;
		t.elementsContent = [this._Image21_i(),this._Image22_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.height = 76;
		t.source = "scene0_json.BY_CJS_06";
		t.width = 156;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "windowUI_json.BY_YQOH_21";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "SimHei";
		t.lineSpacing = 7;
		t.size = 27;
		t.text = "更多喜欢玩这个游戏的朋友邀请一起来玩吧";
		t.textColor = 0x222222;
		t.width = 331;
		t.wordWrap = true;
		t.x = 45.19;
		t.y = 905.2;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(50,11,155,66);
		t.source = "windowUI_json.BY_YQOH_23";
		t.width = 220;
		t.x = 128.73;
		t.y = 173.95;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.source = "mainUI_json.tili";
		t.x = 165.6;
		t.y = 190.13;
		return t;
	};
	_proto.reward_i = function () {
		var t = new eui.Label();
		this.reward = t;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 32;
		t.stroke = 3;
		t.strokeColor = 0x593432;
		t.text = "×5";
		t.textColor = 0xfceb48;
		t.x = 227.32;
		t.y = 204.44;
		return t;
	};
	_proto.progress_i = function () {
		var t = new eui.Label();
		this.progress = t;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 27;
		t.text = "进度:2/5";
		t.textAlign = "center";
		t.textColor = 0x593432;
		t.width = 160;
		t.x = 378.03;
		t.y = 219;
		return t;
	};
	_proto.getreward_btn_i = function () {
		var t = new eui.Group();
		this.getreward_btn = t;
		t.x = 385.08;
		t.y = 198.91;
		t.elementsContent = [this._Image25_i(),this._Image26_i()];
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.source = "windowUI_json.BY_YQOH_1";
		t.width = 150;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "windowUI_json.BY_YQOH_03";
		t.verticalCenter = 0;
		return t;
	};
	_proto.des0_i = function () {
		var t = new eui.Label();
		this.des0 = t;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 28;
		t.stroke = 2;
		t.text = "再邀请3人可领取";
		t.x = 39;
		t.y = 102.08;
		return t;
	};
	_proto.des1_i = function () {
		var t = new eui.Label();
		this.des1 = t;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 28;
		t.stroke = 2;
		t.text = "免费礼包";
		t.textColor = 0xfceb48;
		t.x = 263.19;
		t.y = 102.08;
		return t;
	};
	_proto.talk0_i = function () {
		var t = new eui.Label();
		this.talk0 = t;
		t.fontFamily = "SimHei";
		t.lineSpacing = 3;
		t.size = 20;
		t.text = "最近在家呆得好无聊，有什么好玩的推荐吗？";
		t.textColor = 0xa09f9f;
		t.width = 250;
		t.wordWrap = true;
		t.x = 145;
		t.y = 395.01;
		return t;
	};
	_proto.talk1_i = function () {
		var t = new eui.Label();
		this.talk1 = t;
		t.fontFamily = "SimHei";
		t.lineSpacing = 3;
		t.size = 20;
		t.text = "最近在家呆得好无聊，有什么好玩的推荐吗？";
		t.textColor = 0xA09F9F;
		t.width = 250;
		t.wordWrap = true;
		t.x = 145;
		t.y = 501.85;
		return t;
	};
	_proto.talk2_i = function () {
		var t = new eui.Label();
		this.talk2 = t;
		t.fontFamily = "SimHei";
		t.lineSpacing = 3;
		t.size = 20;
		t.text = "最近在家呆得好无聊，有什么好玩的推荐吗？";
		t.textColor = 0xA09F9F;
		t.width = 250;
		t.wordWrap = true;
		t.x = 145;
		t.y = 609.22;
		return t;
	};
	_proto.talk3_i = function () {
		var t = new eui.Label();
		this.talk3 = t;
		t.fontFamily = "SimHei";
		t.lineSpacing = 3;
		t.size = 20;
		t.text = "最近在家呆得好无聊，有什么好玩的推荐吗？";
		t.textColor = 0xA09F9F;
		t.width = 250;
		t.wordWrap = true;
		t.x = 145;
		t.y = 715.85;
		return t;
	};
	_proto.talk4_i = function () {
		var t = new eui.Label();
		this.talk4 = t;
		t.fontFamily = "SimHei";
		t.lineSpacing = 3;
		t.size = 20;
		t.text = "最近在家呆得好无聊，有什么好玩的推荐吗？";
		t.textColor = 0xA09F9F;
		t.width = 250;
		t.wordWrap = true;
		t.x = 145;
		t.y = 822.85;
		return t;
	};
	return InviteViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/item/ItemSignNormalSkin.exml'] = window.ItemSignNormalSkin = (function (_super) {
	__extends(ItemSignNormalSkin, _super);
	function ItemSignNormalSkin() {
		_super.call(this);
		this.skinParts = ["imgBg","imgIcon","imgRecvMark","labelCount","labelDay"];
		
		this.elementsContent = [this.imgBg_i(),this.imgIcon_i(),this.imgRecvMark_i(),this.labelCount_i(),this.labelDay_i()];
	}
	var _proto = ItemSignNormalSkin.prototype;

	_proto.imgBg_i = function () {
		var t = new eui.Image();
		this.imgBg = t;
		t.source = "windowUI_json.BY_qd_09";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgIcon_i = function () {
		var t = new eui.Image();
		this.imgIcon = t;
		t.horizontalCenter = -0.5;
		t.source = "mainUI_json.tili";
		t.verticalCenter = -4.5;
		return t;
	};
	_proto.imgRecvMark_i = function () {
		var t = new eui.Image();
		this.imgRecvMark = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.46;
		t.source = "mainUI_json.BY_ppzk_04";
		t.width = 76.87;
		t.x = 24;
		t.y = 49.5;
		return t;
	};
	_proto.labelCount_i = function () {
		var t = new eui.Label();
		this.labelCount = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 32;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "50";
		t.y = 121.16;
		return t;
	};
	_proto.labelDay_i = function () {
		var t = new eui.Label();
		this.labelDay = t;
		t.fontFamily = "SimHei";
		t.size = 26;
		t.strokeColor = 0x000000;
		t.text = "第1天";
		t.textColor = 0x000000;
		t.x = 30;
		t.y = 9;
		return t;
	};
	return ItemSignNormalSkin;
})(eui.Skin);generateEUI.paths['resource/skins/item/ItemSignSpecialSkin.exml'] = window.ItemSignSpecialSkin = (function (_super) {
	__extends(ItemSignSpecialSkin, _super);
	function ItemSignSpecialSkin() {
		_super.call(this);
		this.skinParts = ["imgBg","imgIcon","imgRecvMark","labelCount","labelDay"];
		
		this.elementsContent = [this.imgBg_i(),this.imgIcon_i(),this.imgRecvMark_i(),this.labelCount_i(),this.labelDay_i()];
	}
	var _proto = ItemSignSpecialSkin.prototype;

	_proto.imgBg_i = function () {
		var t = new eui.Image();
		this.imgBg = t;
		t.source = "windowUI_json.BY_qd_08";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgIcon_i = function () {
		var t = new eui.Image();
		this.imgIcon = t;
		t.horizontalCenter = -0.5;
		t.source = "mainUI_json.BY_JSL_07";
		t.verticalCenter = -4.5;
		return t;
	};
	_proto.imgRecvMark_i = function () {
		var t = new eui.Image();
		this.imgRecvMark = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.46;
		t.source = "mainUI_json.BY_ppzk_04";
		t.width = 76.87;
		t.x = 90;
		t.y = 49.5;
		return t;
	};
	_proto.labelCount_i = function () {
		var t = new eui.Label();
		this.labelCount = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 32;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "50";
		t.y = 121.16;
		return t;
	};
	_proto.labelDay_i = function () {
		var t = new eui.Label();
		this.labelDay = t;
		t.fontFamily = "SimHei";
		t.size = 26;
		t.strokeColor = 0x000000;
		t.text = "第7天";
		t.textColor = 0x000000;
		t.x = 96;
		t.y = 9;
		return t;
	};
	return ItemSignSpecialSkin;
})(eui.Skin);generateEUI.paths['resource/skins/LoadingSkin.exml'] = window.LoadingSkin = (function (_super) {
	__extends(LoadingSkin, _super);
	function LoadingSkin() {
		_super.call(this);
		this.skinParts = ["roleAni","bg","desc","progress","m_mask","progressLabel","loading","role"];
		
		this.height = 1280;
		this.width = 720;
		this.roleAni_i();
		this.elementsContent = [this.bg_i(),this.desc_i(),this.loading_i(),this.role_i()];
		
		eui.Binding.$bindProperties(this, ["role"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [1.1],[],this._Object1,"scaleX");
		eui.Binding.$bindProperties(this, [1.1],[],this._Object1,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleY");
	}
	var _proto = LoadingSkin.prototype;

	_proto.roleAni_i = function () {
		var t = new egret.tween.TweenGroup();
		this.roleAni = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(93,525,564,425);
		t.source = "hh720_jpg";
		t.top = 0;
		return t;
	};
	_proto.desc_i = function () {
		var t = new eui.Label();
		this.desc = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 170;
		t.height = 39.09;
		t.horizontalCenter = 0;
		t.stroke = 2;
		t.strokeColor = 0x2d0d12;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.width = 410;
		return t;
	};
	_proto.loading_i = function () {
		var t = new eui.Group();
		this.loading = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 207.58;
		t.width = 720;
		t.elementsContent = [this._Rect1_i(),this._Rect2_i(),this.progress_i(),this.m_mask_i(),this._Label1_i(),this.progressLabel_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xffffff;
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 431;
		t.x = 145;
		t.y = 42;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xffffff;
		t.height = 18;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 425;
		t.x = 148;
		t.y = 44;
		return t;
	};
	_proto.progress_i = function () {
		var t = new eui.Rect();
		this.progress = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x4c9bf3;
		t.height = 18;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 425;
		t.x = 148;
		t.y = 44;
		return t;
	};
	_proto.m_mask_i = function () {
		var t = new eui.Rect();
		this.m_mask = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x4c9bf3;
		t.height = 18;
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 425;
		t.y = 44;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 30;
		t.strokeColor = 0x332424;
		t.text = "正在加载游戏";
		t.textColor = 0x464646;
		t.x = 245;
		t.y = 82;
		return t;
	};
	_proto.progressLabel_i = function () {
		var t = new eui.Label();
		this.progressLabel = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.strokeColor = 0x2d0d12;
		t.text = "1%";
		t.textAlign = "left";
		t.textColor = 0x464646;
		t.width = 99.33;
		t.x = 430.86;
		t.y = 82;
		return t;
	};
	_proto.role_i = function () {
		var t = new eui.Image();
		this.role = t;
		t.horizontalCenter = 0;
		t.source = "yv_png";
		t.verticalCenter = 109.5;
		return t;
	};
	return LoadingSkin;
})(eui.Skin);generateEUI.paths['resource/skins/map/GameMapSkin.exml'] = window.GameMapSkin = (function (_super) {
	__extends(GameMapSkin, _super);
	function GameMapSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1280;
		this.width = 720;
	}
	var _proto = GameMapSkin.prototype;

	return GameMapSkin;
})(eui.Skin);generateEUI.paths['resource/skins/panel/TalkSkin0.exml'] = window.TalkSkin0 = (function (_super) {
	__extends(TalkSkin0, _super);
	function TalkSkin0() {
		_super.call(this);
		this.skinParts = ["showAni","context","group"];
		
		this.height = 213.6;
		this.width = 235.2;
		this.showAni_i();
		this.elementsContent = [this.group_i()];
		
		eui.Binding.$bindProperties(this, ["group"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleY");
	}
	var _proto = TalkSkin0.prototype;

	_proto.showAni_i = function () {
		var t = new egret.tween.TweenGroup();
		this.showAni = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.alpha = 1;
		t.anchorOffsetX = -1;
		t.anchorOffsetY = 214;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -1;
		t.y = 214;
		t.elementsContent = [this._Image1_i(),this.context_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "mainUI_json.talk";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.context_i = function () {
		var t = new eui.Label();
		this.context = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 94.66;
		t.lineSpacing = 10;
		t.size = 20;
		t.text = "宝宝饿了怎么办？";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 168.49;
		t.wordWrap = true;
		t.x = 32;
		t.y = 33;
		return t;
	};
	return TalkSkin0;
})(eui.Skin);generateEUI.paths['resource/skins/panel/TalkSkin1.exml'] = window.TalkSkin1 = (function (_super) {
	__extends(TalkSkin1, _super);
	function TalkSkin1() {
		_super.call(this);
		this.skinParts = ["showAni","context","group"];
		
		this.height = 213.6;
		this.width = 235.2;
		this.showAni_i();
		this.elementsContent = [this.group_i()];
		
		eui.Binding.$bindProperties(this, ["group"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleY");
	}
	var _proto = TalkSkin1.prototype;

	_proto.showAni_i = function () {
		var t = new egret.tween.TweenGroup();
		this.showAni = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.anchorOffsetX = 236;
		t.anchorOffsetY = 213;
		t.height = 213.6;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 235.2;
		t.x = 236;
		t.y = 213;
		t.elementsContent = [this._Image1_i(),this.context_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = -1.2;
		t.scaleY = 1.2;
		t.source = "mainUI_json.talk";
		t.verticalCenter = 0.20000000000000284;
		t.x = 236;
		t.y = 0;
		return t;
	};
	_proto.context_i = function () {
		var t = new eui.Label();
		this.context = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 94.66;
		t.horizontalCenter = -1.5999999999999943;
		t.lineSpacing = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "宝宝饿了怎么办？";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = -26.299999999999997;
		t.width = 168.49;
		t.wordWrap = true;
		t.x = 32;
		t.y = 33;
		return t;
	};
	return TalkSkin1;
})(eui.Skin);generateEUI.paths['resource/skins/map/GameSkin0000.exml'] = window.GameSkin0000 = (function (_super) {
	__extends(GameSkin0000, _super);
	function GameSkin0000() {
		_super.call(this);
		this.skinParts = ["talk1","cord","zhizhugroup","bg","rolebox","toy","door","rolebox0","talk0"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = GameSkin0000.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 116;
		t.x = 0;
		t.elementsContent = [this.bg_i(),this.rolebox_i(),this.toy_i(),this.door_i(),this.rolebox0_i(),this.talk0_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Group();
		this.bg = t;
		t.name = "bg";
		t.x = 0;
		t.y = -192;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.talk1_i(),this.zhizhugroup_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1594.67;
		t.scale9Grid = new egret.Rectangle(176,88,1061,3);
		t.source = "scene0_json.1";
		t.x = 0;
		t.y = -516.67;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 626;
		t.scale9Grid = new egret.Rectangle(176,345,1061,15);
		t.source = "scene0_json.4";
		t.x = 0;
		t.y = 1078;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "scene0_json.2";
		t.x = 234.32;
		t.y = 721.54;
		return t;
	};
	_proto.talk1_i = function () {
		var t = new eui.Component();
		this.talk1 = t;
		t.name = "talk1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 974;
		t.y = 620.97;
		return t;
	};
	_proto.zhizhugroup_i = function () {
		var t = new eui.Group();
		this.zhizhugroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.name = "zhizhugroup";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 494.77;
		t.y = 192;
		t.elementsContent = [this.cord_i()];
		return t;
	};
	_proto.cord_i = function () {
		var t = new eui.Image();
		this.cord = t;
		t.name = "cord";
		t.scale9Grid = new egret.Rectangle(0,12,5,11);
		t.source = "scene0_json.7";
		t.x = -2.5;
		t.y = -110;
		return t;
	};
	_proto.rolebox_i = function () {
		var t = new eui.Group();
		this.rolebox = t;
		t.height = 50;
		t.name = "rolebox";
		t.width = 50;
		t.x = 418.78;
		t.y = 737.8;
		return t;
	};
	_proto.toy_i = function () {
		var t = new eui.Image();
		this.toy = t;
		t.name = "toy";
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "ItemUI_json.item13";
		t.x = 982.21;
		t.y = 592.54;
		return t;
	};
	_proto.door_i = function () {
		var t = new eui.Image();
		this.door = t;
		t.name = "door";
		t.source = "scene0_json.3";
		t.x = 286.32;
		t.y = 676.04;
		return t;
	};
	_proto.rolebox0_i = function () {
		var t = new eui.Group();
		this.rolebox0 = t;
		t.height = 50;
		t.name = "rolebox0";
		t.width = 50;
		t.x = -99.73;
		t.y = 831.79;
		return t;
	};
	_proto.talk0_i = function () {
		var t = new eui.Component();
		this.talk0 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin1";
		t.visible = false;
		t.x = 124.8;
		t.y = 400.03;
		return t;
	};
	return GameSkin0000;
})(eui.Skin);generateEUI.paths['resource/skins/map/GameSkin0001.exml'] = window.GameSkin0001 = (function (_super) {
	__extends(GameSkin0001, _super);
	function GameSkin0001() {
		_super.call(this);
		this.skinParts = ["mombox0","musicbox","mombox1","rolebox","talk0","talk1","talk2","bg"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.bg_i()];
	}
	var _proto = GameSkin0001.prototype;

	_proto.bg_i = function () {
		var t = new eui.Group();
		this.bg = t;
		t.verticalCenter = 116;
		t.x = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.mombox0_i(),this.musicbox_i(),this.mombox1_i(),this.rolebox_i(),this.talk0_i(),this.talk1_i(),this.talk2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1536.33;
		t.scale9Grid = new egret.Rectangle(176,88,1061,3);
		t.source = "scene1_json.7";
		t.x = 0;
		t.y = -650.33;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 626;
		t.scale9Grid = new egret.Rectangle(176,345,1061,15);
		t.source = "scene1_json.ground";
		t.x = 0;
		t.y = 886;
		return t;
	};
	_proto.mombox0_i = function () {
		var t = new eui.Group();
		this.mombox0 = t;
		t.height = 50;
		t.name = "mombox0";
		t.width = 50;
		t.x = 456.72;
		t.y = 816.02;
		return t;
	};
	_proto.musicbox_i = function () {
		var t = new eui.Group();
		this.musicbox = t;
		t.height = 50;
		t.name = "mombox0";
		t.visible = false;
		t.width = 50;
		t.x = 406.72;
		t.y = 640;
		return t;
	};
	_proto.mombox1_i = function () {
		var t = new eui.Group();
		this.mombox1 = t;
		t.height = 50;
		t.name = "mombox1";
		t.width = 50;
		t.x = 578.72;
		t.y = 816.02;
		return t;
	};
	_proto.rolebox_i = function () {
		var t = new eui.Group();
		this.rolebox = t;
		t.height = 50;
		t.name = "rolebox";
		t.width = 50;
		t.x = -165.28;
		t.y = 830.02;
		return t;
	};
	_proto.talk0_i = function () {
		var t = new eui.Component();
		this.talk0 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin1";
		t.visible = false;
		t.x = 311.52;
		t.y = 307.6;
		return t;
	};
	_proto.talk1_i = function () {
		var t = new eui.Component();
		this.talk1 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin1";
		t.visible = false;
		t.x = 195.92;
		t.y = 212.8;
		return t;
	};
	_proto.talk2_i = function () {
		var t = new eui.Component();
		this.talk2 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin1";
		t.visible = false;
		t.x = 25;
		t.y = 426.4;
		return t;
	};
	return GameSkin0001;
})(eui.Skin);generateEUI.paths['resource/skins/map/GameSkin0002.exml'] = window.GameSkin0002 = (function (_super) {
	__extends(GameSkin0002, _super);
	function GameSkin0002() {
		_super.call(this);
		this.skinParts = ["Abox","Bbox","reshow","rolebox","SDLRbox","Cbox","bg","xiaotoubox","talk0","talk1","talk2","talk3","talk4","talk5","jingchebox","main"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.main_i()];
	}
	var _proto = GameSkin0002.prototype;

	_proto.main_i = function () {
		var t = new eui.Group();
		this.main = t;
		t.verticalCenter = 116;
		t.x = 0;
		t.elementsContent = [this.bg_i(),this.xiaotoubox_i(),this.talk0_i(),this.talk1_i(),this.talk2_i(),this.talk3_i(),this.talk4_i(),this.talk5_i(),this.jingchebox_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Group();
		this.bg = t;
		t.x = 0;
		t.y = -192;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.Abox_i(),this.Bbox_i(),this.reshow_i(),this.rolebox_i(),this.SDLRbox_i(),this.Cbox_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1302;
		t.scale9Grid = new egret.Rectangle(176,88,1061,3);
		t.source = "scene2_json.1";
		t.x = 0;
		t.y = -224;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 626;
		t.scale9Grid = new egret.Rectangle(176,345,1061,15);
		t.source = "scene2_json.2";
		t.x = 0;
		t.y = 1078;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 626;
		t.scale9Grid = new egret.Rectangle(176,345,1061,15);
		t.source = "scene2_json.2";
		t.x = 1412;
		t.y = 1078;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1302;
		t.scale9Grid = new egret.Rectangle(176,88,1061,3);
		t.source = "scene2_json.1";
		t.x = 1412;
		t.y = -224;
		return t;
	};
	_proto.Abox_i = function () {
		var t = new eui.Group();
		this.Abox = t;
		t.height = 50;
		t.name = "mombox0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 534.72;
		t.y = 1020.0300000000001;
		return t;
	};
	_proto.Bbox_i = function () {
		var t = new eui.Group();
		this.Bbox = t;
		t.height = 50;
		t.name = "mombox0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 375.2;
		t.y = 1017.37;
		return t;
	};
	_proto.reshow_i = function () {
		var t = new eui.Group();
		this.reshow = t;
		t.height = 1280;
		t.horizontalCenter = -1052.5;
		t.verticalCenter = -116;
		t.visible = false;
		t.width = 720;
		t.elementsContent = [this._Rect1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.4;
		t.height = 1800;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 720;
		return t;
	};
	_proto.rolebox_i = function () {
		var t = new eui.Group();
		this.rolebox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = -98.79;
		t.y = 1033.11;
		return t;
	};
	_proto.SDLRbox_i = function () {
		var t = new eui.Group();
		this.SDLRbox = t;
		t.height = 50;
		t.name = "mombox1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 258.76;
		t.y = 1022.0200000000001;
		return t;
	};
	_proto.Cbox_i = function () {
		var t = new eui.Group();
		this.Cbox = t;
		t.height = 50;
		t.name = "mombox1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 155.4;
		t.y = 1027.35;
		return t;
	};
	_proto.xiaotoubox_i = function () {
		var t = new eui.Group();
		this.xiaotoubox = t;
		t.height = 50;
		t.name = "mombox1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = -150;
		t.y = 846;
		return t;
	};
	_proto.talk0_i = function () {
		var t = new eui.Component();
		this.talk0 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 62.57;
		t.y = 363.05;
		return t;
	};
	_proto.talk1_i = function () {
		var t = new eui.Component();
		this.talk1 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin1";
		t.visible = false;
		t.x = 129.47;
		t.y = 257.01;
		return t;
	};
	_proto.talk2_i = function () {
		var t = new eui.Component();
		this.talk2 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin1";
		t.visible = false;
		t.x = 243.3;
		t.y = 252.47;
		return t;
	};
	_proto.talk3_i = function () {
		var t = new eui.Component();
		this.talk3 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 203.3;
		t.y = 294.47;
		return t;
	};
	_proto.talk4_i = function () {
		var t = new eui.Component();
		this.talk4 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 388.08;
		t.y = 361.13;
		return t;
	};
	_proto.talk5_i = function () {
		var t = new eui.Component();
		this.talk5 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin1";
		t.visible = false;
		t.x = 282.93;
		t.y = 273.2;
		return t;
	};
	_proto.jingchebox_i = function () {
		var t = new eui.Group();
		this.jingchebox = t;
		t.height = 50;
		t.name = "mombox1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = -408;
		t.y = 858;
		return t;
	};
	return GameSkin0002;
})(eui.Skin);generateEUI.paths['resource/skins/map/GameSkin0003.exml'] = window.GameSkin0003 = (function (_super) {
	__extends(GameSkin0003, _super);
	function GameSkin0003() {
		_super.call(this);
		this.skinParts = ["picture","xiaotoubox","rolebox","talk0","talk2","jcbox","talk3","talk4","bg","talk1","main"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.main_i()];
	}
	var _proto = GameSkin0003.prototype;

	_proto.main_i = function () {
		var t = new eui.Group();
		this.main = t;
		t.verticalCenter = 116;
		t.x = 0;
		t.elementsContent = [this.bg_i(),this.talk1_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Group();
		this.bg = t;
		t.x = 0;
		t.y = -192;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this.picture_i(),this.xiaotoubox_i(),this.rolebox_i(),this.talk0_i(),this.talk2_i(),this.jcbox_i(),this.talk3_i(),this.talk4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1302;
		t.scale9Grid = new egret.Rectangle(176,88,1061,3);
		t.source = "scene3_json.bg";
		t.x = 0;
		t.y = -224;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 626;
		t.scale9Grid = new egret.Rectangle(176,345,1061,15);
		t.source = "scene3_json.groud";
		t.x = 0;
		t.y = 1078;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 626;
		t.scale9Grid = new egret.Rectangle(176,345,1061,15);
		t.source = "scene3_json.groud";
		t.x = 1412;
		t.y = 1078;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1302;
		t.scale9Grid = new egret.Rectangle(176,88,1061,3);
		t.source = "scene3_json.bg";
		t.x = 1412;
		t.y = -224;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "scene3_json.picture";
		t.x = 605.62;
		t.y = 680;
		return t;
	};
	_proto.picture_i = function () {
		var t = new eui.Image();
		this.picture = t;
		t.anchorOffsetX = 80;
		t.anchorOffsetY = 78;
		t.source = "scene3_json.picture";
		t.x = 1372;
		t.y = 758;
		return t;
	};
	_proto.xiaotoubox_i = function () {
		var t = new eui.Group();
		this.xiaotoubox = t;
		t.height = 50;
		t.name = "mombox1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 552;
		t.y = 1023.88;
		return t;
	};
	_proto.rolebox_i = function () {
		var t = new eui.Group();
		this.rolebox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = -162.43;
		t.y = 1027.0500000000002;
		return t;
	};
	_proto.talk0_i = function () {
		var t = new eui.Component();
		this.talk0 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 209.2;
		t.y = 618.4;
		return t;
	};
	_proto.talk2_i = function () {
		var t = new eui.Component();
		this.talk2 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin1";
		t.visible = false;
		t.x = 1019.05;
		t.y = 522.16;
		return t;
	};
	_proto.jcbox_i = function () {
		var t = new eui.Group();
		this.jcbox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1092;
		t.y = 1027.31;
		return t;
	};
	_proto.talk3_i = function () {
		var t = new eui.Component();
		this.talk3 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 1162.28;
		t.y = 423.97;
		return t;
	};
	_proto.talk4_i = function () {
		var t = new eui.Component();
		this.talk4 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 992.68;
		t.y = 630.4;
		return t;
	};
	_proto.talk1_i = function () {
		var t = new eui.Component();
		this.talk1 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin1";
		t.visible = false;
		t.x = 343.47;
		t.y = 359.01;
		return t;
	};
	return GameSkin0003;
})(eui.Skin);generateEUI.paths['resource/skins/map/GameSkin0004.exml'] = window.GameSkin0004 = (function (_super) {
	__extends(GameSkin0004, _super);
	function GameSkin0004() {
		_super.call(this);
		this.skinParts = ["Cbox","Abox","Bbox","Dbox","door","door0","door1","bg","jiangshibox","rolebox","biaobox","talk0","talk1","talk2","talk3","talk4","talk5","base","main"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.main_i()];
	}
	var _proto = GameSkin0004.prototype;

	_proto.main_i = function () {
		var t = new eui.Group();
		this.main = t;
		t.verticalCenter = 116;
		t.x = 0;
		t.elementsContent = [this.base_i()];
		return t;
	};
	_proto.base_i = function () {
		var t = new eui.Group();
		this.base = t;
		t.anchorOffsetX = 360;
		t.anchorOffsetY = 852;
		t.height = 1704;
		t.width = 720;
		t.x = 360;
		t.y = 756;
		t.elementsContent = [this.bg_i(),this.jiangshibox_i(),this.rolebox_i(),this.biaobox_i(),this.talk0_i(),this.talk1_i(),this.talk2_i(),this.talk3_i(),this.talk4_i(),this.talk5_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Group();
		this.bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this.Cbox_i(),this.Abox_i(),this.Bbox_i(),this.Dbox_i(),this.door_i(),this.door0_i(),this.door1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1390.67;
		t.scale9Grid = new egret.Rectangle(176,88,1061,3);
		t.source = "scene4_json.1";
		t.x = 0;
		t.y = -312.67;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 626;
		t.scale9Grid = new egret.Rectangle(176,345,1061,15);
		t.source = "scene4_json.2";
		t.x = 0;
		t.y = 1078;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 626;
		t.scale9Grid = new egret.Rectangle(176,345,1061,15);
		t.source = "scene4_json.2";
		t.x = 1412;
		t.y = 1078;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 626;
		t.scale9Grid = new egret.Rectangle(176,345,1061,15);
		t.source = "scene4_json.2";
		t.x = 2825;
		t.y = 1078;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1478;
		t.scale9Grid = new egret.Rectangle(176,88,1061,3);
		t.source = "scene4_json.1";
		t.x = 1412;
		t.y = -400;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1478;
		t.scale9Grid = new egret.Rectangle(176,88,1061,3);
		t.source = "scene4_json.1";
		t.x = 2815;
		t.y = -400;
		return t;
	};
	_proto.Cbox_i = function () {
		var t = new eui.Group();
		this.Cbox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 372.7333333333333;
		t.y = 970;
		return t;
	};
	_proto.Abox_i = function () {
		var t = new eui.Group();
		this.Abox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 230.4;
		t.y = 1000;
		return t;
	};
	_proto.Bbox_i = function () {
		var t = new eui.Group();
		this.Bbox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 656.7;
		t.y = 970;
		return t;
	};
	_proto.Dbox_i = function () {
		var t = new eui.Group();
		this.Dbox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 515.0666666666666;
		t.y = 1000;
		return t;
	};
	_proto.door_i = function () {
		var t = new eui.Image();
		this.door = t;
		t.anchorOffsetY = 0;
		t.height = 627;
		t.scale9Grid = new egret.Rectangle(28,407,172,14);
		t.source = "scene4_json.5";
		t.x = 2639.98;
		t.y = 417.51;
		return t;
	};
	_proto.door0_i = function () {
		var t = new eui.Image();
		this.door0 = t;
		t.anchorOffsetY = 0;
		t.height = 541.37;
		t.scale9Grid = new egret.Rectangle(23,380,141,22);
		t.source = "scene4_json.7";
		t.visible = false;
		t.x = 2709.51;
		t.y = 417.64;
		return t;
	};
	_proto.door1_i = function () {
		var t = new eui.Image();
		this.door1 = t;
		t.anchorOffsetY = 0;
		t.height = 608.18;
		t.scale9Grid = new egret.Rectangle(8,320,52,144);
		t.source = "scene4_json.6";
		t.x = 2642.07;
		t.y = 437.6;
		return t;
	};
	_proto.jiangshibox_i = function () {
		var t = new eui.Group();
		this.jiangshibox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = -166.32;
		t.y = 1024.5;
		return t;
	};
	_proto.rolebox_i = function () {
		var t = new eui.Group();
		this.rolebox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = -122.02;
		t.y = 1027.71;
		return t;
	};
	_proto.biaobox_i = function () {
		var t = new eui.Group();
		this.biaobox = t;
		t.height = 0;
		t.horizontalCenter = 0;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.y = 477.13;
		return t;
	};
	_proto.talk0_i = function () {
		var t = new eui.Component();
		this.talk0 = t;
		t.name = "talk0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 106.57;
		t.y = 507.05;
		return t;
	};
	_proto.talk1_i = function () {
		var t = new eui.Component();
		this.talk1 = t;
		t.name = "talk0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "TalkSkin1";
		t.visible = false;
		t.x = -4.8;
		t.y = 501.38;
		return t;
	};
	_proto.talk2_i = function () {
		var t = new eui.Component();
		this.talk2 = t;
		t.name = "talk0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "TalkSkin1";
		t.visible = false;
		t.x = 137.8;
		t.y = 483.05;
		return t;
	};
	_proto.talk3_i = function () {
		var t = new eui.Component();
		this.talk3 = t;
		t.name = "talk0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 507.19;
		t.y = 480.28;
		return t;
	};
	_proto.talk4_i = function () {
		var t = new eui.Component();
		this.talk4 = t;
		t.name = "talk0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 388.08;
		t.y = 553.13;
		return t;
	};
	_proto.talk5_i = function () {
		var t = new eui.Component();
		this.talk5 = t;
		t.name = "talk5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "TalkSkin1";
		t.visible = false;
		t.x = 421.5;
		t.y = 434.57;
		return t;
	};
	return GameSkin0004;
})(eui.Skin);generateEUI.paths['resource/skins/map/GameSkin0005.exml'] = window.GameSkin0005 = (function (_super) {
	__extends(GameSkin0005, _super);
	function GameSkin0005() {
		_super.call(this);
		this.skinParts = ["tong","picture","ping0","ping1","ping2","huapingbox","rolebox","dianbox","light","talk0","talk2","bg","talk3","talk5","main","biaobox"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.main_i(),this.biaobox_i()];
	}
	var _proto = GameSkin0005.prototype;

	_proto.main_i = function () {
		var t = new eui.Group();
		this.main = t;
		t.verticalCenter = 116;
		t.x = 0;
		t.elementsContent = [this.bg_i(),this.talk3_i(),this.talk5_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Group();
		this.bg = t;
		t.x = 0;
		t.y = -192;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.tong_i(),this.picture_i(),this.ping0_i(),this.ping1_i(),this.ping2_i(),this.huapingbox_i(),this.rolebox_i(),this._Image5_i(),this.dianbox_i(),this._Image6_i(),this.light_i(),this.talk0_i(),this.talk2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1302;
		t.scale9Grid = new egret.Rectangle(176,88,1061,3);
		t.source = "scene5_json.4";
		t.x = 0;
		t.y = -224;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 626;
		t.scale9Grid = new egret.Rectangle(176,345,1061,15);
		t.source = "scene5_json.2";
		t.x = 0;
		t.y = 1078;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 626;
		t.scale9Grid = new egret.Rectangle(176,345,1061,15);
		t.source = "scene5_json.2";
		t.x = 1412;
		t.y = 1078;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1302;
		t.scale9Grid = new egret.Rectangle(176,88,1061,3);
		t.source = "scene5_json.4";
		t.x = 1412;
		t.y = -224;
		return t;
	};
	_proto.tong_i = function () {
		var t = new eui.Image();
		this.tong = t;
		t.anchorOffsetX = 61;
		t.anchorOffsetY = 60.5;
		t.source = "scene5_json.1";
		t.x = 202.84;
		t.y = 932.85;
		return t;
	};
	_proto.picture_i = function () {
		var t = new eui.Image();
		this.picture = t;
		t.anchorOffsetX = 51.52;
		t.anchorOffsetY = 18.18;
		t.source = "scene5_json.5";
		t.x = 143.36;
		t.y = 604.03;
		return t;
	};
	_proto.ping0_i = function () {
		var t = new eui.Image();
		this.ping0 = t;
		t.anchorOffsetX = 17;
		t.anchorOffsetY = 73;
		t.horizontalCenter = -745.5;
		t.source = "scene5_json.6";
		t.verticalCenter = -189.5;
		return t;
	};
	_proto.ping1_i = function () {
		var t = new eui.Image();
		this.ping1 = t;
		t.anchorOffsetX = 20.5;
		t.anchorOffsetY = 56;
		t.source = "scene5_json.7";
		t.x = 713.17;
		t.y = 697.15;
		return t;
	};
	_proto.ping2_i = function () {
		var t = new eui.Image();
		this.ping2 = t;
		t.anchorOffsetX = 20.5;
		t.anchorOffsetY = 56;
		t.source = "scene5_json.7";
		t.x = 759.49;
		t.y = 696.85;
		return t;
	};
	_proto.huapingbox_i = function () {
		var t = new eui.Group();
		this.huapingbox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1893.94;
		t.y = 1004.87;
		return t;
	};
	_proto.rolebox_i = function () {
		var t = new eui.Group();
		this.rolebox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = -162.43;
		t.y = 1013.05;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "scene5_json.3";
		t.x = 1276;
		t.y = 703.5;
		return t;
	};
	_proto.dianbox_i = function () {
		var t = new eui.Group();
		this.dianbox = t;
		t.height = 311;
		t.width = 214;
		t.x = 1276;
		t.y = 703.5;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "scene5_json.8";
		t.x = 473;
		t.y = 842.35;
		return t;
	};
	_proto.light_i = function () {
		var t = new eui.Image();
		this.light = t;
		t.anchorOffsetX = 76;
		t.source = "scene5_json.9";
		t.x = 416;
		t.y = 527.85;
		return t;
	};
	_proto.talk0_i = function () {
		var t = new eui.Component();
		this.talk0 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 339.2;
		t.y = 562.4;
		return t;
	};
	_proto.talk2_i = function () {
		var t = new eui.Component();
		this.talk2 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin1";
		t.visible = false;
		t.x = 181.71;
		t.y = 670.16;
		return t;
	};
	_proto.talk3_i = function () {
		var t = new eui.Component();
		this.talk3 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 209.36;
		t.y = 355.07;
		return t;
	};
	_proto.talk5_i = function () {
		var t = new eui.Component();
		this.talk5 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 482.93;
		t.y = 277.2;
		return t;
	};
	_proto.biaobox_i = function () {
		var t = new eui.Group();
		this.biaobox = t;
		t.height = 0;
		t.horizontalCenter = 7.5;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.y = 410.49;
		return t;
	};
	return GameSkin0005;
})(eui.Skin);generateEUI.paths['resource/skins/map/GameSkin0006.exml'] = window.GameSkin0006 = (function (_super) {
	__extends(GameSkin0006, _super);
	function GameSkin0006() {
		_super.call(this);
		this.skinParts = ["water","pochebox","goubox","penshuibox","rolebox","talk0","talk1","talk2","bg","main"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.main_i()];
	}
	var _proto = GameSkin0006.prototype;

	_proto.main_i = function () {
		var t = new eui.Group();
		this.main = t;
		t.verticalCenter = 116;
		t.x = 0;
		t.elementsContent = [this.bg_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Group();
		this.bg = t;
		t.x = 0;
		t.y = -192;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.water_i(),this.pochebox_i(),this.goubox_i(),this.penshuibox_i(),this.rolebox_i(),this.talk0_i(),this.talk1_i(),this.talk2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1302;
		t.scale9Grid = new egret.Rectangle(176,88,1061,3);
		t.source = "6_1_png";
		t.x = 0;
		t.y = -224;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 626;
		t.scale9Grid = new egret.Rectangle(176,345,1061,15);
		t.source = "6_2_png";
		t.x = -8;
		t.y = 1078;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 626;
		t.scale9Grid = new egret.Rectangle(176,345,1061,15);
		t.source = "6_2_png";
		t.x = 1412;
		t.y = 1078;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1302;
		t.scale9Grid = new egret.Rectangle(176,88,1061,3);
		t.source = "6_4_png";
		t.x = 1384.97;
		t.y = -224;
		return t;
	};
	_proto.water_i = function () {
		var t = new eui.Image();
		this.water = t;
		t.anchorOffsetY = 0;
		t.height = 117;
		t.scaleX = 1.2;
		t.source = "scene6_json.3";
		t.x = 911.79;
		t.y = 844.87;
		return t;
	};
	_proto.pochebox_i = function () {
		var t = new eui.Group();
		this.pochebox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 2108;
		t.y = 834.81;
		return t;
	};
	_proto.goubox_i = function () {
		var t = new eui.Group();
		this.goubox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 473;
		t.y = 910.87;
		return t;
	};
	_proto.penshuibox_i = function () {
		var t = new eui.Group();
		this.penshuibox = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1031.48;
		t.y = 844.02;
		return t;
	};
	_proto.rolebox_i = function () {
		var t = new eui.Group();
		this.rolebox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = -158.43;
		t.y = 901.05;
		return t;
	};
	_proto.talk0_i = function () {
		var t = new eui.Component();
		this.talk0 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 289.2;
		t.y = 426.4;
		return t;
	};
	_proto.talk1_i = function () {
		var t = new eui.Component();
		this.talk1 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 1806.93;
		t.y = 427;
		return t;
	};
	_proto.talk2_i = function () {
		var t = new eui.Component();
		this.talk2 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 863.71;
		t.y = 429;
		return t;
	};
	return GameSkin0006;
})(eui.Skin);generateEUI.paths['resource/skins/map/GameSkin0007.exml'] = window.GameSkin0007 = (function (_super) {
	__extends(GameSkin0007, _super);
	function GameSkin0007() {
		_super.call(this);
		this.skinParts = ["fire0","fire1","fire2","hole","xiaofangyuanbox0","xiaofangyuanbox1","xiaofangyuanbox2","smog","goubox","rolebox","yvbox","talk0","talk4","talk5","talk1","talk2","talk3","bg","main"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.main_i()];
	}
	var _proto = GameSkin0007.prototype;

	_proto.main_i = function () {
		var t = new eui.Group();
		this.main = t;
		t.verticalCenter = 116;
		t.x = 0;
		t.elementsContent = [this.bg_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Group();
		this.bg = t;
		t.x = 0;
		t.y = -192;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.fire0_i(),this.fire1_i(),this.fire2_i(),this.hole_i(),this.xiaofangyuanbox0_i(),this.xiaofangyuanbox1_i(),this.xiaofangyuanbox2_i(),this.smog_i(),this.goubox_i(),this.rolebox_i(),this.yvbox_i(),this.talk0_i(),this.talk4_i(),this.talk5_i(),this.talk1_i(),this.talk2_i(),this.talk3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1302;
		t.scale9Grid = new egret.Rectangle(176,88,1061,3);
		t.source = "7_1_png";
		t.x = 0;
		t.y = -224;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 626;
		t.scale9Grid = new egret.Rectangle(176,345,1061,15);
		t.source = "7_2_png";
		t.x = -8;
		t.y = 1078;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 626;
		t.scale9Grid = new egret.Rectangle(176,345,1061,15);
		t.source = "7_2_png";
		t.x = 1412;
		t.y = 1078;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1302;
		t.scale9Grid = new egret.Rectangle(176,88,1061,3);
		t.source = "7_4_png";
		t.x = 1384.97;
		t.y = -224;
		return t;
	};
	_proto.fire0_i = function () {
		var t = new eui.Group();
		this.fire0 = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 285.58;
		t.y = 469.09;
		return t;
	};
	_proto.fire1_i = function () {
		var t = new eui.Group();
		this.fire1 = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 624;
		t.y = 645.19;
		return t;
	};
	_proto.fire2_i = function () {
		var t = new eui.Group();
		this.fire2 = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 419.21;
		t.y = 344.66;
		return t;
	};
	_proto.hole_i = function () {
		var t = new eui.Image();
		this.hole = t;
		t.scaleX = 0.5;
		t.source = "scene7_json.3";
		t.x = 1921.09;
		t.y = 756.24;
		return t;
	};
	_proto.xiaofangyuanbox0_i = function () {
		var t = new eui.Group();
		this.xiaofangyuanbox0 = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 544.97;
		t.y = 785;
		return t;
	};
	_proto.xiaofangyuanbox1_i = function () {
		var t = new eui.Group();
		this.xiaofangyuanbox1 = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 435.44;
		t.y = 837.16;
		return t;
	};
	_proto.xiaofangyuanbox2_i = function () {
		var t = new eui.Group();
		this.xiaofangyuanbox2 = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 97.16;
		t.y = 782;
		return t;
	};
	_proto.smog_i = function () {
		var t = new eui.Group();
		this.smog = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 0;
		t.y = 430.42;
		return t;
	};
	_proto.goubox_i = function () {
		var t = new eui.Group();
		this.goubox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1284.84;
		t.y = 886.63;
		return t;
	};
	_proto.rolebox_i = function () {
		var t = new eui.Group();
		this.rolebox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = -158.43;
		t.y = 901.05;
		return t;
	};
	_proto.yvbox_i = function () {
		var t = new eui.Group();
		this.yvbox = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1213;
		t.y = 904.61;
		return t;
	};
	_proto.talk0_i = function () {
		var t = new eui.Component();
		this.talk0 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 289.2;
		t.y = 426.4;
		return t;
	};
	_proto.talk4_i = function () {
		var t = new eui.Component();
		this.talk4 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 432.49;
		t.y = 363.69;
		return t;
	};
	_proto.talk5_i = function () {
		var t = new eui.Component();
		this.talk5 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin1";
		t.visible = false;
		t.x = 412.24;
		t.y = 521.03;
		return t;
	};
	_proto.talk1_i = function () {
		var t = new eui.Component();
		this.talk1 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 1249.35;
		t.y = 505.79;
		return t;
	};
	_proto.talk2_i = function () {
		var t = new eui.Component();
		this.talk2 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 964;
		t.y = 429;
		return t;
	};
	_proto.talk3_i = function () {
		var t = new eui.Component();
		this.talk3 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 1886.11;
		t.y = 432.94;
		return t;
	};
	return GameSkin0007;
})(eui.Skin);generateEUI.paths['resource/skins/map/GameSkin0008.exml'] = window.GameSkin0008 = (function (_super) {
	__extends(GameSkin0008, _super);
	function GameSkin0008() {
		_super.call(this);
		this.skinParts = ["Abox","Bbox","Cbox","Dbox","Ebox","Fbox","rolebox","talk0","talk1","talk2","talk3","talk4","talk5","talk6","talk7","bg","main"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.main_i()];
	}
	var _proto = GameSkin0008.prototype;

	_proto.main_i = function () {
		var t = new eui.Group();
		this.main = t;
		t.verticalCenter = 116;
		t.x = 0;
		t.elementsContent = [this.bg_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Group();
		this.bg = t;
		t.x = 0;
		t.y = -192;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.Abox_i(),this.Bbox_i(),this.Cbox_i(),this.Dbox_i(),this.Ebox_i(),this.Fbox_i(),this.rolebox_i(),this.talk0_i(),this.talk1_i(),this.talk2_i(),this.talk3_i(),this.talk4_i(),this.talk5_i(),this.talk6_i(),this.talk7_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1302;
		t.scale9Grid = new egret.Rectangle(176,88,1061,3);
		t.source = "8_0_png";
		t.x = 0;
		t.y = -224;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 626;
		t.scale9Grid = new egret.Rectangle(176,345,1061,15);
		t.source = "8_2_png";
		t.x = 0;
		t.y = 1078;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 626;
		t.scale9Grid = new egret.Rectangle(176,345,1061,15);
		t.source = "8_2_png";
		t.x = 1413;
		t.y = 1078;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1302;
		t.scale9Grid = new egret.Rectangle(176,88,1061,3);
		t.source = "8_1_png";
		t.x = 1125.4;
		t.y = -224;
		return t;
	};
	_proto.Abox_i = function () {
		var t = new eui.Group();
		this.Abox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 428;
		t.y = 1016;
		return t;
	};
	_proto.Bbox_i = function () {
		var t = new eui.Group();
		this.Bbox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 573.73;
		t.y = 1016;
		return t;
	};
	_proto.Cbox_i = function () {
		var t = new eui.Group();
		this.Cbox = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1038.21;
		t.y = 1002;
		return t;
	};
	_proto.Dbox_i = function () {
		var t = new eui.Group();
		this.Dbox = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.name = "rolebox";
		t.rotation = 0.92;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1228.01;
		t.y = 1006.2;
		return t;
	};
	_proto.Ebox_i = function () {
		var t = new eui.Group();
		this.Ebox = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1138.21;
		t.y = 1006;
		return t;
	};
	_proto.Fbox_i = function () {
		var t = new eui.Group();
		this.Fbox = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1088.21;
		t.y = 1005.88;
		return t;
	};
	_proto.rolebox_i = function () {
		var t = new eui.Group();
		this.rolebox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = -158.43;
		t.y = 1020;
		return t;
	};
	_proto.talk0_i = function () {
		var t = new eui.Component();
		this.talk0 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 200;
		t.y = 530.4;
		return t;
	};
	_proto.talk1_i = function () {
		var t = new eui.Component();
		this.talk1 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 452;
		t.y = 545;
		return t;
	};
	_proto.talk2_i = function () {
		var t = new eui.Component();
		this.talk2 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin1";
		t.visible = false;
		t.x = 354;
		t.y = 653;
		return t;
	};
	_proto.talk3_i = function () {
		var t = new eui.Component();
		this.talk3 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 903.01;
		t.y = 546.2;
		return t;
	};
	_proto.talk4_i = function () {
		var t = new eui.Component();
		this.talk4 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 1158.12;
		t.y = 544.28;
		return t;
	};
	_proto.talk5_i = function () {
		var t = new eui.Component();
		this.talk5 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 1034.79;
		t.y = 548.22;
		return t;
	};
	_proto.talk6_i = function () {
		var t = new eui.Component();
		this.talk6 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 1247.82;
		t.y = 555.19;
		return t;
	};
	_proto.talk7_i = function () {
		var t = new eui.Component();
		this.talk7 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 1782.06;
		t.y = 543.97;
		return t;
	};
	return GameSkin0008;
})(eui.Skin);generateEUI.paths['resource/skins/map/GameSkin0009.exml'] = window.GameSkin0009 = (function (_super) {
	__extends(GameSkin0009, _super);
	function GameSkin0009() {
		_super.call(this);
		this.skinParts = ["Abox","Bbox","Cbox","Dbox","Ebox","Fbox","Gbox","Hbox","Ibox","Jbox","rolebox","talk0","talk1","talk2","talk3","talk4","talk5","talk6","talk7","talk8","talk9","talk10","talk11","baozhagroup","bg","main"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.main_i()];
	}
	var _proto = GameSkin0009.prototype;

	_proto.main_i = function () {
		var t = new eui.Group();
		this.main = t;
		t.verticalCenter = 116;
		t.x = 0;
		t.elementsContent = [this.bg_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Group();
		this.bg = t;
		t.x = 0;
		t.y = -192;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this.Abox_i(),this._Image6_i(),this._Image7_i(),this.Bbox_i(),this._Image8_i(),this._Image9_i(),this.Cbox_i(),this._Image10_i(),this._Image11_i(),this.Dbox_i(),this._Image12_i(),this._Image13_i(),this.Ebox_i(),this._Image14_i(),this._Image15_i(),this.Fbox_i(),this._Image16_i(),this._Image17_i(),this.Gbox_i(),this._Image18_i(),this._Image19_i(),this.Hbox_i(),this._Image20_i(),this._Image21_i(),this.Ibox_i(),this._Image22_i(),this.Jbox_i(),this.rolebox_i(),this.talk0_i(),this.talk1_i(),this.talk2_i(),this.talk3_i(),this.talk4_i(),this.talk5_i(),this.talk6_i(),this.talk7_i(),this.talk8_i(),this.talk9_i(),this.talk10_i(),this.talk11_i(),this.baozhagroup_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1302;
		t.scale9Grid = new egret.Rectangle(176,88,1061,3);
		t.source = "scene9_json.4";
		t.x = 0;
		t.y = -224;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 626;
		t.scale9Grid = new egret.Rectangle(176,345,1061,15);
		t.source = "scene9_json.1";
		t.x = 0;
		t.y = 1078;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 626;
		t.scale9Grid = new egret.Rectangle(176,345,1061,15);
		t.source = "scene9_json.1";
		t.x = 1413;
		t.y = 1078;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1302;
		t.scale9Grid = new egret.Rectangle(176,88,1061,3);
		t.source = "scene9_json.4";
		t.x = 1409.97;
		t.y = -224;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "scene9_json.3";
		t.x = 189.2;
		t.y = 763.2;
		return t;
	};
	_proto.Abox_i = function () {
		var t = new eui.Group();
		this.Abox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 264;
		t.y = 1007;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "scene9_json.2";
		t.x = 175.2;
		t.y = 892.8;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "scene9_json.3";
		t.x = 376.93;
		t.y = 763.2;
		return t;
	};
	_proto.Bbox_i = function () {
		var t = new eui.Group();
		this.Bbox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 447.73;
		t.y = 1007;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "scene9_json.2";
		t.x = 362.93;
		t.y = 892.8;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "scene9_json.3";
		t.x = 560.41;
		t.y = 763.2;
		return t;
	};
	_proto.Cbox_i = function () {
		var t = new eui.Group();
		this.Cbox = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 632.21;
		t.y = 1007;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "scene9_json.2";
		t.x = 546.41;
		t.y = 892.8;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "scene9_json.3";
		t.x = 1028.41;
		t.y = 763.2;
		return t;
	};
	_proto.Dbox_i = function () {
		var t = new eui.Group();
		this.Dbox = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.name = "rolebox";
		t.rotation = 0.92;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1102.68;
		t.y = 1006.2;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "scene9_json.2";
		t.x = 1014.41;
		t.y = 892.8;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "scene9_json.3";
		t.x = 1229.09;
		t.y = 763.2;
		return t;
	};
	_proto.Ebox_i = function () {
		var t = new eui.Group();
		this.Ebox = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1300.73;
		t.y = 1006;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "scene9_json.2";
		t.x = 1215.09;
		t.y = 892.8;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "scene9_json.3";
		t.x = 1423.97;
		t.y = 763.2;
		return t;
	};
	_proto.Fbox_i = function () {
		var t = new eui.Group();
		this.Fbox = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1498.78;
		t.y = 1005.88;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "scene9_json.2";
		t.x = 1409.97;
		t.y = 892.8;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "scene9_json.3";
		t.x = 1909.94;
		t.y = 763.2;
		return t;
	};
	_proto.Gbox_i = function () {
		var t = new eui.Group();
		this.Gbox = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1987.25;
		t.y = 1007;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "scene9_json.2";
		t.x = 1895.94;
		t.y = 892.8;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "scene9_json.3";
		t.x = 2118.35;
		t.y = 768;
		return t;
	};
	_proto.Hbox_i = function () {
		var t = new eui.Group();
		this.Hbox = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 2162.45;
		t.y = 1036.53;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "scene9_json.2";
		t.x = 2104.35;
		t.y = 897.6;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "scene9_json.3";
		t.x = 2328.35;
		t.y = 763.2;
		return t;
	};
	_proto.Ibox_i = function () {
		var t = new eui.Group();
		this.Ibox = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 2372.16;
		t.y = 1036.53;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "scene9_json.2";
		t.x = 2314.35;
		t.y = 892.8;
		return t;
	};
	_proto.Jbox_i = function () {
		var t = new eui.Group();
		this.Jbox = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.name = "rolebox";
		t.rotation = 0.92;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1112.68;
		t.y = 1016.2;
		return t;
	};
	_proto.rolebox_i = function () {
		var t = new eui.Group();
		this.rolebox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = -158.43;
		t.y = 1053.87;
		return t;
	};
	_proto.talk0_i = function () {
		var t = new eui.Component();
		this.talk0 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 100;
		t.y = 551.61;
		return t;
	};
	_proto.talk1_i = function () {
		var t = new eui.Component();
		this.talk1 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 269;
		t.y = 545;
		return t;
	};
	_proto.talk2_i = function () {
		var t = new eui.Component();
		this.talk2 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin1";
		t.visible = false;
		t.x = 392.93;
		t.y = 545;
		return t;
	};
	_proto.talk3_i = function () {
		var t = new eui.Component();
		this.talk3 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 1000;
		t.y = 546.2;
		return t;
	};
	_proto.talk4_i = function () {
		var t = new eui.Component();
		this.talk4 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 1088.21;
		t.y = 546.2;
		return t;
	};
	_proto.talk5_i = function () {
		var t = new eui.Component();
		this.talk5 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 1283.64;
		t.y = 534.4;
		return t;
	};
	_proto.talk6_i = function () {
		var t = new eui.Component();
		this.talk6 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin1";
		t.visible = false;
		t.x = 1257.5;
		t.y = 528.35;
		return t;
	};
	_proto.talk7_i = function () {
		var t = new eui.Component();
		this.talk7 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 418.93;
		t.y = 545;
		return t;
	};
	_proto.talk8_i = function () {
		var t = new eui.Component();
		this.talk8 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 1870;
		t.y = 555;
		return t;
	};
	_proto.talk9_i = function () {
		var t = new eui.Component();
		this.talk9 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 1969.74;
		t.y = 549.6;
		return t;
	};
	_proto.talk10_i = function () {
		var t = new eui.Component();
		this.talk10 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 2169.06;
		t.y = 549.6;
		return t;
	};
	_proto.talk11_i = function () {
		var t = new eui.Component();
		this.talk11 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin1";
		t.visible = false;
		t.x = 2152.95;
		t.y = 549.6;
		return t;
	};
	_proto.baozhagroup_i = function () {
		var t = new eui.Group();
		this.baozhagroup = t;
		t.anchorOffsetX = 192;
		t.anchorOffsetY = 108;
		t.height = 216;
		t.width = 384;
		t.x = 1123.28;
		t.y = 1010.88;
		return t;
	};
	return GameSkin0009;
})(eui.Skin);generateEUI.paths['resource/skins/map/GameSkin0010.exml'] = window.GameSkin0010 = (function (_super) {
	__extends(GameSkin0010, _super);
	function GameSkin0010() {
		_super.call(this);
		this.skinParts = ["water","keng","rolebox","huoduibox","talk0","talk1","talk2","talk3","wuzibox","bg","main"];
		
		this.height = 1280;
		this.width = 2720;
		this.elementsContent = [this.main_i()];
	}
	var _proto = GameSkin0010.prototype;

	_proto.main_i = function () {
		var t = new eui.Group();
		this.main = t;
		t.verticalCenter = 116;
		t.x = 0;
		t.elementsContent = [this.bg_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Group();
		this.bg = t;
		t.x = 0;
		t.y = -192;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.keng_i(),this.rolebox_i(),this.huoduibox_i(),this.talk0_i(),this.talk1_i(),this.talk2_i(),this.talk3_i(),this.wuzibox_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1302;
		t.scale9Grid = new egret.Rectangle(0,0,974,18);
		t.source = "scene10_json.1";
		t.x = 0;
		t.y = -224;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1302;
		t.scale9Grid = new egret.Rectangle(0,1,1128,6);
		t.source = "scene10_json.2";
		t.x = 973;
		t.y = -224;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 626;
		t.scale9Grid = new egret.Rectangle(2,1,2,4);
		t.source = "bg1_png";
		t.width = 2102;
		t.x = 0;
		t.y = 1078;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "scene10_json.yezishu";
		t.x = 468.52;
		t.y = 465;
		return t;
	};
	_proto.keng_i = function () {
		var t = new eui.Group();
		this.keng = t;
		t.visible = false;
		t.x = 297;
		t.y = 995;
		t.elementsContent = [this._Image5_i(),this.water_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "scene10_json.keng";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.water_i = function () {
		var t = new eui.Image();
		this.water = t;
		t.horizontalCenter = 0.5;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "scene10_json.shui";
		t.verticalCenter = 2;
		return t;
	};
	_proto.rolebox_i = function () {
		var t = new eui.Group();
		this.rolebox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = -158.43;
		t.y = 1037.87;
		return t;
	};
	_proto.huoduibox_i = function () {
		var t = new eui.Group();
		this.huoduibox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 851.53;
		t.y = 1029.69;
		return t;
	};
	_proto.talk0_i = function () {
		var t = new eui.Component();
		this.talk0 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 220;
		t.y = 587.61;
		return t;
	};
	_proto.talk1_i = function () {
		var t = new eui.Component();
		this.talk1 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 702.69;
		t.y = 585.07;
		return t;
	};
	_proto.talk2_i = function () {
		var t = new eui.Component();
		this.talk2 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 1295.4;
		t.y = 566.32;
		return t;
	};
	_proto.talk3_i = function () {
		var t = new eui.Component();
		this.talk3 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 1469.4;
		t.y = 536.32;
		return t;
	};
	_proto.wuzibox_i = function () {
		var t = new eui.Group();
		this.wuzibox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 975.77;
		t.y = 1008.48;
		return t;
	};
	return GameSkin0010;
})(eui.Skin);generateEUI.paths['resource/skins/map/GameSkin0011.exml'] = window.GameSkin0011 = (function (_super) {
	__extends(GameSkin0011, _super);
	function GameSkin0011() {
		_super.call(this);
		this.skinParts = ["tree","cao","keng","yangbox","yangbox2","tengman","wuyunbox","rolebox","talk0","talk1","talk2","talk3","bg","main"];
		
		this.height = 1280;
		this.width = 2720;
		this.elementsContent = [this.main_i()];
	}
	var _proto = GameSkin0011.prototype;

	_proto.main_i = function () {
		var t = new eui.Group();
		this.main = t;
		t.verticalCenter = 116;
		t.x = 0;
		t.elementsContent = [this.bg_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Group();
		this.bg = t;
		t.x = 0;
		t.y = -192;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.tree_i(),this.keng_i(),this.yangbox_i(),this.yangbox2_i(),this.tengman_i(),this.wuyunbox_i(),this.rolebox_i(),this.talk0_i(),this.talk1_i(),this.talk2_i(),this.talk3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1302;
		t.scale9Grid = new egret.Rectangle(1051,0,0,1);
		t.source = "scene11_json.1";
		t.x = 0;
		t.y = -224;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1302;
		t.scale9Grid = new egret.Rectangle(1051,0,0,1);
		t.source = "scene11_json.2";
		t.x = 1050;
		t.y = -224;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 626;
		t.scale9Grid = new egret.Rectangle(1,1,4,3);
		t.source = "bg1_png";
		t.width = 2104;
		t.x = 0;
		t.y = 1078;
		return t;
	};
	_proto.tree_i = function () {
		var t = new eui.Image();
		this.tree = t;
		t.source = "scene11_json.12bigtree";
		t.x = 1572;
		t.y = 352;
		return t;
	};
	_proto.keng_i = function () {
		var t = new eui.Group();
		this.keng = t;
		t.scaleX = 1.8;
		t.scaleY = 1.1;
		t.x = 814.59;
		t.y = 947.61;
		t.elementsContent = [this._Image4_i(),this.cao_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "scene10_json.keng";
		t.verticalCenter = 0;
		return t;
	};
	_proto.cao_i = function () {
		var t = new eui.Image();
		this.cao = t;
		t.source = "scene11_json.12xianjing";
		t.x = 0;
		t.y = 5.5;
		return t;
	};
	_proto.yangbox_i = function () {
		var t = new eui.Group();
		this.yangbox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 646.78;
		t.y = 1024.54;
		return t;
	};
	_proto.yangbox2_i = function () {
		var t = new eui.Group();
		this.yangbox2 = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1420.41;
		t.y = 1025.45;
		return t;
	};
	_proto.tengman_i = function () {
		var t = new eui.Image();
		this.tengman = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "scene11_json.ms";
		t.x = 375.52;
		t.y = 614.5;
		return t;
	};
	_proto.wuyunbox_i = function () {
		var t = new eui.Group();
		this.wuyunbox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1511.57;
		t.y = 940.24;
		return t;
	};
	_proto.rolebox_i = function () {
		var t = new eui.Group();
		this.rolebox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = -158.43;
		t.y = 1020.54;
		return t;
	};
	_proto.talk0_i = function () {
		var t = new eui.Component();
		this.talk0 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 220;
		t.y = 539.13;
		return t;
	};
	_proto.talk1_i = function () {
		var t = new eui.Component();
		this.talk1 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 751.17;
		t.y = 542.65;
		return t;
	};
	_proto.talk2_i = function () {
		var t = new eui.Component();
		this.talk2 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 1543.89;
		t.y = 536.02;
		return t;
	};
	_proto.talk3_i = function () {
		var t = new eui.Component();
		this.talk3 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 1858.8;
		t.y = 618.4;
		return t;
	};
	return GameSkin0011;
})(eui.Skin);generateEUI.paths['resource/skins/map/GameSkin0012.exml'] = window.GameSkin0012 = (function (_super) {
	__extends(GameSkin0012, _super);
	function GameSkin0012() {
		_super.call(this);
		this.skinParts = ["men","rolebox","waixingbox0","waixingbox1","talk0","talk1","talk2","talk3","talk4","jiguang","result","bg","main"];
		
		this.height = 1280;
		this.width = 2720;
		this.elementsContent = [this.main_i()];
	}
	var _proto = GameSkin0012.prototype;

	_proto.main_i = function () {
		var t = new eui.Group();
		this.main = t;
		t.verticalCenter = 116;
		t.x = 0;
		t.elementsContent = [this.bg_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Group();
		this.bg = t;
		t.x = 0;
		t.y = -192;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.men_i(),this._Image4_i(),this.rolebox_i(),this.waixingbox0_i(),this.waixingbox1_i(),this.talk0_i(),this.talk1_i(),this.talk2_i(),this.talk3_i(),this.talk4_i(),this._Image5_i(),this.jiguang_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this.result_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1302;
		t.scale9Grid = new egret.Rectangle(118,9,709,3);
		t.source = "scene12_json.1";
		t.x = 0;
		t.y = -224;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1302;
		t.scale9Grid = new egret.Rectangle(118,9,709,3);
		t.source = "scene12_json.2";
		t.x = 1210;
		t.y = -224;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 626;
		t.scale9Grid = new egret.Rectangle(1,1,4,3);
		t.source = "bg1_png";
		t.width = 2328;
		t.x = 0;
		t.y = 1078;
		return t;
	};
	_proto.men_i = function () {
		var t = new eui.Image();
		this.men = t;
		t.source = "scene12_json.5";
		t.x = 702.57;
		t.y = 609.36;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 1302;
		t.scale9Grid = new egret.Rectangle(25,13,150,15);
		t.source = "scene12_json.3";
		t.x = 663.41;
		t.y = -239.18;
		return t;
	};
	_proto.rolebox_i = function () {
		var t = new eui.Group();
		this.rolebox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = -158.43;
		t.y = 1020.54;
		return t;
	};
	_proto.waixingbox0_i = function () {
		var t = new eui.Group();
		this.waixingbox0 = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1196.66;
		t.y = 1010.05;
		return t;
	};
	_proto.waixingbox1_i = function () {
		var t = new eui.Group();
		this.waixingbox1 = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 139.51;
		t.y = 999.33;
		return t;
	};
	_proto.talk0_i = function () {
		var t = new eui.Component();
		this.talk0 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 350.3;
		t.y = 533.07;
		return t;
	};
	_proto.talk1_i = function () {
		var t = new eui.Component();
		this.talk1 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 963.29;
		t.y = 542.65;
		return t;
	};
	_proto.talk2_i = function () {
		var t = new eui.Component();
		this.talk2 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin1";
		t.visible = false;
		t.x = 970.74;
		t.y = 559.62;
		return t;
	};
	_proto.talk3_i = function () {
		var t = new eui.Component();
		this.talk3 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 1701.22;
		t.y = 503.24;
		return t;
	};
	_proto.talk4_i = function () {
		var t = new eui.Component();
		this.talk4 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 1702.13;
		t.y = 601.11;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "scene12_json.4";
		t.x = 769.49;
		t.y = 713.79;
		return t;
	};
	_proto.jiguang_i = function () {
		var t = new eui.Image();
		this.jiguang = t;
		t.anchorOffsetY = 18;
		t.rotation = 320.28;
		t.scale9Grid = new egret.Rectangle(0,2,152,32);
		t.scaleY = 0;
		t.source = "scene12_json.bd";
		t.width = 440;
		t.x = 383.61;
		t.y = 797.99;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "scene12_json.tang1";
		t.x = 1868.54;
		t.y = 797.16;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "scene12_json.tang2";
		t.x = 1990.82;
		t.y = 796.99;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "scene12_json.tang3";
		t.x = 2106.29;
		t.y = 798.27;
		return t;
	};
	_proto.result_i = function () {
		var t = new eui.Image();
		this.result = t;
		t.horizontalCenter = -732;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "scene12_json.correct";
		t.verticalCenter = -394.5;
		t.visible = false;
		return t;
	};
	return GameSkin0012;
})(eui.Skin);generateEUI.paths['resource/skins/map/GameSkin0013.exml'] = window.GameSkin0013 = (function (_super) {
	__extends(GameSkin0013, _super);
	function GameSkin0013() {
		_super.call(this);
		this.skinParts = ["zhiwu","ice","zhiwubox","xianjing","rolebox","mujianbox","jingbaobox","waixingbox0","talk0","talk1","talk2","talk3","talk4","bg","warning","main"];
		
		this.height = 1280;
		this.width = 2720;
		this.elementsContent = [this.main_i()];
	}
	var _proto = GameSkin0013.prototype;

	_proto.main_i = function () {
		var t = new eui.Group();
		this.main = t;
		t.verticalCenter = 116;
		t.x = 0;
		t.elementsContent = [this.bg_i(),this.warning_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Group();
		this.bg = t;
		t.x = 0;
		t.y = -192;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.zhiwubox_i(),this.xianjing_i(),this._Image5_i(),this.rolebox_i(),this.mujianbox_i(),this.jingbaobox_i(),this.waixingbox0_i(),this.talk0_i(),this.talk1_i(),this.talk2_i(),this.talk3_i(),this.talk4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1302;
		t.scale9Grid = new egret.Rectangle(118,9,709,3);
		t.source = "scene13_json.1";
		t.x = 0;
		t.y = -224;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1302;
		t.scale9Grid = new egret.Rectangle(118,9,709,3);
		t.source = "scene13_json.1";
		t.x = 1722;
		t.y = -224;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1302;
		t.scale9Grid = new egret.Rectangle(118,9,709,3);
		t.source = "scene13_json.2";
		t.x = 842;
		t.y = -224;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 626;
		t.scale9Grid = new egret.Rectangle(1,1,4,3);
		t.source = "bg1_png";
		t.width = 2568.33;
		t.x = 0;
		t.y = 1078;
		return t;
	};
	_proto.zhiwubox_i = function () {
		var t = new eui.Group();
		this.zhiwubox = t;
		t.x = 349.73;
		t.y = 883;
		t.elementsContent = [this.zhiwu_i(),this.ice_i()];
		return t;
	};
	_proto.zhiwu_i = function () {
		var t = new eui.Image();
		this.zhiwu = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "scene13_json.shu";
		t.x = 12.77;
		t.y = 0;
		return t;
	};
	_proto.ice_i = function () {
		var t = new eui.Image();
		this.ice = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "scene13_json.ice";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.xianjing_i = function () {
		var t = new eui.Rect();
		this.xianjing = t;
		t.ellipseWidth = 200;
		t.height = 40;
		t.visible = false;
		t.width = 200;
		t.x = 1493.31;
		t.y = 960.44;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "scene13_json.anniu";
		t.x = 1681.6;
		t.y = 670.5;
		return t;
	};
	_proto.rolebox_i = function () {
		var t = new eui.Group();
		this.rolebox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = -148.43;
		t.y = 980;
		return t;
	};
	_proto.mujianbox_i = function () {
		var t = new eui.Group();
		this.mujianbox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1618.05;
		t.y = 906.24;
		return t;
	};
	_proto.jingbaobox_i = function () {
		var t = new eui.Group();
		this.jingbaobox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 570.47;
		t.y = 593;
		return t;
	};
	_proto.waixingbox0_i = function () {
		var t = new eui.Group();
		this.waixingbox0 = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = -156.74;
		t.y = 980;
		return t;
	};
	_proto.talk0_i = function () {
		var t = new eui.Component();
		this.talk0 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 226.3;
		t.y = 485.07;
		return t;
	};
	_proto.talk1_i = function () {
		var t = new eui.Component();
		this.talk1 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 755.4;
		t.y = 526.65;
		return t;
	};
	_proto.talk2_i = function () {
		var t = new eui.Component();
		this.talk2 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin1";
		t.visible = false;
		t.x = 970.74;
		t.y = 559.62;
		return t;
	};
	_proto.talk3_i = function () {
		var t = new eui.Component();
		this.talk3 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 1604.4;
		t.y = 515.24;
		return t;
	};
	_proto.talk4_i = function () {
		var t = new eui.Component();
		this.talk4 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 1702.13;
		t.y = 601.11;
		return t;
	};
	_proto.warning_i = function () {
		var t = new eui.Image();
		this.warning = t;
		t.alpha = 0;
		t.height = 1704;
		t.scale9Grid = new egret.Rectangle(2,1,2,3);
		t.source = "scene13_json.bg";
		t.width = 720;
		t.x = 0;
		t.y = -192;
		return t;
	};
	return GameSkin0013;
})(eui.Skin);generateEUI.paths['resource/skins/map/GameSkin0014.exml'] = window.GameSkin0014 = (function (_super) {
	__extends(GameSkin0014, _super);
	function GameSkin0014() {
		_super.call(this);
		this.skinParts = ["background0","background1","earth","rolebox","mujianbox","st0","st1","fc","chuan","ren","background2","talk0","talk1","talk2","talk3","talk4","bgmask","bg","main"];
		
		this.height = 1280;
		this.width = 4000;
		this.elementsContent = [this.main_i()];
	}
	var _proto = GameSkin0014.prototype;

	_proto.main_i = function () {
		var t = new eui.Group();
		this.main = t;
		t.verticalCenter = 116;
		t.x = 0;
		t.elementsContent = [this.bg_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Group();
		this.bg = t;
		t.x = 0;
		t.y = -192;
		t.elementsContent = [this.background0_i(),this.background1_i(),this._Image5_i(),this.earth_i(),this.rolebox_i(),this.mujianbox_i(),this.st0_i(),this.st1_i(),this.fc_i(),this.background2_i(),this.talk0_i(),this.talk1_i(),this.talk2_i(),this.talk3_i(),this.talk4_i(),this.bgmask_i()];
		return t;
	};
	_proto.background0_i = function () {
		var t = new eui.Group();
		this.background0 = t;
		t.x = 0;
		t.y = -224;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1302;
		t.scale9Grid = new egret.Rectangle(118,9,709,3);
		t.source = "scene14_json.1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1302;
		t.scale9Grid = new egret.Rectangle(118,9,709,3);
		t.source = "scene14_json.2";
		t.x = 1010;
		t.y = 0;
		return t;
	};
	_proto.background1_i = function () {
		var t = new eui.Group();
		this.background1 = t;
		t.x = 2100;
		t.y = -224;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1302;
		t.scale9Grid = new egret.Rectangle(118,9,709,3);
		t.source = "scene14_json.1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1302;
		t.scale9Grid = new egret.Rectangle(118,9,709,3);
		t.source = "scene14_json.2";
		t.x = 1010;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 626;
		t.scale9Grid = new egret.Rectangle(1,1,4,3);
		t.source = "scene14_json.bg";
		t.width = 2735;
		t.x = 0;
		t.y = 1066;
		return t;
	};
	_proto.earth_i = function () {
		var t = new eui.Image();
		this.earth = t;
		t.anchorOffsetX = 179.5;
		t.anchorOffsetY = 179.5;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "scene14_json.earth";
		t.x = 730;
		t.y = 816;
		return t;
	};
	_proto.rolebox_i = function () {
		var t = new eui.Group();
		this.rolebox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = -148.43;
		t.y = 946.66;
		return t;
	};
	_proto.mujianbox_i = function () {
		var t = new eui.Group();
		this.mujianbox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 514.05;
		t.y = 906.24;
		return t;
	};
	_proto.st0_i = function () {
		var t = new eui.Image();
		this.st0 = t;
		t.anchorOffsetX = 166.5;
		t.anchorOffsetY = 120;
		t.source = "scene14_json.st0";
		t.x = 1118.5;
		t.y = 624;
		return t;
	};
	_proto.st1_i = function () {
		var t = new eui.Image();
		this.st1 = t;
		t.anchorOffsetX = 154;
		t.anchorOffsetY = 90.5;
		t.source = "scene14_json.st1";
		t.x = 1106;
		t.y = 996.5;
		return t;
	};
	_proto.fc_i = function () {
		var t = new eui.Image();
		this.fc = t;
		t.anchorOffsetX = 180.5;
		t.anchorOffsetY = 81;
		t.source = "scene14_json.fc";
		t.x = 961.5;
		t.y = 825;
		return t;
	};
	_proto.background2_i = function () {
		var t = new eui.Group();
		this.background2 = t;
		t.x = 0;
		t.y = -224;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this.chuan_i(),this.ren_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 1302;
		t.scale9Grid = new egret.Rectangle(90,32,540,19);
		t.source = "scene14_json.3";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 626;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "scene14_json.bg2";
		t.width = 720;
		t.x = 0;
		t.y = 1290;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "scene14_json.dao";
		t.x = 123.2;
		t.y = 774.12;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "scene14_json.dao";
		t.x = 316;
		t.y = 774.12;
		return t;
	};
	_proto.chuan_i = function () {
		var t = new eui.Image();
		this.chuan = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "scene14_json.chuan";
		t.x = 730;
		t.y = 811.47;
		return t;
	};
	_proto.ren_i = function () {
		var t = new eui.Image();
		this.ren = t;
		t.anchorOffsetX = 172.49;
		t.anchorOffsetY = 386.95;
		t.scaleX = 0.65;
		t.scaleY = 0.65;
		t.source = "scene14_json.role";
		t.x = 113;
		t.y = 1234;
		return t;
	};
	_proto.talk0_i = function () {
		var t = new eui.Component();
		this.talk0 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 192.98;
		t.y = 526.74;
		return t;
	};
	_proto.talk1_i = function () {
		var t = new eui.Component();
		this.talk1 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 755.4;
		t.y = 526.65;
		return t;
	};
	_proto.talk2_i = function () {
		var t = new eui.Component();
		this.talk2 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin1";
		t.visible = false;
		t.x = 970.74;
		t.y = 559.62;
		return t;
	};
	_proto.talk3_i = function () {
		var t = new eui.Component();
		this.talk3 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 1604.4;
		t.y = 515.24;
		return t;
	};
	_proto.talk4_i = function () {
		var t = new eui.Component();
		this.talk4 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 1702.13;
		t.y = 601.11;
		return t;
	};
	_proto.bgmask_i = function () {
		var t = new eui.Rect();
		this.bgmask = t;
		t.height = 1916;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return GameSkin0014;
})(eui.Skin);generateEUI.paths['resource/skins/map/GameSkin0015.exml'] = window.GameSkin0015 = (function (_super) {
	__extends(GameSkin0015, _super);
	function GameSkin0015() {
		_super.call(this);
		this.skinParts = ["yvbox","renfanzibox","chebox0","baobiaobox","chebox1","talk0","rolebox","talk1","talk2","talk3","talk4","bg","main"];
		
		this.height = 1280;
		this.width = 4000;
		this.elementsContent = [this.main_i()];
	}
	var _proto = GameSkin0015.prototype;

	_proto.main_i = function () {
		var t = new eui.Group();
		this.main = t;
		t.verticalCenter = 116;
		t.x = 0;
		t.elementsContent = [this.bg_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Group();
		this.bg = t;
		t.x = 0;
		t.y = -192;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this.yvbox_i(),this.renfanzibox_i(),this.chebox0_i(),this.baobiaobox_i(),this.chebox1_i(),this.rolebox_i(),this.talk1_i(),this.talk2_i(),this.talk3_i(),this.talk4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1302;
		t.scale9Grid = new egret.Rectangle(118,9,709,3);
		t.source = "scene15_json.1";
		t.x = 0;
		t.y = -224;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1302;
		t.scale9Grid = new egret.Rectangle(118,9,709,3);
		t.source = "scene15_json.1";
		t.x = 1432;
		t.y = -224;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1302;
		t.scale9Grid = new egret.Rectangle(118,9,709,3);
		t.source = "scene15_json.1";
		t.x = 2864;
		t.y = -224;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "scene15_json.4";
		t.x = 0;
		t.y = 185.6;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "scene15_json.3";
		t.x = 555.15;
		t.y = 254.75;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 626;
		t.scale9Grid = new egret.Rectangle(1,1,4,3);
		t.source = "bg_png";
		t.width = 4500;
		t.x = 0;
		t.y = 1078;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 195.67;
		t.scale9Grid = new egret.Rectangle(2,13,1,78);
		t.source = "scene15_json.2";
		t.width = 4500;
		t.x = 0;
		t.y = 883.03;
		return t;
	};
	_proto.yvbox_i = function () {
		var t = new eui.Group();
		this.yvbox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 497.57;
		t.y = 980;
		return t;
	};
	_proto.renfanzibox_i = function () {
		var t = new eui.Group();
		this.renfanzibox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 596.57;
		t.y = 980;
		return t;
	};
	_proto.chebox0_i = function () {
		var t = new eui.Group();
		this.chebox0 = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1438.57;
		t.y = 966;
		return t;
	};
	_proto.baobiaobox_i = function () {
		var t = new eui.Group();
		this.baobiaobox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1312.57;
		t.y = 972;
		return t;
	};
	_proto.chebox1_i = function () {
		var t = new eui.Group();
		this.chebox1 = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1716.57;
		t.y = 980;
		return t;
	};
	_proto.rolebox_i = function () {
		var t = new eui.Group();
		this.rolebox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = -148.43;
		t.y = 980;
		t.elementsContent = [this.talk0_i()];
		return t;
	};
	_proto.talk0_i = function () {
		var t = new eui.Component();
		this.talk0 = t;
		t.name = "talk0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 0;
		t.y = -462.93;
		return t;
	};
	_proto.talk1_i = function () {
		var t = new eui.Component();
		this.talk1 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 589.4;
		t.y = 512.65;
		return t;
	};
	_proto.talk2_i = function () {
		var t = new eui.Component();
		this.talk2 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin1";
		t.visible = false;
		t.x = 282.74;
		t.y = 615.62;
		return t;
	};
	_proto.talk3_i = function () {
		var t = new eui.Component();
		this.talk3 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 1604.4;
		t.y = 515.24;
		return t;
	};
	_proto.talk4_i = function () {
		var t = new eui.Component();
		this.talk4 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 1299.32;
		t.y = 489.86;
		return t;
	};
	return GameSkin0015;
})(eui.Skin);generateEUI.paths['resource/skins/map/GameSkin0016.exml'] = window.GameSkin0016 = (function (_super) {
	__extends(GameSkin0016, _super);
	var GameSkin0016$Skin1 = 	(function (_super) {
		__extends(GameSkin0016$Skin1, _super);
		function GameSkin0016$Skin1() {
			_super.call(this);
			this.skinParts = [];
			
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSkin0016$Skin1.prototype;

		return GameSkin0016$Skin1;
	})(eui.Skin);

	function GameSkin0016() {
		_super.call(this);
		this.skinParts = ["home","ground","paper","bg1","fire0","fire1","fire2","jiangshibox2","jiangshibox1","jiangshibox0","talk0","rolebox","talk1","talk2","talk3","talk4","bg","bgmask","main"];
		
		this.height = 1280;
		this.width = 4000;
		this.elementsContent = [this.main_i()];
	}
	var _proto = GameSkin0016.prototype;

	_proto.main_i = function () {
		var t = new eui.Group();
		this.main = t;
		t.verticalCenter = 116;
		t.x = 0;
		t.elementsContent = [this.bg_i(),this.bgmask_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Group();
		this.bg = t;
		t.x = 0;
		t.y = -192;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.home_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this.bg1_i(),this.fire0_i(),this.fire1_i(),this.fire2_i(),this.jiangshibox2_i(),this.jiangshibox1_i(),this.jiangshibox0_i(),this.rolebox_i(),this.talk1_i(),this.talk2_i(),this.talk3_i(),this.talk4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1302;
		t.scale9Grid = new egret.Rectangle(118,9,709,3);
		t.source = "1_jpg";
		t.x = 0;
		t.y = -224;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1302;
		t.scale9Grid = new egret.Rectangle(118,9,709,3);
		t.source = "1_jpg";
		t.x = 1432;
		t.y = -224;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "scene16_json.res";
		t.x = 275.24;
		t.y = 340.06;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "scene16_json.nomal";
		t.x = 1149;
		t.y = 238.06;
		return t;
	};
	_proto.home_i = function () {
		var t = new eui.Image();
		this.home = t;
		t.alpha = 0;
		t.source = "scene16_json.shao";
		t.x = 1149;
		t.y = 238.06;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1302;
		t.scale9Grid = new egret.Rectangle(118,9,709,3);
		t.source = "1_jpg";
		t.x = 2864;
		t.y = -224;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 626;
		t.scale9Grid = new egret.Rectangle(1,1,4,3);
		t.source = "bg_png";
		t.width = 4500;
		t.x = 0;
		t.y = 1078;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 195.67;
		t.scale9Grid = new egret.Rectangle(5,13,1,78);
		t.source = "4_png";
		t.width = 4500;
		t.x = 0;
		t.y = 883.03;
		return t;
	};
	_proto.bg1_i = function () {
		var t = new eui.Group();
		this.bg1 = t;
		t.height = 1074.36;
		t.visible = false;
		t.width = 1413;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image8_i(),this.ground_i(),this._Image9_i(),this.paper_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1074.36;
		t.scale9Grid = new egret.Rectangle(176,15,1061,15);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "scene16_json.1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ground_i = function () {
		var t = new eui.Image();
		this.ground = t;
		t.source = "scene16_json.ground";
		t.visible = false;
		t.x = 476.43;
		t.y = 944.01;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "scene16_json.2";
		t.x = 397.43;
		t.y = 716.33;
		return t;
	};
	_proto.paper_i = function () {
		var t = new eui.Image();
		this.paper = t;
		t.scaleX = 0.2;
		t.scaleY = 0.2;
		t.source = "scene16_json.paper";
		t.x = 545.03;
		t.y = 886.06;
		return t;
	};
	_proto.fire0_i = function () {
		var t = new eui.Group();
		this.fire0 = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1274.57;
		t.y = 423.98;
		return t;
	};
	_proto.fire1_i = function () {
		var t = new eui.Group();
		this.fire1 = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1203.36;
		t.y = 537.68;
		return t;
	};
	_proto.fire2_i = function () {
		var t = new eui.Group();
		this.fire2 = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1224.57;
		t.y = 260.66;
		return t;
	};
	_proto.jiangshibox2_i = function () {
		var t = new eui.Group();
		this.jiangshibox2 = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1367.42;
		t.y = 942.85;
		return t;
	};
	_proto.jiangshibox1_i = function () {
		var t = new eui.Group();
		this.jiangshibox1 = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1312.57;
		t.y = 988;
		return t;
	};
	_proto.jiangshibox0_i = function () {
		var t = new eui.Group();
		this.jiangshibox0 = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1402.63;
		t.y = 1012.24;
		return t;
	};
	_proto.rolebox_i = function () {
		var t = new eui.Group();
		this.rolebox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = -148.43;
		t.y = 980;
		t.elementsContent = [this.talk0_i()];
		return t;
	};
	_proto.talk0_i = function () {
		var t = new eui.Component();
		this.talk0 = t;
		t.name = "talk0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 0;
		t.y = -462.93;
		return t;
	};
	_proto.talk1_i = function () {
		var t = new eui.Component();
		this.talk1 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 589.4;
		t.y = 512.65;
		return t;
	};
	_proto.talk2_i = function () {
		var t = new eui.Component();
		this.talk2 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin1";
		t.visible = false;
		t.x = 282.74;
		t.y = 615.62;
		return t;
	};
	_proto.talk3_i = function () {
		var t = new eui.Component();
		this.talk3 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 1604.4;
		t.y = 515.24;
		return t;
	};
	_proto.talk4_i = function () {
		var t = new eui.Component();
		this.talk4 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 1299.32;
		t.y = 489.86;
		return t;
	};
	_proto.bgmask_i = function () {
		var t = new eui.Rect();
		this.bgmask = t;
		t.anchorOffsetY = 0;
		t.height = 1866.66;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 720;
		t.x = 0;
		t.y = -166.65;
		t.skinName = GameSkin0016$Skin1;
		return t;
	};
	return GameSkin0016;
})(eui.Skin);generateEUI.paths['resource/skins/map/GameSkin0017.exml'] = window.GameSkin0017 = (function (_super) {
	__extends(GameSkin0017, _super);
	function GameSkin0017() {
		_super.call(this);
		this.skinParts = ["mutou","niao1box","wang","yerenbox","talk0","rolebox","talk1","talk2","talk3","talk4","shitou","shitoubox","bg","main"];
		
		this.height = 1280;
		this.width = 4000;
		this.elementsContent = [this.main_i()];
	}
	var _proto = GameSkin0017.prototype;

	_proto.main_i = function () {
		var t = new eui.Group();
		this.main = t;
		t.verticalCenter = 116;
		t.x = 0;
		t.elementsContent = [this.bg_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Group();
		this.bg = t;
		t.y = -192;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this.mutou_i(),this.niao1box_i(),this.wang_i(),this.yerenbox_i(),this.rolebox_i(),this.talk1_i(),this.talk2_i(),this.talk3_i(),this.talk4_i(),this.shitoubox_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1668.67;
		t.scale9Grid = new egret.Rectangle(118,9,709,3);
		t.source = "bg_01_png";
		t.x = 0;
		t.y = -247.4;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1710.34;
		t.scale9Grid = new egret.Rectangle(118,9,709,3);
		t.source = "bg_02_png";
		t.x = 1611;
		t.y = -289.07;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 407;
		t.scale9Grid = new egret.Rectangle(5,5,37,37);
		t.source = "scene17_json.di";
		t.width = 3007.34;
		t.x = 0;
		t.y = 1281.64;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "scene17_json.tree1";
		t.x = 384.46;
		t.y = 428.08;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "scene17_json.tree2";
		t.x = 1274.16;
		t.y = 327.82;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "scene17_json.tree3";
		t.x = 2552;
		t.y = 228.58;
		return t;
	};
	_proto.mutou_i = function () {
		var t = new eui.Image();
		this.mutou = t;
		t.anchorOffsetX = 65.5;
		t.anchorOffsetY = 41.5;
		t.source = "scene17_json.mutou";
		t.visible = false;
		t.x = 2729.5;
		t.y = 721.5;
		return t;
	};
	_proto.niao1box_i = function () {
		var t = new eui.Group();
		this.niao1box = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1513.86;
		t.y = 509.32;
		return t;
	};
	_proto.wang_i = function () {
		var t = new eui.Image();
		this.wang = t;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "scene17_json.wang";
		t.x = 1383.85;
		t.y = 355.75;
		return t;
	};
	_proto.yerenbox_i = function () {
		var t = new eui.Group();
		this.yerenbox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 519.86;
		t.y = 1023.32;
		return t;
	};
	_proto.rolebox_i = function () {
		var t = new eui.Group();
		this.rolebox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = -148.43;
		t.y = 1013.32;
		t.elementsContent = [this.talk0_i()];
		return t;
	};
	_proto.talk0_i = function () {
		var t = new eui.Component();
		this.talk0 = t;
		t.name = "talk0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 0;
		t.y = -462.93;
		return t;
	};
	_proto.talk1_i = function () {
		var t = new eui.Component();
		this.talk1 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 589.4;
		t.y = 512.65;
		return t;
	};
	_proto.talk2_i = function () {
		var t = new eui.Component();
		this.talk2 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin1";
		t.visible = false;
		t.x = 282.74;
		t.y = 615.62;
		return t;
	};
	_proto.talk3_i = function () {
		var t = new eui.Component();
		this.talk3 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 1604.4;
		t.y = 515.24;
		return t;
	};
	_proto.talk4_i = function () {
		var t = new eui.Component();
		this.talk4 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 1299.32;
		t.y = 489.86;
		return t;
	};
	_proto.shitoubox_i = function () {
		var t = new eui.Group();
		this.shitoubox = t;
		t.x = 2473;
		t.y = 949.58;
		t.elementsContent = [this.shitou_i()];
		return t;
	};
	_proto.shitou_i = function () {
		var t = new eui.Image();
		this.shitou = t;
		t.scaleX = 0.65;
		t.scaleY = 0.65;
		t.source = "scene17_json.shitou";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return GameSkin0017;
})(eui.Skin);generateEUI.paths['resource/skins/map/GameSkin0018.exml'] = window.GameSkin0018 = (function (_super) {
	__extends(GameSkin0018, _super);
	function GameSkin0018() {
		_super.call(this);
		this.skinParts = ["peach","mifengbox","laohubox","effectgroup","maobox","talk0","rolebox","talk1","talk2","talk3","talk4","bg","main"];
		
		this.height = 1280;
		this.width = 4000;
		this.elementsContent = [this.main_i()];
	}
	var _proto = GameSkin0018.prototype;

	_proto.main_i = function () {
		var t = new eui.Group();
		this.main = t;
		t.verticalCenter = 116;
		t.x = 0;
		t.elementsContent = [this.bg_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Group();
		this.bg = t;
		t.y = -192;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this.peach_i(),this.mifengbox_i(),this.laohubox_i(),this.effectgroup_i(),this.maobox_i(),this.rolebox_i(),this.talk1_i(),this.talk2_i(),this.talk3_i(),this.talk4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1668.67;
		t.scale9Grid = new egret.Rectangle(118,9,709,3);
		t.source = "bgzzz_png";
		t.x = 0;
		t.y = -247.4;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1710.34;
		t.scale9Grid = new egret.Rectangle(118,3,709,3);
		t.source = "bg2_png";
		t.x = 1409;
		t.y = -289.07;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 407;
		t.scale9Grid = new egret.Rectangle(5,5,37,37);
		t.source = "scene18_json.di";
		t.width = 3007.34;
		t.x = 0;
		t.y = 1281.64;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "scene18_json.tree1";
		t.x = 241.2;
		t.y = 583.32;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "scene18_json.tree0";
		t.x = 1069.22;
		t.y = 626.62;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "scene18_json.tree3";
		t.x = 1493.03;
		t.y = 555.14;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "scene18_json.tree2";
		t.x = 2451.01;
		t.y = 425.93;
		return t;
	};
	_proto.peach_i = function () {
		var t = new eui.Image();
		this.peach = t;
		t.source = "scene18_json.peach";
		t.x = 2509.25;
		t.y = 658.07;
		return t;
	};
	_proto.mifengbox_i = function () {
		var t = new eui.Group();
		this.mifengbox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1949.86;
		t.y = 743.32;
		return t;
	};
	_proto.laohubox_i = function () {
		var t = new eui.Group();
		this.laohubox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 545.31;
		t.y = 984.64;
		return t;
	};
	_proto.effectgroup_i = function () {
		var t = new eui.Group();
		this.effectgroup = t;
		t.height = 128;
		t.width = 128;
		t.x = 1122.22;
		t.y = 737;
		return t;
	};
	_proto.maobox_i = function () {
		var t = new eui.Group();
		this.maobox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 241.98;
		t.y = 1009.08;
		return t;
	};
	_proto.rolebox_i = function () {
		var t = new eui.Group();
		this.rolebox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = -148.43;
		t.y = 1013.32;
		t.elementsContent = [this.talk0_i()];
		return t;
	};
	_proto.talk0_i = function () {
		var t = new eui.Component();
		this.talk0 = t;
		t.name = "talk0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 0;
		t.y = -462.93;
		return t;
	};
	_proto.talk1_i = function () {
		var t = new eui.Component();
		this.talk1 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 589.4;
		t.y = 512.65;
		return t;
	};
	_proto.talk2_i = function () {
		var t = new eui.Component();
		this.talk2 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin1";
		t.visible = false;
		t.x = 282.74;
		t.y = 615.62;
		return t;
	};
	_proto.talk3_i = function () {
		var t = new eui.Component();
		this.talk3 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 1604.4;
		t.y = 515.24;
		return t;
	};
	_proto.talk4_i = function () {
		var t = new eui.Component();
		this.talk4 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 1299.32;
		t.y = 489.86;
		return t;
	};
	return GameSkin0018;
})(eui.Skin);generateEUI.paths['resource/skins/map/GameSkin0019.exml'] = window.GameSkin0019 = (function (_super) {
	__extends(GameSkin0019, _super);
	function GameSkin0019() {
		_super.call(this);
		this.skinParts = ["men","talk1","haizibox","talk2","laonongbox","talk0","rolebox","talk3","talk4","musicbox","bg","main"];
		
		this.height = 1280;
		this.width = 4000;
		this.elementsContent = [this.main_i()];
	}
	var _proto = GameSkin0019.prototype;

	_proto.main_i = function () {
		var t = new eui.Group();
		this.main = t;
		t.verticalCenter = 116;
		t.x = 0;
		t.elementsContent = [this.bg_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Group();
		this.bg = t;
		t.y = -192;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.men_i(),this._Image4_i(),this.haizibox_i(),this.laonongbox_i(),this.rolebox_i(),this.talk3_i(),this.talk4_i(),this.musicbox_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1668.67;
		t.scale9Grid = new egret.Rectangle(118,9,709,3);
		t.source = "bg19a_png";
		t.x = 0;
		t.y = -364;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1710.34;
		t.scale9Grid = new egret.Rectangle(118,3,709,3);
		t.source = "bg19b_png";
		t.x = 1023;
		t.y = -406;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 407;
		t.scale9Grid = new egret.Rectangle(5,5,37,37);
		t.source = "scene19_json.di";
		t.width = 2050;
		t.x = 0;
		t.y = 1281.64;
		return t;
	};
	_proto.men_i = function () {
		var t = new eui.Image();
		this.men = t;
		t.source = "scene19_json.left";
		t.x = 1569.48;
		t.y = 814;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 149;
		t.source = "scene19_json.right";
		t.x = 1871;
		t.y = 813;
		return t;
	};
	_proto.haizibox_i = function () {
		var t = new eui.Group();
		this.haizibox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1100;
		t.y = 1000.89;
		t.elementsContent = [this.talk1_i()];
		return t;
	};
	_proto.talk1_i = function () {
		var t = new eui.Component();
		this.talk1 = t;
		t.name = "talk0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 0;
		t.y = -376.24;
		return t;
	};
	_proto.laonongbox_i = function () {
		var t = new eui.Group();
		this.laonongbox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 513.01;
		t.y = 1006.82;
		t.elementsContent = [this.talk2_i()];
		return t;
	};
	_proto.talk2_i = function () {
		var t = new eui.Component();
		this.talk2 = t;
		t.name = "talk0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = -25.76;
		t.y = -509.38;
		return t;
	};
	_proto.rolebox_i = function () {
		var t = new eui.Group();
		this.rolebox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = -148.43;
		t.y = 1010;
		t.elementsContent = [this.talk0_i()];
		return t;
	};
	_proto.talk0_i = function () {
		var t = new eui.Component();
		this.talk0 = t;
		t.name = "talk0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 0;
		t.y = -462.93;
		return t;
	};
	_proto.talk3_i = function () {
		var t = new eui.Component();
		this.talk3 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 1604.4;
		t.y = 515.24;
		return t;
	};
	_proto.talk4_i = function () {
		var t = new eui.Component();
		this.talk4 = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 1299.32;
		t.y = 489.86;
		return t;
	};
	_proto.musicbox_i = function () {
		var t = new eui.Group();
		this.musicbox = t;
		t.height = 50;
		t.name = "mombox0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1730.72;
		t.y = 832;
		return t;
	};
	return GameSkin0019;
})(eui.Skin);generateEUI.paths['resource/skins/map/GameSkin0020.exml'] = window.GameSkin0020 = (function (_super) {
	__extends(GameSkin0020, _super);
	function GameSkin0020() {
		_super.call(this);
		this.skinParts = ["yue","fire0","fire1","fire2","mhqbox","wuyunbox","huojianbox","talk1","shoupiaobox","talk2","haidaobox","talk0","rolebox","huiyi","bigrole","bg","main"];
		
		this.height = 1280;
		this.width = 4000;
		this.elementsContent = [this.main_i()];
	}
	var _proto = GameSkin0020.prototype;

	_proto.main_i = function () {
		var t = new eui.Group();
		this.main = t;
		t.verticalCenter = 116;
		t.x = 0;
		t.elementsContent = [this.bg_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Group();
		this.bg = t;
		t.height = 1689;
		t.y = -192;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.yue_i(),this.fire0_i(),this.fire1_i(),this.fire2_i(),this.mhqbox_i(),this.wuyunbox_i(),this.huojianbox_i(),this.shoupiaobox_i(),this.haidaobox_i(),this.rolebox_i(),this.huiyi_i(),this.bigrole_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1668.67;
		t.scale9Grid = new egret.Rectangle(118,0,709,1);
		t.source = "bg20a_png";
		t.x = 0;
		t.y = -364;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1710.34;
		t.scale9Grid = new egret.Rectangle(118,3,709,3);
		t.source = "bg20b_png";
		t.x = 1219;
		t.y = -406;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 407;
		t.scale9Grid = new egret.Rectangle(5,5,37,37);
		t.source = "scene20_json.di";
		t.width = 2050;
		t.x = 0;
		t.y = 1281.64;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "scene20_json.qiqiu";
		t.x = 1410.69;
		t.y = 258.5;
		return t;
	};
	_proto.yue_i = function () {
		var t = new eui.Image();
		this.yue = t;
		t.anchorOffsetX = 70;
		t.anchorOffsetY = 73.5;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "ItemUI_json.item117";
		t.visible = false;
		t.x = 1130;
		t.y = 616;
		return t;
	};
	_proto.fire0_i = function () {
		var t = new eui.Group();
		this.fire0 = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1689.91;
		t.y = 890.74;
		return t;
	};
	_proto.fire1_i = function () {
		var t = new eui.Group();
		this.fire1 = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1623;
		t.y = 867.5;
		return t;
	};
	_proto.fire2_i = function () {
		var t = new eui.Group();
		this.fire2 = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1653.54;
		t.y = 854.29;
		return t;
	};
	_proto.mhqbox_i = function () {
		var t = new eui.Group();
		this.mhqbox = t;
		t.height = 50;
		t.name = "rolebox";
		t.rotation = 70;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1349.54;
		t.y = 672.29;
		return t;
	};
	_proto.wuyunbox_i = function () {
		var t = new eui.Group();
		this.wuyunbox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1659.54;
		t.y = 1024.94;
		return t;
	};
	_proto.huojianbox_i = function () {
		var t = new eui.Group();
		this.huojianbox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1611.54;
		t.y = 1014.29;
		return t;
	};
	_proto.shoupiaobox_i = function () {
		var t = new eui.Group();
		this.shoupiaobox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 655.43;
		t.y = 1022.82;
		t.elementsContent = [this.talk1_i()];
		return t;
	};
	_proto.talk1_i = function () {
		var t = new eui.Component();
		this.talk1 = t;
		t.name = "talk0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "TalkSkin1";
		t.visible = false;
		t.x = -235;
		t.y = -468.44;
		return t;
	};
	_proto.haidaobox_i = function () {
		var t = new eui.Group();
		this.haidaobox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1130;
		t.y = 1016.89;
		t.elementsContent = [this.talk2_i()];
		return t;
	};
	_proto.talk2_i = function () {
		var t = new eui.Component();
		this.talk2 = t;
		t.name = "talk0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 0;
		t.y = -473.16;
		return t;
	};
	_proto.rolebox_i = function () {
		var t = new eui.Group();
		this.rolebox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 355.9;
		t.y = 1020;
		t.elementsContent = [this.talk0_i()];
		return t;
	};
	_proto.talk0_i = function () {
		var t = new eui.Component();
		this.talk0 = t;
		t.name = "talk0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 0;
		t.y = -388.93;
		return t;
	};
	_proto.huiyi_i = function () {
		var t = new eui.Group();
		this.huiyi = t;
		t.height = 1689;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "bluebg_jpeg";
		t.x = 0;
		t.y = -184;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "scene20_json.wenzi";
		t.x = 1;
		t.y = 414.62;
		return t;
	};
	_proto.bigrole_i = function () {
		var t = new eui.Group();
		this.bigrole = t;
		t.height = 10;
		t.width = 10;
		t.x = 355.9;
		t.y = 1020;
		return t;
	};
	return GameSkin0020;
})(eui.Skin);generateEUI.paths['resource/skins/map/GameSkin0021.exml'] = window.GameSkin0021 = (function (_super) {
	__extends(GameSkin0021, _super);
	function GameSkin0021() {
		_super.call(this);
		this.skinParts = ["talk1","haizibox0","haizibox2","shadiao","gou","laorenbox0","talk2","laorenbox1","fengzheng","talk0","rolebox","goubox","bg","main"];
		
		this.height = 1280;
		this.width = 4000;
		this.elementsContent = [this.main_i()];
	}
	var _proto = GameSkin0021.prototype;

	_proto.main_i = function () {
		var t = new eui.Group();
		this.main = t;
		t.verticalCenter = 116.5;
		t.x = -2;
		t.elementsContent = [this.bg_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Group();
		this.bg = t;
		t.y = -192;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.haizibox0_i(),this.haizibox2_i(),this.shadiao_i(),this.gou_i(),this._Image4_i(),this.laorenbox0_i(),this.laorenbox1_i(),this._Image5_i(),this.fengzheng_i(),this.rolebox_i(),this.goubox_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1668.67;
		t.scale9Grid = new egret.Rectangle(118,9,709,3);
		t.source = "bg21a_png";
		t.x = 0;
		t.y = -364;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1710.34;
		t.scale9Grid = new egret.Rectangle(118,3,709,3);
		t.source = "bg21b_png";
		t.x = 925;
		t.y = -406;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 407;
		t.scale9Grid = new egret.Rectangle(3,4,1,1);
		t.source = "scene21_json.di";
		t.width = 2050;
		t.x = 0;
		t.y = 1281.64;
		return t;
	};
	_proto.haizibox0_i = function () {
		var t = new eui.Group();
		this.haizibox0 = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 490;
		t.y = 988.89;
		t.elementsContent = [this.talk1_i()];
		return t;
	};
	_proto.talk1_i = function () {
		var t = new eui.Component();
		this.talk1 = t;
		t.name = "talk0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 0;
		t.y = -376.24;
		return t;
	};
	_proto.haizibox2_i = function () {
		var t = new eui.Group();
		this.haizibox2 = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 298;
		t.y = 972.89;
		return t;
	};
	_proto.shadiao_i = function () {
		var t = new eui.Image();
		this.shadiao = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "scene21_json.shabao";
		t.visible = false;
		t.x = 335.87;
		t.y = 890.63;
		return t;
	};
	_proto.gou_i = function () {
		var t = new eui.Image();
		this.gou = t;
		t.source = "scene21_json.dog";
		t.x = 920.9;
		t.y = 940.49;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "scene21_json.shitou";
		t.x = 895.8;
		t.y = 940.49;
		return t;
	};
	_proto.laorenbox0_i = function () {
		var t = new eui.Group();
		this.laorenbox0 = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1010;
		t.y = 1000;
		return t;
	};
	_proto.laorenbox1_i = function () {
		var t = new eui.Group();
		this.laorenbox1 = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1134;
		t.y = 1000.89;
		t.elementsContent = [this.talk2_i()];
		return t;
	};
	_proto.talk2_i = function () {
		var t = new eui.Component();
		this.talk2 = t;
		t.name = "talk0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "TalkSkin1";
		t.visible = false;
		t.x = -235;
		t.y = -468.24;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "scene21_json.changdeng";
		t.x = 1636;
		t.y = 918;
		return t;
	};
	_proto.fengzheng_i = function () {
		var t = new eui.Image();
		this.fengzheng = t;
		t.source = "scene21_json.fengzheng";
		t.x = 1602;
		t.y = 760;
		return t;
	};
	_proto.rolebox_i = function () {
		var t = new eui.Group();
		this.rolebox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = -148.43;
		t.y = 1010;
		t.elementsContent = [this.talk0_i()];
		return t;
	};
	_proto.talk0_i = function () {
		var t = new eui.Component();
		this.talk0 = t;
		t.name = "talk0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 0;
		t.y = -371.3;
		return t;
	};
	_proto.goubox_i = function () {
		var t = new eui.Group();
		this.goubox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1452;
		t.y = 1010;
		return t;
	};
	return GameSkin0021;
})(eui.Skin);generateEUI.paths['resource/skins/map/GameSkin0022.exml'] = window.GameSkin0022 = (function (_super) {
	__extends(GameSkin0022, _super);
	function GameSkin0022() {
		_super.call(this);
		this.skinParts = ["chatou","warn","bingdubox","talk1","talk2","jiqirenbox","gongchengshibox","jixiebibox","yybox","talk0","rolebox","bg","main"];
		
		this.height = 1280;
		this.width = 4000;
		this.elementsContent = [this.main_i()];
	}
	var _proto = GameSkin0022.prototype;

	_proto.main_i = function () {
		var t = new eui.Group();
		this.main = t;
		t.verticalCenter = 116.5;
		t.x = -2;
		t.elementsContent = [this.bg_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Group();
		this.bg = t;
		t.y = -192;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.chatou_i(),this._Group1_i(),this.bingdubox_i(),this.jiqirenbox_i(),this.gongchengshibox_i(),this.jixiebibox_i(),this.yybox_i(),this.rolebox_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1843.67;
		t.scale9Grid = new egret.Rectangle(118,0,709,4);
		t.source = "bg22a_png";
		t.x = 0;
		t.y = -423;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1843.67;
		t.scale9Grid = new egret.Rectangle(118,3,709,3);
		t.source = "bg22b_png";
		t.x = 1731;
		t.y = -423.33;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 294.88;
		t.scale9Grid = new egret.Rectangle(3,4,1,1);
		t.source = "scene22_json.di";
		t.width = 3072;
		t.x = 0;
		t.y = 1393.76;
		return t;
	};
	_proto.chatou_i = function () {
		var t = new eui.Image();
		this.chatou = t;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 248.53;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "ItemUI_json.item131";
		t.x = 1971.7;
		t.y = 486.18;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 1589.76;
		t.y = 398.97;
		t.elementsContent = [this._Image4_i(),this.warn_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "scene22_json.baojingqi";
		t.x = 30.74;
		t.y = 45.51;
		return t;
	};
	_proto.warn_i = function () {
		var t = new eui.Image();
		this.warn = t;
		t.source = "scene22_json.baojingqi2";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bingdubox_i = function () {
		var t = new eui.Group();
		this.bingdubox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1522.12;
		t.y = 739.39;
		return t;
	};
	_proto.jiqirenbox_i = function () {
		var t = new eui.Group();
		this.jiqirenbox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 506.66;
		t.y = 993.22;
		t.elementsContent = [this.talk1_i(),this.talk2_i()];
		return t;
	};
	_proto.talk1_i = function () {
		var t = new eui.Component();
		this.talk1 = t;
		t.name = "talk0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "TalkSkin1";
		t.visible = false;
		t.x = -235;
		t.y = -497.45;
		return t;
	};
	_proto.talk2_i = function () {
		var t = new eui.Component();
		this.talk2 = t;
		t.name = "talk0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 0;
		t.y = -497;
		return t;
	};
	_proto.gongchengshibox_i = function () {
		var t = new eui.Group();
		this.gongchengshibox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 2850;
		t.y = 724.89;
		return t;
	};
	_proto.jixiebibox_i = function () {
		var t = new eui.Group();
		this.jixiebibox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 2358;
		t.y = 764.89;
		return t;
	};
	_proto.yybox_i = function () {
		var t = new eui.Group();
		this.yybox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 2484;
		t.y = 394.89;
		return t;
	};
	_proto.rolebox_i = function () {
		var t = new eui.Group();
		this.rolebox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = -148.43;
		t.y = 993.33;
		t.elementsContent = [this.talk0_i()];
		return t;
	};
	_proto.talk0_i = function () {
		var t = new eui.Component();
		this.talk0 = t;
		t.name = "talk0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 0;
		t.y = -471.97;
		return t;
	};
	return GameSkin0022;
})(eui.Skin);generateEUI.paths['resource/skins/map/GameSkin0023.exml'] = window.GameSkin0023 = (function (_super) {
	__extends(GameSkin0023, _super);
	function GameSkin0023() {
		_super.call(this);
		this.skinParts = ["talk1","gongjiaobox3","talk3","gongjiaobox1","gongjiaobox2","shadiao","laorenbox0","talk2","laorenbox1","talk0","rolebox","bg","main"];
		
		this.height = 1280;
		this.width = 4000;
		this.elementsContent = [this.main_i()];
	}
	var _proto = GameSkin0023.prototype;

	_proto.main_i = function () {
		var t = new eui.Group();
		this.main = t;
		t.verticalCenter = 116.5;
		t.x = -2;
		t.elementsContent = [this.bg_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Group();
		this.bg = t;
		t.y = -192;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.gongjiaobox3_i(),this.gongjiaobox1_i(),this.gongjiaobox2_i(),this.shadiao_i(),this.laorenbox0_i(),this.laorenbox1_i(),this.rolebox_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1470;
		t.scale9Grid = new egret.Rectangle(118,0,709,2);
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "bg23a_jpg";
		t.x = 0;
		t.y = -406;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1470;
		t.scale9Grid = new egret.Rectangle(118,3,709,3);
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "bg23b_jpg";
		t.x = 1249.13;
		t.y = -406;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 407;
		t.scale9Grid = new egret.Rectangle(3,4,1,1);
		t.source = "scene20_json.di";
		t.width = 2542;
		t.x = 0;
		t.y = 1281.64;
		return t;
	};
	_proto.gongjiaobox3_i = function () {
		var t = new eui.Group();
		this.gongjiaobox3 = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 606;
		t.y = 964.89;
		t.elementsContent = [this.talk1_i()];
		return t;
	};
	_proto.talk1_i = function () {
		var t = new eui.Component();
		this.talk1 = t;
		t.name = "talk0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 0;
		t.y = -376.24;
		return t;
	};
	_proto.gongjiaobox1_i = function () {
		var t = new eui.Group();
		this.gongjiaobox1 = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 405.38;
		t.y = 977.05;
		t.elementsContent = [this.talk3_i()];
		return t;
	};
	_proto.talk3_i = function () {
		var t = new eui.Component();
		this.talk3 = t;
		t.name = "talk0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 0;
		t.y = -376.24;
		return t;
	};
	_proto.gongjiaobox2_i = function () {
		var t = new eui.Group();
		this.gongjiaobox2 = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1951.51;
		t.y = 972.89;
		return t;
	};
	_proto.shadiao_i = function () {
		var t = new eui.Image();
		this.shadiao = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "scene21_json.shabao";
		t.visible = false;
		t.x = 335.87;
		t.y = 890.63;
		return t;
	};
	_proto.laorenbox0_i = function () {
		var t = new eui.Group();
		this.laorenbox0 = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1010;
		t.y = 1000;
		return t;
	};
	_proto.laorenbox1_i = function () {
		var t = new eui.Group();
		this.laorenbox1 = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = 1134;
		t.y = 1000.89;
		t.elementsContent = [this.talk2_i()];
		return t;
	};
	_proto.talk2_i = function () {
		var t = new eui.Component();
		this.talk2 = t;
		t.name = "talk0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "TalkSkin1";
		t.visible = false;
		t.x = -235;
		t.y = -468.24;
		return t;
	};
	_proto.rolebox_i = function () {
		var t = new eui.Group();
		this.rolebox = t;
		t.height = 50;
		t.name = "rolebox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 50;
		t.x = -148.43;
		t.y = 1010;
		t.elementsContent = [this.talk0_i()];
		return t;
	};
	_proto.talk0_i = function () {
		var t = new eui.Component();
		this.talk0 = t;
		t.name = "talk0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "TalkSkin0";
		t.visible = false;
		t.x = 0;
		t.y = -473.49;
		return t;
	};
	return GameSkin0023;
})(eui.Skin);generateEUI.paths['resource/skins/panel/HelpRankItem.exml'] = window.HelpRankItem = (function (_super) {
	__extends(HelpRankItem, _super);
	function HelpRankItem() {
		_super.call(this);
		this.skinParts = ["icon","rank","rankicon","username","times"];
		
		this.height = 80;
		this.width = 500;
		this.elementsContent = [this.icon_i(),this.rank_i(),this.rankicon_i(),this.username_i(),this._Label1_i(),this._Label2_i(),this.times_i(),this._Rect1_i()];
	}
	var _proto = HelpRankItem.prototype;

	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.source = "windowUI_json.by_zlp_01";
		t.x = 65.33;
		t.y = 8;
		return t;
	};
	_proto.rank_i = function () {
		var t = new eui.Label();
		this.rank = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 24;
		t.text = "助力";
		t.textColor = 0x000000;
		t.verticalCenter = -2;
		t.width = 48;
		t.x = 9.17;
		return t;
	};
	_proto.rankicon_i = function () {
		var t = new eui.Image();
		this.rankicon = t;
		t.source = "windowUI_json.icon_no1";
		t.x = 13.67;
		t.y = 19;
		return t;
	};
	_proto.username_i = function () {
		var t = new eui.Label();
		this.username = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 24;
		t.text = "昵称昵称";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.width = 181.67;
		t.x = 146;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 24;
		t.text = "助力";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.width = 48;
		t.x = 335.17;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 24;
		t.text = "次";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.width = 30;
		t.x = 445.87;
		return t;
	};
	_proto.times_i = function () {
		var t = new eui.BitmapLabel();
		this.times = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "sz_fnt";
		t.height = 27.5;
		t.letterSpacing = -3;
		t.text = "111";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 76;
		t.x = 377.37;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.ellipseWidth = 2;
		t.fillColor = 0xddd7d7;
		t.height = 2;
		t.horizontalCenter = 0;
		t.width = 500;
		return t;
	};
	return HelpRankItem;
})(eui.Skin);generateEUI.paths['resource/skins/panel/SetUpBtn.exml'] = window.SetUpBtn = (function (_super) {
	__extends(SetUpBtn, _super);
	function SetUpBtn() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "on";
		this.height = 53;
		this.width = 151;
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("on",
				[
				])
			,
			new eui.State ("off",
				[
					new eui.SetProperty("_Image1","source","setupUI_json.Font_bbsz_04"),
					new eui.SetProperty("_Image2","x",99)
				])
		];
	}
	var _proto = SetUpBtn.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "setupUI_json.Font_bbsz_05";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.source = "setupUI_json.Font_bbsz_03";
		t.x = 9;
		t.y = 7;
		return t;
	};
	return SetUpBtn;
})(eui.Skin);generateEUI.paths['resource/skins/panel/SkinItem.exml'] = window.SkinItem = (function (_super) {
	__extends(SkinItem, _super);
	function SkinItem() {
		_super.call(this);
		this.skinParts = ["bg","role","lock","tips","dress"];
		
		this.height = 196;
		this.width = 161;
		this.elementsContent = [this.bg_i(),this.role_i(),this.lock_i(),this.tips_i(),this.dress_i()];
	}
	var _proto = SkinItem.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "skinUI_json.bb_pf_07";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.role_i = function () {
		var t = new eui.Image();
		this.role = t;
		t.horizontalCenter = 0;
		t.source = "skinUI_json.bb_pf_02";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lock_i = function () {
		var t = new eui.Image();
		this.lock = t;
		t.horizontalCenter = 0;
		t.source = "skinUI_json.bb_pf_13";
		t.verticalCenter = 0;
		return t;
	};
	_proto.tips_i = function () {
		var t = new eui.Label();
		this.tips = t;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 26;
		t.stroke = 2;
		t.text = "敬请期待";
		t.verticalCenter = 0;
		return t;
	};
	_proto.dress_i = function () {
		var t = new eui.Image();
		this.dress = t;
		t.source = "skinUI_json.bb_pf_04";
		t.x = 0;
		t.y = 135.2;
		return t;
	};
	return SkinItem;
})(eui.Skin);generateEUI.paths['resource/skins/panel/TalkImageSkin.exml'] = window.TalkImageSkin = (function (_super) {
	__extends(TalkImageSkin, _super);
	function TalkImageSkin() {
		_super.call(this);
		this.skinParts = ["showAni","main","group"];
		
		this.height = 213.6;
		this.width = 235.2;
		this.showAni_i();
		this.elementsContent = [this.group_i()];
		
		eui.Binding.$bindProperties(this, ["group"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleY");
	}
	var _proto = TalkImageSkin.prototype;

	_proto.showAni_i = function () {
		var t = new egret.tween.TweenGroup();
		this.showAni = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.alpha = 1;
		t.anchorOffsetX = -1;
		t.anchorOffsetY = 214;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -1;
		t.y = 214;
		t.elementsContent = [this._Image1_i(),this.main_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "mainUI_json.talk";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.main_i = function () {
		var t = new eui.Image();
		this.main = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "mainUI_json.bang";
		t.y = 30;
		return t;
	};
	return TalkImageSkin;
})(eui.Skin);generateEUI.paths['resource/skins/panel/TestLevelItemSkin.exml'] = window.TestLevelItemSkin = (function (_super) {
	__extends(TestLevelItemSkin, _super);
	function TestLevelItemSkin() {
		_super.call(this);
		this.skinParts = ["rect","txt"];
		
		this.height = 100;
		this.width = 550;
		this.elementsContent = [this.rect_i(),this.txt_i()];
	}
	var _proto = TestLevelItemSkin.prototype;

	_proto.rect_i = function () {
		var t = new eui.Image();
		this.rect = t;
		t.height = 100;
		t.scale9Grid = new egret.Rectangle(156,41,84,15);
		t.source = "mainUI_json.BY_JSL_04";
		t.width = 550;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txt_i = function () {
		var t = new eui.Label();
		this.txt = t;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 45;
		t.stroke = 3;
		t.text = "100";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	return TestLevelItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/PopWindowsSkin.exml'] = window.PopWindowsSkin = (function (_super) {
	__extends(PopWindowsSkin, _super);
	function PopWindowsSkin() {
		_super.call(this);
		this.skinParts = ["bg","text","yes","no","main"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.bg_i(),this.main_i()];
	}
	var _proto = PopWindowsSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Rect();
		this.bg = t;
		t.anchorOffsetY = 0;
		t.ellipseWidth = 100;
		t.fillAlpha = 0.35;
		t.fillColor = 0x000000;
		t.height = 1280;
		t.horizontalCenter = 0;
		t.width = 720;
		t.y = 0;
		return t;
	};
	_proto.main_i = function () {
		var t = new eui.Group();
		this.main = t;
		t.anchorOffsetX = 300;
		t.anchorOffsetY = 176;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Rect1_i(),this.text_i(),this.yes_i(),this.no_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.ellipseWidth = 100;
		t.fillColor = 0xffffff;
		t.height = 352;
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.text_i = function () {
		var t = new eui.Label();
		this.text = t;
		t.size = 40;
		t.text = "您已在房间中，是否回到该房间";
		t.textColor = 0x000000;
		t.x = 20;
		t.y = 127.15;
		return t;
	};
	_proto.yes_i = function () {
		var t = new eui.Group();
		this.yes = t;
		t.x = 324;
		t.y = 240;
		t.elementsContent = [this._Rect2_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.ellipseWidth = 50;
		t.fillColor = 0xC1E07B;
		t.height = 80;
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 40;
		t.text = "是";
		t.textColor = 0x000000;
		t.x = 80;
		t.y = 20;
		return t;
	};
	_proto.no_i = function () {
		var t = new eui.Group();
		this.no = t;
		t.x = 74;
		t.y = 240;
		t.elementsContent = [this._Rect3_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.ellipseWidth = 50;
		t.fillColor = 0xc1e07b;
		t.height = 80;
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 40;
		t.text = "否";
		t.textColor = 0x000000;
		t.x = 80;
		t.y = 20;
		return t;
	};
	return PopWindowsSkin;
})(eui.Skin);generateEUI.paths['resource/skins/PvpLobbySkin.exml'] = window.PvpLobbySkin = (function (_super) {
	__extends(PvpLobbySkin, _super);
	function PvpLobbySkin() {
		_super.call(this);
		this.skinParts = ["createroom","joinroom","match","close_btn","roomnum"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this.createroom_i(),this.joinroom_i(),this.match_i(),this.close_btn_i(),this.roomnum_i()];
	}
	var _proto = PvpLobbySkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseWidth = 100;
		t.fillColor = 0xf4e0b5;
		t.height = 360.24;
		t.horizontalCenter = 0.5;
		t.verticalCenter = -67;
		t.width = 536.67;
		return t;
	};
	_proto.createroom_i = function () {
		var t = new eui.Group();
		this.createroom = t;
		t.horizontalCenter = 0;
		t.y = 432;
		t.elementsContent = [this._Rect2_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseWidth = 100;
		t.fillColor = 0xc0d635;
		t.height = 120;
		t.width = 400;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 60;
		t.text = "创建房间";
		t.x = 80.34;
		t.y = 30;
		return t;
	};
	_proto.joinroom_i = function () {
		var t = new eui.Group();
		this.joinroom = t;
		t.height = 60;
		t.horizontalCenter = 144;
		t.width = 200;
		t.y = 785.24;
		t.elementsContent = [this._Rect3_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseWidth = 100;
		t.fillColor = 0xC0D635;
		t.height = 60;
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "加入房间";
		t.verticalCenter = 0;
		return t;
	};
	_proto.match_i = function () {
		var t = new eui.Group();
		this.match = t;
		t.horizontalCenter = 0;
		t.y = 582.12;
		t.elementsContent = [this._Rect4_i(),this._Label3_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseWidth = 100;
		t.fillColor = 0xC0D635;
		t.height = 120;
		t.width = 400;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 60;
		t.text = "匹配对手";
		t.x = 80.34;
		t.y = 30;
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new eui.Rect();
		this.close_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseWidth = 98;
		t.fillColor = 0xff0000;
		t.height = 50;
		t.horizontalCenter = 244;
		t.verticalCenter = -222;
		t.width = 50;
		return t;
	};
	_proto.roomnum_i = function () {
		var t = new eui.TextInput();
		this.roomnum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 68;
		t.text = "sda ";
		t.width = 248;
		t.x = 112;
		t.y = 781.24;
		return t;
	};
	return PvpLobbySkin;
})(eui.Skin);generateEUI.paths['resource/skins/PvpPopSkin.exml'] = window.PvpPopSkin = (function (_super) {
	__extends(PvpPopSkin, _super);
	function PvpPopSkin() {
		_super.call(this);
		this.skinParts = ["text","yes","no"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this.text_i(),this.yes_i(),this.no_i()];
	}
	var _proto = PvpPopSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.ellipseWidth = 100;
		t.fillColor = 0xffffff;
		t.height = 352;
		t.horizontalCenter = 0;
		t.width = 600;
		t.y = 472.85;
		return t;
	};
	_proto.text_i = function () {
		var t = new eui.Label();
		this.text = t;
		t.size = 40;
		t.text = "您已在房间中，是否回到该房间";
		t.textColor = 0x000000;
		t.x = 80;
		t.y = 600;
		return t;
	};
	_proto.yes_i = function () {
		var t = new eui.Group();
		this.yes = t;
		t.x = 384;
		t.y = 712.85;
		t.elementsContent = [this._Rect2_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.ellipseWidth = 50;
		t.fillColor = 0xC1E07B;
		t.height = 80;
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 40;
		t.text = "是";
		t.textColor = 0x000000;
		t.x = 80;
		t.y = 20;
		return t;
	};
	_proto.no_i = function () {
		var t = new eui.Group();
		this.no = t;
		t.x = 134;
		t.y = 712.85;
		t.elementsContent = [this._Rect3_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.ellipseWidth = 50;
		t.fillColor = 0xc1e07b;
		t.height = 80;
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 40;
		t.text = "否";
		t.textColor = 0x000000;
		t.x = 80;
		t.y = 20;
		return t;
	};
	return PvpPopSkin;
})(eui.Skin);generateEUI.paths['resource/skins/PvpRoomSkin.exml'] = window.PvpRoomSkin = (function (_super) {
	__extends(PvpRoomSkin, _super);
	function PvpRoomSkin() {
		_super.call(this);
		this.skinParts = ["start","close_btn","player0","player1"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this.start_i(),this._Rect2_i(),this._Rect3_i(),this.close_btn_i(),this.player0_i(),this.player1_i()];
	}
	var _proto = PvpRoomSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x87e529;
		t.height = 700;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 600;
		return t;
	};
	_proto.start_i = function () {
		var t = new eui.Button();
		this.start = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 68;
		t.horizontalCenter = 0;
		t.label = "开始游戏";
		t.verticalCenter = 288;
		t.width = 210;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseWidth = 150;
		t.fillColor = 0xffffff;
		t.height = 100;
		t.width = 100;
		t.x = 155;
		t.y = 516.51;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseWidth = 150;
		t.fillColor = 0xFFFFFF;
		t.height = 100;
		t.width = 100;
		t.x = 460;
		t.y = 516.51;
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new eui.Rect();
		this.close_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseWidth = 150;
		t.fillColor = 0xFFFFFF;
		t.height = 50;
		t.width = 50;
		t.x = 610;
		t.y = 290;
		return t;
	};
	_proto.player0_i = function () {
		var t = new eui.Label();
		this.player0 = t;
		t.text = "Label";
		t.textColor = 0x000000;
		t.x = 168;
		t.y = 551.51;
		return t;
	};
	_proto.player1_i = function () {
		var t = new eui.Label();
		this.player1 = t;
		t.text = "Label";
		t.textColor = 0x000000;
		t.x = 473;
		t.y = 551.51;
		return t;
	};
	return PvpRoomSkin;
})(eui.Skin);generateEUI.paths['resource/skins/RankItem.exml'] = window.RankItem = (function (_super) {
	__extends(RankItem, _super);
	function RankItem() {
		_super.call(this);
		this.skinParts = ["ranknum"];
		
		this.height = 106;
		this.width = 638;
		this.elementsContent = [this._Image1_i(),this.ranknum_i(),this._Image2_i(),this._Label1_i()];
	}
	var _proto = RankItem.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "windowUI_json.BY_GG_13";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ranknum_i = function () {
		var t = new eui.Label();
		this.ranknum = t;
		t.anchorOffsetX = 0;
		t.size = 32;
		t.stroke = 2;
		t.strokeColor = 0x3189cd;
		t.text = "1";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 81;
		t.x = 12;
		t.y = 36;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "windowUI_json.BY_GG_15";
		t.verticalCenter = 0;
		t.x = 131;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "Label";
		t.verticalCenter = 0;
		t.x = 245;
		return t;
	};
	return RankItem;
})(eui.Skin);generateEUI.paths['resource/skins/RankViewSkin.exml'] = window.RankViewSkin = (function (_super) {
	__extends(RankViewSkin, _super);
	function RankViewSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Group4_i(),this._Image8_i(),this._Image9_i(),this._Image10_i()];
	}
	var _proto = RankViewSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "BY_GG_22_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 66;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "windowUI_json.BY_GG_08";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "windowUI_json.BY_GG_06";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 211;
		t.y = 0;
		t.elementsContent = [this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "windowUI_json.BY_GG_09";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "windowUI_json.BY_GG_03";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 423;
		t.y = 0;
		t.elementsContent = [this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "windowUI_json.BY_GG_11";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "windowUI_json.BY_GG_01";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "windowUI_json.BY_GG_18";
		t.y = 174;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 220;
		t.source = "windowUI_json.BY_GG_16";
		t.y = 246;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -220;
		t.source = "windowUI_json.BY_GG_17";
		t.y = 246;
		return t;
	};
	return RankViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ReviveSkin.exml'] = window.ReviveSkin = (function (_super) {
	__extends(ReviveSkin, _super);
	function ReviveSkin() {
		_super.call(this);
		this.skinParts = ["progress","time","main","sign","revive_btn","revive_btn1","close_btn"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = ReviveSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1280;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.main_i(),this.revive_btn_i(),this.revive_btn1_i(),this.close_btn_i(),this._Label1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mainUI_json.BY_FHHZ_07";
		t.x = 83;
		t.y = 178.36;
		return t;
	};
	_proto.main_i = function () {
		var t = new eui.Group();
		this.main = t;
		t.x = 159;
		t.y = 331;
		t.elementsContent = [this._Image2_i(),this.progress_i(),this._Image3_i(),this.time_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mainUI_json.BY_FHHZ_03";
		t.verticalCenter = 0;
		return t;
	};
	_proto.progress_i = function () {
		var t = new eui.Image();
		this.progress = t;
		t.anchorOffsetX = 146.5;
		t.anchorOffsetY = 146.5;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mainUI_json.BY_FHHZ_02";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mainUI_json.BY_FHHZ_01";
		t.verticalCenter = 0;
		return t;
	};
	_proto.time_i = function () {
		var t = new eui.BitmapLabel();
		this.time = t;
		t.font = "reviveSz_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "3";
		t.verticalCenter = 0;
		return t;
	};
	_proto.revive_btn_i = function () {
		var t = new eui.Group();
		this.revive_btn = t;
		t.bottom = 268;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 873.0000000000001;
		t.elementsContent = [this._Image4_i(),this.sign_i(),this._Image5_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 112;
		t.source = "mainUI_json.BY_JSL_04";
		t.width = 304;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.sign_i = function () {
		var t = new eui.Image();
		this.sign = t;
		t.source = "mainUI_json.BY_JKGG_053";
		t.verticalCenter = -39.5;
		t.x = 267;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "mainUI_json.by_fhh_04";
		t.verticalCenter = 0;
		return t;
	};
	_proto.revive_btn1_i = function () {
		var t = new eui.Group();
		this.revive_btn1 = t;
		t.bottom = 396;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 873.0000000000001;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 112;
		t.scale9Grid = new egret.Rectangle(84,39,63,23);
		t.source = "mainUI_json.BY_JSL_05";
		t.width = 304;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "mainUI_json.by_fhh_03";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "mainUI_json.BY_JSL_07";
		t.touchEnabled = false;
		t.x = 187;
		t.y = -9.4;
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new eui.Label();
		this.close_btn = t;
		t.bottom = 204;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "不了,谢谢";
		t.x = 288;
		t.y = 1038;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 28;
		t.stroke = 2;
		t.text = "×2000";
		t.touchEnabled = false;
		t.x = 438;
		t.y = 766.6;
		return t;
	};
	return ReviveSkin;
})(eui.Skin);generateEUI.paths['resource/skins/SetUpSkin.exml'] = window.SetUpSkin = (function (_super) {
	__extends(SetUpSkin, _super);
	function SetUpSkin() {
		_super.call(this);
		this.skinParts = ["debug","close_btn","uid_text","music_btn","sound_btn"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this.debug_i(),this.close_btn_i(),this._Image2_i(),this.uid_text_i(),this._Label1_i(),this._Label2_i(),this._Image3_i(),this._Image4_i(),this.music_btn_i(),this.sound_btn_i()];
	}
	var _proto = SetUpSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 439;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(73,31,15,54);
		t.source = "mainUI_json.By_yxz_05";
		t.verticalCenter = -31.5;
		t.width = 552;
		return t;
	};
	_proto.debug_i = function () {
		var t = new eui.Image();
		this.debug = t;
		t.horizontalCenter = 0.5;
		t.source = "setupUI_json.By_bbsz_03";
		t.verticalCenter = -256.5;
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new eui.Image();
		this.close_btn = t;
		t.horizontalCenter = 260;
		t.source = "mainUI_json.By_bbsz_04";
		t.verticalCenter = -228.5;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "setupUI_json.By_bbsz_02";
		t.verticalCenter = 103;
		return t;
	};
	_proto.uid_text_i = function () {
		var t = new eui.Label();
		this.uid_text = t;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0.5;
		t.text = "UID:1234567";
		t.textColor = 0x000000;
		t.verticalCenter = 105;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.horizontalCenter = -34;
		t.size = 34;
		t.text = "音乐";
		t.textColor = 0x000000;
		t.verticalCenter = -102;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.horizontalCenter = -34;
		t.size = 34;
		t.text = "音效";
		t.textColor = 0x000000;
		t.verticalCenter = -9;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -111.5;
		t.source = "setupUI_json.Font_bbsz_01";
		t.verticalCenter = -9.5;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -112.5;
		t.source = "setupUI_json.Font_bbsz_02";
		t.verticalCenter = -102.5;
		return t;
	};
	_proto.music_btn_i = function () {
		var t = new eui.Component();
		this.music_btn = t;
		t.horizontalCenter = 115.5;
		t.skinName = "SetUpBtn";
		t.verticalCenter = -101.5;
		return t;
	};
	_proto.sound_btn_i = function () {
		var t = new eui.Component();
		this.sound_btn = t;
		t.horizontalCenter = 115.5;
		t.skinName = "SetUpBtn";
		t.verticalCenter = -9.5;
		return t;
	};
	return SetUpSkin;
})(eui.Skin);generateEUI.paths['resource/skins/SignSkin.exml'] = window.SignSkin = (function (_super) {
	__extends(SignSkin, _super);
	function SignSkin() {
		_super.call(this);
		this.skinParts = ["sign","groupDoubleRecv","groupRecv","itemSign1","itemSign2","itemSign3","itemSign4","itemSign5","itemSign6","itemSign7"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = SignSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.verticalCenter = -18;
		t.x = 75.99;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.groupDoubleRecv_i(),this.groupRecv_i(),this.itemSign1_i(),this.itemSign2_i(),this.itemSign3_i(),this.itemSign4_i(),this.itemSign5_i(),this.itemSign6_i(),this.itemSign7_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 743.67;
		t.scale9Grid = new egret.Rectangle(67,68,2,2);
		t.source = "mainUI_json.By_yxz_05";
		t.width = 571;
		t.x = 0;
		t.y = 68.15;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "windowUI_json.BY_qd_02";
		t.x = 130;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "windowUI_json.BY_qd_04";
		t.x = 219.01;
		t.y = 38.32;
		return t;
	};
	_proto.groupDoubleRecv_i = function () {
		var t = new eui.Group();
		this.groupDoubleRecv = t;
		t.anchorOffsetX = 133;
		t.anchorOffsetY = 49;
		t.horizontalCenter = -0.5;
		t.verticalCenter = 216;
		t.width = 265.67;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Image6_i(),this.sign_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "windowUI_json.BY_qd_06";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "windowUI_json.BY_qd_05";
		t.x = 70.51;
		t.y = 27;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "windowUI_json.BY_qd_01";
		t.x = 215.51;
		t.y = -14.62;
		return t;
	};
	_proto.sign_i = function () {
		var t = new eui.Image();
		this.sign = t;
		t.source = "mainUI_json.BY_JKGG_05";
		t.x = 17;
		t.y = 28;
		return t;
	};
	_proto.groupRecv_i = function () {
		var t = new eui.Group();
		this.groupRecv = t;
		t.anchorOffsetX = 70;
		t.anchorOffsetY = 27;
		t.height = 54;
		t.horizontalCenter = -1.5;
		t.verticalCenter = 326;
		t.width = 140;
		t.elementsContent = [this._Image7_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "windowUI_json.BY_qd_03";
		t.x = 20;
		t.y = 13;
		return t;
	};
	_proto.itemSign1_i = function () {
		var t = new ItemSignNormal();
		this.itemSign1 = t;
		t.signday = 1;
		t.skinName = "ItemSignNormalSkin";
		t.x = 25.01;
		t.y = 178.12;
		return t;
	};
	_proto.itemSign2_i = function () {
		var t = new ItemSignNormal();
		this.itemSign2 = t;
		t.signday = 2;
		t.skinName = "ItemSignNormalSkin";
		t.x = 157.01;
		t.y = 178.12;
		return t;
	};
	_proto.itemSign3_i = function () {
		var t = new ItemSignNormal();
		this.itemSign3 = t;
		t.signday = 3;
		t.skinName = "ItemSignNormalSkin";
		t.x = 288.01;
		t.y = 178.12;
		return t;
	};
	_proto.itemSign4_i = function () {
		var t = new ItemSignNormal();
		this.itemSign4 = t;
		t.signday = 4;
		t.skinName = "ItemSignNormalSkin";
		t.x = 420.01;
		t.y = 178.12;
		return t;
	};
	_proto.itemSign5_i = function () {
		var t = new ItemSignNormal();
		this.itemSign5 = t;
		t.signday = 5;
		t.skinName = "ItemSignNormalSkin";
		t.x = 25.01;
		t.y = 359.12;
		return t;
	};
	_proto.itemSign6_i = function () {
		var t = new ItemSignNormal();
		this.itemSign6 = t;
		t.signday = 6;
		t.skinName = "ItemSignNormalSkin";
		t.x = 157.01;
		t.y = 359.12;
		return t;
	};
	_proto.itemSign7_i = function () {
		var t = new ItemSignSpecial();
		this.itemSign7 = t;
		t.signday = 7;
		t.skinName = "ItemSignSpecialSkin";
		t.x = 288.01;
		t.y = 359.12;
		return t;
	};
	return SignSkin;
})(eui.Skin);generateEUI.paths['resource/skins/SkinSkin.exml'] = window.SkinSkin = (function (_super) {
	__extends(SkinSkin, _super);
	function SkinSkin() {
		_super.call(this);
		this.skinParts = ["skinground","skinList","skinscroller","rolebox","skinNameLab","skinDes","chipnum","chipprogress","chipicon","compose","getchips","chiplock","videonum","videoprogress","videobtn","seevideo","videounlock","videolock","coinbtn","coinnum","unlock","coinlock","dress","takeoff","effect","addcoin","cointext","close_btn"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group4_i(),this._Group6_i()];
	}
	var _proto = SkinSkin.prototype;

	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 59.5;
		t.x = -693;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this.dress_i(),this.takeoff_i(),this.effect_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1222.85;
		t.scale9Grid = new egret.Rectangle(176,15,1061,6);
		t.source = "scene0_json.1";
		t.x = 30.3;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 850;
		t.scale9Grid = new egret.Rectangle(176,356,1061,7);
		t.source = "scene0_json.4";
		t.x = 0;
		t.y = 1222.85;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 693;
		t.y = 1130.85;
		t.elementsContent = [this.skinground_i(),this._Image3_i(),this.skinscroller_i()];
		return t;
	};
	_proto.skinground_i = function () {
		var t = new eui.Image();
		this.skinground = t;
		t.anchorOffsetY = 0;
		t.height = 442;
		t.scale9Grid = new egret.Rectangle(149,80,11,18);
		t.source = "skinUI_json.bb_pf_05";
		t.width = 720;
		t.x = 0;
		t.y = 42;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "skinUI_json.bb_pf_12";
		t.x = 205;
		t.y = 0;
		return t;
	};
	_proto.skinscroller_i = function () {
		var t = new eui.Scroller();
		this.skinscroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 312.12;
		t.horizontalCenter = 0;
		t.width = 665;
		t.y = 144;
		t.viewport = this.skinList_i();
		return t;
	};
	_proto.skinList_i = function () {
		var t = new eui.DataGroup();
		this.skinList = t;
		t.itemRendererSkinName = SkinItem;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.paddingTop = 5;
		t.requestedColumnCount = 4;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 764.5;
		t.y = 1104.85;
		t.elementsContent = [this._Image4_i(),this.rolebox_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "mainUI_json.Byy_syy_05";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.rolebox_i = function () {
		var t = new eui.Group();
		this.rolebox = t;
		t.height = 50;
		t.width = 50;
		t.x = 108.5;
		t.y = 12;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 1125;
		t.y = 680.85;
		t.elementsContent = [this._Image5_i(),this.skinNameLab_i(),this.skinDes_i(),this.chiplock_i(),this.videolock_i(),this.coinlock_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 383;
		t.scale9Grid = new egret.Rectangle(76,23,32,6);
		t.source = "mainUI_json.By_yxz_05";
		t.width = 282;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.skinNameLab_i = function () {
		var t = new eui.Label();
		this.skinNameLab = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 36;
		t.stroke = 2;
		t.text = "名字名字";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.width = 265;
		t.y = 22;
		return t;
	};
	_proto.skinDes_i = function () {
		var t = new eui.Label();
		this.skinDes = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "名字名字大名字是什么啊，这皮肤可太好看了吧";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.width = 226;
		t.wordWrap = true;
		t.y = 89;
		return t;
	};
	_proto.chiplock_i = function () {
		var t = new eui.Group();
		this.chiplock = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.width = 253.03;
		t.y = 219.17;
		t.elementsContent = [this.chipnum_i(),this._Image6_i(),this.chipprogress_i(),this.chipicon_i(),this.getchips_i()];
		return t;
	};
	_proto.chipnum_i = function () {
		var t = new eui.Label();
		this.chipnum = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.lineSpacing = 10;
		t.size = 26;
		t.text = "48/60";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 150;
		t.wordWrap = true;
		t.x = 54.7;
		t.y = 4.01;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "skinUI_json.bb_pf_09";
		t.x = 42.24;
		t.y = 34.2;
		return t;
	};
	_proto.chipprogress_i = function () {
		var t = new eui.Image();
		this.chipprogress = t;
		t.scale9Grid = new egret.Rectangle(9,2,156,14);
		t.source = "skinUI_json.bb_pf_10";
		t.width = 138;
		t.x = 44.25;
		t.y = 35.7;
		return t;
	};
	_proto.chipicon_i = function () {
		var t = new eui.Image();
		this.chipicon = t;
		t.horizontalCenter = -82.515;
		t.scaleX = 0.2;
		t.scaleY = 0.2;
		t.source = "skinUI_json.chip104";
		t.verticalCenter = -28;
		return t;
	};
	_proto.getchips_i = function () {
		var t = new eui.Group();
		this.getchips = t;
		t.horizontalCenter = 0;
		t.y = 71.65;
		t.elementsContent = [this._Image7_i(),this.compose_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 69;
		t.source = "mainUI_json.bb_pf_03";
		t.width = 158;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.compose_i = function () {
		var t = new eui.Label();
		this.compose = t;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0.5;
		t.stroke = 2;
		t.text = "获取碎片";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto.videolock_i = function () {
		var t = new eui.Group();
		this.videolock = t;
		t.visible = false;
		t.x = 42;
		t.y = 219.17;
		t.elementsContent = [this.videonum_i(),this._Image8_i(),this.videoprogress_i(),this.videobtn_i(),this.seevideo_i(),this.videounlock_i()];
		return t;
	};
	_proto.videonum_i = function () {
		var t = new eui.Label();
		this.videonum = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.lineSpacing = 10;
		t.size = 26;
		t.text = "48/60";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 150;
		t.wordWrap = true;
		t.x = 35;
		t.y = 4.01;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "skinUI_json.bb_pf_09";
		t.x = 24;
		t.y = 34.2;
		return t;
	};
	_proto.videoprogress_i = function () {
		var t = new eui.Image();
		this.videoprogress = t;
		t.scale9Grid = new egret.Rectangle(9,2,156,14);
		t.source = "skinUI_json.bb_pf_10";
		t.width = 138;
		t.x = 26.01;
		t.y = 35.7;
		return t;
	};
	_proto.videobtn_i = function () {
		var t = new eui.Image();
		this.videobtn = t;
		t.source = "skinUI_json.videoicon";
		t.x = -18;
		t.y = 8;
		return t;
	};
	_proto.seevideo_i = function () {
		var t = new eui.Group();
		this.seevideo = t;
		t.horizontalCenter = 0;
		t.y = 71.65;
		t.elementsContent = [this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 69;
		t.source = "mainUI_json.bb_pf_03";
		t.width = 158;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "skinUI_json.vedio";
		t.verticalCenter = 0;
		return t;
	};
	_proto.videounlock_i = function () {
		var t = new eui.Group();
		this.videounlock = t;
		t.horizontalCenter = 0;
		t.y = 71.65;
		t.elementsContent = [this._Image11_i(),this._Image12_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 69;
		t.source = "mainUI_json.bb_pf_03";
		t.width = 158;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "skinUI_json.unlock";
		t.verticalCenter = 0;
		return t;
	};
	_proto.coinlock_i = function () {
		var t = new eui.Group();
		this.coinlock = t;
		t.visible = false;
		t.x = 29.5;
		t.y = 221.32;
		t.elementsContent = [this._Image13_i(),this.coinbtn_i(),this.coinnum_i(),this.unlock_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 45;
		t.scale9Grid = new egret.Rectangle(20,9,121,176);
		t.source = "skinUI_json.bb_pf_07";
		t.width = 205;
		t.x = 15.5;
		t.y = 6.5;
		return t;
	};
	_proto.coinbtn_i = function () {
		var t = new eui.Image();
		this.coinbtn = t;
		t.source = "mainUI_json.BY_JSL_07";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.coinnum_i = function () {
		var t = new eui.Label();
		this.coinnum = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.lineSpacing = 10;
		t.size = 24;
		t.text = "48000/60000";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 150;
		t.wordWrap = true;
		t.x = 59.5;
		t.y = 17.86;
		return t;
	};
	_proto.unlock_i = function () {
		var t = new eui.Group();
		this.unlock = t;
		t.horizontalCenter = 0.5;
		t.verticalCenter = 35.5;
		t.elementsContent = [this._Image14_i(),this._Image15_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 69;
		t.source = "mainUI_json.bb_pf_03";
		t.width = 158;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "skinUI_json.unlock";
		t.verticalCenter = 0;
		return t;
	};
	_proto.dress_i = function () {
		var t = new eui.Image();
		this.dress = t;
		t.source = "skinUI_json.dress";
		t.visible = false;
		t.x = 1173;
		t.y = 945.22;
		return t;
	};
	_proto.takeoff_i = function () {
		var t = new eui.Group();
		this.takeoff = t;
		t.visible = false;
		t.x = 1174.33;
		t.y = 945.72;
		t.elementsContent = [this._Image16_i(),this._Image17_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 79.67;
		t.source = "mainUI_json.bb_pf_03";
		t.width = 185;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "skinUI_json.jiechu";
		t.verticalCenter = 0;
		return t;
	};
	_proto.effect_i = function () {
		var t = new eui.Group();
		this.effect = t;
		t.height = 308;
		t.width = 252;
		t.x = 743;
		t.y = 805.24;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.top = 53;
		t.x = 33.5;
		t.elementsContent = [this._Group5_i(),this.close_btn_i()];
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.x = 89.12;
		t.y = 0;
		t.elementsContent = [this._Image18_i(),this.addcoin_i(),this._Image19_i(),this.cointext_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "mainUI_json.Byy_syy_02";
		t.x = 18;
		t.y = 4;
		return t;
	};
	_proto.addcoin_i = function () {
		var t = new eui.Image();
		this.addcoin = t;
		t.source = "mainUI_json.Byy_syy_03";
		t.visible = false;
		t.x = 168;
		t.y = 4;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "mainUI_json.BY_JSL_07";
		t.x = -6;
		t.y = 0;
		return t;
	};
	_proto.cointext_i = function () {
		var t = new eui.Label();
		this.cointext = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 28;
		t.stroke = 2;
		t.text = "200";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 114;
		t.x = 51;
		t.y = 17.5;
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new eui.Image();
		this.close_btn = t;
		t.source = "mainUI_json.bb_pf_01";
		t.x = 0;
		t.y = 3;
		return t;
	};
	return SkinSkin;
})(eui.Skin);generateEUI.paths['resource/skins/SubLoadingSkin.exml'] = window.SubLoadingSkin = (function (_super) {
	__extends(SubLoadingSkin, _super);
	function SubLoadingSkin() {
		_super.call(this);
		this.skinParts = ["bg","text","role"];
		
		this.height = 1580;
		this.width = 720;
		this.elementsContent = [this.bg_i(),this.text_i(),this._Group1_i(),this._Label1_i()];
	}
	var _proto = SubLoadingSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.height = 1580;
		t.scale9Grid = new egret.Rectangle(90,1257,540,16);
		t.source = "BY_XYX_04_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.text_i = function () {
		var t = new eui.Label();
		this.text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 141;
		t.fontFamily = "SimHei";
		t.height = 39.09;
		t.horizontalCenter = 18;
		t.strokeColor = 0x2d0d12;
		t.text = "加载中...";
		t.textAlign = "center";
		t.textColor = 0x464646;
		t.width = 410;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 400;
		t.horizontalCenter = 0;
		t.verticalCenter = -95.5;
		t.width = 720;
		t.elementsContent = [this._Image1_i(),this.role_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "mainUI_json.VJJ_01";
		t.y = 255.98;
		return t;
	};
	_proto.role_i = function () {
		var t = new eui.Image();
		this.role = t;
		t.horizontalCenter = 0;
		t.source = "mainUI_json.yv";
		t.y = 48.48;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 36;
		t.stroke = 2;
		t.text = "体力不足可用金币兑换哦！";
		t.verticalCenter = 96;
		return t;
	};
	return SubLoadingSkin;
})(eui.Skin);generateEUI.paths['resource/skins/TestLevelViewSkin.exml'] = window.TestLevelViewSkin = (function (_super) {
	__extends(TestLevelViewSkin, _super);
	function TestLevelViewSkin() {
		_super.call(this);
		this.skinParts = ["dgLevel","closeBtn","startGame"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Scroller1_i(),this.closeBtn_i(),this.startGame_i()];
	}
	var _proto = TestLevelViewSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 900;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(57,57,35,31);
		t.source = "mainUI_json.By_yxz_05";
		t.verticalCenter = -53;
		t.width = 600;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 850;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "off";
		t.verticalCenter = -62;
		t.width = 550;
		t.viewport = this.dgLevel_i();
		return t;
	};
	_proto.dgLevel_i = function () {
		var t = new eui.DataGroup();
		this.dgLevel = t;
		t.anchorOffsetY = 0;
		t.height = 850;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		t.horizontalAlign = "center";
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.source = "mainUI_json.By_bbsz_04";
		t.x = 602.88;
		t.y = 130;
		return t;
	};
	_proto.startGame_i = function () {
		var t = new eui.Image();
		this.startGame = t;
		t.horizontalCenter = 0;
		t.source = "mainUI_json.kaishi";
		t.y = 1061.06;
		return t;
	};
	return TestLevelViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/UnlockSkin.exml'] = window.UnlockSkin = (function (_super) {
	__extends(UnlockSkin, _super);
	function UnlockSkin() {
		_super.call(this);
		this.skinParts = ["bg","share","get","rolebox","sjbox0","sjbox1","close_btn"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.bg_i(),this._Image1_i(),this.share_i(),this.get_i(),this._Image6_i(),this.rolebox_i(),this.sjbox0_i(),this.sjbox1_i(),this.close_btn_i(),this._Image7_i()];
	}
	var _proto = UnlockSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Rect();
		this.bg = t;
		t.height = 1280;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(90,937,540,32);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_jpg";
		t.verticalCenter = -160;
		return t;
	};
	_proto.share_i = function () {
		var t = new eui.Group();
		this.share = t;
		t.horizontalCenter = -5;
		t.verticalCenter = 314.5;
		t.elementsContent = [this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 115;
		t.scale9Grid = new egret.Rectangle(125,39,117,26);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mainUI_json.BY_JSL_04";
		t.width = 310;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 60;
		t.text = "真开心";
		t.verticalCenter = 0;
		return t;
	};
	_proto.get_i = function () {
		var t = new eui.Group();
		this.get = t;
		t.horizontalCenter = -5;
		t.verticalCenter = 314.5;
		t.visible = false;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 115;
		t.scale9Grid = new egret.Rectangle(125,39,117,26);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mainUI_json.BY_JSL_04";
		t.width = 310;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 34;
		t.source = "skinUI_json.getskin";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "mainUI_json.BY_JKGG_05";
		t.x = 34;
		t.y = 39;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "skinUI_json.unlockskin";
		t.verticalCenter = -327.5;
		t.x = 149;
		return t;
	};
	_proto.rolebox_i = function () {
		var t = new eui.Group();
		this.rolebox = t;
		t.height = 100;
		t.horizontalCenter = 52;
		t.verticalCenter = 253;
		t.width = 100;
		return t;
	};
	_proto.sjbox0_i = function () {
		var t = new eui.Group();
		this.sjbox0 = t;
		t.height = 100;
		t.horizontalCenter = -40;
		t.verticalCenter = -341;
		t.width = 100;
		return t;
	};
	_proto.sjbox1_i = function () {
		var t = new eui.Group();
		this.sjbox1 = t;
		t.height = 100;
		t.horizontalCenter = 140;
		t.verticalCenter = -341;
		t.width = 100;
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new eui.Label();
		this.close_btn = t;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "不了,谢谢";
		t.verticalCenter = 417;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "mainUI_json.BY_JSL_03";
		t.verticalCenter = -348;
		return t;
	};
	return UnlockSkin;
})(eui.Skin);generateEUI.paths['resource/skins/WinViewSkin.exml'] = window.WinViewSkin = (function (_super) {
	__extends(WinViewSkin, _super);
	function WinViewSkin() {
		_super.call(this);
		this.skinParts = ["winAni","light","rolebox","coinimg","coin","sign","getThree","getOne","video_btn","title","energytext","addenergy","labelCountDown","group0","addcoin0","iconend","cointext","group1","videoPoint","deslable","lookvideo","group","talk","tips"];
		
		this.height = 1280;
		this.width = 720;
		this.winAni_i();
		this.elementsContent = [this.group_i(),this.tips_i()];
		
		eui.Binding.$bindProperties(this, ["group"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleY");
		eui.Binding.$bindProperties(this, ["group0"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, ["group1"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, ["coinimg"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object8,"scaleX");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object8,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object9,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object9,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object9,"scaleY");
		eui.Binding.$bindProperties(this, ["coin"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object12,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object12,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object12,"scaleY");
		eui.Binding.$bindProperties(this, ["light"],[0],this._TweenItem6,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object13,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object14,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object15,"alpha");
		eui.Binding.$bindProperties(this, ["rolebox"],[0],this._TweenItem7,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object16,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object17,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object18,"alpha");
		eui.Binding.$bindProperties(this, ["video_btn"],[0],this._TweenItem8,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object19,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object20,"alpha");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object20,"scaleX");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object20,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object21,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object21,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object21,"scaleY");
		eui.Binding.$bindProperties(this, ["lookvideo"],[0],this._TweenItem9,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object22,"alpha");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object23,"scaleX");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object23,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object24,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object24,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object24,"scaleY");
	}
	var _proto = WinViewSkin.prototype;

	_proto.winAni_i = function () {
		var t = new egret.tween.TweenGroup();
		this.winAni = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i(),this._TweenItem4_i(),this._TweenItem5_i(),this._TweenItem6_i(),this._TweenItem7_i(),this._TweenItem8_i(),this._TweenItem9_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 300;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._Wait1_i(),this._Set3_i(),this._To2_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 350;
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 300;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set4_i(),this._Wait2_i(),this._Set5_i(),this._To3_i()];
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 350;
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 300;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Set6_i(),this._Wait3_i(),this._Set7_i(),this._To4_i()];
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._Wait3_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 750;
		return t;
	};
	_proto._Set7_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.paths = [this._Set8_i(),this._Wait4_i(),this._Set9_i(),this._To5_i()];
		return t;
	};
	_proto._Set8_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._Wait4_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 750;
		return t;
	};
	_proto._Set9_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._TweenItem6_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem6 = t;
		t.paths = [this._Set10_i(),this._Wait5_i(),this._Set11_i(),this._To6_i()];
		return t;
	};
	_proto._Set10_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._Wait5_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1050;
		return t;
	};
	_proto._Set11_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
		return t;
	};
	_proto._TweenItem7_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem7 = t;
		t.paths = [this._Set12_i(),this._Wait6_i(),this._Set13_i(),this._To7_i()];
		return t;
	};
	_proto._Set12_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object16_i();
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		this._Object16 = t;
		return t;
	};
	_proto._Wait6_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1050;
		return t;
	};
	_proto._Set13_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object17_i();
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		this._Object17 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object18_i();
		return t;
	};
	_proto._Object18_i = function () {
		var t = {};
		this._Object18 = t;
		return t;
	};
	_proto._TweenItem8_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem8 = t;
		t.paths = [this._Set14_i(),this._Wait7_i(),this._Set15_i(),this._To8_i()];
		return t;
	};
	_proto._Set14_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object19_i();
		return t;
	};
	_proto._Object19_i = function () {
		var t = {};
		this._Object19 = t;
		return t;
	};
	_proto._Wait7_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1300;
		return t;
	};
	_proto._Set15_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object20_i();
		return t;
	};
	_proto._Object20_i = function () {
		var t = {};
		this._Object20 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object21_i();
		return t;
	};
	_proto._Object21_i = function () {
		var t = {};
		this._Object21 = t;
		return t;
	};
	_proto._TweenItem9_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem9 = t;
		t.paths = [this._Set16_i(),this._Wait8_i(),this._Set17_i(),this._To9_i()];
		return t;
	};
	_proto._Set16_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object22_i();
		return t;
	};
	_proto._Object22_i = function () {
		var t = {};
		this._Object22 = t;
		return t;
	};
	_proto._Wait8_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1300;
		return t;
	};
	_proto._Set17_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object23_i();
		return t;
	};
	_proto._Object23_i = function () {
		var t = {};
		this._Object23 = t;
		return t;
	};
	_proto._To9_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object24_i();
		return t;
	};
	_proto._Object24_i = function () {
		var t = {};
		this._Object24 = t;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.height = 956;
		t.horizontalCenter = 0;
		t.verticalCenter = 13;
		t.width = 586;
		t.elementsContent = [this._Rect1_i(),this.light_i(),this.rolebox_i(),this.coinimg_i(),this.coin_i(),this.video_btn_i(),this.title_i(),this.group0_i(),this.group1_i(),this.lookvideo_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseWidth = 90;
		t.fillAlpha = 0.5;
		t.height = 788.94;
		t.strokeAlpha = 0.3;
		t.width = 586;
		t.x = 0;
		t.y = 60.4;
		return t;
	};
	_proto.light_i = function () {
		var t = new eui.Image();
		this.light = t;
		t.horizontalCenter = 0;
		t.source = "mainUI_json.BY_JSL_01";
		t.verticalCenter = -74;
		return t;
	};
	_proto.rolebox_i = function () {
		var t = new eui.Group();
		this.rolebox = t;
		t.height = 50;
		t.touchEnabled = false;
		t.width = 50;
		t.x = 293;
		t.y = 569.4;
		return t;
	};
	_proto.coinimg_i = function () {
		var t = new eui.Image();
		this.coinimg = t;
		t.horizontalCenter = -73.5;
		t.source = "mainUI_json.BY_JSL_07";
		t.verticalCenter = -312;
		return t;
	};
	_proto.coin_i = function () {
		var t = new eui.Label();
		this.coin = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 89;
		t.size = 40;
		t.stroke = 2;
		t.text = "+1500";
		t.textColor = 0xfdfd01;
		t.verticalCenter = -312;
		t.width = 222;
		return t;
	};
	_proto.video_btn_i = function () {
		var t = new eui.Group();
		this.video_btn = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 213;
		t.elementsContent = [this._Image1_i(),this.sign_i(),this.getThree_i(),this.getOne_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 112;
		t.scale9Grid = new egret.Rectangle(83,46,247,22);
		t.source = "mainUI_json.BY_JSL_04";
		t.width = 304;
		t.x = 0;
		t.y = 8;
		return t;
	};
	_proto.sign_i = function () {
		var t = new eui.Image();
		this.sign = t;
		t.source = "mainUI_json.BY_JKGG_053";
		t.verticalCenter = -30.5;
		t.x = 271;
		return t;
	};
	_proto.getThree_i = function () {
		var t = new eui.Image();
		this.getThree = t;
		t.horizontalCenter = 4;
		t.source = "mainUI_json.Lark20200603-192931";
		t.y = 40;
		return t;
	};
	_proto.getOne_i = function () {
		var t = new eui.Image();
		this.getOne = t;
		t.horizontalCenter = 0.5;
		t.source = "mainUI_json.BY_JSG_04";
		t.verticalCenter = 4;
		t.visible = false;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Group();
		this.title = t;
		t.height = 0;
		t.horizontalCenter = 10;
		t.verticalCenter = -320.5;
		t.width = 0;
		return t;
	};
	_proto.group0_i = function () {
		var t = new eui.Group();
		this.group0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 228;
		t.y = -105;
		t.elementsContent = [this._Image2_i(),this.energytext_i(),this.addenergy_i(),this._Image3_i(),this.labelCountDown_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "mainUI_json.Byy_syy_02";
		t.x = 18;
		t.y = 4;
		return t;
	};
	_proto.energytext_i = function () {
		var t = new eui.Label();
		this.energytext = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 28;
		t.stroke = 2;
		t.text = "200";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 114;
		t.x = 51;
		t.y = 17.5;
		return t;
	};
	_proto.addenergy_i = function () {
		var t = new eui.Image();
		this.addenergy = t;
		t.source = "mainUI_json.Byy_syy_03";
		t.x = 170;
		t.y = 4;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "mainUI_json.tili";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labelCountDown_i = function () {
		var t = new eui.Label();
		this.labelCountDown = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 24;
		t.stroke = 2;
		t.text = "00:59";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 114;
		t.x = 52.57;
		t.y = 55.04;
		return t;
	};
	_proto.group1_i = function () {
		var t = new eui.Group();
		this.group1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -5.38;
		t.y = -105;
		t.elementsContent = [this._Image4_i(),this.addcoin0_i(),this.iconend_i(),this.cointext_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "mainUI_json.Byy_syy_02";
		t.x = 18;
		t.y = 4;
		return t;
	};
	_proto.addcoin0_i = function () {
		var t = new eui.Image();
		this.addcoin0 = t;
		t.source = "mainUI_json.Byy_syy_03";
		t.visible = false;
		t.x = 168;
		t.y = 4;
		return t;
	};
	_proto.iconend_i = function () {
		var t = new eui.Image();
		this.iconend = t;
		t.source = "mainUI_json.BY_JSL_07";
		t.x = -6;
		t.y = 0;
		return t;
	};
	_proto.cointext_i = function () {
		var t = new eui.Label();
		this.cointext = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 28;
		t.stroke = 2;
		t.text = "200";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 114;
		t.x = 51;
		t.y = 17.5;
		return t;
	};
	_proto.lookvideo_i = function () {
		var t = new eui.Group();
		this.lookvideo = t;
		t.alpha = 0.3;
		t.horizontalCenter = 0;
		t.y = 767;
		t.elementsContent = [this._Image5_i(),this.videoPoint_i(),this.deslable_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "mainUI_json.BY_JSG_02";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.videoPoint_i = function () {
		var t = new eui.Image();
		this.videoPoint = t;
		t.source = "mainUI_json.BY_JSG_01";
		t.x = 6.99;
		t.y = 6.67;
		return t;
	};
	_proto.deslable_i = function () {
		var t = new eui.Label();
		this.deslable = t;
		t.fontFamily = "SimHei";
		t.size = 24;
		t.text = "观看视频领取";
		t.textColor = 0xa8a8a8;
		t.x = 43.28;
		t.y = 4;
		return t;
	};
	_proto.tips_i = function () {
		var t = new eui.Group();
		this.tips = t;
		t.horizontalCenter = -214;
		t.verticalCenter = 47;
		t.visible = false;
		t.elementsContent = [this._Image6_i(),this.talk_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "mainUI_json.yv";
		t.x = 0;
		t.y = 215.2;
		return t;
	};
	_proto.talk_i = function () {
		var t = new eui.Component();
		this.talk = t;
		t.name = "talk0";
		t.skinName = "TalkSkin0";
		t.x = 62.4;
		t.y = 0;
		return t;
	};
	return WinViewSkin;
})(eui.Skin);