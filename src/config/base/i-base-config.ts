export interface IBaseConfig<I, O> {
  get: (deps?: I) => O;
}
