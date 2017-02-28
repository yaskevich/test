function add(x, y) { return x + y; }
function mul(x, y) { return x * y; }

function make(a) { 
	var arr = [];
	return function (b) {
			return typeof b === "function" ? [...arr].reduce((x,y)=>b(x,y), a): (arr.push(b), arguments.callee);
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
