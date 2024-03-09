namespace Utils {
  const abc: string = 'abc';
  export const def: string = 'def';

  const fn = function (a: string, b: number, c: boolean) {
    return a + b + c;
  };

  const res = fn('a', 99, true);
}

// const utilsPropert = Utils.abc; // Property 'abc' does not exist on type 'typeof Utils'.ts(2339)
const utilsPropert = Utils.def;
