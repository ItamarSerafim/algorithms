/*
In this this algorithm I try to count monotonic sequences in an array of integers
*/

//Test case array
var arr = [1,2,3,0,5,6,3,3,4,5,4,5,6];

//Count monotonic sequences in this variables
var incrSequences = decrSequences = constSequences = 0;

// 1) Counting increasing monotonic sequences in the array
var loops = 4.e9;//limit loops to 4 billions
for(var i = 0; i < arr.length && loops; i++){ loops--;
		var countIncr = countMonotonicSequence(arr, i, 'incr');
		if(countIncr > i){  console.log(`i: ${i}, countIncr: ${countIncr}`); i = countIncr; incrSequences++;}
	
}

// 2) Counting decreasing monotonic sequences in the array
loops = 4.e9;//limiting loops to 4 billions
for(var i = 0; i < arr.length && loops; i++){ loops--;
		var countIncr = countMonotonicSequence(arr, i, 'decr');
		if(countIncr > i){  console.log(`i: ${i}, countIncr: ${countIncr}`); i = countIncr; decrSequences++;}
	
}

// 3) Counting const monotonic sequences in the array
loops = 4.e9;//limiting loops to 4 billions
for(var i = 0; i < arr.length && loops; i++){ loops--;
		var countIncr = countMonotonicSequence(arr, i, 'const');
		if(countIncr > i){  console.log(`i: ${i}, countIncr: ${countIncr}`); i = countIncr; constSequences++;}
	
}


function countMonotonicSequence(arr, fromIndex, type){
	var index = fromIndex;
	var currentElement = arr[index];
	var nextElement    = arr[index + 1];

	console.log(`From index: ${index}, element: ${currentElement}`);
	switch(type){
        case 'incr':
        while( nextElement > currentElement){ console.log(`\t\t\tcurrentElement: ${currentElement}, nextElement: ${nextElement}`);
            index++;
            currentElement = arr[index];
            nextElement = arr[index + 1];
        }
		break;
        case 'decr' :
        while( nextElement < currentElement){ console.log(`\t\t\tcurrentElement: ${currentElement}, nextElement: ${nextElement}`);
            index++;
            currentElement = arr[index];
            nextElement = arr[index + 1];
        }
		break;
        case 'const' :
        while( nextElement == currentElement){ console.log(`\t\t\tcurrentElement: ${currentElement}, nextElement: ${nextElement}`);
            index++;
            currentElement = arr[index];
            nextElement = arr[index + 1];
        }
		break;

    }
	
	console.log(`'Til index: ${index}, element ${currentElement}`);
	
	return index;
}

console.log('Monotonic sequences in array count: ' + (incrSequences + decrSequences + constSequences));

