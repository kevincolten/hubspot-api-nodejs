/**
 * Associations
 * Associations define the relationships between objects in HubSpot. These endpoints allow you to create, read, and remove associations.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PublicObjectId } from '../models/PublicObjectId';

export class PublicAssociation {
    '_from': PublicObjectId;
    'to': PublicObjectId;
    'type': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "_from",
            "baseName": "from",
            "type": "PublicObjectId",
            "format": ""
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "PublicObjectId",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicAssociation.attributeTypeMap;
    }

    public constructor() {
    }
}
