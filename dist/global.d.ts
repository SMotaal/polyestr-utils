interface ObjectConstructor {
    getOwnPropertyDescriptors(object: object): PropertyDescriptorMap;
}
declare type Constructor<T = {}> = new <U extends T = T>(...args: any[]) => U;
declare type Factory<T = {}> = <U extends T = T>(...args: any[]) => U;
declare type Entries = Array<[string, any]>;
declare type Indexable<T = any, U = {}> = object & U & {
    [name: string]: T;
};
interface Inheritable<T = {}> {
    [Symbol.hasInstance](object: any): object is this & T;
}
