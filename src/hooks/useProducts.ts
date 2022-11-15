import {Ref} from 'vue';
import {useQuery} from "@/utils/fetching/useQuery";
const fetchProducts = async (page:number, limit:number) => {
    const skip = (page-1) * limit
    const response = await fetch(`${process.env.VUE_APP_API}/products?limit=${limit}&skip=${skip}`);
    return await response.json()
}
export const useProducts = (page: Ref<number>, limit = 15, deps: Ref[]|Ref)  => {
    return useQuery(() => fetchProducts(page.value, limit), deps);
}

