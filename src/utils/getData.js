import api from '../services/api'

export async function getMovies(){
    
    const {data: { docs }} = await api.get("movie");

    return docs

}