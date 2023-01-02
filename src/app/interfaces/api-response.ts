export interface APIResponse<T> {
  page: number; // 1;
  perPage: number; // 30
  totalItems: number; //
  totalPages: number; //
  items: T;
}
