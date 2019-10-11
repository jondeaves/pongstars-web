export default interface IStoreResponse<T> {
  meta: {
    totalPages: number;
    totalRecords: number;
    records: number;
    page: number;
  };
  links: {
    self: string;
    first: string | null;
    prev: string | null;
    next: string | null;
    last: string | null;
  };
  data: Array<{
    id: number;
    payload: T;
    createdAt: string;
    updatedAt: string;
  }>;
}
