;(function(){

  var undefined

  , FAP = function(){
    Object.defineProperty(arguments, 'this', {value: this})
    var _ = arguments
    return F(_) && A(_) || P(_, function(){
      return FAP.apply(_, arguments)
    })
  }

  , F = function(a) { return typeof a[0] === 'function' }

  , A = function(a) { return apply.apply(a.this, [a]) }

  , P = function(a, f) { return extendFunction(a, f) }

  , isArguments = function(a) { return '[object Arguments]' === String(a) }

  , ary = function(a) { return Array.prototype.slice.apply(a, []) }

  , flat = function(a, depth) {
    return (isArguments(a.this) ? flat(a.this) : []).concat(ary(a))
  }

  , inspect = function(self, argv){
    console.log(flat(self).concat(ary(argv)))
  }

  , apply = function(a) {
    console.log(this[0])
    return FAP.apply(this.this, this)
  }

  , extendFunction = function(a, f) {
    if(!a.fap) Object.defineProperty(a, 'fap', {value: fap})
    if(!f.fap) Object.defineProperty(f, 'fap', {value: a.fap})
    return f
  }

  , puts = function(){
  }

  , fap = {
    puts: puts
  }

  return module.exports = new FAP

})
(typeof module !== 'undefined' ? module : new function(global, name){
  Object.defineProperty(this, 'exports', {
    set: function(value){ global[name] = value },
    get: function() { return global[name] }
  })
}(this, 'fap'))

