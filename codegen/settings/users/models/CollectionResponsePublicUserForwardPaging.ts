/**
 * Users
 * Add, manage, and remove users from your account
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ForwardPaging } from '../models/ForwardPaging';
import { PublicUser } from '../models/PublicUser';
import { HttpFile } from '../http/http';

export class CollectionResponsePublicUserForwardPaging {
    'results': Array<PublicUser>;
    'paging'?: ForwardPaging;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<PublicUser>",
            "format": ""
        },
        {
            "name": "paging",
            "baseName": "paging",
            "type": "ForwardPaging",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CollectionResponsePublicUserForwardPaging.attributeTypeMap;
    }

    public constructor() {
    }
}

