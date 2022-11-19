import {useQuery} from "vue-usequery";
export const useCategories = () => {
    return useQuery<string[]>(()=>fetchCategories());
}
const fetchCategories = async () => {
    const response = await fetch(`${process.env.VUE_APP_API}/products/categories`)
    return await response.json();
}
