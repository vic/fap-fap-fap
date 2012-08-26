;(function(){

  var undefined

  , FAP = function(){
    Object.defineProperty(arguments, 'this', {value: this})
    return F(arguments) && A(arguments) || P(arguments)
  }

  , F = function(a) { return typeof a[0] === 'function' }

  , A = function(a) { return apply.apply(a.this, [a]) }

  , P = function(a) { return extendFunction(a) }

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

  , extendFunction = function(a) {
    var f = function(){
      return FAP.apply(a, arguments)
    }
    if(!a.fap) Object.defineProperty(a, 'fap', {value: fap})
    for(var i in a.fap) if(a.fap.hasOwnProperty(i)) f[i] = a.fap[i]
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

