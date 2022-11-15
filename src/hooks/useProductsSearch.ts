import {onMounted, Ref, ref} from 'vue';
import {IProduct} from "@/models/IProduct";
import {useQuery} from "@/utils/fetching/useQuery";
type Type = (limit?: number) => {isLoading: Ref<boolean>, products: Ref<{ products: IProduct[] }>, error: Ref<string>}
export const useProducts :  Type = (limit = 10) => {
    const {isLoading, data: products, error} = useQuery(`${process.env.VUE_APP_API}/products?limit=${limit}`);
    return {
        isLoading, products, error
    };
}

