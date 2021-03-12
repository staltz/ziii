type Wrapped<T> = T & {z: <X,Y>(x: X) => Wrapped<Y>}
export declare function z<T>(x: T): Wrapped<T>;