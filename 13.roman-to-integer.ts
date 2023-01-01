/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start

const symbols: { key: string; value: number; subtractSymbols?: string[] }[] = [
  { key: "I", value: 1, subtractSymbols: ["V", "X"] },
  { key: "V", value: 5 },
  { key: "X", value: 10, subtractSymbols: ["L", "C"] },
  { key: "L", value: 50 },
  { key: "C", value: 100, subtractSymbols: ["D", "M"] },
  { key: "D", value: 500 },
  { key: "M", value: 1000 },
];

function romanToInt(s: string): number {
  return symbols.reduce((accumulator, symbol) => {
    return s
      .match(symbol.key)
      ?.map((match, index, array) => {
        if (index !== array.length - 1 && symbol.subtractSymbols?.includes(array[index + 1])) return -symbol.value;

        return symbol.value;
      })
      .reduce((acc, count) => acc + count, 0);
  }, 0);
}

console.log(romanToInt("III"));
// @lc code=end
