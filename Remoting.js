/*
   @author Ken Murray
   @email virtualjam@gmail.com
   @date 8/7/19
   @tem Constructors
*/
const Remoting = {
    /* Parse JSON file */
	getList : function () {
		try {		
			let url = 'index.json';
			let res = {};

			let xhr = this.createCORSRequest('GET', url);
			if (!xhr) {
				Fxt.logger('CORS not supported');
				return;
			}
			
			// Response handlers.
			xhr.onload = () => {
				let result = JSON.parse(xhr.responseText);
				for ( let i in result.groups ) {
					/* Create global objects */
					global.item = {};
					if (result.groups.hasOwnProperty(i)) {
						global.item.name = result.groups[i].name;
						for ( let j in result.groups[i].links ) {
							if (result.groups[i].links.hasOwnProperty(j)) {
								global.item.link = result.groups[i].links[j];
							}
						}

						for ( let k in result.groups[i].images ) {
							if (result.groups[i].images.hasOwnProperty(k)) {
								global.item.href = result.groups[i].images[k].href;
								global.item.width = result.groups[i].images[k].width;
								global.item.height = result.groups[i].images[k].height;
							}
						}

						for ( let l in result.groups[i].priceRange ) {
							if (result.groups[i].priceRange.hasOwnProperty(l)) {
								global.item.priceHigh = result.groups[i].priceRange[l].high;
								global.item.priceLow = result.groups[i].priceRange[l].low;
							}
						}
						/* Update global array */
						global.items.push( global.item );
					}
				}
				/* Create the item carousel */
				Viewport.createCarousel();

                /*Populate default cells*/
				Viewport.updateCell(1);
				Viewport.updateCell(2);
				Viewport.updateCell(3);
			};
			
			xhr.onerror = () => {
				Fxt.logger('Woops, there was an error making the request.' + xhr.responseText);
			};
			
			xhr.send();
		
		}
		catch ( e ) {
			Fxt.logger( "getList catch e = " + e );
		}
	},
	createCORSRequest : function (method, url) {
		let xhr = new XMLHttpRequest();
		if ("withCredentials" in xhr) {
			// XHR for Chrome/Firefox/Opera/Safari.
			xhr.open(method, url, true);
		 } 
		 else if (typeof XDomainRequest != "undefined") {
			// XDomainRequest for IE.
			xhr = new XDomainRequest();
			xhr.open(method, url);
		}
		else {
			// CORS not supported.
			xhr = null;
		}
		return xhr;
	}
};