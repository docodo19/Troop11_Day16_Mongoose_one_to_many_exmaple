import * as mongoose from 'mongoose';

export interface IActor extends mongoose.Document {
    firstName: string,
    lastName: string,
    age: number
}

let actorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false
    }
});

export default mongoose.model<IActor>('Actor', actorSchema);
