import {Ref} from 'vue';
import {useQuery} from "vue-usequery";
export const useProductsSearch = (search: Ref<string>, page:Ref<number>, deps: Ref[]|Ref) => {
    return useQuery(()=>fetchProductsSearch(search.value, page.value), deps);
}
const fetchProductsSearch = async (search: string, page: number) => {
    const skip = (page-1) * 15
    console.log(search)
    const respone = await fetch(`${process.env.VUE_APP_API}/products/search?q=${search}&skip=${skip}&limit=15`)
    return await respone.json();
}

