import {IProduct} from "@/models/IProduct";
import {useQuery} from "vue-query";
import {Ref} from "vue";

const fetchProducts = async (page:number, limit:number) => {
    const skip = (page-1) * limit
    const response = await fetch(`${process.env.VUE_APP_API}/products?limit=${limit}&skip=${skip}`);
    return await response.json()
}
export const useProductsQuery = (page: Ref<number>, limit = 20)  => {
     return useQuery<IProduct[], unknown>(['products', page], () => fetchProducts(page.value, limit));
}

