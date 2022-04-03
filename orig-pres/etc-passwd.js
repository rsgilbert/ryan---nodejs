// Look at the last time someone modified /etc/passwd

const posix = require('node:path/posix');

console.log(posix)

const stat = posix.stat;
console.log(stat)