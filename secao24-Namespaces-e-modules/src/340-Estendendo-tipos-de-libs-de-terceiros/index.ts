// namespaces são mais uteis para tipos, pois não são compilados

import _ from 'lodash';

const array = [100, 200, 300, 400];

console.log(_.sum(array));
console.log(_.min(array));
console.log(_.max(array));
console.log(_.mean(array));

// não existe no lodash
console.log(_.mul(array));
