import {onMounted, ref, watch} from 'vue';

export const useQuery = (queryFn: () => any, deps?: any) => {
    const isLoading = ref(false);
    const data = ref<any>(null);
    const error = ref('');
    const fetchData = async () => {
        try {
            isLoading.value = true;
            data.value = await queryFn();
        } catch (e: any) {
            error.value = e.message
        } finally {
            isLoading.value = false;
        }
    }
    onMounted(()=>{
        fetchData()
    })
    watch(()=>deps, ()=>{
        console.log(queryFn)
        fetchData()
    }, {deep: true})
    return {
        isLoading, data, error, fetchData
    };
}

