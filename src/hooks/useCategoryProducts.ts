import {onMounted, Ref, ref} from 'vue';
import {IProduct} from "@/models/IProduct";
import {useQuery} from "@/utils/fetching/useQuery";
type Type = () => {isLoading: Ref<boolean>, categories: Ref<string>, error: Ref<string>}
export const useCategories :  Type = () => {
    const {isLoading, data: categories, error} = useQuery(`${process.env.VUE_APP_API}/products/categories`);
    return {
        isLoading, categories, error
    };
}

