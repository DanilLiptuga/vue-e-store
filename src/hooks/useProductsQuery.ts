import {onMounted, Ref, ref} from 'vue';
import {IProduct} from "@/models/IProduct";
import {useQuery} from "@/utils/fetching/useQuery";
type Type = (page?: number,limit?: number, cb?: ()=>void) => {isLoading: Ref<boolean>, products: Ref<{ products: IProduct[] }>, error: Ref<string>}
export const useProducts :  Type = (page = 1, limit = 20, cb)  => {
    const skip = (page-1) * limit
    const {isLoading, data: products, error} = useQuery(`${process.env.VUE_APP_API}/products?limit=${limit}&skip=${skip}`, undefined, cb);
    return {
        isLoading, products, error
    };
}

