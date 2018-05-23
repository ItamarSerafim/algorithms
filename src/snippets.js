
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
