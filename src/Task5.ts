function logLength<T extends { length: number }>(input: T): number {
  return input.length;
}

console.log(logLength("Hello, TypeScript!")); // Output: 18
console.log(logLength([1, 2, 3, 4, 5])); // Output: 5

