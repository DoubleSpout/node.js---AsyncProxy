var AsyncProxy = require('./AsyncProxy.js');
var as = AsyncProxy(true);
 
var f1 = function(rec){//异步函数1，注意这里需要传递一个参数order或者其他任何名字，代表他的序列
	setTimeout(function(){  
		console.log('f1 is ok')    
			rec();
	},1000)
}

var f2 = function(rec){  
	setTimeout(function(){  
		console.log('f2 is ok!')    
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
	as=null; //用完以后将as设置为null,这里需要手动gc
}
var total = as.ap(f1, f2, f3,f4, all);  //as.ap是入口，参数规则  异步函数1, 异步函数2 。。。 回调函数
console.log('需要返回的异步处理数： '+total) //这里输出4