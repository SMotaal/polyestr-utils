"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./global"); // / <reference path="./global.d.ts" />
// import Fake from './fake-class';
exports.log = console.log.bind(console);
exports.ownKeys = Reflect.ownKeys, exports.keysOf = Reflect.ownKeys, exports.enumerate = Reflect.enumerate, exports.defineProperty = Reflect.defineProperty, exports.deleteProperty = Reflect.deleteProperty, exports.preventExtensions = Reflect.preventExtensions, exports.get = Reflect.get, exports.set = Reflect.set;
_a = Object, exports.assign = _a.assign, exports.extend = _a.assign, exports.freeze = _a.freeze, exports.seal = _a.seal, exports.getOwnPropertyNames = _a.getOwnPropertyNames, exports.ownNames = _a.getOwnPropertyNames, exports.namesOf = _a.getOwnPropertyNames, exports.getOwnPropertySymbols = _a.getOwnPropertySymbols, exports.ownSymbols = _a.getOwnPropertySymbols, exports.symbolsOf = _a.getOwnPropertySymbols, exports.defineProperties = _a.defineProperties, // defineProperty: define,
exports.setPrototypeOf = _a.setPrototypeOf, exports.setPrototype = _a.setPrototypeOf, exports.getPrototypeOf = _a.getPrototypeOf, exports.prototypeOf = _a.getPrototypeOf, exports.getOwnPropertyDescriptors = _a.getOwnPropertyDescriptors, exports.descriptorsOf = _a.getOwnPropertyDescriptors, exports.ownDescriptors = _a.getOwnPropertyDescriptors, exports.getOwnPropertyDescriptor = _a.getOwnPropertyDescriptor, exports.descriptorOf = _a.getOwnPropertyDescriptor, exports.ownDescriptor = _a.getOwnPropertyDescriptor;
// export function define(object: object, property: string, descriptor: PropertyDecorator) {
function define(object, ...args) {
    return args.length === 1 ? exports.defineProperties(object, ...args) : args.length === 2 ? exports.defineProperty(object, ...args) : object;
}
exports.define = define;
exports.stringify = JSON.stringify, exports.jsonify = JSON.parse;
exports.dashToCamel = (string = '') => string.replace(/-([a-z]|$)/ig, (a) => (a[1] || '').toUpperCase());
exports.dashToPascal = (string = '') => string[0].toUpperCase() + string.slice(1).replace(/-([a-z]|$)/ig, (a) => (a[1] || '').toUpperCase());
exports.dashCase = (string = '') => string.replace(/([a-z](?=[A-Z])|\D(?=\d)|[A-Z](?=[A-Z][a-z]))/g, '$1-').toLowerCase();
exports.entries = (object) => Array.from(object && (typeof object.entries === 'function'
    ? (object instanceof Set ? Array.from(object.values()) : object).entries()
    : Object.entries(object)) || []);
var path_1 = require("path");
exports.joinPath = path_1.join;
exports.resolvePath = path_1.resolve;
exports.HAS_INSTANCE = Symbol.hasInstance;
/**
 * Isomorphic high-resolution timestamp in milliseconds
 */
exports.now = typeof performance !== 'undefined' && performance.now
    || typeof process !== 'undefined' && process.hrtime
    ? (hrTime = process.hrtime()) => hrTime[0] * 1000 + hrTime[1] / 1000000
    : Date.now; // var _counter, _start = now(); _counter = (clearInterval(_counter), setInterval(() => console.log(now() - _start), 1000));
exports.sumOf = (...numbers) => numbers.length && numbers.reduce((count, value) => count + (value > -Infinity && value || 0), 0) || 0;
exports.totalOf = (initial, ...rest) => rest.length && (typeof initial === 'string' ?
    rest.reduce((count, { [initial]: value }) => count + (value > -Infinity && value || 0), 0)
    : exports.sumOf(initial, ...rest)) || 0; // rest.reduce((count, value) => count + (value > -Infinity && value || 0), initial) || initial) || 0;
/**
 * Flexible type guard suitable for both compile and/or
 * runtime type checking.
 *
 * @param subject The object being checked.
 * @param check Optional forced-check boolean, typeof string, or a constructor.
 */
exports.is = (subject, check = true) => typeof check === 'boolean' ? check
    : subject === check || typeof subject === check ? true
        : !subject || !check || !check[exports.HAS_INSTANCE] ? false
            : typeof check[exports.HAS_INSTANCE] === 'function' && check[exports.HAS_INSTANCE](subject);
/**
 * Flexible type cast suitable for both compile and/or
 * runtime type checking.
 *
 * @param subject The object being casted.
 * @param check Optional forced-check boolean, typeof string, or a constructor.
 */
exports.as = (subject, check = true) => exports.is(subject, check) ? subject : null;
global['any'] = Symbol('any'); // seal(Object.create(null));
exports.indexable = (subject) => subject;
var _a;
//# sourceMappingURL=helpers.js.map