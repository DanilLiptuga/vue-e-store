import {Ref} from 'vue';
import {useQuery} from "vue-usequery";
import {IProduct} from "@/types/models/IProduct";
import {ProductsRequestResponse} from "@/types/ProductsRequestResponse.type";

export const useProductsSearch = (search: Ref<string>, page:Ref<number>, deps: Ref[]|Ref) => {
    return useQuery<ProductsRequestResponse>(()=>fetchProductsSearch(search.value, page.value), deps);
}
const fetchProductsSearch = async (search: string, page: number) => {
    const skip = (page-1) * 15
    const response = await fetch(`${process.env.VUE_APP_API}/products/search?q=${search}&skip=${skip}&limit=15`)
    return await response.json();
}

