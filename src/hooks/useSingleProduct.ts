import {useQuery} from "@/utils/fetching/useQuery";

export const useSingleProduct = (id: number) => useQuery(() => fetchProduct(id))
const fetchProduct =  async (id: number) => {
    const response = await fetch(`${process.env.VUE_APP_API}/products/${id}`)
    return await response.json();
}