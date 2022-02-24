import { useApi } from "./useApi";
import useProduct from "@/store/products";
import { Paginate, Product } from "@/types/api";

export class useProductApi {
  get() {
    return useApi()
      .get<Paginate<Product[]>>(`/products`, {
        params: {
          page: useProduct.current_page,
          per_page: 8,
        },
      })
      .then((response) => response.data);
  }

  find(id: number) {
    return useApi()
      .get(`/products/${id}`)
      .then((response) => response.data)
      .catch((error) => error.response.data);
  }

  update(itemId: string, product: Product) {
    return useApi()
      .put(`/products/${itemId}`, product)
      .then((response) => response.data)
      .catch((error) => error.response.data);
  }

  delete(itemId: string) {
    return useApi()
      .delete(`/products/${itemId}`)
      .then((response) => response.data)
      .catch((error) => error.response.data);
  }

  upload(file: FormData) {
    return useApi()
      .post(`/products`, file, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => response.data.files)
      .catch((error) => error.response.data);
  }
}
