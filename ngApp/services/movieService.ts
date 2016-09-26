namespace day16_mongoose.Services {

    export class MovieService {
        public movieResource;

        constructor(private $resource: ng.resource.IResourceService){
            this.movieResource = this.$resource('/api/movies/:id', null, {
                edit: {
                    method: 'PUT',
                    url: '/api/movies'
                },
                addActor: {
                    method: 'POST',
                    url: '/api/movies/addActor/:movieId'
                }
            });
        }

        getMovies(){
            return this.movieResource.query();
        }

        getMovie(id) {
            return this.movieResource.get({id: id});
        }

        saveMovie(movie) {
            return this.movieResource.save(movie).$promise;
        }

        editMovie(movie) {
            return this.movieResource.edit(movie).$promise;
        }

        deleteMovie(id) {
            return this.movieResource.delete({id: id}).$promise;
        }

        addActor(movieId, actorId) {
            return this.movieResource.addActor({movieId: movieId}, {actorId: actorId}).$promise;
        }
    }

    angular.module('day16_mongoose').service('movieService', MovieService);
}
