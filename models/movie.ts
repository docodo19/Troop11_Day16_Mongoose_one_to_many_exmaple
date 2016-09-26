import * as mongoose from 'mongoose';
import * as Actor from './actor';

export interface IMovie extends mongoose.Document {
    title: string;
    director: string;
    actors: Actor.IActor[];
}

let movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    actors:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Actor'
    }]
});

export default mongoose.model<IMovie>('Movie', movieSchema);
