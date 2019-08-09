/*
   @author Ken Murray
   @email virtualjam@gmail.com
   @date 8/7/19
   @UI Constructors
*/
const Viewport = {
    /*Initialise default cells*/
    createViewport: function () {
        const v1 = Fxt.create("div", {
            id: "v1",
            renderTo: "appDiv",
            style: "opacity:1;",
            afterrender: function () {
                Fxt.setCmp("v1").setAttribute("class", "vpContainer");
            },
            items :
            [
                {
                    xtype : "div",
                    id : "container1",
                    text : '',
                    renderTo : "v1",
                    style: "opacity:1;",
                    afterrender: function () {
                        Fxt.setCmp("container1").setAttribute("class", "container1");
                        Fxt.setCmp("container1").addEventListener("click", () => {
                            Utils.showModal();
                        });
                    },
                    items :
                    [
                        {
                            xtype : "div",
                            id : "cellHeader1",
                            text : '',
                            renderTo : "container1",
                            style: "opacity:0.5;",
                            afterrender: function () {
                                Fxt.setCmp("cellHeader1").setAttribute("class", "cellHeader");
                            },
                            items :
                            [
                                {
                                    xtype : "h4",
                                    id : "cellTitle1",
                                    text : '',
                                    renderTo : "cellHeader1",
                                    style: "opacity:1;",
                                    afterrender: function () {
                                        Fxt.setCmp("cellTitle1").setAttribute("class", "cell-title");
                                    }
                                }
                            ]
                        },
                        {
                            xtype : "h4",
                            id : "cellPrice1",
                            text : '',
                            renderTo : "container1",
                            style: "opacity:1;",
                            afterrender: function () {
                                Fxt.setCmp("cellPrice1").setAttribute("class", "cell-price");
                            }
                        },
                    ]
                },
                {
                    xtype : "div",
                    id : "container2",
                    text : '',
                    renderTo : "v1",
                    style: "opacity:1;",
                    afterrender: function () {
                        Fxt.setCmp("container2").setAttribute("class", "container2");
                        Fxt.setCmp("container2").addEventListener("click", () => {
                            Utils.showModal();
                        });
                    },
                    items :
                    [
                        {
                            xtype : "div",
                            id : "cellHeader2",
                            text : '',
                            renderTo : "container2",
                            style: "opacity:0.5;",
                            afterrender: function () {
                                Fxt.setCmp("cellHeader2").setAttribute("class", "cellHeader");
                            },
                            items :
                            [
                                {
                                    xtype : "h4",
                                    id : "cellTitle2",
                                    text : '',
                                    renderTo : "cellHeader2",
                                    style: "opacity:1;",
                                    afterrender: function () {
                                        Fxt.setCmp("cellTitle2").setAttribute("class", "cell-title");
                                    }
                                },
                            ]
                        },
                        {
                            xtype : "h4",
                            id : "cellPrice2",
                            text : '',
                            renderTo : "container2",
                            style: "opacity:1;",
                            afterrender: function () {
                                Fxt.setCmp("cellPrice2").setAttribute("class", "cell-price");
                            }
                        },
                    ]
                },
                {
                    xtype : "div",
                    id : "container3",
                    text : '',
                    renderTo : "v1",
                    style: "opacity:1;",
                    afterrender: function () {
                        Fxt.setCmp("container3").setAttribute("class", "container3");
                        Fxt.setCmp("container3").addEventListener("click", () => {
                            Utils.showModal();
                        });
                    },
                    items :
                    [
                        {
                            xtype : "div",
                            id : "cellHeader3",
                            text : '',
                            renderTo : "container3",
                            style: "opacity:0.5;",
                            afterrender: function () {
                                Fxt.setCmp("cellHeader3").setAttribute("class", "cellHeader");
                            },
                            items :
                            [
                                {
                                    xtype : "h4",
                                    id : "cellTitle3",
                                    text : '',
                                    renderTo : "cellHeader3",
                                    style: "opacity:1;",
                                    afterrender: function () {
                                        Fxt.setCmp("cellTitle3").setAttribute("class", "cell-title");
                                    }
                                },
                            ]
                        },
                        {
                            xtype : "h4",
                            id : "cellPrice3",
                            text : '',
                            renderTo : "container3",
                            style: "opacity:1;",
                            afterrender: function () {
                                Fxt.setCmp("cellPrice3").setAttribute("class", "cell-price");
                            }
                        },
                    ]
                },
            ]
        });
    },
    /*Create UI Overlay Holder*/
    createViewportUI: function () {
        const modalMC = Fxt.create("div", {
            id: "modalMC",
            renderTo: "appDiv",
            style: "opacity:1;",
            afterrender: function () {
                Fxt.setCmp("modalMC").setAttribute("class", "modalContainer");
            },
            items :
            [
                {
                    xtype : "div",
                    id : "modalBodyMC",
                    text : '',
                    renderTo : "modalMC",
                    style: "opacity:0.5;",
                    afterrender: function () {
                        Fxt.setCmp("modalBodyMC").setAttribute("class", "modalBody");
                        Fxt.setStyle("modalMC", "cssText", "display:none;");
                    },
                    items :
                    [
                        {
                            xtype : "div",
                            id : "closeModalBtn",
                            text : "",
                            renderTo : "modalBodyMC",
                            style: "opacity:1;",
                            afterrender: function () {
                                Fxt.setCmp("closeModalBtn").setAttribute("class", "closeModal");
                                Fxt.setCmp("closeModalBtn").addEventListener("click", () => {
                                    Utils.hideModal();
                                });
                            },
                            items :
                            [
                                {
                                    xtype : "i",
                                    id : "closeModalBtnIcon",
                                    renderTo : "closeModalBtn",
                                    afterrender: function () {
                                        Fxt.setCmp("closeModalBtnIcon").setAttribute("class", "fa fa-times");
                                        Fxt.setStyle("closeModalBtnIcon", "cssText", "position: absolute;top:1px;left:5px;font-size:30px;");
                                    },
                                }
                            ]
                        },
                        {
                            xtype : "div",
                            id : "leftModalBtn",
                            text : "",
                            renderTo : "modalBodyMC",
                            style: "opacity:1;",
                            afterrender: function () {
                                Fxt.setCmp("leftModalBtn").setAttribute("class", "leftBtn");
                                Fxt.setCmp("leftModalBtn").addEventListener("click", () => {
                                    Utils.scrollListRight();
                                });
                            },
                            items :
                            [
                                {
                                    xtype : "i",
                                    id : "leftModalBtnIcon",
                                    renderTo : "leftModalBtn",
                                    afterrender: function () {
                                        Fxt.setCmp("leftModalBtnIcon").setAttribute("class", "fa fa-chevron-left");
                                        Fxt.setStyle("leftModalBtnIcon", "cssText", "position: absolute;top:6px;left:7px;font-size:30px;");
                                    },
                                }
                            ]
                        },
                        {
                            xtype : "div",
                            id : "rightModalBtn",
                            text : "",
                            renderTo : "modalBodyMC",
                            style: "opacity:1;",
                            afterrender: function () {
                                Fxt.setCmp("rightModalBtn").setAttribute("class", "rightBtn");
                                Fxt.setCmp("rightModalBtn").addEventListener("click", () => {
                                    Utils.scrollListLeft();
                                });
                            },
                            items :
                            [
                                {
                                    xtype : "i",
                                    id : "rightModalBtnIcon",
                                    renderTo : "rightModalBtn",
                                    afterrender: function () {
                                        Fxt.setCmp("rightModalBtnIcon").setAttribute("class", "fa fa-chevron-right");
                                        Fxt.setStyle("rightModalBtnIcon", "cssText", "position: absolute;top:6px;right:7px;font-size:30px;");
                                    },
                                }
                            ]
                        },
                        {
                            xtype : "div",
                            id : "modalFooter",
                            text : '',
                            renderTo : "modalBodyMC",
                            style: "opacity:1;",
                            afterrender: function () {
                                Fxt.setCmp("modalFooter").setAttribute("class", "modal-footer");
                            },
                            items :
                            [
                                {
                                    xtype : "div",
                                    id : "modalFooterBK",
                                    text : '',
                                    renderTo : "modalFooter",
                                    style: "opacity:0.3;",
                                    afterrender: function () {
                                        Fxt.setCmp("modalFooterBK").setAttribute("class", "modal-footer-bk");
                                    },
                                },
                                {
                                    xtype : "div",
                                    id : "modalFooterCnt",
                                    text : '',
                                    renderTo : "modalFooter",
                                    style: "opacity:1",
                                    afterrender: function () {
                                        Fxt.setCmp("modalFooterCnt").setAttribute("class", "modal-footer-cnt");
                                    },
                                },
                            ]
                        },
                        {
                            xtype : "div",
                            id : "modalImgHolder",
                            text : '',
                            renderTo : "modalBodyMC",
                            style: "opacity:1;",
                            afterrender: function () {
                                Fxt.setCmp("modalImgHolder").setAttribute("class", "modal-img-holder");
                            }
                        },
                    ]
                },
            ]
        });
    },
    /*Create UI Overlay Items*/
    createCarousel: function () {
        for ( let i in global.items ) {
            if ( global.items.hasOwnProperty(i)) {
                let carouselItem = Fxt.create("div", {
                    id: "carouselItem"+ i,
                    renderTo: "modalImgHolder",
                    style: "opacity:1;width:368px;height:" + global.items[i].height + "px;",
                    afterrender: function () {
                        Fxt.setStyle("carouselItem" + i, "cssText", "background-position:center;background-repeat: no-repeat;background-size: cover;background-image : url('" + global.items[i].href + "');");
                        Fxt.setCmp("carouselItem" + i).addEventListener("click", () => {
                            Utils.hideModal();
                            Viewport.updateCellModal(this.name);
                        });
                    },
                });

                let carouselCnt = Fxt.create("div", {
                    id: "carouselCnt"+ i,
                    renderTo: "modalFooterCnt",
                    style: "opacity:1;",
                    afterrender: function () {
                        //
                    },
                    items :
                    [
                        {
                            xtype : "i",
                            id : "carouselCntIcon" + i,
                            renderTo : "carouselCnt"+ i,
                            afterrender: function () {
                                if ( parseFloat(i) === 0 ) {
                                    Fxt.setCmp("carouselCntIcon" + i).setAttribute("class", "fa fa-circle");
                                }
                                else {
                                    Fxt.setCmp("carouselCntIcon" + i).setAttribute("class", "fa fa-circle-o");
                                }

                                Fxt.setStyle("carouselCntIcon" + i, "cssText", "padding:5px;color:#FFFFFF;font-size:12px;");
                            },
                        }
                    ]
                });
            }
        }
    },
    /*populate default cells*/
    updateCell: function (cellNumb) {
        for ( let i in global.items ) {
            if ( global.items.hasOwnProperty(i)) {
                if ( cellNumb === parseFloat(i) ) {
                    Fxt.setStyle("container" + cellNumb, "cssText", "background-position:center;background-repeat: no-repeat;background-size: cover;background-image : url('" + global.items[i].href + "');");
                    Fxt.setCmp( "cellTitle"+ cellNumb ).innerHTML = global.items[i].name;
                    Fxt.setCmp( "cellPrice"+ cellNumb ).innerHTML = "$"+global.items[i].priceHigh;
                    break;
                }
            }
        }
    },
    /*Reset carousel count icons*/
    updateCellCntIcons: function (name) {
        for ( let i in global.items ) {
            Fxt.setCmp("carouselCntIcon" + i).setAttribute("class", "fa fa-circle-o");
        }
    },
    /*Updates main cell window from carousel click listener*/
    updateCellModal: function (name) {
        /*Reset icons to default*/
        Viewport.updateCellCntIcons();

        for ( let i in global.items ) {
            if ( global.items.hasOwnProperty(i)) {
                if ( global.curPosXCnt === ( parseFloat(i) + 1) ) {
                    /*Update main window elements*/
                    Fxt.setStyle("container" + 1, "cssText", "background-position:center;background-repeat: no-repeat;background-size: cover;background-image : url('" + global.items[i].href + "');");
                    Fxt.setCmp( "cellTitle" + 1 ).innerHTML = global.items[i].name;
                    Fxt.setCmp( "cellPrice"+ 1 ).innerHTML = "$"+global.items[i].priceHigh;
                    /*Set selected carousel count icon*/
                    Fxt.setCmp("carouselCntIcon" + i).setAttribute("class", "fa fa-circle");

                    /*Update secondary window elements in desktop or tablet mode*/
                    if ( global.curPosXCnt === global.items.length - 2 ) {
                        Viewport.updateCell2((parseFloat(i) + 1));
                        Viewport.updateCell3((parseFloat(i) + 2));
                    }
                    else {
                        Viewport.updateCell2((parseFloat(i) - 1));
                        Viewport.updateCell3((parseFloat(i) - 2));
                    }
                    break;
                }
            }
        }
    },
    /*Updates cell 2 window from carousel click listener*/
    updateCell2: function (cellNumb) {
        for ( let i in global.items ) {
            if ( global.items.hasOwnProperty(i)) {
                if ( cellNumb === parseFloat(i) ) {
                    Fxt.setStyle("container2", "cssText", "background-position:center;background-repeat: no-repeat;background-size: cover;background-image : url('" + global.items[i].href + "');");
                    Fxt.setCmp( "cellTitle2" ).innerHTML = global.items[i].name;
                    Fxt.setCmp( "cellPrice2" ).innerHTML = "$"+global.items[i].priceHigh;
                    break;
                }
            }
        }
    },
    /*Updates cell 3 window from carousel click listener*/
    updateCell3: function (cellNumb) {
        for ( let i in global.items ) {
            if ( global.items.hasOwnProperty(i)) {
                if ( cellNumb === parseFloat(i) ) {
                    Fxt.setStyle("container3", "cssText", "background-position:center;background-repeat: no-repeat;background-size: cover;background-image : url('" + global.items[i].href + "');");
                    Fxt.setCmp( "cellTitle3" ).innerHTML = global.items[i].name;
                    Fxt.setCmp( "cellPrice3" ).innerHTML = "$"+global.items[i].priceHigh;
                    break;
                }
            }
        }
    },
};