import {useQuery} from "vue-usequery";
import {IProduct} from "@/types/models/IProduct";

export const useSingleProduct = (id: number) => useQuery<IProduct>(() => fetchProduct(id))
const fetchProduct =  async (id: number) => {
    const response = await fetch(`${process.env.VUE_APP_API}/products/${id}`)
    return await response.json();
}