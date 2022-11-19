import {Ref} from 'vue';
import {useQuery} from "vue-usequery";
import {ProductsRequestResponse} from "@/types/ProductsRequestResponse.type";


export const useCategoryProducts = (category: Ref<string>, page: Ref<number>, deps: Ref[]|Ref) => {
    return useQuery<ProductsRequestResponse>(()=>fetchCategoryProducts(category.value, page.value), deps);
}
const fetchCategoryProducts = async (category: string, page: number) => {
    const skip = (page-1) * 15
    const response = await fetch(`${process.env.VUE_APP_API}/products/category/${category}?skip=${skip}&limit=15`)
    return await response.json();
}

