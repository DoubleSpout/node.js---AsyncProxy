[![build status](https://secure.travis-ci.org/DoubleSpout/node.js---AsyncProxy.png)](http://travis-ci.org/DoubleSpout/node.js---AsyncProxy)
#AsyncProxy.js - 异步代码管理模块，asynchronous code helper

##举个例子：For example

  var as = require('AsyncProxy')();

      fn1, fn2, fn3, fn4, //4 asynchronous function

      callback; //call this function when all the async functions finished executing;

      var total = as.ap(fn1, fn2, fn3, fn4, callback);//'total' means how many async job will complete
      
      //as.ap.apply(null, [fn1, fn2, fn3, fn4, callback]);//when the async functions's length is unknown;

##注意点：cautions

  1、 var as = require('AsyncProxy')();//这样定义会并发执行异步函数,效率高 Concurrent execution the async functions

  2、 var as = require('AsyncProxy')(true);//这样会依次执行异步函数,有先后依赖 Call the asynchronous functions one by one

  3、 var fn1 = function(rec){setTimeout(function(){
	//... do something;
	rec();//这里必须执行这个，表示异步返回 Tell AsyncProxy the async has complete;
      }, 5000);}

##如何安装：how to install
  
  1、直接github下载， download it here

  2、npm install AsyncProxy
   
