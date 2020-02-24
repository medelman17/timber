export function applyModifiers<T, P>(modifiers: T[], strategy: any) {
  return modifiers
    .map(modifier => strategy[modifier])
    .reduce((acc, cur) => {
      return { ...acc, ...cur };
    }, {});
}
