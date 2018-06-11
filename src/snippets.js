
//*********** CREATE DATA OUT OF BRANDS NAMES *********** 

//Create site urls, e-mail, twitter and facebook accounts out of brand names.
var brands = 
`Apple
Google
Coca-Cola
Microsoft
Toyota
IBM
Samsung
Amazon
Mercedes-Benz
GE
BMW
McDonald's
Disney
Intel
Facebook
Cisco
Oracle
Nike
Louis Vuitton
H&M
Honda
SAP
Pepsi
Gillette
American Express
IKEA
Zara
Pampers
UPS
Budweiser
J.P. Morgan
eBay
Ford
Hermès
Hyundai
Nescafe
Accenture
Audi
Kellogg's
Volkswagen
Philips
Canon
Nissan
Hewlett Packard Enterprise
L'Oréal
AXA
HSBC
HP
Citi
Porsche
Allianz
Siemens
Gucci
Goldman Sachs
Danone
Nestlé
Colgate
Sony
3M
adidas
Visa
Cartier
Adobe
Starbucks
Morgan Stanley
Thomson Reuters
Lego
Panasonic
Kia
Santander
Discovery
Huawei
Johnson & Johnson
Tiffany & Co.
KFC
MasterCard
DHL
Land Rover
FedEx
Harley-Davidson
Prada
Caterpillar
Burberry
Xerox
Jack Daniel's
Sprite
Heineken
Mini
Dior
PayPal
John Deere
Shell
Corona
MTV
Johnnie Walker
Smirnoff
Moët & Chandon
Ralph Lauren
Lenovo
Tesla
`.split(/\n/g);
var emails = brands.map(item => 'contact@'+item.replace(/[\s\W]+/g, '').toLowerCase()+'.com');
var sites = brands.map(item => 'https://www.'+item.replace(/[\s\W]+/g, '').toLowerCase()+'.com');
var facebookAccounts = brands.map(item => 'https://www.facebook.com/'+item.replace(/[\s\W]+/g, '').toLowerCase()+'');
var twitterAccounts = brands.map(item => 'https://twitter.com/'+item.replace(/[\s\W]+/g, '').toLowerCase()+'');
facebookAccounts.join('\n');


//*********** GET DATA FROM PAGE*********** 

//Get text from ul elements having class .job-titles:
var jobTitlesArray = []
var jobTitlesUls = document.querySelectorAll('.job-titles');
jobTitlesUls.forEach((ul, index)=>{
	jobTitlesArray = [...jobTitlesArray, ...ul.innerText.split(/\n/g)]
   console.log(ul.innerText.split(/\n/g), index)
});
JSON.stringify(jobTitlesArray);
//Add script for getting data from page

//*********** MAKE NESTED OBJECT FROM ARRAY *********** 
var menus = [
	{title: 'menu level-1'},
	{title: 'menu level-2'},
	{title: 'menu level-3'},
	{title: 'menu level-4'},
]

var i=0;
menus.reverse().reduce((a,b) => {
	b.children = a; 
	return b;
});


//*********** PAIRS THAT MAKE A SUM *********** 
var numbersA = [4,2,3,1];
var numbersB = [1,2,5,5];
var numbersC = [3,2, 8,5,7,0,1,10];
/*
// A more time consuming algorithm
function findPairsThatSummup(numbers, sum){
	let numbersPair = [];
	let pairSignal = {};
	numbers.forEach((numL1, idxL1) =>{
		let cSum = numL1;
		numbers.forEach((numL2, idxL2) =>{
			if(idxL2 == idxL1) return;
            let inSum = numL1 + numL2;
			if(inSum == sum) {
				let pairSig = Math.min(idxL1,idxL2) + Math.max(idxL1,idxL2);
				if(pairSignal[pairSig]) return;
				pairSignal[pairSig] = true;
				numbersPair.push([{number: numL1, index: idxL1}, {number: numL2, index: idxL2}]);
            }
        });
	});
	//console.log(pairSignal)
	return numbersPair;
}*/
// A more robust implementation. Still giving me some duplicate pairs
function findPairsThatSummup(numbers, sum){
	let numbersPair = [];
    var l = numbers.length;
    for(let i=l; i >= 0; i--){
        let num = numbers[i];
        let complement = sum - num;
        if(numbers.indexOf(complement, i+1) != -1){
			numbersPair.push([num, complement]);
        }
        //seenNumbers.push(num);
    }
	return numbersPair;
}



console.log(findPairsThatSummup(numbersA, 10));
console.log(findPairsThatSummup(numbersB, 10));
console.log(findPairsThatSummup(numbersC, 10));


//*********** FIND FIRST RECURING CHARACTER IN A STRING *********** 
//Return recurring character in a string
//TODO's: 
// 1) Test performance with storing seen characters in a hash. 
// 2) Test performance with storing seen characters in an array. 
// 2) Change it for finding the first non recuring charracter in a string.

/*function firstRecuringChar(str){
	var l = str.length;
	for(let i = 0; i <= l-1; i++){
		let cChar =  str[i];
		for(let j = 0; j < i; j++){
			if(str[j] == cChar) return str[j];
		}
	}
	return null;
}
*/
// Version stored in a hash
function firstRecuringChar(str){
	var l = str.length;
	let seenChars = {};
	for(let i = 0; i <= l-1; i++){
		let cChar =  str[i];
		if(cChar in seenChars) return cChar;
		seenChars[cChar] = '';
	}
	return null;
}


console.log(firstRecuringChar('AICIBCA'));//I
console.log(firstRecuringChar('AICDBEA'));//A
console.log(firstRecuringChar('AICDBE'));//null

//*********** GET EACH ELEMENT IN AN SVG ELEMENT D ATTRIBUTE*********** 
'M 131.53571,68.70238 C 119.44047,114.05952 162.52976,106.5 162.52976,106.5 c 0,0 35.52976,-38.553572 9.82738,-40.82143 -25.70238,-2.267857 -15.11905,27.214285 -40.82143,3.02381 z'.match(/[A-Za-z][\s+\d+,\.-]+/g);
'm 21.922619,77.773809 c -1.598863,3.385807 2.211185,2.910465 3.023809,4.535713 0.338072,0.676145 -0.338072,1.591715 0,2.267857 0.318738,0.637477 1.11656,0.918888 1.511905,1.511906 0.139777,0.209664 0,0.503968 0,0.755952 0.251984,0.503968 0.403966,1.071922 0.755952,1.511906 0.667848,0.834808 1.701247,1.361278 2.267857,2.267857 0.719196,1.150713 0.79271,2.629048 1.511906,3.779761 0.56661,0.906576 1.600009,1.433047 2.267857,2.267857 0.351986,0.439984 0.417881,1.061141 0.755952,1.511904 0.42763,0.570177 1.084273,0.941731 1.511903,1.511905 0.338074,0.450763 0.357532,1.113483 0.755955,1.511903 0.642434,0.64244 1.541023,0.96678 2.267857,1.51191 0.570175,0.42763 0.874429,1.19316 1.511903,1.5119 2.161802,1.0809 4.479457,0.75595 6.803573,0.75595 1.259919,0 2.527546,0.13914 3.779761,0 1.032602,-0.11473 2.015873,-0.50396 3.023809,-0.75595 3.796863,-0.94921 2.03817,-0.4274 5.291666,-1.5119 0.755954,-0.25199 1.555139,-0.3996 2.267858,-0.75596 0.318738,-0.15936 0.437216,-0.59658 0.755951,-0.75595 0.225383,-0.11269 0.530572,0.11269 0.755955,0 1.622239,-0.81112 2.570654,-1.8147 3.77976,-3.023808 0.503968,-0.503968 0.918888,-1.116558 1.511906,-1.511904 0.209664,-0.139776 0.530569,0.112692 0.755952,0 0.318738,-0.159369 0.503968,-0.503967 0.755951,-0.755951 0.503968,-0.503971 0.918888,-1.11656 1.511906,-1.511906 0.209664,-0.139777 0.643261,0.22538 0.755952,0 0.08888,-0.177763 0,-2.527207 0,-3.023809 0,-2.519842 0,-5.039683 0,-7.559524 0,-3.023809 0,-6.047619 0,-9.071428 0,-1.007938 0,-2.015873 0,-3.023811 0,-0.503968 0,-1.007936 0,-1.511904 0,-0.251983 0.07968,-0.5169 0,-0.755951 -0.178178,-0.534541 -0.577773,-0.977368 -0.755952,-1.511906 -0.226785,-0.680358 0.226785,-1.5875 0,-2.267858 -0.05619,-0.168576 -2.802485,-2.913147 -3.023809,-3.023809 -0.225382,-0.112691 -0.503968,0 -0.755954,0 -0.503968,-0.251984 -1.061141,-0.41788 -1.511903,-0.755951 -0.570175,-0.427633 -1.007938,-1.007938 -1.511906,-1.511906 -0.251984,-0.251984 -0.437214,-0.596583 -0.755952,-0.755952 -0.450762,-0.225382 -1.155546,0.35636 -1.511906,0 -0.642434,-0.642437 -0.69928,-1.861545 -1.511903,-2.267857 -0.901525,-0.450763 -2.045967,0.244459 -3.023809,0 -0.244462,-0.06112 0.216075,-0.626309 0,-0.755952 -0.311473,-5.443598 -3.110278,-0.799187 -4.535715,-1.511906 -0.318738,-0.159369 -0.41788,-0.64326 -0.755952,-0.755951 -0.956212,-0.318739 -2.122283,0.450762 -3.023809,0 -0.637476,-0.318739 -0.918887,-1.116561 -1.511906,-1.511906 -0.209663,-0.139774 -0.516898,0.07968 -0.755951,0 -0.534541,-0.178179 -0.977366,-0.577774 -1.511906,-0.755952 -0.239054,-0.07968 -0.530572,0.112691 -0.755952,0 -0.318738,-0.159369 -0.437216,-0.596582 -0.755951,-0.755952 -0.195543,-0.09777 -4.256127,-0.0932 -4.535715,0 -0.503968,0.251984 -1.007938,0.503968 -1.511906,0.755952 0,0.251984 0.178181,0.577773 0,0.755952 -0.35636,0.356359 -1.155544,-0.35636 -1.511903,0 -0.178181,0.178181 0.178178,0.577773 0,0.755954 -1.564093,1.564092 0.06114,-2.390143 -1.511906,0.755952 -0.521364,1.042728 0.9155,0.676177 -0.755952,1.511903 -0.225383,0.112691 -0.577773,-0.178179 -0.755952,0 -0.398422,0.398423 -0.577773,0.977365 -0.755954,1.511906 -0.159369,0.478107 0.35636,1.155544 0,1.511906 -0.39842,0.39842 -1.199356,0.287128 -1.511903,0.755951 -0.279551,0.419328 0.159369,1.033799 0,1.511903 -0.112691,0.338074 -0.596585,0.437216 -0.755954,0.755955 -0.930937,1.861873 2.19433,-0.682427 -0.755952,2.267857 -0.178178,0.178179 -0.64326,-0.225382 -0.755952,0 -0.338071,0.676143 0,1.511903 0,2.267855 0,0.251984 0,0.50397 0,0.755954 0,0.251984 0.112692,0.530569 0,0.755952 -0.159369,0.318738 -0.596585,0.437213 -0.755951,0.755952 -0.225383,0.450762 0.22538,1.061143 0,1.511905 -0.159369,0.318739 -0.503971,0.503968 -0.755954,0.755952'.match(/[A-Za-z][\s+\d+,\.-]+/g);
