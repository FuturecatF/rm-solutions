const url: string = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";
const token: string = "8ccee6d99b47c27c68efc10ca60ebdf6c35d44bc";

export async function getOrganization(query: string): Promise<any>/* Promise<any[] | number> */ {

    const options: any = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify({ query: query })
    }


    const response = await fetch(url, options);
    if (!response.ok) {

        return await Promise.reject(response.status);
    }
    return response.json();




    /* if (!response.ok) {
        return response.status
    } */


}