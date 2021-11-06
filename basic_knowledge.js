// Alexandra Tkachenko, KA-92
// 06.11.2021
// Basic Knowledge (JS)


// This file consists of 5 main tasks





// TASK 1

function task1(given_list) {
	filtered_list  =  given_list.filter( x  =>  typeof x === 'number' );
	return filtered_list;
}

console.log("TASK 1")
console.log(task1([1,2,'a','b']))
console.log(task1([1,'a','b',0,15]))
console.log(task1([1,2,'aasf','1','123',123]))
console.log("")

// the function works as expected





// TASK 2

/*function wrong_first_non_repeating_letter(input) { // this function works, but it is case sensitive
	for (var i = 0;  i < input.length;  i++) {
		var letter  =  input.charAt(i);
		if (input.indexOf(letter) == i  &&  input.indexOf(letter, i+1) == -1) {
			return letter;
		}
	}
	return null;
}*/

function first_non_repeating_letter(input) {
    for(i in input){
        if(input.match(new RegExp(input[i],"gi")).length == 1) {  // "gi" is case insensitive
            return input[i];
        }
    }
    return "";
}

console.log("TASK 2")
console.log(first_non_repeating_letter('stress'))
console.log(first_non_repeating_letter('sTreSS'))
console.log(first_non_repeating_letter('assassins'))
console.log(first_non_repeating_letter('hheelllloo'))
console.log("")

// the function works as expected





// TASK 3

// any integer is divisible by 9 if and only if its digital root is divisible by 9 :)
function digital_root(num) {
	if (num != 0) {
		return (num % 9) || 9;
	}
	else {
		return 0;
	}
}

console.log("TASK 3")
console.log(digital_root(0))
console.log(digital_root(42))
console.log(digital_root(912))
console.log(digital_root(19112000))
console.log("")

// the function works as expected





// TASK 4

function task4(array) {
	target = 5
	pairs = 0
	for (var i = 0;  i < array.length;  i++) {
		for (var j = 0;  j < array.length;  j++) {
			if (i != j) {
				if (array[i] + array[j]  == target) {
					pairs++;
				}
			}
		}
	}
	return pairs/2; // considering (a,b) and (b,a) as the same pair
	// but if some numbers are repetitive, they are counted every time
}

console.log("TASK 4")
console.log(task4([1, 3, 6, 2, 2, 0, 4, 5]))
console.log("")

// the function works as expected





// TASK 5

function task5(guests) {
	GUESTS  =  guests.toUpperCase();
	array  =  GUESTS.split(';').map(x => x.replace(/(\w+):(\w+)/,'($2, $1)'))
    sorted  =  array.sort().join("")
    return sorted;
}

console.log("TASK 5")
console.log(task5("Fired:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))
console.log("")





// EXTRA TASK 1
function nextBigger(n){
	var d = n.toString().split('');
	// find the pivot, the point (from right) where i > i-1
	var p = -1;
	for (var i = d.length-1; i > 0; i--) {
		if (+d[i] > +d[i-1]) {
			p = i-1;
			break;
		}
	}
	// if we are unable to find the pivot, skip
	if (p == -1) return p;
	// splice the digits in the pivot
	var right = d.splice(p);
	// extract pivot
	var pv = right.splice(0, 1)[0];
	// find the lowest number > pv
	var mm = null, mmi = null;
	for (var i = 0; i < right.length; i++) {
		if (right[i] > pv) {
			if (mm == null || right[i] < mm) {
				mm = right[i];
				mmi = i;
			}
		}
	}
	if (mmi == null) return -1;
	right.splice(mmi, 1);
	right.push(pv);
	right = right.sort();
	// concat the left + new pivot + right part
	var ret = +d.concat([mm]).concat(right).join('');
	if (ret < n) return -1;
	return ret;
}

console.log("EXTRA TASK 1")
console.log(nextBigger(2012))
console.log(nextBigger(321))