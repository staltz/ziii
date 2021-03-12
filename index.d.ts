type HasZ<X> = X & {
  z<Y>(f: (x: X) => Y): HasZ<Y>;
}
export default function z<T>(x: T): HasZ<T>;