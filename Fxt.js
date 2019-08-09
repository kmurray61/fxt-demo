/**
 * FXT ( Flash Extensible Technique )
 * Inspired by ExtJS and Flash/ActionScript. 
 * Creates a dynamic UI like EXTJS ( That was inspired by FlashBuilder [Flex] ) 
 * Simplifies common JS calls to DOM objects in a familiar format.
 * Current item depth is 10 levels MAX
 * @author Ken Murray
 * @date 4/25/19
 * @version 2.0.04
 */

const Fxt = {
    create : function (element, attribute, inner) {
        try {
            let curEleID = attribute.id;
            let renderTo = attribute.renderTo;
            let callBack = attribute.afterrender;

            if ( typeof( element ) === "undefined" ) {
                return false;
            }

            if ( typeof(inner) === "undefined") {
                inner = "";
            }

            let el = document.createElement(element);

            if ( typeof(attribute) === 'object' ) {
                for ( let key in attribute ) {
                    if ( attribute.hasOwnProperty(key)) {
                        el.setAttribute(key, attribute[key]);
                    }
                }
            }

            if (!Array.isArray(inner)) {
                inner = [inner];
            }

            for ( let k = 0; k < inner.length; k++ ) {
                if ( typeof inner[k] != 'undefined' ) {
                    if ( inner[k].tagName ) {
                        el.appendChild(inner[k]);
                    } 
                    else {
                        el.appendChild( document.createTextNode(inner[k]) );
                    }
                }
            }

            let currentDiv = document.getElementById(renderTo);
            currentDiv.appendChild(el);

            if ( callBack ) {
                callBack();
            }

            if ( attribute.items && attribute.items.length ) {	
                for ( let i = 0; i < attribute.items.length; i++ ) {    
                    this.createChildEle( attribute.items[i] );

                    if ( attribute.items[i].items && attribute.items[i].items.length ) {	
                        for ( let j = 0; j < attribute.items[i].items.length; j++ ) {
                            this.createChildEle( attribute.items[i].items[j] );

                            if ( typeof attribute.items[i].items[j].items != 'undefined' && attribute.items[i].items[j].items.length ) {
                                for ( let k = 0; k < attribute.items[i].items[j].items.length; k++ ) {
                                    this.createChildEle( attribute.items[i].items[j].items[k] );

                                    if ( typeof attribute.items[i].items[j].items[k].items != 'undefined' && attribute.items[i].items[j].items[k].items.length ) {
                                        for ( let l = 0; l < attribute.items[i].items[j].items[k].items.length; l++ ) {
                                            this.createChildEle( attribute.items[i].items[j].items[k].items[l] );
                                            
                                            if ( typeof attribute.items[i].items[j].items[k].items[l].items != 'undefined' && attribute.items[i].items[j].items[k].items[l].items.length ) {
                                                for ( let m = 0; m < attribute.items[i].items[j].items[k].items[l].items.length; m++ ) {
                                                    this.createChildEle( attribute.items[i].items[j].items[k].items[l].items[m] );

                                                    if ( typeof attribute.items[i].items[j].items[k].items[l].items[m].items != 'undefined' &&     attribute.items[i].items[j].items[k].items[l].items[m].items.length) {
                                                        
                                                        for ( let n = 0; n < attribute.items[i].items[j].items[k].items[l].items[m].items.length; n++ ) {
                                                            this.createChildEle( attribute.items[i].items[j].items[k].items[l].items[m].items[n] );
                                                            
                                                            if ( typeof attribute.items[i].items[j].items[k].items[l].items[m].items[n].items != 'undefined' &&     attribute.items[i].items[j].items[k].items[l].items[m].items[n].items.length) {

                                                                for ( let o = 0; o < attribute.items[i].items[j].items[k].items[l].items[m].items[n].items.length; o++ ) {
                                                                    this.createChildEle( attribute.items[i].items[j].items[k].items[l].items[m].items[n].items[o] );
                                                                    
                                                                    if ( typeof attribute.items[i].items[j].items[k].items[l].items[m].items[n].items[o].items != 'undefined' &&     attribute.items[i].items[j].items[k].items[l].items[m].items[n].items[o].items.length) {

                                                                        for ( let p = 0; p < attribute.items[i].items[j].items[k].items[l].items[m].items[n].items[o].items.length; p++ ) { 
                                                                            this.createChildEle( attribute.items[i].items[j].items[k].items[l].items[m].items[n].items[o].items[p] );
                                                                            
                                                                            if ( typeof attribute.items[i].items[j].items[k].items[l].items[m].items[n].items[o].items[p].items != 'undefined' &&     attribute.items[i].items[j].items[k].items[l].items[m].items[n].items[o].items[p].items.length) {

                                                                                for ( let q = 0; q < attribute.items[i].items[j].items[k].items[l].items[m].items[n].items[o].items[p].items.length; q++ ) { 
                                                                                    this.createChildEle( attribute.items[i].items[j].items[k].items[l].items[m].items[n].items[o].items[p].items[q] );
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                } 
                            }
                        }
                    }
                }
            }
        }
        catch ( e ) {
            this.logger("createElement catch e = " + e );
        }
    },
    
    createChildEle : function ( items ) {
        try {
            if ( typeof items.value === 'undefined' ) {
                items.value = '';
            }

            if ( typeof items.text === 'undefined' ) {
                items.text = '';
            }

            let childEle = this.create(items.xtype, 
                {
                    id          : items.id, 
                    renderTo    : items.renderTo,
                    href        : items.href,
                    style       : items.style,
                    value       : items.value,
                    src         : items.src,
                    afterrender : items.afterrender
                },
                items.text, items.afterrender,
            );
            
        }
        catch ( e ) {
            this.logger("createChildEle catch e = " + e );
        }
    },

    getCmp : function ( comp ) {
        try {
            if ( comp && comp !== "" && comp !== -1 ) {
                if ( document.getElementById ) {
                    if ( document.getElementById( comp ) != null ) {
                        return true;
                    }
                }
                else if ( document.all ) {
                    if ( window.document.all[ comp ] != null ) {
                        return true;
                    }
                }
                else if ( document.layers ) {
                    if ( window.document.layers[ comp ] != null ) {
                        return true;
                    }
                }
            }
            return false;
        }
        catch ( e ) {
            console.log("getCmp catch e = " + e ); 
        }
    },

    setCmp : function ( comp ) {
        try {
            if ( comp && comp !== "" && comp !== -1 ) {
                if ( document.getElementById ) {
                    return document.getElementById( comp );
                }
                else if ( document.all ) {
                    return window.document.all[ comp ];
                }
                else if (document.layers) {
                    return window.document.layers[ comp ];
                }
            }
            return null;
        }
        catch ( e ) {
            console.log("setCmp catch e = " + e ); 
        }
    },

    setAttribute : function ( comp , attr , value ) {
        try {
            if ( comp && comp !== "" && comp !== -1 ) {
                if ( document.getElementById( comp ) != null ) {
                    document.getElementById( comp ).setAttribute( attr, value );
                }
            }
        }
        catch ( e ) {
            console.log("setAttribute catch e = " + e ); 
        }
    },

    setText : function ( comp , value ) {
        try {
            if ( comp && comp !== "" && comp !== -1 ) {
                if ( document.getElementById( comp ) != null ) {
                    document.getElementById( comp ).innerHTML = value;
                }
            }
        }
        catch ( e ) {
            console.log("setText catch e = " + e ); 
        }
    },

    appendText : function ( comp , value ) {
        try {
            if ( comp && comp !== "" && comp !== -1 ) {
                if ( document.getElementById( comp ) != null ) {
                    document.getElementById( comp ).innerHTML += value;
                }
            }
        }
        catch ( e ) {
            console.log("setText catch e = " + e ); 
        }
    },

    setStyle : function ( comp , style, value ) {
        try {
            if ( comp == null || style == null || value == null )
                return;

            if ( comp && comp !== "" && comp !== -1 ) {
                if ( document.getElementById( comp ) != null ) {
                    switch ( style ) {
                        case "width":
                            if ( value === "100%" ) {
                                document.getElementById( comp ).style.cssText += 'width:'+value+'!important;';
                            }
                            else {
                                if ( value.toString().indexOf("%") !== -1 ) {
                                    document.getElementById( comp ).style.cssText += 'width:'+value+'!important;';
                                }
                                else {
                                    document.getElementById( comp ).style.cssText += 'width:'+value+'px!important;';
                                }
                            }
                            break;
                        case "height":
                            if ( value === "100%" ) {
                                document.getElementById( comp ).style.cssText += 'height:'+value+'!important;';
                            }
                            else {
                                if ( value.toString().indexOf("%") !== -1 ) {
                                    document.getElementById( comp ).style.cssText += 'height:'+value+'!important;';
                                }
                                else if ( value.toString().indexOf("auto") !== -1 ) {
                                    document.getElementById( comp ).style.cssText += 'height:'+value+'!important;';
                                }
                                else {
                                    document.getElementById( comp ).style.cssText += 'height:'+value+'px!important;';
                                }
                            }
                            break;
                        case "opacity":
                            document.getElementById( comp ).style.cssText += 'opacity:'+value+'!important;';
                            break;
                        case "visible":
                            if ( value.toString() === "true" ) {
                                document.getElementById( comp ).style.cssText += 'visibility:visible!important;';
                            }
                            else {
                                document.getElementById( comp ).style.cssText += 'visibility:hidden!important;';
                            }
                            break;
                        case "left":
                            document.getElementById( comp ).style.cssText += 'left:'+value+'px!important;';
                            break;
                        case "right":
                            document.getElementById( comp ).style.cssText += 'right:'+value+'px!important;';
                            break;
                        case "top":
                            document.getElementById( comp ).style.cssText += 'top:'+value+'px!important;';
                            break;
                        case "bottom":
                            document.getElementById( comp ).style.cssText += 'bottom:'+value+'px!important;';
                            break;
                        case "cssText":
                            document.getElementById( comp ).style.cssText += value;
                            break;
                        case "zIndex":
                            document.getElementById( comp ).style.cssText += 'z-index:'+value+'!important;';
                            break;
                        case "color":
                            document.getElementById( comp ).style.color = value;
                            break;
                        case "margin":
                            document.getElementById( comp ).style.margin = value;
                            break;
                        case "paddingTop":
                            document.getElementById( comp ).style.paddingTop = value;
                            break;
                        case "paddingLeft":
                            document.getElementById( comp ).style.paddingLeft = value;
                            break;
                        case "paddingRight":
                            document.getElementById( comp ).style.paddingRight = value;
                            break;
                        case "paddingBottom":
                            document.getElementById( comp ).style.paddingRight = value;
                            break;
                        case "backgroundImage":
                            document.getElementById( comp ).style.backgroundImage = value;
                            break;
                        case "backgroundSize":
                            document.getElementById( comp ).style.backgroundSize = value;
                            break;
                        case "backgroundPosition":
                            document.getElementById( comp ).style.backgroundPosition = value;
                            break;
                        case "backgroundPositionX":
                            document.getElementById( comp ).style.backgroundPositionX = value;
                            break;
                        case "marginLeft":
                            document.getElementById( comp ).style.marginLeft = value;
                            break;
                        case "marginRight":
                            document.getElementById( comp ).style.marginRight = value;
                            break;
                        case "marginTop":
                            document.getElementById( comp ).style.marginTop = value;
                            break;
                        case "fontSize":
                            document.getElementById( comp ).style.fontSize = value +"px";
                            break;
                        case "minHeight":
                            document.getElementById( comp ).style.minHeight = value;
                            break;
                        case "position":
                            document.getElementById( comp ).style.position = value;
                            break;
                        case "appendChild":
                            document.getElementById( comp ).appendChild(value);
                            break;	
                        case "className":
                            document.getElementById( comp ).className = value;
                            break;	
                        case "setText":
                            document.getElementById( comp ).innerHTML = value;
                            break;	
                        case "innerHTML":
                            document.getElementById( comp ).innerHTML = value;
                            break;		
                        case "borderColor":
                            document.getElementById( comp ).style.borderColor = value;
                            break;
                    }
                }
            }
        }
        catch ( e ) {
            console.log("setStyle catch e = " + e ); 
        }
    },

    getURL : function  ( url, win ) {
        try {
            window.open(url, win);
        }
        catch ( e ) {
            Fxt.logger( "getURL catch e = " + e.toString() );
        }
    },
    
    logger : function ( msg ) {
        console.log( msg );
    },
};