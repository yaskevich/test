function add(x, y) { return x + y; }
function mul(x, y) { return x * y; }

function make(a) { 
	var arr = [a];
	return function fn(...args) {
		let param = args[0];
		if (typeof param === "function"){
			return [...arr].reduce((x,y)=>param(x,y));
		} else {
			arr.push(param);
			// return fn.apply(args);
			return fn;
		}
		
		return fn;
	}	
}

var s = make(1)(2)(3)(4)(5);
console.log(s(mul));
console.log(s(add));
// Assert(s(add) == 15);
// Assert(s(mul) == 120);
// var x = make(5)(10)(15);
// Assert(x(add) == 30);
// Assert(x(mul) == 750);
