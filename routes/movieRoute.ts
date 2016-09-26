// imports
import * as express from 'express';
import Movie from '../models/movie';
import * as mongodb from 'mongodb';

let ObjectId = mongodb.ObjectID;

// create a movieRoute
let movieRoute = express.Router();

// Create Movie
movieRoute.post('/', (req, res)=>{
    let movie = new Movie();

    movie.title = req.body.title;
    movie.director = req.body.director;

    movie.save().then((movie)=>{
        res.status(201).send(movie);
    }).catch((err)=>{
        res.status(400).send({err: err});
    })
});

// Read Movies
movieRoute.get('/', (req, res)=>{
    Movie.find().populate('actors').sort('title').then((movies)=>{
        res.send(movies);
    }).catch((err)=>{
        res.status(500).send({err: err});
    })
});

movieRoute.get('/:id', (req, res)=>{
    Movie.findById(req.params['id']).populate('actors').then((movie)=>{
        res.send(movie);
    }).catch((err)=>{
        res.status(500).send({err: err});
    })
});

// Update Movie
movieRoute.put('/', (req, res)=>{
    Movie.findByIdAndUpdate(req.body._id, req.body).then((movie)=>{
        res.send(movie);
    }).catch((err)=>{
        res.status(404).send({err: err});
    });
});

// delete movie
movieRoute.delete('/:id', (req, res)=>{
    Movie.findByIdAndRemove(req.params['id']).then(()=>{
        res.sendStatus(200);
    }).catch(()=>{
        res.sendStatus(404);
    })
});

// add actor to movie
movieRoute.post('/addactor/:movieId', (req, res)=>{
    console.log(req.body.actorId);
    let movieId = new ObjectId(req.params['movieId']);
    let actorId = new ObjectId(req.body.actorId);

    Movie.update({_id: movieId}, { $push: { actors: actorId } })
    .then((movie)=>{
        res.send(200);
    })
    .catch((err)=>{
        res.status(400).send(err);
    });

});



export default movieRoute;
