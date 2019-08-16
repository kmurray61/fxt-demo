/*
   @author Ken Murray
   @email virtualjam@gmail.com
   @date 8/7/19
   @Utility Handlers
*/

const Utils = {
	killApplication : function () {
		/* Handles onbeforeunload and pagehide browser events usually used to call socket events or close sockets*/
		return 'application killed';
	},
	getWidth : function () {
		try {
			let doc = document;
			let w = window;
			let docEl = (doc.compatMode && doc.compatMode === 'CSS1Compat')? doc.documentElement: doc.body;
			let width = docEl.clientWidth;
			//mobile zoomed in
			if ( w.innerWidth && width > w.innerWidth ) {
				width = w.innerWidth;
			}

			return width;
		}
		catch ( e ) {
			console.log( "getWidth catch e = " + e );
		}
	},
	getHeight : function () {
		try {
			let doc = document;
			let w = window;
			let docEl = (doc.compatMode && doc.compatMode.toString()  === 'CSS1Compat')? doc.documentElement: doc.body;
			let width = docEl.clientWidth;
			let height = docEl.clientHeight;

			//mobile zoomed in
			if ( w.innerWidth && width > w.innerWidth ) {
				height = w.innerHeight;
			}
			return height;
		}
		catch ( e ) {
			console.log( "getHeight catch e = " + e );
		}
	},
	windowResized : function () {
		try {
			Fxt.logger("stage width = " + Utils.getWidth());
			Fxt.logger("stage height = " + Utils.getHeight());
		}
		catch ( e ) {
			console.log( "windowResized catch e = " + e );
		}
	},
    showModal : function() {
		try {
        	Fxt.setStyle("modalMC", "cssText", "display:inline;");
		}
		catch ( e ) {
			console.log( "showModal catch e = " + e );
		}
    },
    hideModal : function() {
		try {
			Fxt.setStyle("modalMC", "cssText", "display:none;");
		}
		catch ( e ) {
			console.log( "hideModal catch e = " + e );
		}
    },
	scrollListLeft : function() {
		try {
			if ( global.curPosXCnt === global.items.length ) {
				return;
			}
			Viewport.updateCellCntIcons();
			global.curPosX = ((368 * global.curPosXCnt) );
			global.curPosX = global.curPosX + ( 5 );
			Fxt.setStyle("modalImgHolder", "cssText", "left:-" + global.curPosX + "px;");
			global.curPosXCnt++;
			Fxt.setCmp("carouselCntIcon" + (global.curPosXCnt - 1)).setAttribute("class", "fa fa-circle");
		}
		catch ( e ) {
			console.log( "scrollListLeft catch e = " + e );
		}
	},
	scrollListRight : function() {
		try {
			if ( global.curPosXCnt === 1 ) {
				return;
			}
			Viewport.updateCellCntIcons();
			global.curPosX = ( parseFloat(Fxt.setCmp("modalImgHolder").offsetLeft) + 368 );
			Fxt.setStyle("modalImgHolder", "cssText", "left:" + global.curPosX + "px;");
			global.curPosXCnt--;
			Fxt.setCmp("carouselCntIcon" + (global.curPosXCnt - 1)).setAttribute("class", "fa fa-circle");
		}
		catch ( e ) {
			console.log( "scrollListRight catch e = " + e );
		}
	},
};


module.exports = Utils;

