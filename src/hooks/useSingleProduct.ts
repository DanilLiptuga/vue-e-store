import {useQuery} from "vue-usequery";

export const useSingleProduct = (id: number) => useQuery(() => fetchProduct(id))
const fetchProduct =  async (id: number) => {
    const response = await fetch(`${process.env.VUE_APP_API}/products/${id}`)
    return await response.json();
}