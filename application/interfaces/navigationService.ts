
// on vas cree une interface pour contractueliser le service qu'on vas crée 
export type navigationParams= {
    route: string;
    params?: object; 
}
export interface NavigationService {

    navigateToRoute({
        route,
        params,
    }: navigationParams): void;
    goBack(): void;
}
