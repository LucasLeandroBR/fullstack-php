import { reactive, ref, watch } from "vue";
import { useProductApi } from "@/api/products";
import { Paginate, Product } from "@/types/api";

import FormValidator from "@/validators/form";
import UpdateProductValidation from "@/validators/UpdateProductValidation";

import { useToast } from "vue-toastification";
const toast = useToast();

const Products = () => {
  const products = ref<Paginate<Product[]>>(null);
  const product = ref<Product>(null);

  const file = ref<File>(null);

  const current_page = ref(1);

  watch(
    () => current_page.value,
    async () => {
      await getProducts();
    }
  );

  const getProducts = async () => {
    try {
      products.value = await new useProductApi().get();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const findProduct = async (id) => {
    try {
      product.value = await new useProductApi().find(id);
    } catch (error) {
      console.log(error);
    }
  };

  const upload = () => {
    if (!file.value) return toast.error("Por favor, selecione um arquivo.");

    // send file to server
    const formData = new FormData();
    formData.append("file", file.value);

    new useProductApi().upload(formData).then(async () => {
      toast.success("Product uploaded successfully");
      await getProducts();
    });
  };

  const updateItem = async (itemId: string) => {
    try {
      // Verifica se o formulário está válido
      const { error } = UpdateProductValidation.validate(
        {
          title: product.value.title,
          type: product.value.description,
          price: product.value.price,
        },
        { abortEarly: false }
      );

      // Se o formulário estiver válido, atualiza o produto
      if (error) {
        FormValidator.record(error.details);
        return;
      }

      // Atualiza o produto
      await new useProductApi().update(itemId, product.value);

      toast.info(`Produto atualizado com sucesso!`, { timeout: 5000 });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItem = async (itemId) => {
    try {
      await new useProductApi().delete(itemId).catch((error) => {
        toast.error(error.response.data.message);
        return;
      });

      if (products.value.data.length < 2) {
        current_page.value = current_page.value - 1;
      }

      if (products.value) {
        products.value.data = products.value.data.filter(
          (product) => product["id"] !== itemId
        );
      }

      toast.info(`Produto excluído com sucesso!`, { timeout: 5000 });
    } catch (e) {
      console.log(e);
    }
  };

  return reactive({
    products,
    product,
    current_page,
    file,
    upload,
    findProduct,
    updateItem,
    getProducts,
    deleteItem,
  });
};

export default Products();
