module.exports = function z(target) {
  if (!target) return
  return Object.defineProperty(target, 'z', {
    value: function (f) {
      if (typeof f === 'function') return z(f(this.valueOf()));
    },
    writable: true,
    configurable: true,
  });
};
