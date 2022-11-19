import {IProduct} from "@/types/models/IProduct";
import {mutateOptions, useMutation} from "vue-usequery";


const createProduct = async (data: IProduct) => {
    const response = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    return await response.json();
}
export const useCreateProductMutation = (options?: mutateOptions) => {
    return useMutation<IProduct>((data) => createProduct(data as IProduct), options)
}