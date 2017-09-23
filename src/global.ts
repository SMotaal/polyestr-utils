declare interface ObjectConstructor {
    getOwnPropertyDescriptors(object: object): PropertyDescriptorMap;
}

declare type Constructor<T = {}> =
    new <U extends T = T>(...args: any[]) => U; //  & {};

declare type Factory<T = {}> =
    <U extends T = T>(...args: any[]) => U; //  & {};

declare type Entries = Array<[string, any]>;

declare type Indexable<T = any, U = {}> = object & U & {
    [name: string]: T;
    // [K in keyof T]: T[K];
};

declare interface Inheritable<T = {}> {
    [Symbol.hasInstance](object): object is this & T;
}
