setImmediate(() => console.log('Now -1'));

process.nextTick(() => console.log('Hello\n'));

setImmediate(() => console.log('Now'));
setImmediate(() => console.log('Now 1'));
setImmediate(() => console.log('Now 2'));
setImmediate(() => console.log('Now 3'));
setImmediate(() => console.log('Now 4'));
setImmediate(() => console.log('Now 5'));

console.log('world\n');