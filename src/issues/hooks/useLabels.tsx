import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../actions";
import { GithubLabel } from "../interfaces";

const useLabels = () => {

    // initialData, te deja data inicial si el staleTime existe no se ejecutara la llamada al back hasta luego del tiempo acordado
    // staleTime, dices cada cuanto quieres que se llame al backend
    // placeholderData, muestras un placeholder en lo que se ejecuta la llamada al back

    const labelsQuery = useQuery({
        queryKey: ["react"],
        queryFn: getLabels,
        staleTime: 1000 * 60 * 60,
        // initialData: [
        //     {
        //         "id":6344006318,
        //         "node_id":"LA_kwDOAJy2Ks8AAAABeiHarg",
        //         "url":"https://api.github.com/repos/facebook/react/labels/fb-exported",
        //         "name":"fb-exported",
        //         "color":"ededed",
        //         "default":false
        //     } satisfies GithubLabel
        // ]
        // placeholderData: [
        //     {
        //         "id":6344006318,
        //         "node_id":"LA_kwDOAJy2Ks8AAAABeiHarg",
        //         "url":"https://api.github.com/repos/facebook/react/labels/fb-exported",
        //         "name":"fb-exported",
        //         "color":"ededed",
        //         "default":false
        //     } satisfies GithubLabel
        // ]
    })

    return labelsQuery;
}

export default useLabels