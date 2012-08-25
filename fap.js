;(function(){

  var Fap = function(fap) {
    if(fap === Fap && arguments.length == 1){
      return stack
    }
  }

  var stack = function(self){
    var args = Array.prototype.slice.apply(arguments, [1])
    var stk = function(){
      var argv = Array.prototype.slice.apply(arguments, [])
      if( isSimpleFunctionApplication(argv) ){
        return apply(self, argv[0], args)
      }
      return stack.apply(null, [self].concat(args).concat(argv))
    }
    return stk
  }

  var isSimpleFunctionApplication = function(a) {
    return a.length == 1 && Fap !== a[0] && typeof a[0] === 'function'
  }

  var apply = function(self, func, args){
    return stack( func.apply(self, args) )
  }


  module.exports = Fap
})
(typeof module !== 'undefined' ? module : new function(global, name){
  Object.defineProperty(this, 'exports', {
    set: function(value){ global[name] = value },
    get: function() { return global[name] }
  })
}(this, 'fap'))

