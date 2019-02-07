setImmediate(() => console.log('Now'));
process.nextTick(() => console.log('Hello'));

console.log('world');