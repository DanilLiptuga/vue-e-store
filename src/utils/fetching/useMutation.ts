import {onMounted, ref, watch} from 'vue';
export type mutateOptions = {
    onSuccess?: (data: any)=>void,
    onError?: (error: any) => void,
    onSettled?: () => void
}
export const useMutation = (mutateFn: (...props : any[]) => any, options?: mutateOptions) => {
    const isLoading = ref(false);
    const data = ref<any>(null);
    const error = ref('');
    const mutate = async (...props : any[]) => {
        try {
            isLoading.value = true;
            if (options?.onSettled)
                options.onSettled()
            const response = await mutateFn(...props);
            data.value = response;
            if (options?.onSuccess)
                options.onSuccess(response)
        } catch (e: any) {
            error.value = e.message
            if (options?.onError)
                options.onError(e)
        } finally {
            isLoading.value = false;
        }
    }
    return {
        isLoading, error, data, mutate
    };
}

