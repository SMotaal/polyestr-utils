import './global'; // / <reference path="./global.d.ts" />
// import Fake from './fake-class';

export const log = console.log.bind(console);

export const {
    ownKeys, ownKeys: keysOf,
    enumerate, defineProperty, deleteProperty, preventExtensions, get, set
} = Reflect;

export const {
    assign, assign: extend, freeze, seal,
    getOwnPropertyNames, getOwnPropertyNames: ownNames, getOwnPropertyNames: namesOf,
    getOwnPropertySymbols, getOwnPropertySymbols: ownSymbols, getOwnPropertySymbols: symbolsOf,
    defineProperties, // defineProperty: define,
    setPrototypeOf, setPrototypeOf: setPrototype,
    getPrototypeOf, getPrototypeOf: prototypeOf,
    getOwnPropertyDescriptors, getOwnPropertyDescriptors: descriptorsOf, getOwnPropertyDescriptors: ownDescriptors,
    getOwnPropertyDescriptor, getOwnPropertyDescriptor: descriptorOf, getOwnPropertyDescriptor: ownDescriptor,
} = Object as ObjectConstructor;

export function define(object: object, property: string, descriptor: PropertyDescriptor);
export function define(object: object, descriptors: PropertyDescriptorMap);
// export function define(object: object, property: string, descriptor: PropertyDecorator) {
export function define(object: object, ...args) {
    return args.length === 1 ? (defineProperties as any)(object, ...args) : args.length === 2 ? (defineProperty as any)(object, ...args) : object;
}

export const { stringify, parse: jsonify } = JSON;

export const dashToCamel = (string: string = '') => string.replace(/-([a-z]|$)/ig, (a) => (a[1] || '').toUpperCase());
export const dashToPascal = (string: string = '') => string[0].toUpperCase() + string.slice(1).replace(/-([a-z]|$)/ig, (a) => (a[1] || '').toUpperCase());
export const dashCase = (string: string = '') => string.replace(/([a-z](?=[A-Z])|\D(?=\d)|[A-Z](?=[A-Z][a-z]))/g, '$1-').toLowerCase();

export const entries = (object: any): Entries => Array.from(object && (
    typeof object.entries === 'function'
        ? (object instanceof Set ? Array.from(object.values()) : object).entries()
        : Object.entries(object)
) || []);

export { join as joinPath, resolve as resolvePath } from 'path';

export const { hasInstance: HAS_INSTANCE } = Symbol;

/**
 * Isomorphic high-resolution timestamp in milliseconds
 */
export const now = typeof performance !== 'undefined' && performance.now
    || typeof process !== 'undefined' && process.hrtime
    ? (hrTime = process.hrtime()) => hrTime[0] * 1000 + hrTime[1] / 1000000
    : Date.now; // var _counter, _start = now(); _counter = (clearInterval(_counter), setInterval(() => console.log(now() - _start), 1000));

export const sumOf: (...numbers: number[]) => number = (...numbers) => numbers.length && numbers.reduce((count, value) => count + (value > -Infinity && value || 0), 0) || 0;
export const totalOf: {
    <O extends object & {[k in K]: number}, K extends keyof O>(key: K, ...objects: O[]): number;
    (...numbers: number[]): number;
} = (initial, ...rest) =>
        rest.length && (typeof initial === 'string' ?
            rest.reduce((count, { [initial]: value }) => count + (value > -Infinity && value || 0), 0)
            : sumOf(initial, ...rest)) || 0; // rest.reduce((count, value) => count + (value > -Infinity && value || 0), initial) || initial) || 0;


/**
 * Flexible type guard suitable for both compile and/or
 * runtime type checking.
 *
 * @param subject The object being checked.
 * @param check Optional forced-check boolean, typeof string, or a constructor.
 */
export const is =
    <T>(subject, check: check<T> = true): subject is T =>
        typeof check === 'boolean' ? check
            : subject === check || typeof subject === check ? true
                : !subject || !check || !check[HAS_INSTANCE] ? false
                    : typeof check[HAS_INSTANCE] === 'function' && check[HAS_INSTANCE](subject);

/**
 * Flexible type cast suitable for both compile and/or
 * runtime type checking.
 *
 * @param subject The object being casted.
 * @param check Optional forced-check boolean, typeof string, or a constructor.
 */
export const as =
    <T>(subject, check: check<T> = true): T =>
        is(subject, check) ? subject : null as any;

declare global { var any: any; } global['any'] = Symbol('any'); // seal(Object.create(null));

export const indexable =
    <T = any>(subject): Indexable<T, typeof subject> => subject as any;


export declare type type =
    'boolean' | 'string' | 'number' | 'symbol' | 'object' | 'function' | 'undefined';

export declare type check<T = any> =
    Type<T> | (new (...args: any[]) => {}) | type | boolean;

export declare type Type<T = any> =
    Inheritable<T> | Constructor<T>;

export declare type Guard<T = any> =
    ((s) => s is T) | ((subject, ...args) => subject is T);

export declare type Checker<T> =
    Guard<T> | ((subject) => boolean) | ((subject, ...args) => boolean);

