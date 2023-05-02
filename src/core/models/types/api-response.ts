export class ApiResponse<T> {
  data?: T;
  success: boolean;
  error?: any;
}
