'use strict';

const fn = (a) => {
  const b = 'Closure variable';
  return (c) =>  {
    console.dir({ a, b, c });
  };
};

const f1 = fn('Parameter 1');
f1('Parameter 2');

const f2 = fn('Parameter X');
f2('Parameter Y');
