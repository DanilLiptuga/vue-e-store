import {onMounted, ref} from 'vue';
import {IPhoto} from "@/models/IPhoto";

export const useProducts = (limit = 10) => {
    const isLoading = ref(false);
    const products = ref<IPhoto[]|null>(null);
    const error = ref('');
    const fetching = async () => {
        try {
            isLoading.value = true;
            const response = await fetch(`https://dummyjson.com/products?limit=${limit}`)
            products.value = await response.json();
        } catch (e: any) {
            error.value = e.message
        } finally {
            isLoading.value = false;
        }
    }
    onMounted(fetching)
    return {
        isLoading, products, error
    };
}

