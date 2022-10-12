
//задание 3
function makeCounter() {
    let count = 1;

    return function() {
        return count++;
    };
}

let counter = makeCounter();

alert( counter());//1
alert( counter());//2
alert( counter());//3
alert( counter());//4

// задание 2
var massive = new Array();
for (var i=0; i<10; i++) {
    massive.push('x');
}
console.log(massive)

// задание 1
let a;
if (a > 0) {
	var ggg = function() {
		console.log('!');
	}
} else {
	let ggg = function() {
		console.log('!!');
	}
} 