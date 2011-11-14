/**
 * French Press -- Version 0.1.0
 * http://github.com/tofumatt/frenchpress
 *
 * Copyright (c) 2011, Matthew Riley MacPherson
 * MIT Licensed
 */
var data = require('self').data;

eval(data.load('coffee-script.js'));

var CoffeeScript = this.CoffeeScript;

exports.brew = function() {
    return CoffeeScript.compile(data.load('main.coffee'));
};

exports.cafe = function(file) {
    return CoffeeScript.compile(data.load(file));
};
