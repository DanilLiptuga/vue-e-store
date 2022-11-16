import {ref} from 'vue';

export type mutateOptions = {
    onSuccess?: (data: any)=>void,
    onError?: (error: any) => void,
    onSettled?: () => void
}
export const useMutation = (mutateFn: (...props : unknown[]) => unknown, options?: mutateOptions) => {
    const isLoading = ref(false);
    const data = ref<unknown>(null);
    const error = ref('');
    const mutate = async (...props : unknown[]) => {
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

