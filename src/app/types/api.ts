export interface Api<T> {
  status: string;
  type: string;
  message: string;
  value: T;
}
