import * as express from 'express';
import Actor from '../models/actor';

let actorRoute = express.Router();


actorRoute.get('/', (req, res)=>{
    Actor.find().then((actors)=>{
        res.send(actors);
    }).catch((err)=>{
        res.status(404).send(err);
    })
});

actorRoute.post('/', (req, res) =>{
    let actor = new Actor();

    actor.firstName = req.body.firstName;
    actor.lastName = req.body.lastName;
    actor.age = req.body.age;

    actor.save().then((actor)=>{
        res.send(actor);
    }).catch((err)=>{
        res.status(404).send(err);
    });
});

export default actorRoute;
