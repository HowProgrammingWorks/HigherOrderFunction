'use strict';

const { sin } = Math;
const inverse = f => x => 1 / f(x);
const cosecant = inverse(sin);

const a = cosecant(0.25);

console.log(a);
