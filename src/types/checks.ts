const isError = (error: unknown): error is Error => error instanceof Error;

const isNumber = (number: unknown): number is number =>
  typeof number === 'number';

const isString = (string: unknown): string is string =>
  typeof string === 'string';

const isFunction = (func: unknown): func is () => void =>
  typeof func === 'function';

const isObject = (object: unknown): object is Record<string, unknown> =>
  !!object && typeof object === 'object' && !Array.isArray(object);

export { isError, isNumber, isObject, isString, isFunction };
