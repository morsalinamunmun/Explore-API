const user = {id: 1, name: 'Gorib Aman', job: 'actor'};
//console.log(user);
//JavaScript Object Notation(JSON)
const stringified = JSON.stringify(user);
//console.log(stringified);
/* { id: 1, name: 'Gorib Aman', job: 'actor' }-js
{"id":1,"name":"Gorib Aman","job":"actor"}-json 
*/

const shop = {
    owner: 'Alia',
    address: {
        street: 'road',
        city: 'cennai',
        country: 'India'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 55000,
    isOpen: true,
    isNew: false
};
//console.log(shop);
//js object teke json string
const shopJson =JSON.stringify(shop);
console.log(shopJson.owner);
//output
/* {
  owner: 'Alia',
  address: { street: 'road', city: 'cennai', country: 'India' },
  products: [ 'laptop', 'mic', 'monitor', 'keyboard' ],
  revenue: 55000,
  isOpen: true,
  isNew: false
}-js
{"owner":"Alia","address":{"street":"road","city":"cennai","country":"India"},"products":["laptop","mic","monitor","keyboard"],"revenue":55000,"isOpen":true,"isNew":false}-json
*/
//json string theke object 
const shopObject = JSON.parse(shopJson);
//console.log(shopObject);