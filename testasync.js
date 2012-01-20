var AsyncProxy = require('./AsyncProxy.js');
var as = AsyncProxy();
 
var f1 = function(rec){  
	setTimeout(function(){  
		console.log('f1 is ok')    
		rec();
	},1000)
}

var f2 = function(rec){  
	setTimeout(function(){  
		console.log('f2 is ok')    
		rec();
	},800)
}


var f3 = function(rec){  
	setTimeout(function(){  
		console.log('f3 is ok')    
			rec();
	},500)
}

var f4 = function(rec){  
	setTimeout(function(){  
		console.log('f4 is ok')    
			rec();
	},300)
}


var all = function(){
	console.log('All of these is ok!')
	as=null; //gc
}
var total = as.ap(f1, f2, f3,f4, all);  //as.ap(fun1, fun2, ... , allDoneCallback)
console.log('Need received numbers： '+total) //the number of how many async-functions is.