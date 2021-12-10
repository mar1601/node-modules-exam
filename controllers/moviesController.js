import moviesModel from '../models/moviesModel.js';
import actorsModel from '../models/actorsModel.js';
import moviePojo from '../models/moviePojo.js';
import actorPojo from '../models/actorPojo.js';


/*
  Utilitzar throw new Error("missatge") per gestionar posibles errors o missatges

   if ()
   throw new Error('parameter id not exist');

   exemple:
    if (pelicula no existeix)
        throw new Error('¡Ups! id of movie not found');
*/

const getAllMovies = (data_movie) => {
    if (!data_movie.req) throw new Error("¡Ups! id of movie not found");
    
    const movie = moviesModel.getMovieBy(data_movie.req)
    
    if (typeof movie == "undefined"){
        throw new Error("Error");
    }
    data_movie.res = movie;

}

const getMovieById = (data_movie) => {
    if(!req.id) throw new Error('parametro Id no existe')
   
    const movie = movieModels.getMovieId(req.id);
   
    if(typeof movie == 'undefined'){
        throw new Error ('UPS! Pelicula no encontrada')
    };
   
    res.push(movie);
    return res;
}

const removeMovie = (data_movie) => {
    if (!data_movie.req) throw new Error("¡Ups! id of movie not found");

    res = movieModels.removeMovie(req.id);
    return res;
}

const createMovie = (data_movie) => {
    // Puede usar ../models/moviePojo para crear una Movies 
    // Puede usar ../models/actorPojo para crear un Actor
    if (!data_movie.req) throw new Error("¡Ups! id of movie not found");
    res = movieModels.createMovie(req)
    return res;

}

const updateMovie = (data_movie) => {
    // Puede usar ../models/moviePojo para actualizar una Movies 
    // Puede usar ../models/actorPojo para actualizar un Actor
    if (!data_movie.req) throw new Error("¡Ups! id of movie not found");
    res = movieModels.updateMovie(req.id)
    return res;

}

const getMovieBy = (data_movie) => {
    if (!data_movie.req) throw new Error("¡Ups! id of movie not found");
    res.push(movie);
    return res;
}

const updateActors = (data_movie) => {
    if (!data_movie.req) throw new Error("¡Ups! id of movie not found");
    res = movieModels.updateActors(req.id)
    return res;
}

export default {
    getAllMovies,
    getMovieById,
    removeMovie,
    createMovie,
    updateMovie,
    getMovieBy,
    updateActors
}