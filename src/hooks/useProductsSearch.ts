import {Ref} from 'vue';
import {useQuery} from "@/utils/fetching/useQuery";
//type Type = (search: string, deps: any[]) => {isLoading: Ref<boolean>, products: Ref<{ products: IProduct[] }>, error: Ref<string>, refetch: (newSearch: string) => void}
export const useProductsSearch = (search: Ref<string>, page:Ref<number>, deps: Ref[]|Ref) => {
    return useQuery(()=>fetchProductsSearch(search.value, page.value), deps);
    // const refetch = (newSearch: string) => {
    //     fetchData(`${process.env.VUE_APP_API}/products/search?q=${newSearch}`);
    // }

}
const fetchProductsSearch = async (search: string, page: number) => {
    const skip = (page-1) * 15
    console.log(search)
    const respone = await fetch(`${process.env.VUE_APP_API}/products/search?q=${search}&skip=${skip}&limit=15`)
    return await respone.json();
}

