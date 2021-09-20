describe("Day 1", () => {
  it("Task 1: implement currying", () => {
    const curry = (fnToCurry: Function): Function => {
      const curried = (...curriedArgs) => {
        // if all args are provided then apply them to original fn
        if (curriedArgs.length >= fnToCurry.length) {
          return fnToCurry.apply(null, curriedArgs);
        }

        // else recursively apply new args to curried func
        return (...curriedArgs2) =>
          curried.apply(null, curriedArgs.concat(curriedArgs2));
      };

      return curried;
    };

    const sum2 = (argA, argB) => argA + argB;
    const curriedSum2 = curry(sum2);

    expect(curriedSum2(3, 2)).toBe(5);
    expect(curriedSum2(3)(2)).toBe(5);
    expect(curriedSum2("a", "b")).toBe("ab");
    expect(curriedSum2("a")("b")).toBe("ab");

    const sum5 = (argA, argB, argC, argD, argE) =>
      argA + argB + argC + argD + argE;
    const curriedSum5 = curry(sum5);

    expect(curriedSum5(3)(3)(4)(5)(2)).toBe(17);
    expect(curriedSum5(3, 3, 4, 5, 2)).toBe(17);
    expect(curriedSum5(3, 3, 4)(5, 2)).toBe(17);
    expect(curriedSum5("a", "b", "c")("d", "e")).toBe("abcde");
  });
});
