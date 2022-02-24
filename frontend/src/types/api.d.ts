export interface Paginate<T> {
  data: T[];
  current_page: number;
  path: string;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string;
  per_page: number;
  prev_page_url: any;
  to: number;
  total: number;
}

export interface Product {
  id: number;
  title: string;
  type: string;
  description: string;
  price: number;
  rating: number;
  created_at: any;
  deleted_at: any;
}
