//remove:
require('../build/function-calling.node.js');
//:remove

wru.test([
  {
    name: 'main',
    test: function () {
      wru.assert(typeof Function.calling == "function");
    }
  },{
    name: 'used like bind',
    test: function () {
      var o = {};
      wru.async(function(){
        wru.assert('right context', this === o);
      }.calling(o))();
      wru.async(function(a){
        wru.assert('right args', this === o && a === 1);
      }.calling(o, [1]))();
      wru.async(function(a, b){
        wru.assert('right multiple args', this === o && a === 1 && b === 2);
      }.calling(o, [1, 2]))();
    }
  },{
    name: 'limiting arguments',
    test: function () {
      var pInt = parseInt.calling(undefined, [null, 10]);
      wru.assert('still base 10', pInt('08', 2) === 8);
      wru.assert('usable with Arrays', ['01', '02'].map(pInt).join(',') === '1,2');
      wru.assert('not usable with Arrays', pInt('0a', 16) === 0);
    }
  },{
    name: 'not limiting arguments',
    test: function () {
      var pInt = parseInt.calling(undefined, [null], true),
          fromCharCode  = String.fromCharCode.calling(String, [], true),
          charCodeAt    = String.prototype.charCodeAt.calling(null, [0]);
      wru.log('second argument cnsidered', pInt('0a', 16) === 10);
      wru.log('generic function', fromCharCode(1, 2, 3) === [1, 2, 3].map(charCodeAt).join(''));
    }
  },{
    name: 'hybrid',
    test: function () {
      var hybrid = [].join.calling(
        null,
        ['1', null, '2', undefined, '3', null, '4']
      );
      wru.log('' + hybrid)
    }
  }
]);
