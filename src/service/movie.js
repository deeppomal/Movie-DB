import {MoviebaseUrl,apiKey,lang,sort} from '../config/rest_config';

export async function getMovies(){
    try{
        let movies = await fetch(`${MoviebaseUrl}?api_key=${apiKey}&language=${lang}&sort_by=${sort}`);

        let res = await movies.json();
        
        movies=null;
        return res.results
    }
    catch(error)
    {
        throw(error)
    }
}
