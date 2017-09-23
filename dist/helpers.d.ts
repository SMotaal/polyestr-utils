import './global';
export declare const log: any;
export declare const ownKeys: typeof Reflect.ownKeys, keysOf: typeof Reflect.ownKeys, enumerate: typeof Reflect.enumerate, defineProperty: typeof Reflect.defineProperty, deleteProperty: typeof Reflect.deleteProperty, preventExtensions: typeof Reflect.preventExtensions, get: typeof Reflect.get, set: typeof Reflect.set;
export declare const assign: {
    <T, U>(target: T, source: U): T & U;
    <T, U, V>(target: T, source1: U, source2: V): T & U & V;
    <T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
    (target: object, ...sources: any[]): any;
}, extend: {
    <T, U>(target: T, source: U): T & U;
    <T, U, V>(target: T, source1: U, source2: V): T & U & V;
    <T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
    (target: object, ...sources: any[]): any;
}, freeze: {
    <T>(a: T[]): ReadonlyArray<T>;
    <T extends Function>(f: T): T;
    <T>(o: T): Readonly<T>;
}, seal: <T>(o: T) => T, getOwnPropertyNames: (o: any) => string[], ownNames: (o: any) => string[], namesOf: (o: any) => string[], getOwnPropertySymbols: (o: any) => symbol[], ownSymbols: (o: any) => symbol[], symbolsOf: (o: any) => symbol[], defineProperties: (o: any, properties: PropertyDescriptorMap & ThisType<any>) => any, setPrototypeOf: (o: any, proto: object | null) => any, setPrototype: (o: any, proto: object | null) => any, getPrototypeOf: (o: any) => any, prototypeOf: (o: any) => any, getOwnPropertyDescriptors: (object: object) => PropertyDescriptorMap, descriptorsOf: (object: object) => PropertyDescriptorMap, ownDescriptors: (object: object) => PropertyDescriptorMap, getOwnPropertyDescriptor: {
    (o: any, p: string): PropertyDescriptor;
    (o: any, propertyKey: PropertyKey): PropertyDescriptor;
}, descriptorOf: {
    (o: any, p: string): PropertyDescriptor;
    (o: any, propertyKey: PropertyKey): PropertyDescriptor;
}, ownDescriptor: {
    (o: any, p: string): PropertyDescriptor;
    (o: any, propertyKey: PropertyKey): PropertyDescriptor;
};
export declare function define(object: object, property: string, descriptor: PropertyDescriptor): any;
export declare function define(object: object, descriptors: PropertyDescriptorMap): any;
export declare const stringify: {
    (value: any, replacer?: ((key: string, value: any) => any) | undefined, space?: string | number | undefined): string;
    (value: any, replacer?: (string | number)[] | null | undefined, space?: string | number | undefined): string;
}, jsonify: (text: string, reviver?: ((key: any, value: any) => any) | undefined) => any;
export declare const dashToCamel: (string?: string) => string;
export declare const dashToPascal: (string?: string) => string;
export declare const dashCase: (string?: string) => string;
export declare const entries: (object: any) => [string, any][];
export { join as joinPath, resolve as resolvePath } from 'path';
export declare const HAS_INSTANCE: symbol;
/**
 * Isomorphic high-resolution timestamp in milliseconds
 */
export declare const now: (hrTime?: [number, number]) => number;
export declare const sumOf: (...numbers: number[]) => number;
export declare const totalOf: {
    <O extends object & {
        [k in K]: number;
    }, K extends keyof O>(key: K, ...objects: O[]): number;
    (...numbers: number[]): number;
};
/**
 * Flexible type guard suitable for both compile and/or
 * runtime type checking.
 *
 * @param subject The object being checked.
 * @param check Optional forced-check boolean, typeof string, or a constructor.
 */
export declare const is: <T>(subject: any, check?: check<T>) => subject is T;
/**
 * Flexible type cast suitable for both compile and/or
 * runtime type checking.
 *
 * @param subject The object being casted.
 * @param check Optional forced-check boolean, typeof string, or a constructor.
 */
export declare const as: <T>(subject: any, check?: check<T>) => T;
declare global  {
    var any: any;
}
export declare const indexable: <T = any>(subject: any) => any;
export declare type type = 'boolean' | 'string' | 'number' | 'symbol' | 'object' | 'function' | 'undefined';
export declare type check<T = any> = Type<T> | (new (...args: any[]) => {}) | type | boolean;
export declare type Type<T = any> = Inheritable<T> | Constructor<T>;
export declare type Guard<T = any> = ((s) => s is T) | ((subject, ...args) => subject is T);
export declare type Checker<T> = Guard<T> | ((subject) => boolean) | ((subject, ...args) => boolean);
