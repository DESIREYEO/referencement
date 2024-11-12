
import { NavigationService, navigationParams } from '../interfaces/navigationService';
import { useRouter } from "next/navigation";

//implémentation du service 
export function navigationServiceImpl() {
    const router = useRouter();


    function navigateToRoute({
        route,
        params
    }: navigationParams) {
        router.push(route, params)
    }
    function goBack() {
        router.back();
    }
    return {
        navigateToRoute,
        goBack
    }
}