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
facebookAccounts.join(';\n')
