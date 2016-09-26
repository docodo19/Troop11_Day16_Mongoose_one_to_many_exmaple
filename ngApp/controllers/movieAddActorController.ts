namespace day16_mongoose.Controllers {

    export class MovieAddActorController {
        private movieId;
        public actors;

        constructor(
            private $stateParams: ng.ui.IStateParamsService,
            private actorService: day16_mongoose.Services.ActorService,
            private movieService: day16_mongoose.Services.MovieService,
            private $state: ng.ui.IStateService){

            this.movieId = this.$stateParams['id'];
            this.getActors();
        }

        getActors(){
            this.actors = this.actorService.getActors();
        }

        addActorToMovie(actorId){
            this.movieService.addActor(this.movieId, actorId)
            .then(()=>{
                this.$state.go('moviesDetail', {id: this.movieId});
            })
            .catch(()=>{
                console.log("something went wrong");
            })
        }
    }

}
