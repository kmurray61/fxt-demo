/*
   @author Ken Murray
   @email virtualjam@gmail.com
   @date 8/7/19
   @Utility Handlers
*/
const Utils = {
	killApplication : function () {
		Fxt.logger("killApplication FIRED");
	},
	getWidth : function () {
		let doc = document;
		let w = window;
		let docEl = (doc.compatMode && doc.compatMode === 'CSS1Compat')? doc.documentElement: doc.body;

		let width = docEl.clientWidth;
		let height = docEl.clientHeight;

		//mobile zoomed in
		if ( w.innerWidth && width > w.innerWidth ) {
			width = w.innerWidth;
			height = w.innerHeight;
		}

		return width
	},
	getHeight : function () {
		let doc = document;
		let w = window;
		let docEl = (doc.compatMode && doc.compatMode.toString()  === 'CSS1Compat')? doc.documentElement: doc.body;

		let width = docEl.clientWidth;
		let height = docEl.clientHeight;

		//mobile zoomed in
		if ( w.innerWidth && width > w.innerWidth ) {
			width = w.innerWidth;
			height = w.innerHeight;
		}
		return height
	},
	windowResized : function () {
		Fxt.logger("stage width = " + Utils.getWidth());
		Fxt.logger("stage height = " + Utils.getHeight());
	},
    showModal : function() {
        Fxt.setStyle("modalMC", "cssText", "display:inline;");
    },
    hideModal : function() {
        Fxt.setStyle("modalMC", "cssText", "display:none;");
    },
	scrollListLeft : function() {
		if ( global.curPosXCnt === global.items.length ) {
			return;
		}
		Viewport.updateCellCntIcons();
		global.curPosX = ((368 * global.curPosXCnt) );
		global.curPosX = global.curPosX + ( 5 );
		Fxt.setStyle("modalImgHolder", "cssText", "left:-" + global.curPosX + "px;");
		global.curPosXCnt++;
		Fxt.setCmp("carouselCntIcon" + (global.curPosXCnt - 1)).setAttribute("class", "fa fa-circle");
	},
	scrollListRight : function() {
		if ( global.curPosXCnt === 1 ) {
			return;
		}
		Viewport.updateCellCntIcons();
		global.curPosX = ( parseFloat(Fxt.setCmp("modalImgHolder").offsetLeft) + 368 );
		Fxt.setStyle("modalImgHolder", "cssText", "left:" + global.curPosX + "px;");
		global.curPosXCnt--;
		Fxt.setCmp("carouselCntIcon" + (global.curPosXCnt - 1)).setAttribute("class", "fa fa-circle");
	},
};