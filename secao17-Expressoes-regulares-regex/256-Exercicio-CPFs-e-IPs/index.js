const cpfs = `Os CPFs são: 
254.224.852-12 
     432.642.642-23 
437.818.138-00`;

const ips = `Os IPs são: 0.0.0.0 
  255.255.255.255 
    194.154.125.147 
10.4.34.13`;


// ^ -> 'começa com'
// $ -> 'termina com'


const found1 = cpfs.match(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g);
const found2 = cpfs.match(/\d{3}\.\d{3}\.\d{3}\-\d{2}/g);
const found3 = cpfs.match(/(\d{3}\.){2}\d{3}\-\d{2}/g);
// console.log(found3);



// 250 - 255    25[0-5]
// 200 - 249    2[0-4]\d
// 100 - 199    1\d{2}
// 10  - 99     [1-9]\d
// 0   - 9      \d

const ipRegExp = /((25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)/g;
const found4 = ips.match(ipRegExp);
console.log(found4);
