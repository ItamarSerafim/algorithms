
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
var numbersA = [1,2,3,9];
var numbersB = [1,2,4,4];
var numbersC = [3,2,5,7,0,1,8]
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
}


console.log(findPairsThatSummup(numbersA, 8));
console.log(findPairsThatSummup(numbersB, 8));
console.log(findPairsThatSummup(numbersC, 8));
