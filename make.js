function add(x, y) { return x + y; }
function mul(x, y) { return x * y; }

function make(a) { 
console.log("top",a);
var arr = [];
arr.push(a);
	function fn(...args) {
		if (args.length){
			console.log(typeof args[0],args[0]);
			arr.push(args);
			return fn.apply(args);
		}
		return fn;
		
	}
	return fn;
}

var s = make(1)(2)(3)(4)(5);
s(add);
// Assert(s(add) == 15);
// Assert(s(mul) == 120);
// var x = make(5)(10)(15);
// Assert(x(add) == 30);
// Assert(x(mul) == 750);