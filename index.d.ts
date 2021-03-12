type HasZ<X> = X & {
  z<Y>(f: (x: X) => Y): HasZ<Y>;
}
declare function z<T>(x: T): HasZ<T>;
export = z;