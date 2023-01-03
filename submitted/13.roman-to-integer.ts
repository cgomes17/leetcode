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
  return [...s].reduce((count, letter, index, letters) => {
    const symbol = symbols.find((item) => item.key === letter);
    if (!symbol) return count;

    if (symbol.subtractSymbols?.includes(letters[index + 1])) return count - symbol.value;

    return count + symbol.value;
  }, 0);
}

// @lc code=end
console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
