var Hook = require('hook.io').Hook,
    util = require('util');

var VanillaHook = exports.VanillaHook = function(options) {
  var self = this;
  Hook.call(this, options);
  self.on("hook::ready", function() {
    self.log(self.name, "System is ready");
  });
};

util.inherits(VanillaHook, Hook);