export interface IResponse<T> {
  error_code: number;
  error_message: string;
  data: T;
  profiling?: string;
  timings?: null;
}

export type LoginData = { token: string };
