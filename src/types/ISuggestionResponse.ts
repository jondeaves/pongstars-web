import ISuggestion from './ISuggestion';

export default interface ISuggestionsResp {
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
    payload: ISuggestion;
    createdAt: string;
    updatedAt: string;
  }>;
}
