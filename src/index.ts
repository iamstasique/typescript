const world: string = 'world';

export function hello(word: string = world): string {
  return `Hello ${word} !`;
}
