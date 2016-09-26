namespace day16_mongoose.Controllers {

    export class MovieController {
        public movies;

        constructor(private movieService:day16_mongoose.Services.MovieService){
            this.getMovies();
        }

        getMovies() {
            this.movies = this.movieService.getMovies();
        }

    }
}
