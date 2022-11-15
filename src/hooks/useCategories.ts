import {onMounted, Ref, ref} from 'vue';
import {IProduct} from "@/models/IProduct";
import {useQuery} from "@/utils/fetching/useQuery";
//type Type = () => {isLoading: Ref<boolean>, categories: Ref<string>, error: Ref<string>}
export const useCategories = () => {
    return useQuery(()=>fetchCategories());
}
const fetchCategories = async () => {
    const response = await fetch(`${process.env.VUE_APP_API}/products/categories`)
    return await response.json();
}
