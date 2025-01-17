import { Configuration} from '../configuration'

import { CollectionResponseAssociationSpecWithLabelNoPaging } from '../models/CollectionResponseAssociationSpecWithLabelNoPaging';
import { PublicAssociationDefinitionCreateRequest } from '../models/PublicAssociationDefinitionCreateRequest';
import { PublicAssociationDefinitionUpdateRequest } from '../models/PublicAssociationDefinitionUpdateRequest';
import { ObservableDefinitionsApi } from './ObservableAPI';

import { DefinitionsApiRequestFactory, DefinitionsApiResponseProcessor} from "../apis/DefinitionsApi";
export class PromiseDefinitionsApi {
    private api: ObservableDefinitionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefinitionsApiRequestFactory,
        responseProcessor?: DefinitionsApiResponseProcessor
    ) {
        this.api = new ObservableDefinitionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes an association definition
     * Delete
     * @param fromObjectType 
     * @param toObjectType 
     * @param associationTypeId 
     */
    public _delete(fromObjectType: string, toObjectType: string, associationTypeId: number, _options?: Configuration): Promise<void> {
        const result = this.api._delete(fromObjectType, toObjectType, associationTypeId, _options);
        return result.toPromise();
    }

    /**
     * Create a user defined association definition
     * Create
     * @param fromObjectType 
     * @param toObjectType 
     * @param publicAssociationDefinitionCreateRequest 
     */
    public create(fromObjectType: string, toObjectType: string, publicAssociationDefinitionCreateRequest: PublicAssociationDefinitionCreateRequest, _options?: Configuration): Promise<CollectionResponseAssociationSpecWithLabelNoPaging> {
        const result = this.api.create(fromObjectType, toObjectType, publicAssociationDefinitionCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * Returns all association types between two object types
     * Read
     * @param fromObjectType 
     * @param toObjectType 
     */
    public getAll(fromObjectType: string, toObjectType: string, _options?: Configuration): Promise<CollectionResponseAssociationSpecWithLabelNoPaging> {
        const result = this.api.getAll(fromObjectType, toObjectType, _options);
        return result.toPromise();
    }

    /**
     * Update a user defined association definition
     * Update
     * @param fromObjectType 
     * @param toObjectType 
     * @param publicAssociationDefinitionUpdateRequest 
     */
    public update(fromObjectType: string, toObjectType: string, publicAssociationDefinitionUpdateRequest: PublicAssociationDefinitionUpdateRequest, _options?: Configuration): Promise<void> {
        const result = this.api.update(fromObjectType, toObjectType, publicAssociationDefinitionUpdateRequest, _options);
        return result.toPromise();
    }


}



