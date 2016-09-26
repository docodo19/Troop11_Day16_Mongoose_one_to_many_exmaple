namespace day16_mongoose.Controllers {

    export class MovieDetailsController {
        public movie;
        private movieId

        constructor(
            private movieService: day16_mongoose.Services.MovieService,
            private $stateParams: ng.ui.IStateParamsService){

            this.movieId = this.$stateParams['id'];
            this.getMovie();
        }

        getMovie(){
            this.movie = this.movieService.getMovie(this.movieId);
        }
    }
}
