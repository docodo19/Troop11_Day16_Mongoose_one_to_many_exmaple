import * as mongoose from 'mongoose';
import Movie from './models/movie';
const URL = 'mongodb://admin:Secret123!@ds035836.mlab.com:35836/cooldesk';

class Database {
    public static connect(){
        mongoose.connect(URL).then(()=>{
            Movie.find().then((movies)=>{
                // if(!movies[0]){
                //     Movie.collection.insert([
                //         {title: 'Star Wars 1', director: 'Lucas'},
                //         {title: 'Star Wars 2', director: 'Lucas'},
                //         {title: 'Star Wars 3', director: 'Lucas'},
                //         {title: 'Star Wars 4', director: 'Lucas'},
                //         {title: 'Star Wars 5', director: 'Lucas'},
                //     ]);
                // }
            });
        });

        let db = mongoose.connection;

        db.on('error', console.error.bind(console, 'connection error...'));
        db.once('open', console.log.bind(console,'connected to database!!!'));
    }
}

export default Database;
