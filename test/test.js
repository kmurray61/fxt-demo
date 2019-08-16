/*Mocha unit tests || run using npm test*/
let Fxt            = require('../Fxt.js');
let Utils          = require('../Utils.js');
let Remoting       = require('../Remoting.js');
let Viewport       = require('../Viewport.js');
let assert         = require('assert');
let XMLHttpRequest = require('xhr2');

describe('unit tests', function() {
    /* Emulate onbeforeunload and pagehide browser events */
    describe('killApplication', function() {
        it('should return application killed', function() {
            assert.equal('application killed', Utils.killApplication());
        });
    });
    /* Load and Parse JSON file from XMLHttpRequest via xhr2 proxy */
    describe('getList', function() {
        it('should render application json and check length', function() {
            let url = 'https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json';
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url, true );
            global.items = [];
            xhr.onload = () => {
                let result = JSON.parse(xhr.responseText);
                let resLength = 10;
                assert.equal(resLength, Remoting.processResults(result));
            };
            xhr.send();
        });
    });
    /* Emulate test for createElements since it is not possible to actually test createElement because DOM does not exist in nodeJS*/
    describe('testViewport', function() {
        it('should call viewport test', function() {
            assert.equal('Viewport Test Success', Viewport.hasRendered());
        });
    });
    /* Emulate test for Fxt.logger */
    describe('testLogger', function() {
        it('should call fxt logger', function() {
            assert.equal('testing fxt logger success', Fxt.logger('testing fxt logger success'));
        });
    });
});
