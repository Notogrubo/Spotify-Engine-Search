
export interface ApiResponse<T> {
    statusCode: number;
    data: T;
}


export async function getApiResponse<T> (params: any): Promise<ApiResponse<T | null>> {
    try {
        const response = await fetch(params);

        if (!response.ok) {
            throw new Error('error during fetching from Spotify API');    
        }

        const data = await response.json();

        return {
            statusCode: response.status,
            data,
        };
    } catch (error) {
        return {
            statusCode: 500,
            data: null,
        }
    }
}

export interface ArtistData { 
   
        id : string 
        name : string 
        images : {url : string }[]
    
}

export interface Artist {
    id : string 
    names : string  
    imageUrl : string 
}

