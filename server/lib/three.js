/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * Module dependencies.
 */

// var fs = require('fs')
//   , Image = require('canvas').Image
//   , jsdom = require('jsdom')
//   , document = jsdom.jsdom('<!doctype html><html><head></head><body></body></html>')
//   , window = document.createWindow()
//   , src = fs.readFileSync(__dirname + '/../include/three.js')
//   , self = global;

const  fs = require('fs');
const  Image = require('canvas').Image;
const  jsdom = require('jsdom');
const { JSDOM } = jsdom;
// const  document = jsdom.jsdom('<!doctype html><html><head></head><body></body></html>');
const { window } = new JSDOM();
const { document } = (new JSDOM('<!doctype html><html><head></head><body></body></html>')).window;
const  src = fs.readFileSync(__dirname + '/../include/three.js');
const  self = global;
global.document = document;

/**
 * Monkey patch for Image#addEventListener.
 *
 * @param {String} type
 * @param {Function} listener
 * @param {Boolean} useCapture (will ignore)
 */

Image.prototype.addEventListener = function(type, listener, useCapture) {
  this['on' + type] = listener;
};

/**
 * Evaluate Three.js source code.
 */

eval('(function(window, document) {'
  + src.toString('utf-8').replace('var THREE', 'var THREE = window.THREE')
  + '})(window, document);'
);

window.THREE.Image = Image;

/**
 * Expose `THREE`
 */

module.exports = window.THREE;