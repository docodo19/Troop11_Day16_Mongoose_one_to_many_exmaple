namespace day16_mongoose.Services {

    export class ActorService {
        private actorResource;

        constructor(private $resource: ng.resource.IResourceService){
            this.actorResource = this.$resource('/api/actors/:id');
        }

        getActors(){
            return this.actorResource.query();
        }
    }

    angular.module('day16_mongoose').service('actorService', ActorService);
}
