import {Ref} from 'vue';
import {useQuery} from "vue-usequery";


export const useCategoryProducts = (category: Ref<string>, page: Ref<number>, deps: Ref[]|Ref) => {
    return useQuery(()=>fetchCategoryProducts(category.value, page.value), deps);
    //const refetch = (category: string) => fetchData(`${process.env.VUE_APP_API}/products/category/${category}`)

}
const fetchCategoryProducts = async (category: string, page: number) => {
    const skip = (page-1) * 15
    const response = await fetch(`${process.env.VUE_APP_API}/products/category/${category}?skip=${skip}&limit=15`)
    return await response.json();
}

