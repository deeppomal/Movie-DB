import {TvbaseUrl,apiKey,lang,sort} from '../config/rest_config';

export async function getTv(){
    try{
        let tv = await fetch(`${TvbaseUrl}?api_key=${apiKey}&language=${lang}&sort_by=${sort}`);

        let res2 = await tv.json();
        
        tv=null;
        return res2.results
    }
    catch(error)
    {
        throw(error)
    }
}
