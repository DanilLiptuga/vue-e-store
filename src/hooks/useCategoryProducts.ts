import {onMounted, Ref, ref} from 'vue';
import {IProduct} from "@/models/IProduct";
import {useQuery} from "@/utils/fetching/useQuery";

export const useCategoryProducts = (category: Ref<string>, page: Ref<number>, deps: Ref[]|Ref) => {
    return useQuery(()=>fetchCategoryProducts(category.value, page.value), deps);
    //const refetch = (category: string) => fetchData(`${process.env.VUE_APP_API}/products/category/${category}`)

}
const fetchCategoryProducts = async (category: string, page: number) => {
    const skip = (page-1) * 15
    const response = await fetch(`${process.env.VUE_APP_API}/products/category/${category}?skip=${skip}&limit=15`)
    return await response.json();
}

